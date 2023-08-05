<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

const register_form = ref({});
const store = useStore();

const register = () => {
  store.dispatch("register", register_form.value);
};
</script>

<template>
  <form class="register" @submit.prevent="register">
    <h2>Register</h2>
    <input
      type="email"
      placeholder="Email address"
      v-model="register_form.email"
      required
    />
    <input
      type="password"
      placeholder="Password"
      v-model="register_form.password"
      required
    />
    <input type="submit" value="Register" />
    <p>
      <small>
        You have an account?
        <RouterLink to="/login">go back to login!</RouterLink>
      </small>
    </p>
  </form>
</template>
