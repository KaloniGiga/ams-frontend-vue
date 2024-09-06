/* eslint-disable no-undef */
import { ref } from 'vue'
import { defineStore } from 'pinia'

const useDialogStore = defineStore('dialog', () => {
  const isOpen = ref(false)
  const isEdit = ref(false)
  const editData = ref(null)

  const dialogClose = () => {
    isOpen.value = false
    isEdit.value = false
    editData.value = null
  }

  const setIsOpen = () => {
    isOpen.value = true
  }

  const resetIsEdit = () => {
    editData.value = null
    isEdit.value = false
  }

  const setIsEdit = (data) => {
    editData.value = data
    isEdit.value = true
  }

  return { isOpen, isEdit, editData, dialogClose, setIsEdit, setIsOpen, resetIsEdit }
})

export default useDialogStore
