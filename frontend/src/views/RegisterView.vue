<script setup>
import { useUserStore } from '../stores/UserStore'
const store = useUserStore()
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-6">
        <h2 class="mt-4">Register</h2>
        <form @submit.prevent="store.register">
          <div class="mt-3">
            <label for="exampleInputName" class="form-label">Name</label>
            <input
              type="text"
              v-model="store.name"
              class="form-control"
              id="exampleInputName"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mt-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input
              type="email"
              v-model="store.email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mt-3">
            <label for="exampleInputPassword" class="form-label">Password</label>
            <input type="password" v-model="store.password"
             class="form-control" id="exampleInputPassword" />
          </div>
          <div class="mt-3">
            <label for="exampleInputPassword1" class="form-label">confirm Password</label>
            <input type="password" v-model="store.confirm_password" class="form-control" id="exampleInputPassword1" />
          </div>
          <button type="submit" class="btn btn-primary mt-3">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>
