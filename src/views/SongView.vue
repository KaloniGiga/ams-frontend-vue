<script setup>
import { songColumns } from '@/components/dashboard/songs/SongTableColumn'
import SongDialog from '@/components/dialog/SongDialog.vue'
import DialogLayout from '@/layouts/DialogLayout.vue'
import TableLayout from '@/layouts/TableLayout.vue'
import useSongStore from '@/stores/song';
import { storeToRefs } from 'pinia';

const songStore = useSongStore()
const { songsData } = storeToRefs(songStore);
await songStore.fetchSongs()

</script>
<template>
  <TableLayout
    :data="songsData"
    :columns="songColumns"
    title="Songs Table"
    description="This table contains list of all the songs of artist."
  >
    <DialogLayout button-label="Add Song">
      <SongDialog />
    </DialogLayout>
  </TableLayout>
</template>
