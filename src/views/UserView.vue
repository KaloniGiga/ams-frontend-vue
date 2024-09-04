<script setup>
import { userColumns } from '@/components/dashboard/users/UserTableColumn'
import UserDialog from '@/components/dialog/UserDialog.vue'
import DialogLayout from '@/layouts/DialogLayout.vue'
import TableLayout from '@/layouts/TableLayout.vue'
import { userData } from '@/lib/constants'
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<template>
  <TableLayout
    :data="userData"
    :columns="userColumns"
    title="User Table"
    description="This table contains list of all users."
  >
    <DialogLayout v-model="isOpen" button-label="Add User">
      <UserDialog :isEdit="false" />
    </DialogLayout>
  </TableLayout>
</template>
