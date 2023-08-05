<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

const login_form = ref({});
const store = useStore();

const login = () => {
  store.dispatch("login", login_form.value);
};
</script>

<template>
  <form class="login" @submit.prevent="login">
    <h2>Login</h2>
    <input
      type="email"
      placeholder="Email address"
      v-model="login_form.email"
      required
    />
    <input
      type="password"
      placeholder="Password"
      v-model="login_form.password"
      required
    />
    <input type="submit" value="Login" />
    <p>
      <small>
        You have not an account?
        <RouterLink to="/signup">go here to signup!</RouterLink>
      </small>
    </p>
  </form>
</template>
