<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const email = ref("");
const password = ref("");
const router = useRouter();

const signup = () => {
  createUserWithEmailAndPassword(auth, email.value, password.value).then(
    (data) => {
      console.log("successfully signup");
      console.log(auth.currentUser);
      router.push("/feed");
    }
  );
};
</script>

<template>
  <div>
    <h1>Signup</h1>
    <input type="email" placeholder="Email" v-model="email" /><br />
    <input type="password" placeholder="Password" v-model="password" /><br />
    <button @click="signup">Submit</button><br />
    <button @click="signInWithGoogle">Sign in with google</button><br />
  </div>
</template>
