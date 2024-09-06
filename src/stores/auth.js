/* eslint-disable no-undef */
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { API_BASE } from '@/lib/constants'
import { useFetch } from '@vueuse/core'
import router from '@/router'
import { toast } from 'vue-sonner'

const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const bearerToken = ref(null)

  const isLoggedIn = computed(() => bearerToken.value)

  //calls the login api and return the response
  const login = async (formData) => {
      const params = Object.fromEntries(formData)

      const { data, error } = await useFetch(`${API_BASE}/login`, {
        method: 'POST',
        body: JSON.stringify({ user: params }),
        headers: { 'Content-Type': 'application/json' }
      })

    if (data) {
      console.log(data.value, data.value?.headers?.get("Authorization"))
      user.value = data.value.user
      bearerToken.value = Object.fromEntries(response.headers).authorization
      localStorage.setItem('bearerToken', bearerToken.value)
    }

    if (error) {
      toast.error(error.value)
    }
  }

  // calls the register api
  const register = async (formData) => {
      const params = Object.entries(formData)
      const { data, error } = await useFetch(`${API_BASE}/signup`, {
        method: 'POST',
        body: JSON.stringify({ user: params }),
        headers: { 'Content-Type': 'application/json' }
      })

     if (data) {
      console.log(data.value);
       router.push("/auth/login")
     }

     if (error) {
       toast.error(error.value)
     }

  }

  // checks if user is validated or not.
  const validateUser = async () => {
    const token = localStorage.getItem('bearerToken')
    const tokenExist =  token !== null;

    if (tokenExist) {   
        console.log(token, tokenExist)
        const { data, error } = await useFetch(`${API_BASE}/login`, {
          headers: { Authorization: token }
        })

        if (data) {
        console.log(data, data.value);
        user.value = data.value
        bearerToken.value = token
        }

        if (error) {
          toast.error(error.value);
        }
    }                             
  }

  const logout = async () => {
     const { data, error } = useFetch(`${API_BASE}/logout`) 
     if (data) {
      router.push("/auth/login")
     }

     if (error) {
       toast.error(error.message)
     }
  }

  return { register, validateUser, login, user, isLoggedIn, logout, bearerToken }
})

export default useAuthStore
