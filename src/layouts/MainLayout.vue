<script setup>
 import NavBar from '@/components/header/NavBar.vue';
</script>
<template>
  <NavBar />
   <main class="w-full min-h-screen flex flex-col justify-center items-center">
   <RouterView />
  </main>
</template>
<style scoped></style>