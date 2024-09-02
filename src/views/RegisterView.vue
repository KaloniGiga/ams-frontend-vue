
<script setup>
const handleFormSubmit = async (event) => {
    const form = event.target
    const formData = new FormData(form)
    console.log(formData);
}

</script>
<template>
    <div :class="container">
       <form @submit.prevent="handleFormSubmit">
          <label for="email">Email</label>
          <input type="text" name="email">
           
          <label>Password</label>
          <input type="password" name="password">
       </form>        
    </div>
</template>
<style scoped>
 .container {
    width: "100%";
    height: "100%";
    display: "flex";
    justify-content: "center";
    align-items: "center";
 }
</style>