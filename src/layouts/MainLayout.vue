<script setup>
 import NavBar from '@/components/header/NavBar.vue';
</script>
<template>
  <NavBar />
   <main class="w-full min-h-screen flex flex-col items-center px-8 md:px-16 py-8 lg:py-12">
   <RouterView />
  </main>
</template>
<style scoped></style>