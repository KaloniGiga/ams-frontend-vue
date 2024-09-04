import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import * as z from 'zod'

export function useArtistForm() {
  const formSchema = toTypedSchema(
    z.object({
      name: z.string().min(2).max(50).default(''),
      dob: z.string().min(2).max(50).default(''),
      gender: z.enum(['m', 'f', 'o']),
      address: z.string().min(2).max(50).default(""),
      first_release_year: z.number(),
      no_of_albums_released: z.number()
    })
  )

  const { handleSubmit, values } = useForm({
    validationSchema: formSchema,
  })

  const onSubmit = handleSubmit((values) => {
    console.log(values)
  })

  return { formSchema, onSubmit, values}
}