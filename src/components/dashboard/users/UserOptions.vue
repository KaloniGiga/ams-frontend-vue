<script setup>
import ActionDropdown from '@/components/core/data-table/ActionDropdown.vue'
import DeleteDialog from '@/components/dialog/DeleteDialog.vue'
import UserDialog from '@/components/dialog/UserDialog.vue'
import { ref } from 'vue'
const isOpen = ref(false)
const isDeleteClicked = ref(false)

const handleEditClick = () => {
  console.log('editclicked')
  isDeleteClicked.value = false
  isOpen.value = true
}

const handleDeleteClick = () => {
  console.log('delte clicked')
  isDeleteClicked.value = true
  isOpen.value = true
}

console.log(isOpen.value)
</script>
<template>
  <ActionDropdown
    @editClick="handleEditClick"
    @deleteClick="handleDeleteClick"
    v-model="isOpen"
    :isDeleteClicked="isDeleteClicked"
  >
    <UserDialog :isEdit="true" v-if="!isDeleteClicked" />
    <DeleteDialog titleKey="user" v-else-if="isDeleteClicked" />
  </ActionDropdown>
</template>
