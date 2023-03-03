<script setup lang="ts">
const { data: scores, pending } = useLazyFetch('/api/scores')

const totalScore = computed(() => {
  if (!scores.value) return null
  return Math.floor(scores.value.reduce((acc, score) => acc + score.score, 0)/scores.value.length)
})
</script>

<template>
  <Head>
    <title>Frontend Mentor | Results summary component</title>
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  </Head>

  <div id="__layout" class="h-screen md:bg-[#ECF2FF] md:flex items-center justify-center">
    <main class="grid md:grid-cols-2 bg-white max-w-[736px] mx-auto w-full rounded-[32px] md:overflow-hidden md:shadow-[0px_30px_60px_rgba(61,_108,_236,_0.15);]">
      <div class="text-center bg-gradient-to-b from-[#7755FF] to-[#2F2CE9] p-6 rounded-b-3xl md:rounded-[32px] flex flex-col gap-6 md:gap-7 md:px-[54px] md:py-[38px]">
        <h1 class="text-[#CAC9FF] font-bold md:text-2xl md:mb-[7px]">Your result</h1>
        <div class="w-[140px] md:w-[200px] mx-auto rounded-full bg-gradient-to-b from-[#4D21C9] to-transparent aspect-square flex flex-col items-center justify-center">
          <span class="text-[56px] md:text-[72px] font-extrabold text-white">{{ totalScore ?? '~' }}</span>
          <p class="text-[#CAC9FF] opacity-50 font-bold md:text-lg">of 100</p>
        </div>
        <div v-if="pending" class="flex flex-col items-center">
          <div class="h-6 max-w-[5rem] w-full mb-2 bg-white/70 animate-pulse rounded-full" />
          <div class="h-6 max-w-[24rem] w-full bg-white/70 animate-pulse rounded-full" />
        </div>
        <div v-else>
          <strong class="font-bold text-2xl text-white">Great</strong>
          <p class="text-[#CAC9FF] font-medium w-[85%] mx-auto mt-2 md:mt-3.5">Your performance exceed 65% of the people conducting the test here!</p>
        </div>
      </div>
      <div class="container px-[30px] mx-auto space-y-6 py-6 md:px-10 md:py-[38px] md:space-y-7">
        <h2 class="text-[#303B59] text-lg font-bold md:text-2xl">Summary</h2>
        <div class="md:pb-3">
          <ScoreList v-if="scores" :items="scores" />
          <ScoreListSkeleton v-else-if="pending" />
        </div>
        <Button>Continue</Button>
      </div>
    </main>
  </div>
</template>

<style>
@font-face {
  font-family: "HankenGrotesk";
  src: url("./assets/fonts/HankenGrotesk-VariableFont_wght.ttf");
  font-weight: 125 950;
}

body {
  font-family: "HankenGrotesk", sans-serif;
}
</style>