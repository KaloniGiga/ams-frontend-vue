<script setup>
import { songColumns } from '@/components/dashboard/songs/SongTableColumn'
import SongDialog from '@/components/dialog/SongDialog.vue'
import DialogLayout from '@/layouts/DialogLayout.vue'
import TableLayout from '@/layouts/TableLayout.vue'
import { songsData } from '@/lib/constants';
</script>
<template>
  <TableLayout
    :data="songsData"
    :columns="songColumns"
    title="Songs Table"
    description="This table contains list of all the songs of artist."
  >
    <DialogLayout v-model="isOpen" button-label="Add Song">
      <SongDialog :isEdit="false" />
    </DialogLayout>
  </TableLayout>
</template>
