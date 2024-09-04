<script setup>
import { artistColumns } from '@/components/dashboard/artists/ArtistTableColumn'
import ArtistDialog from '@/components/dialog/ArtistDialog.vue'
import DialogLayout from '@/layouts/DialogLayout.vue'
import TableLayout from '@/layouts/TableLayout.vue'
import { artistData } from '@/lib/constants'
import { ref } from 'vue'

const isOpen = ref(false)
</script>
<template>
  <TableLayout
    :data="artistData"
    :columns="artistColumns"
    title="Artist Table"
    description="This table contains list of all artist."
  >
    <DialogLayout v-model="isOpen" button-label="Add Artist">
      <ArtistDialog :isEdit="false" />
    </DialogLayout>
  </TableLayout>
</template>
