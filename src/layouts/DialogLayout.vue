<script setup>
import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';

const isOpen = defineModel();
defineProps({
    buttonLabel: String,
})
</script>
<template>
   <Dialog v-model:open="isOpen">  
    <DialogTrigger as-child>
        <Button>
            {{ buttonLabel }}
        </Button>
    </DialogTrigger>
    <slot></slot>
   </Dialog>
</template>