<script setup>
import { Button } from '../ui/button'
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../ui/dialog'
defineProps({
  titleKey: String
})

defineEmits(['deleteConfirm', 'deleteCancel'])

</script>
<template>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>
        {{ 'Delete ' + titleKey }}
      </DialogTitle>
      <DialogDescription>
        {{ 'Are you sure you really want to delete the ' + titleKey }}
      </DialogDescription>
    </DialogHeader>

    <div className="flex justify-end gap-4">
      <Button @click="deleteCancel" variant="outline"> Cancel </Button>
      <Button @click="deleteConfirm"> Confirm </Button>
    </div>
  </DialogContent>
</template>
