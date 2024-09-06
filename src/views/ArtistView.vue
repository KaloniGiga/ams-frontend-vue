<script setup>
import { artistColumns } from '@/components/dashboard/artists/ArtistTableColumn'
import ArtistDialog from '@/components/dialog/ArtistDialog.vue'
import DialogLayout from '@/layouts/DialogLayout.vue'
import TableLayout from '@/layouts/TableLayout.vue'
import useArtistStore from '@/stores/artist'
import { storeToRefs } from 'pinia'

const artistStore = useArtistStore()
const { artistData } = storeToRefs(artistStore)
await artistStore.fetchArtists()
</script>
<template>
  <TableLayout
    :data="artistData"
    :columns="artistColumns"
    title="Artist Table"
    description="This table contains list of all artist."
  >
    <DialogLayout button-label="Add Artist">
      <ArtistDialog />
    </DialogLayout>
  </TableLayout>
</template>
