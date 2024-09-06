<script setup>
import { DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import ArtistForm from '../form/ArtistForm.vue'
import useDialogStore from '@/stores/dialog'
import { storeToRefs } from 'pinia'

const dialogStore = useDialogStore()
const { isEdit } = storeToRefs(dialogStore)
</script>
<template>
  <DialogContent class="overflow-y-scroll max-h-screen">
    <DialogHeader>
      <DialogTitle>{{ isEdit ? 'Modify Artist Information' : 'New Artist Entry' }}</DialogTitle>
    </DialogHeader>
    <ArtistForm />
  </DialogContent>
</template>
