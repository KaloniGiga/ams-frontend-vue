import { genreObj } from '@/lib/constants'
import useDialogStore from '@/stores/dialog'
import useSongStore from '@/stores/song'
import { toTypedSchema } from '@vee-validate/zod'
import { storeToRefs } from 'pinia'
import { useForm } from 'vee-validate'
import * as z from 'zod'

export function useSongForm() {
  const dialogStore = useDialogStore()
  const { isEdit, editData } = storeToRefs(dialogStore)
  const { postSong, putSong } = useSongStore()

  const formSchema = toTypedSchema(
    z.object({
      title: z.string().min(2).max(50).default(''),
      album_name: z.string().min(2).max(50).default(''),
      genre: z.enum([
        genreObj.RNB,
        genreObj.Classic,
        genreObj.Country,
        genreObj.jazz,
        genreObj.Rock
      ])
    })
  )

  const { handleSubmit, values, setFieldValue } = useForm({
    validationSchema: formSchema
  })

  if (isEdit.value && editData.value) {
    console.log(editData.value.genre)
    setFieldValue('title', editData.value.title)
    setFieldValue('album_name', editData.value.album_name)
    setFieldValue('genre', editData.value.genre)
  }

  const onSubmit = handleSubmit(async (values) => {
    if (!isEdit.value) {
      await postSong({ ...values })
    } else {
      await putSong({ ...values })
    }
    dialogStore.dialogClose()
  })

  return { formSchema, onSubmit, values }
}
