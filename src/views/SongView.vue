<script setup>
import SongDialog from '@/components/dialog/SongDialog.vue';
import DialogLayout from '@/layouts/DialogLayout.vue';
import TableLayout from '@/layouts/TableLayout.vue'
</script>
<template>
  <TableLayout
    title="Songs Table"
    description="This table contains list of all the songs of artist."
  >
   <DialogLayout v-model="isOpen" button-label="Add Song">
      <SongDialog :isEdit="false" />
   </DialogLayout>
  </TableLayout>
</template>
