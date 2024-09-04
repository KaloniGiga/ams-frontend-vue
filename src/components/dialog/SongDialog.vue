<script setup>
import { DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import SongForm from '../form/SongForm.vue';

defineProps({
  isEdit: Boolean
})
</script>
<template>
  <DialogContent class="overflow-y-scroll max-h-screen">
    <DialogHeader>
      <DialogTitle>{{ isEdit ? 'Modify Song Information' : 'New Song Entry' }}</DialogTitle>
    </DialogHeader>
    <SongForm />
  </DialogContent>
</template>