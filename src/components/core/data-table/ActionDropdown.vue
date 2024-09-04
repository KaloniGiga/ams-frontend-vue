<script setup>
import { Dialog } from '@/components/ui/dialog'
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import DropdownMenuContent from '@/components/ui/dropdown-menu/DropdownMenuContent.vue'
import { BorderDottedIcon } from '@radix-icons/vue'

const isOpen = defineModel()
defineProps({
  isDeleteClicked: Boolean,
})

defineEmits(['editClick', 'deleteClick'])
</script>

<template>
  <Dialog v-model:open="isOpen">
    <DropdownMenu>
      <DropdownMenuTrigger as-child>
        <BorderDottedIcon />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem @click="$emit('editClick')">Edit</DropdownMenuItem>
        <DropdownMenuItem @click="$emit('deleteClick')"> Delete </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    <slot></slot>
  </Dialog>
</template>
