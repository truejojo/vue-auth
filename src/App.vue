<script setup>
import {computed } from 'vue'
import { RouterView } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
computed(() => store.dispatch("fetchUser"))
</script>

<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <div class="container">
        <RouterLink classNames="navbar-brand text-uppercase text-lighter" to="/"
          >Home</RouterLink
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <RouterLink class="nav-link" to="/feed">Feed</RouterLink>
            </li>
            <li v-if="!$store.state.user" class="nav-item">
              <RouterLink class="nav-link" to="/login">Login</RouterLink>
            </li>
            <li v-if="$store.state.user" class="nav-item">
              <button class="nav-link" @click="$store.dispatch('logout')">
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <main class="container">
      <RouterView />
    </main>
  </div>
</template>
