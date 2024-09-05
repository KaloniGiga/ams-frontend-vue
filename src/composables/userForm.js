import useDialogStore from '@/stores/dialog'
import useUserStore from '@/stores/user'
import { toTypedSchema } from '@vee-validate/zod'
import { storeToRefs } from 'pinia'
import { useForm } from 'vee-validate'
import * as z from 'zod'

export function useUserForm() {
const dialogStore = useDialogStore()
const { isEdit, editData } = storeToRefs(dialogStore)
const { postUser, putUser } = useUserStore()  

  const formSchema = toTypedSchema(
    z.object({
      first_name: z.string().min(2).max(50).default(''),
      last_name: z.string().min(2).max(50).default(''),
      email: z.string().email('Email is invalid.').default(''),
      dob: z.string().date(),
      password: z.string().min(8).default(''),
      phone: z.string().min(5).max(15).default(''),
      gender: z.enum(['m', 'f', 'o']),
      address: z.string().min(2).max(50).default(''),
      role_type: z.enum(['super_admin', 'artist', 'artist_manager']),
      artistId: z.number().optional()
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


  console.log(isEdit.value, editData);
    if (isEdit && editData) {
    setFieldValue("first_name", editData.value.first_name)
    setFieldValue("last_name", editData.value.last_name)
    setFieldValue("email", editData.value.email)
    setFieldValue("dob", formatDate(new Date(editData.value.dob)))
    setFieldValue("password", editData.value?.password)
    setFieldValue("phone", editData.value.phone)
    setFieldValue("gender", editData.value.gender)
    setFieldValue("role_type", editData.value.role_type)
    if (editData.value.role_type == "artist") {
      setFieldValue("artistId", editData.value.artistId);
    }
    setFieldValue("address", editData.value.address)
    }


  const onSubmit = handleSubmit(async (values) => {
    console.log(values);
    // if (!isEdit.value) {
    //  await postUser({ user: { ...values }});
    // } else {
    //  await putUser({ user: { ...values }})
    // }
    dialogStore.dialogClose()
  })

  return { formSchema, onSubmit, values }
}
