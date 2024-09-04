<script setup>
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
defineProps({
  name: String,
  label: String,
  placeholder: String,
  selectItems: Array,
})
</script>
<template>
  <FormField v-slot="{ componentField }" :name="name">
    <FormItem>
     <FormLabel>{{ label }}</FormLabel>
    <Select v-bind="componentField">
      <FormControl>
        <SelectTrigger>
            <SelectValue :placeholder="placeholder"/>
        </SelectTrigger>
      </FormControl>
      <SelectContent>
        <SelectItem v-for="item in selectItems" :key="item.id" :value="item.value">
            {{ item.label }}
        </SelectItem>
      </SelectContent>
    </Select>
      <FormMessage />
    </FormItem>
  </FormField>
</template>

