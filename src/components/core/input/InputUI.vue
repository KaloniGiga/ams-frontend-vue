<script setup>
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
defineProps({
  name: String,
  label: String,
  type: String
})
</script>
<template>
  <FormField v-slot="{ componentField }" :name="name">
    <FormItem>
      <FormLabel>{{ label }}</FormLabel>
      <FormControl>
        <Input :type="type" v-bind="componentField" />
      </FormControl>
      <FormMessage />
    </FormItem>
  </FormField>
</template>
