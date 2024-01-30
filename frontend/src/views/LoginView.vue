<script setup>
import { useUserStore } from '../stores/UserStore'
const store = useUserStore()
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-6">
        <h2 class="mt-4 mb-3">Login</h2>
        <form @submit.prevent="store.login">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input
              type="email"
              v-model="store.email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>

          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" v-model="store.password"  id="exampleInputPassword1" />
            <span class="text-danger">{{ store.message }}</span>
          </div>
          <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
            <label class="form-check-label" for="exampleCheck1">Remember me</label>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>
