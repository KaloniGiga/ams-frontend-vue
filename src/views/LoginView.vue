<script setup>
const handleFormSubmit = async (event) => {
    const form = event.target
    const formData = new FormData(form)
    console.log(formData);
}

</script>
<template>
    <div class="container">
       <form class="authForm" @submit.prevent="handleFormSubmit">
          
          <h1 class="formHeading">Welcome Back! Login to continue</h1>
          <label for="email" >Email</label>
          <input type="text" class="input" name="email">
           
          <label>Password</label>
          <input type="password" class="input" name="password">

          <button class="submitBtn">Submit</button>
       </form>        
    </div>
</template>
<style scoped>
 .container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
 }

.formHeading {
   margin: 10px 0px;
}

 .authForm {
   padding: 20px;
   border-radius: 5px;
   display: flex;
   flex-direction: column;

   border: 1px solid rgba(0, 0, 0, 0.1);
 }
</style>