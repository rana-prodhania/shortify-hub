import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import api from '@/http/api'
import router from '@/router'

export const useUrlShortener = defineStore('UrlShortener', () => {
  const original_url = ref('')
  const short_url = ref('')

  async function shortenUrl() {
    if (original_url.value != '') {
      try {
        const authToken = localStorage.getItem('token')
        if (!authToken) {
          return router.push('/login')
        }
        const res = await api.post(
          'shorten-url',
          { original_url: original_url.value },
          {
            headers: {
              Accept: 'application/json',
              Authorization: `Bearer ${authToken}`
            },
            withCredentials: true
          }
        )
        original_url.value = ''
        short_url.value = res.data.short_url
        console.log('Shortened URL:', short_url.value)
      } catch (e) {
        if (e.response.status == 401) {
          return router.push('/login')
        }
      }
    }
  }

  return {
    original_url,
    shortenUrl,
    short_url
  }
})
