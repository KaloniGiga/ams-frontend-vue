<script setup>
import ActionDropdown from '@/components/core/data-table/ActionDropdown.vue'
import DeleteDialog from '@/components/dialog/DeleteDialog.vue'
import useArtistStore from '@/stores/artist'
import useDialogStore from '@/stores/dialog'
import { ref } from 'vue'

const props = defineProps(['artistData'])
const artistStore = useArtistStore()
const dialogStore = useDialogStore()
const deleteDialog = ref(false)

const handleEditClick = () => {
  dialogStore.setIsEdit(props.artistData)
  dialogStore.setIsOpen()
}

const handleDeleteClick = () => {
  deleteDialog.value = true
}

const handleDeleteCancel = () => {
  deleteDialog.value = false
}

const handleDeleteConfirm = async () => {
  await artistStore.deleteUser()
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
      titleKey="artist"
    />
  </ActionDropdown>
</template>
