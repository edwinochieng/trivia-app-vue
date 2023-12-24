<script setup>
import { useQuizStore } from "@/stores/quizStore";

const quizStore = useQuizStore();
const score = quizStore.score;
</script>
<template>
  <div class="max-w-[700px] mx-auto w-full mt-20">
    <span class="text-5xl font-semibold">{{ score }}</span>
  </div>
</template>
