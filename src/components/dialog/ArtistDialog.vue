<script setup>
import { DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import ArtistForm from '../form/ArtistForm.vue'

defineProps({
  isEdit: Boolean
})
</script>
<template>
  <DialogContent class="overflow-y-scroll max-h-screen">
    <DialogHeader>
      <DialogTitle>{{ isEdit ? 'Modify Artist Information' : 'New Artist Entry' }}</DialogTitle>
    </DialogHeader>
    <ArtistForm />
  </DialogContent>
</template>
