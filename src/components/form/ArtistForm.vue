<script setup>
import FormLayout from '@/layouts/FormLayout.vue'
import InputUI from '../core/input/InputUI.vue'
import SelectUI from '../core/select/SelectUI.vue'
import { genderList } from '@/lib/constants'
import { useArtistForm } from '@/composables/artistForm'

const { onSubmit } = useArtistForm()
</script>
<template>
  <FormLayout @handleSubmit="onSubmit" button-label="Submit">
    <InputUI type="text" name="name" label="Name" />
    <InputUI type="date" name="dob" label="Date of Birth" />

    <SelectUI placeholder="Enter Gender" name="gender" label="Gender" :select-items="genderList" />

    <InputUI type="text" name="address" label="Address" />
    <InputUI type="number" name="first_release_year" label="First Release Year" />
    <InputUI type="number" name="no_of_albums_released" label="No of albums released" />
  </FormLayout>
</template>
