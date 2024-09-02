<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import useAuthStore from '../stores/auth.js'

const router = useRouter()
const authStore = useAuthStore()

const form = {
  email: ref(''),
  password: ref('')
}

const isEmailValue = computed(
  () =>
    form.email.value.trim() !== '' && /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(form.email.value)
)
const isPasswordValue = computed(() => form.password.value.trim().length >= 8)

const errors = ref({})

const validateField = (field) => {
  errors.value[field] = ''

  if (field == 'email' && !isEmailValue.value) {
    errors.value.email = 'Email is invalid'
  }

  if (field == 'password' && !isPasswordValue.value) {
    errors.value.password = 'Password must be 8 chars long.'
  }
}
const handleFormSubmit = async (event) => {
  validateField('email')
  validateField('password')
  const form = event.target
  const formData = new FormData(form)
  const response = await authStore.login(formData)
  if (response?.error) {
    console.log(response.error)
  } else {
    router.push('/dashboard')
    form.reset()
  }

  console.log(formData)
}
</script>

<template>
  <div class="container">
    <form class="authForm" @submit.prevent="handleFormSubmit">
      <h1 class="formHeading">Welcome Back! Login</h1>
      <label for="email">Email</label>
      <input type="text" class="input" name="email" v-model="form.email.value" />
      <span class="error" v-if="errors.email">{{ errors.email }}</span>

      <label>Password</label>
      <input type="password" class="input" name="password" v-model="form.password.value" />
      <span class="error" v-if="errors.password">{{ errors.password }}</span>

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
