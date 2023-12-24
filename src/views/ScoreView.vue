<script setup>
import { useQuizStore } from "@/stores/quizStore";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const quizStore = useQuizStore();
const score = quizStore.score;
const message = ref("");

if (score >= 4) {
  message.value = "Congratulations!";
}

const startOver = () => {
  router.push("/");
  quizStore.setInitialScore();
};
</script>
<template>
  <div
    class="rounded-2xl p-8 text-gray-300 bg-indigo-500 max-w-[700px] mx-auto w-full mt-32"
  >
    <div class="flex flex-col items-center">
      <h1 class="font-bold text-5xl mt-10">{{ message }}</h1>

      <h2 class="mt-12 text-3xl font-semibold">Your Score:</h2>
      <span class="text-[62px] font-bold">{{ score }}/5</span>
    </div>
    <button
      @click="startOver"
      class="w-full bg-white p-3 mt-10 rounded-lg font-semibold text-indigo-500 text-2xl"
    >
      Start Over
    </button>
  </div>
</template>
