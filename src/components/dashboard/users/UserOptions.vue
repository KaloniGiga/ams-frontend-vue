<script setup>
import ActionDropdown from '@/components/core/data-table/ActionDropdown.vue'
import DeleteDialog from '@/components/dialog/DeleteDialog.vue'
import useDialogStore from '@/stores/dialog'
import useUserStore from '@/stores/user'
import { ref } from 'vue'

const props = defineProps(['userData'])
const userStore = useUserStore()
const dialogStore = useDialogStore()
const deleteDialog = ref(false)

const handleEditClick = () => {
  dialogStore.setIsEdit(props.userData)
  dialogStore.setIsOpen()
}

const handleDeleteClick = () => {
  deleteDialog.value = true
}

const handleDeleteCancel = () => {
  console.log(props.userData.id)
  deleteDialog.value = false
}

const handleDeleteConfirm = async () => {
  await userStore.deleteUser()
  deleteDialog.value = false
}
</script>
<template>
  <ActionDropdown
    @editClick="handleEditClick"
    @deleteClick="handleDeleteClick"
    v-model="deleteDialog"
  >
    <DeleteDialog
      @deleteCancel="handleDeleteCancel"
      @deleteConfirm="handleDeleteConfirm"
      titleKey="user"
    />
  </ActionDropdown>
</template>
