<script setup>
import Button from '../ui/button/Button.vue';
</script>

<template>
    <header class="w-full sticky top-0 z-50 flex justify-end lg:justify-between h-16 items-center gap-4 border-b bg-background px-4 md:px-8 lg:px-16">
       <nav class="hidden w-[1/4] lg:flex justify-between gap-x-4 md:gap-x-8 lg:gap-x-16 items-center">
        <Routerlink class="text-[black] font-lg font-bold italic">AMS</Routerlink>
       <div class="flex gap-x-4 text-sm">
        <RouterLink to="/dashboard/user" class="text-[black] text-sm italic">User</RouterLink>
        <RouterLink to="/dashboard/artist" class="text-[black] text-sm italic">Artist</RouterLink>
       </div>
     </nav>

       <div>
        <Button size="sm">Logout</Button>
       </div>
    </header>
</template>