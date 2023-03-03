<script setup lang="ts">

</script>

<template>
  <div role="status" class="space-y-4">
    <div v-for="i in 4" class="h-14 p-4 flex items-center  border border-gray-200 rounded-xl shadow animate-pulse gap-3">
      <div class="h-5 bg-gray-300 rounded-full dark:bg-gray-600 aspect-square" />
      <div class="w-16 h-3 bg-gray-200 rounded-full dark:bg-gray-700" />
      <div class="h-3 bg-gray-300 rounded-full dark:bg-gray-700 w-14 ml-auto" />
    </div>
  </div>
</template>