import { API_BASE } from '@/lib/constants'
import { useFetch } from '@vueuse/core'
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { toast } from 'vue-sonner'

const useArtistStore = defineStore('artist', () => {
  const artists = ref(null)

  const artistData = computed(() => (artists.value ? artists.value : []))

  const fetchArtists = async () => {
    const { data } = await useFetch(`${API_BASE}/artists`)
    if (data) {
      artists.value = JSON.parse(data.value)
    }
  }

  const postArtist = async (body) => {
    const { data, error } = await useFetch(`${API_BASE}/artists`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })
    if (data) {
      console.log(data)
      artists.value = [JSON.parse(data.value), ...artists.value]
      console.log([JSON.parse(data.value), ...artists.value])
    }

    if (error) {
      toast.error(error.value)
    }
  }

  const putArtist = async (body) => {
    const { data, error } = await useFetch(`${API_BASE}/artists`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })
    if (data) {
      const targetUserIndex = artists.value.findIndex((item) => item.email !== data.value.email)
      if (targetUserIndex) {
        artists.value[targetUserIndex] = JSON.parse(data.value)
      }
    }

    if (error) {
      toast.error(error.value)
    }
  }

  const deleteArtist = async () => {
    const { data, error } = await useFetch(`${API_BASE}/artists`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    })
    if (data) {
      const targetUserIndex = artists.value.findIndex((item) => item.email !== data.value.email)
      if (targetUserIndex) {
        artists.value.splice(targetUserIndex, 1)
      }
    }

    if (error) {
      toast.error(error.value)
    }
  }

  return { artistData, fetchArtists, postArtist, putArtist, deleteArtist }
})

export default useArtistStore
