import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import * as z from 'zod'

export function useSongForm() {
  const formSchema = toTypedSchema(
    z.object({
      title: z.string().min(2).max(50).default(''),
      album_name: z.string().min(2).max(50).default(''),
      genre: z.enum(['rock', 'country', 'jazz', 'classic', 'rnb'])
    })
  )

  const { handleSubmit, values } = useForm({
    validationSchema: formSchema
  })

  const onSubmit = handleSubmit((values) => {
    console.log(values)
  })

  return { formSchema, onSubmit, values }
}
