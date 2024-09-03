<script setup></script>
<template>
    <header >
       <div class="navContainer">
        <span style="font-weight: 700; font-style: italic">AMS</span>
       <nav>
        <RouterLink to="/dashboard">User</RouterLink>
        <RouterLink to="/dashboard/artist">Artist</RouterLink>
       </nav>
       </div> 

       <div>
        <button>Logout</button>
       </div>
    </header>
</template>
<style scoped>
header {
  width: 100%;
  min-height: 7vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10%;
  border-bottom: 1px solid #ccc;
}

nav {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 20px
}

.navContainer {
    display: flex;
    align-items: center;
    gap: 8vw;
}

</style>