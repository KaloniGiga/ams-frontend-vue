<script setup>
import { useUserForm } from '@/composables/userForm'
import FormLayout from '@/layouts/FormLayout.vue'
import InputUI from '../core/input/InputUI.vue'
import SelectUI from '../core/select/SelectUI.vue'
import { genderList } from '@/lib/constants'
import { roleType } from '@/lib/constants'

const { onSubmit, values } = useUserForm()
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
        <InputUI type="date" name="dob" label="Date of Birth" />
      </div>
    </div>

    <SelectUI placeholder="Enter Gender" name="gender" label="Gender" :select-items="genderList" />

    <SelectUI placeholder="Enter Role" name="role_type" label="Role" :select-items="roleType" />

    <SelectUI
      v-if="values.role_type == 'artist'"
      placeholder="Select Artist"
      name="artist_id"
      label="Artist"
      :select-items="[]"
    />

    <InputUI type="text" name="address" label="Address" />
  </FormLayout>
</template>
