<script setup lang="ts">

</script>

<template>
  <div>
    <nav class="fixed top-0 left-0 w-full bg-gray-800 flex justify-center">
      <router-link active-class="active" to="/">
        <button class="m-2" class-ac>
          Home
        </button>
      </router-link>
      <router-link active-class="active" to="/about">
        <button class="m-2">
          About
        </button>
      </router-link>
    </nav>
    <RouterView />
  </div>
</template>

<style scoped>
</style>
