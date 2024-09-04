<script setup>
import { Button } from '@/components/ui/button'
defineProps({
  buttonLabel: String
})

// defineEmits(['handleSubmit'])
</script>
<template>
  <form @submit.prevent="$emit('handleSubmit')">
    <slot></slot>
    <Button type="submit" class="w-full my-4">{{ buttonLabel }}</Button>
  </form>
</template>
