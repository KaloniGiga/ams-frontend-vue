<script setup>
import ActionDropdown from '@/components/core/data-table/ActionDropdown.vue'
import DeleteDialog from '@/components/dialog/DeleteDialog.vue'
import SongDialog from '@/components/dialog/SongDialog.vue';
import { ref } from 'vue'
const isOpen = ref(false)
const isDeleteClicked = ref(false)

const handleEditClick = () => {
  isDeleteClicked.value = false
  isOpen.value = true
}

const handleDeleteClick = () => {
  isDeleteClicked.value = true
  isOpen.value = true
}

</script>
<template>
  <ActionDropdown
    @editClick="handleEditClick"
    @deleteClick="handleDeleteClick"
    v-model="isOpen"
    :isDeleteClicked="isDeleteClicked"
  >
    <SongDialog :isEdit="true" v-if="!isDeleteClicked" />
    <DeleteDialog titleKey="song" v-else-if="isDeleteClicked" />
  </ActionDropdown>
</template>