<script setup>
import UserDialog from '@/components/dialog/UserDialog.vue'
import DialogLayout from '@/layouts/DialogLayout.vue'
import TableLayout from '@/layouts/TableLayout.vue'
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<template>
  <TableLayout title="User Table" description="This table contains list of all users.">
    <DialogLayout v-model="isOpen" button-label="Add User">
      <UserDialog :isEdit="false" />
    </DialogLayout>
  </TableLayout>
</template>
