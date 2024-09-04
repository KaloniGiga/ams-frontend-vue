<script setup>
import FormLayout from '@/layouts/FormLayout.vue'
import InputUI from '../core/input/InputUI.vue'
import SelectUI from '../core/select/SelectUI.vue'
import { genreList } from '@/lib/constants'
import { useSongForm } from '@/composables/songForm'

const { onSubmit } = useSongForm()
</script>
<template>
  <FormLayout @handleSubmit="onSubmit" button-label="Submit">
    <InputUI type="text" name="title" label="Title" />
    <InputUI type="text" name="album_name" label="Album name" />

    <SelectUI placeholder="Enter Genre" name="gender" label="Gender" :select-items="genreList" />
  </FormLayout>
</template>
