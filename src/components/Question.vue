<script setup>
import { ref, computed } from "vue";
import { useQuizStore } from "@/stores/quizStore";
import { questions } from "@/data/questions";
import { RouterLink } from "vue-router";

const currentIndex = ref(0);
const selectedOption = ref(null);

const quizStore = useQuizStore();
const score = computed(() => quizStore.score);

const currentQuestion = computed(() => questions[currentIndex.value]);
const currentQuestionNumber = computed(() => currentIndex.value + 1);
const isLastQuestion = computed(
  () => currentIndex.value === questions.length - 1
);

const selectOption = (option) => {
  if (selectOption.value == null && !isCorrect()) {
    selectedOption.value = option.value;
    if (isCorrect()) {
      quizStore.incrementScore();
    }
  }
};

const isCorrect = () => {
  return selectedOption.value === currentQuestion.value.correctAnswer;
};

const nextQuestion = () => {
  if (selectedOption.value !== null) {
    currentIndex.value++;
    selectedOption.value = null;
  }
};
</script>

<template>
  <div class="max-w-[700px] mx-auto w-full rounded-xl bg-white p-6">
    <span class="text-lg font-semibold"
      >Question {{ currentQuestionNumber }}</span
    >
    <h1 class="my-3 text-4xl font-semibold">{{ currentQuestion.question }}</h1>

    <div class="mt-6">
      <div
        v-for="option in currentQuestion.options"
        :key="option.id"
        @click="selectOption(option)"
        :class="{
          'border-2 border-indigo-500 text-blue-500 font-semibold text-lg':
            selectedOption === option.value,
        }"
        class="p-2 rounded-lg bg-gray-200 my-4 cursor-pointer text-lg font-semibold text-gray-800"
      >
        {{ option.value }}
      </div>
    </div>
    <div class="mt-8 w-full">
      <button
        v-if="selectedOption !== null && !isLastQuestion"
        @click="nextQuestion"
        class="w-full bg-indigo-500 p-3 rounded-lg font-semibold text-white text-lg"
      >
        Next Question
      </button>

      <RouterLink
        v-else-if="selectedOption !== null && isLastQuestion"
        to="/score"
        class="mt-12 w-full bg-indigo-500 p-4 rounded-lg font-semibold text-white text-xl"
      >
        Go to Score
      </RouterLink>
    </div>
  </div>
</template>
