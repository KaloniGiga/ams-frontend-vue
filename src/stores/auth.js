/* eslint-disable no-undef */
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const bearerToken = ref(null)

  const isLoggedIn = computed(() => bearerToken.value !== null)

  const API_URL = 'http://localhost:3000'
  //calls the login api and return the response
  const login = async (formData) => {
    try {
      console.log(Object.fromEntries(formData))
      const params = Object.fromEntries(formData)

      const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        body: JSON.stringify({ user: params }),
        headers: { 'Content-Type': 'application/json' }
      })

      const isSuccessfull = response.ok
      const data = await response.json()
      console.log(data)

      if (!isSuccessfull) {
        throw new Error(data.messages)
      }
      user.value = data.user
      bearerToken.value = Object.fromEntries(response.headers).authorization
      localStorage.setItem('bearerToken', bearerToken.value)
    } catch (error) {
      return { error }
    }
  }

  // calls the register api
  const register = async (formData) => {
    try {
      const params = Object.entries(formData)
      const response = await fetch(`${API_URL}/signup`, {
        method: 'POST',
        body: JSON.stringify({ user: params }),
        headers: { 'Content-Type': 'application/json' }
      })

      const isSuccessfull = response.ok
      const data = await response.json()
      console.log(data)
      if (!isSuccessfull) {
        throw new Error(data.messages)
      }
    } catch (error) {
      return { error }
    }
  }

  // checks if user is validated or not.
  const validateUser = async () => {
    const token = localStorage.getItem('bearerToken')
    const tokenExist = token !== undefined && token !== null

    if (tokenExist) {
      try {
        const response = await fetch(`${API_URL}/login`, {
          headers: { Authorization: token }
        })

        if (!response.ok) {
          throw new Error('Invalid Bearer token')
        }

        const data = await response.json()
        user.value = data.user
        bearerToken.value = token
      } catch (error) {
        console.log(error)
      }
    }
  }

  return { register, validateUser, login, user, isLoggedIn }
})

export default useAuthStore
