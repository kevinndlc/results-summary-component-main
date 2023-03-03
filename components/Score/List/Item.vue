<script setup lang="ts">
defineProps<{
  category: string;
  score: number;
  icon: string; 
}>()
</script>

<template>
  <li class="h-14 p-4 flex items-center gap-3 rounded-xl">
    <img :src="icon" alt="Icon" />
    <span class="flex-1 font-medium">{{ category }}</span>
    <div class="text-[#303B59] shrink-0 font-bold">{{ score }} <span class="opacity-50">/ 100</span>
    </div>
  </li>
</template>