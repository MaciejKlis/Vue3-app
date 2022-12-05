<script setup lang="ts">

</script>

<template>
  <div>
    <nav class="fixed top-0 left-0 w-full bg-aqua-200 flex justify-center">
      <button class="m-2">
        <router-link to="/">Home</router-link>
      </button>
      <button class="m-2">
        <router-link to="/about">About</router-link>
      </button>
    </nav>
    <RouterView />
  </div>
</template>

<style scoped>
</style>
