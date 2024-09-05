<script setup>
import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import useDialogStore from '@/stores/dialog'
import { storeToRefs } from 'pinia'

const dialogStore = useDialogStore()
const { isOpen } = storeToRefs(dialogStore)
defineProps({
  buttonLabel: String
})

const handleDialogOpen = () => {
  dialogStore.resetIsEdit()
  dialogStore.setIsOpen()
}

</script>
<template>
  <Dialog v-model:open="isOpen">
    <DialogTrigger as-child>
      <Button @click="handleDialogOpen">
        {{ buttonLabel }}
      </Button>
    </DialogTrigger>
    <slot></slot>
  </Dialog>
</template>
