<script setup>
import ActionDropdown from '@/components/core/data-table/ActionDropdown.vue'
import DeleteDialog from '@/components/dialog/DeleteDialog.vue'
import useDialogStore from '@/stores/dialog';
import useSongStore from '@/stores/song';
import { ref } from 'vue'

const props = defineProps(['songData'])
const songStore = useSongStore();
const dialogStore = useDialogStore()
const deleteDialog = ref(false)

const handleEditClick = () => {
    dialogStore.setIsEdit(props.songData)
    dialogStore.setIsOpen()
}

const handleDeleteClick = () => {
  deleteDialog.value = true
}

const handleDeleteCancel = () => {
   deleteDialog.value = false
}

const handleDeleteConfirm = async () => {
   await songStore.deletesong(); 
   deleteDialog.value = false
}

</script>
<template>
  <ActionDropdown
    @editClick="handleEditClick"
    @deleteClick="handleDeleteClick"
    v-model="deleteDialog"
  >
    <DeleteDialog @deleteCancel="handleDeleteCancel" @deleteConfirm="handleDeleteConfirm" titleKey="song" />
  </ActionDropdown>
</template>