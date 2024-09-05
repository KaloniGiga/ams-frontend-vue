<script setup>
import { RouterView } from 'vue-router'
import { Toaster } from './components/ui/sonner'
</script>

<template>
  <suspense>
  <RouterView />
 </suspense>
  <Toaster />
</template>
