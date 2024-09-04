<script setup lang="ts">
import DataTable from '@/components/core/data-table/DataTable.vue'
import Card from '@/components/ui/card/Card.vue'
import CardContent from '@/components/ui/card/CardContent.vue'
import CardDescription from '@/components/ui/card/CardDescription.vue'
import CardHeader from '@/components/ui/card/CardHeader.vue'
import CardTitle from '@/components/ui/card/CardTitle.vue'

defineProps({
  columns: { type: Object },
  title: { type: String, required: true },
  description: { type: String, required: true }
})
</script>

<template>
  <Card class="w-full">
    <CardHeader class="flex flex-row justify-between items-center">
      <div class="">
        <CardTitle>{{ title }}</CardTitle>
        <CardDescription>{{ description }}</CardDescription>
      </div>
      <slot></slot>
    </CardHeader>
    <CardContent>
     <DataTable :data="[]" :columns="columns" /> 
    </CardContent>
  </Card>
</template>
