<script setup lang="ts">
import Card from '@/components/ui/card/Card.vue';
import CardContent from '@/components/ui/card/CardContent.vue';
import CardDescription from '@/components/ui/card/CardDescription.vue';
import CardHeader from '@/components/ui/card/CardHeader.vue';
import CardTitle from '@/components/ui/card/CardTitle.vue';

defineProps({
    title: { type: String, required: true },
    description: { type: String, required: true },
});
</script>

<template>
  <Card class="w-full">
     <CardHeader class="flex flex-row justify-between items-center">
        <div class="">
        <CardTitle>{{title}}</CardTitle>
        <CardDescription>{{description}}</CardDescription>
       </div>
        <slot></slot>
     </CardHeader>
     <CardContent>
         No found.
     </CardContent>
  </Card>

</template>