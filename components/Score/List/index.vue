<script setup lang="ts">
import { Score } from "~/types";

defineProps<{
  items: Score[]
}>()
</script>

<template>
  <ul class="space-y-4">
    
    <ScoreListItem v-for="item in items" :key="item.category" v-bind="item" :class="item.additionnalClasses" />
    
  </ul>
</template>