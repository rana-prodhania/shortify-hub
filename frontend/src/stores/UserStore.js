import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import api from '@/http/api'
import router from '@/router'

export const useUserStore = defineStore('UserStore', () => {
  const name = ref('')
  const email = ref('')
  const password = ref('')
  const confirm_password = ref('')
  const error = ref('')
  const message = ref('')

  async function register() {
    try {
      const res = await api.post('register', {
        name: name.value,
        email: email.value,
        password: password.value,
        confirm_password: confirm_password.value
      })
      localStorage.setItem('token', res.data.accessToken)
      localStorage.setItem('user', JSON.stringify(res.data.user))
      message.value = res.data.message
      return router.push({ name: 'home' })
    } catch (e) {
      if (e.response.status == 422) {
        return message.value = e.response.data.message
      }
    }
  }
  async function login() {
    try {
      const res = await api.post('login', {
        email: email.value,
        password: password.value,
      })
      localStorage.setItem('token', res.data.accessToken)
      localStorage.setItem('user', JSON.stringify(res.data.user))
      message.value = res.data.message
      return router.push({ name: 'home' })
    } catch (e) {
      if (e.response.status == 401) {
        return message.value = "Invalid email or password"
      }
    }
  }
  return {
    name,
    email,
    password,
    confirm_password,
    register,
    message,
    login
  }
})
