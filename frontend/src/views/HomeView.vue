<script setup>
import { useUrlShortener } from '../stores/UrlShortStore'
const store = useUrlShortener()
const { shortenUrl } = store
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-6">
        <h2 class="mt-4 mb-3">Shorten URL</h2>
        <form @submit.prevent="shortenUrl">
          <input
            class="form-control"
            v-model="store.original_url"
            type="url"
            placeholder="Enter URL"
            required
          />
          <button class="btn btn-primary mt-3" type="submit">Shorten</button>
          <div v-if="store.short_url" class="mt-3">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Short URL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <a :href="`http://localhost:8000/api/${store.short_url}`" target="_blank">{{
                      `http://localhost:8000/api/${store.short_url}`
                    }}</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
