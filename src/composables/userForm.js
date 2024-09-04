import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import * as z from 'zod'

export function useUserForm() {
  const formSchema = toTypedSchema(
    z.object({
      first_name: z.string().min(2).max(50).default(''),
      last_name: z.string().min(2).max(50).default(''),
      email: z.string().email('Email is invalid.').default(''),
      password: z.string().min(8).default(''),
      phone: z.string().min(5).max(15).default(''),
      gender: z.enum(['m', 'f', 'o']),
      address: z.string().min(2).max(50).default(''),
      role_type: z.enum(['super_admin', 'artist', 'artist_manager']),
      artistId: z.number().optional()
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
