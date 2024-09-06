<script setup>
import { DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import SongForm from '../form/SongForm.vue'
import useDialogStore from '@/stores/dialog'
import { storeToRefs } from 'pinia'

const dialogStore = useDialogStore()
const { isEdit } = storeToRefs(dialogStore)
</script>
<template>
  <DialogContent class="overflow-y-scroll max-h-screen">
    <DialogHeader>
      <DialogTitle>{{ isEdit ? 'Modify Song Information' : 'New Song Entry' }}</DialogTitle>
    </DialogHeader>
    <SongForm />
  </DialogContent>
</template>
