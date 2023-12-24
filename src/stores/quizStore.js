import { defineStore } from "pinia";

export const useQuizStore = defineStore("quiz", {
  state: () => ({
    score: 0,
  }),
  actions: {
    setInitialScore() {
      this.score = 0;
    },
    incrementScore() {
      this.score += 1;
    },
  },
});
