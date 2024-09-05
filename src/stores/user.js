import { API_BASE } from "@/lib/constants";
import { useFetch } from "@vueuse/core";
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

const useUserStore = defineStore('user', () => {
    const users = ref(null);

    const userData = computed(() => users.value ? users.value : []);

    const fetchUsers = async () => {
      const {  data } =  await useFetch(`${API_BASE}/users`)
      if (data) {
        users.value = JSON.parse(data.value);
      }
    }


    const postUser = async (body) => {
        const { data } = await useFetch(`${API_BASE}/signup`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) })
        if (data) {
            console.log(data);
            users.value = [...JSON.parse(data.value), ...users.value]
            console.log([JSON.parse(data.value), ...users.value])
        }
    }

    const putUser = async (body) => {
        const { data } = await useFetch(`${API_BASE}/signup`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) })
        if (data) {
            const targetUserIndex = users.value.findIndex((item) => item.email !== data.value.email)
            if (targetUserIndex) {
            users.value[targetUserIndex] = JSON.parse(data.value);
            }
        }
    }
    
    const deleteUser = async () => {
        const { data } = await useFetch(`${API_BASE}/signup`, { method: "DELETE", headers: { "Content-Type": "application/json" } })
        if (data) {
            const targetUserIndex = users.value.findIndex((item) => item.email !== data.value.email)
            if (targetUserIndex) {
            users.value.splice(targetUserIndex, 1);
            }
        }
    }

    return { userData, fetchUsers, postUser, putUser, deleteUser }
})

export default useUserStore;