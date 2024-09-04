<script setup>
import { useUserForm } from '@/composables/userForm'
import FormLayout from '@/layouts/FormLayout.vue'
import InputUI from '../core/input/InputUI.vue'

const { onSubmit } = useUserForm()
</script>
<template>
  <FormLayout @handleSubmit="onSubmit" button-label="Submit">
    <div className="grid grid-cols-2 gap-4">
      <div className="grid gap-2">
        <InputUI type="text" name="first_name" label="First name" />
      </div>
      <div className="grid gap-2">
        <InputUI type="text" name="last_name" label="Last name" />
      </div>
    </div>

    <InputUI type="text" name="email" label="Email" />
    <InputUI type="text" name="password" label="Password" />

    <div className="grid grid-cols-2 gap-4">
      <div className="grid gap-2">
        <InputUI type="text" name="phone" label="Phone" />
      </div>
      <div className="grid gap-2">
        <InputUI type="text" name="dob" label="Date of Birth" />
      </div>
    </div>
  </FormLayout>
</template>
