<script setup>
import { DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

defineProps({
    isEdit: Boolean
})
</script>
<template>
    <DialogContent>
        <DialogHeader>
            <DialogTitle>{{ isEdit ? "Modify User Information" : "New User Entry" }}</DialogTitle>
        </DialogHeader>
    </DialogContent>
</template>