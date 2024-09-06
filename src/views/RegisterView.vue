<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import useAuthStore from '../stores/auth.js'
import { Button } from '@/components/ui/button/index.js';

const router = useRouter()
const authStore = useAuthStore()

const form = {
  first_name: ref(''),
  last_name: ref(''),
  email: ref(''),
  password: ref(''),
  phone: ref(''),
  dob: ref(''),
  gender: ref(''),
  address: ref('')
}

const isFirstNameValue = computed(() => form.first_name.value.trim() !== '')
const isLastnameValue = computed(() => form.last_name.value.trim() !== '')
const isEmailValue = computed(() => form.email.value.trim() !== '')
const isPasswordValue = computed(() => form.password.value.trim().length >= 8)
const isPhoneValue = computed(() => form.phone.value.trim() !== '')
const isDobValue = computed(() => form.dob.value && new Date(form.dob.value) <= new Date())
const isGenderValue = computed(() => !!form.gender.value)
const isAddressValue = computed(() => form.address.value.trim() !== '')

const errors = ref({})

const validateField = (field) => {
  errors.value[field] = ''
  if (field === 'first_name' && !isFirstNameValue.value) {
    errors.value.first_name = 'Firstname is required.'
  }

  if (field === 'last_name' && !isLastnameValue.value) {
    console.log(field, isLastnameValue.value)
    errors.value.last_name = 'Lastname is required.'
  }

  if (field == 'email' && !isEmailValue.value) {
    errors.value.email = 'Email is invalid'
  }

  if (field == 'password' && !isPasswordValue.value) {
    errors.value.password = 'Password must be 8 chars long.'
  }

  if (field == 'phone' && !isPhoneValue.value) {
    errors.value.phone = 'Invalid phone'
  }

  if (field == 'dob' && !isDobValue.value) {
    errors.value.dob = 'Date is required'
  }

  if (field == 'gender' && !isGenderValue.value) {
    errors.value.gender = 'Gender is required'
  }

  if (field == 'address' && !isAddressValue.value) {
    errors.value.address = 'Address is required.'
  }
}
const handleFormSubmit = async (event) => {
  validateField('first_name')
  validateField('last_name')
  validateField('email')
  validateField('password')

  validateField('phone')
  validateField('dob')
  validateField('gender')
  validateField('address')
  const form = event.target
  const formData = new FormData(form)

  const response = authStore.register(formData)
  if (response?.error) {
    console.log(response.error)
  } else {
    router.push('/')
  }
}
</script>
<template>
  <form class="authForm" @submit.prevent="handleFormSubmit">
    <h1 class="text-3xl my-4 text-bold">Sign up to continue</h1>

    <div class="fieldRow">
      <div>
        <label for="first_name">First name</label>
        <input
          type="text"
          v-model="form.first_name.value"
          name="first_name"
          @blur="validateField('first_name')"
        />

        <span class="error" v-if="errors.first_name">{{ errors.first_name }}</span>
      </div>

      <div>
        <label for="last_name">Last name</label>
        <input
          type="text"
          v-model="form.last_name.value"
          name="last_name"
          @blur="validateField('last_name')"
        />

        <span class="error" v-if="errors.last_name">{{ errors.last_name }}</span>
      </div>
    </div>

    <label for="email">Email</label>
    <input type="text" name="email" v-model="form.email.value" @blur="validateField('email')" />
    <span class="error" v-if="errors.email">{{ errors.email }}</span>

    <label>Password</label>
    <input
      type="password"
      name="password"
      v-model="form.password.value"
      @blur="validateField('password')"
    />
    <span class="error" v-if="errors.password">{{ errors.password }}</span>

    <div class="fieldRow">
      <div style="width: 100%">
        <label for="phone">Phone</label>
        <input type="text" name="phone" v-model="form.phone.value" @blur="validateField('phone')" />
        <span class="error" v-if="errors.phone">{{ errors.phone }}</span>
      </div>

      <div style="width: 100%">
        <label for="dob">DOB</label>
        <input type="date" name="dob" v-model="form.dob.value" @blur="validateField('dob')" />
        <span class="error" v-if="errors.dob">{{ errors.dob }}</span>
      </div>
    </div>

    <label for="gender">Gender</label>

    <select name="gender" v-model="form.gender.value" @blur="validateField('gender')">
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="">Other</option>
    </select>
    <span class="error" v-if="errors.gender">{{ errors.gender }}</span>
    <!-- <input type="text" name="gender" /> -->

    <label for="address">Address</label>
    <input
      type="text"
      name="address"
      v-model="form.address.value"
      @blur="validateField('address')"
    />
    <span class="error" v-if="errors.address">{{ errors.address }}</span>

    <!-- <button class="submitBtn">Submit</button> -->
     <Button class="my-4">Submit</Button>

    <p>Already have an account? <RouterLink to="/">Login</RouterLink></p>
  </form>
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
