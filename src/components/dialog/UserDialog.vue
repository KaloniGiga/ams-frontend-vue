<script setup>
import { DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import UserForm from '../form/UserForm.vue'
import useDialogStore from '@/stores/dialog';
import { storeToRefs } from 'pinia';

const dialogStore = useDialogStore();
const { isEdit } = storeToRefs(dialogStore);
</script>
<template>
  <DialogContent class="overflow-y-scroll max-h-screen">
    <DialogHeader>
      <DialogTitle>{{ isEdit ? 'Modify User Information' : 'New User Entry' }}</DialogTitle>
    </DialogHeader>
    <UserForm />
  </DialogContent>
</template>
