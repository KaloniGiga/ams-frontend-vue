<script setup>
import { DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import UserForm from '../form/UserForm.vue'

defineProps({
  isEdit: Boolean
})
</script>
<template>
  <DialogContent class="overflow-y-scroll max-h-screen">
    <DialogHeader>
      <DialogTitle>{{ isEdit ? 'Modify User Information' : 'New User Entry' }}</DialogTitle>
    </DialogHeader>
    <UserForm />
  </DialogContent>
</template>
