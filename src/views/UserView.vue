<script setup>
import { userColumns } from '@/components/dashboard/users/UserTableColumn'
import UserDialog from '@/components/dialog/UserDialog.vue'
import DialogLayout from '@/layouts/DialogLayout.vue'
import TableLayout from '@/layouts/TableLayout.vue'
import  useUserStore  from "../stores/user"
import { storeToRefs } from 'pinia'

const userStore = useUserStore()
const { userData } = storeToRefs(userStore);
await userStore.fetchUsers()
</script>

<template>
  <TableLayout
    :data="userData"
    :columns="userColumns"
    title="User Table"
    description="This table contains list of all users."
  >
    <DialogLayout button-label="Add User">
      <UserDialog />
    </DialogLayout>
  </TableLayout>
</template>