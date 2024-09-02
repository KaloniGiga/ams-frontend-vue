<script setup>
const handleFormSubmit = async (event) => {
  const form = event.target
  const formData = new FormData(form)
  console.log(formData)
}
</script>
<template>
  <div class="container">
    <form class="authForm" @submit.prevent="handleFormSubmit">
      <h1 class="formHeading">Welcome Back! Login</h1>
      <label for="email">Email</label>
      <input type="text" class="input" name="email" />

      <label>Password</label>
      <input type="password" class="input" name="password" />

      <button class="submitBtn">Submit</button>

      <p>Don't have a account? <RouterLink to="/register">Register</RouterLink></p>
    </form>
  </div>
</template>
<style scoped>
p {
  text-align: center;
}
</style>
