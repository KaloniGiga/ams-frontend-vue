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
      <h1 class="formHeading">Sign up to continue</h1>

      <div class="fieldRow">
        <div>
          <label for="email">First name</label>
          <input type="text" name="email" />
        </div>

        <div>
          <label for="email">Last name</label>
          <input type="text" name="email" />
        </div>
      </div>

      <label for="email">Email</label>
      <input type="text" name="email" />

      <label>Password</label>
      <input type="password" name="password" />

      <div class="fieldRow">
        <div style="width: 100%;">
          <label for="phone">Phone</label>
          <input type="text" name="phone" />
        </div>

        <div style="width: 100%;">
          <label for="dob">DOB</label>
          <input type="date" name="dob" />
        </div>
      </div>


      <label for="gender">Gender</label>
      <select name="gender">
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="">Other</option>
      </select>
      <!-- <input type="text" name="gender" /> -->

      <label for="address">Address</label>
      <input type="text" name="address" />

      <button class="submitBtn">Submit</button>

      <p>Already have an account? <RouterLink to="/">Login</RouterLink></p>
    </form>
  </div>
</template>
<style scoped>
p {
  text-align: center;
}

.fieldRow {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}
</style>
