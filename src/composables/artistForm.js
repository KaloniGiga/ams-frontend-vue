import useArtistStore from '@/stores/artist'
import useDialogStore from '@/stores/dialog'
import { toTypedSchema } from '@vee-validate/zod'
import { storeToRefs } from 'pinia'
import { useForm } from 'vee-validate'
import * as z from 'zod'

export function useArtistForm() {
  const dialogStore = useDialogStore()
  const { isEdit, editData } = storeToRefs(dialogStore);
  const { postArtist, putArtist } = useArtistStore()
  
  const formSchema = toTypedSchema(
    z.object({
      name: z.string().min(2).max(50).default(''),
      dob: z.string().min(2).max(50).default(''),
      gender: z.enum(['m', 'f', 'o']),
      address: z.string().min(2).max(50).default(''),
      first_release_year: z.number(),
      no_of_albums_released: z.number()
    })
  )

  const { handleSubmit, values, setFieldValue } = useForm({
    validationSchema: formSchema
  })

  const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
  };

  if (isEdit.value && editData.value) {
    setFieldValue("name", editData.value.name)
    setFieldValue("dob", formatDate(new Date(editData.value.dob)))
    setFieldValue("gender", editData.value.gender)
    setFieldValue("first_release_year", editData.value.first_release_year)
    setFieldValue("no_of_albums_released", editData.value.no_of_albums_released)
    setFieldValue("address", editData.value.address)
  }

  const onSubmit = handleSubmit(async (values) => {
    if (!isEdit.value) {
     await postArtist({ ...values })
    } else {
     await putArtist({ ...values })
    }
    dialogStore.dialogClose()
  })

  return { formSchema, onSubmit, values }
}
