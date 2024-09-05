import { API_BASE } from "@/lib/constants";
import { useFetch } from "@vueuse/core";
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { toast } from "vue-sonner";

const useSongStore = defineStore('song', () => {
    const songs = ref(null);

    const songsData = computed(() => songs.value ? songs.value : []);

    const fetchSongs = async () => {
    
      const {  data } =  await useFetch(`${API_BASE}/songs`)
      if (data) {
        songs.value = JSON.parse(data.value);
      }
    }


    const postSong = async (body) => {
        const { data, error } = await useFetch(`${API_BASE}/songs`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) })
        if (data) {
            console.log(data);
            songs.value = [JSON.parse(data.value), ...songs.value]
            console.log([JSON.parse(data.value), ...songs.value])
        }

      if (error) {
        toast.error(error.value);
      }
    }

    const putSong = async (body) => {
        const { data, error } = await useFetch(`${API_BASE}/songs`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) })
        if (data) {
            const targetSongIndex = songs.value.findIndex((item) => item.email !== data.value.email)
            if (targetSongIndex) {
            songs.value[targetSongIndex] = JSON.parse(data.value);
            }
        }

      if (error) {
        toast.error(error.value);
      }
    }
    
    const deleteSong = async () => {
        const { data, error } = await useFetch(`${API_BASE}/songs`, { method: "DELETE", headers: { "Content-Type": "application/json" } })
        if (data) {
            const targetUserIndex = songs.value.findIndex((item) => item.email !== data.value.email)
            if (targetUserIndex) {
            songs.value.splice(targetUserIndex, 1);
            }
        }

      if (error) {
        toast.error(error.value);
      }
    }

    return { songsData, fetchSongs, postSong, putSong, deleteSong }
})

export default useSongStore;