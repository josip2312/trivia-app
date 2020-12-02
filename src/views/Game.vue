<template>
	<div class="container">
		<h2 v-if="!isLoading && error === null" class="heading-2">
			{{ questionCategory }}
		</h2>

		<div v-if="isLoading" class="loading">Loading...</div>
		<div v-if="error !== null" class="error">
			{{ error }}
		</div>

		<section class="game" v-if="!isLoading && error === null">
			<div class="question-number">
				{{ questionNumber + 1 }} / {{ questions }}
			</div>
			<div v-html="singleQuestionText" class="question"></div>
			<transition name="fade" mode="out-in">
				<div class="answers">
					<Answer
						v-for="answer in answers"
						:key="answer"
						:answer="answer"
						@click="submitAnswer(answer)"
					/>
				</div>
			</transition>
		</section>

		<!-- modals after question and end -->
		<QuestionAnsweredModal
			:isModalVisible="isModalVisible"
			:isAnswerCorrect="isAnswerCorrect"
			:correctAnswer="correctAnswer"
			@next-question="nextQuestion"
			@close="isModalVisible = false"
		/>
		<GameEndModal
			:isGameEndModalVisible="isGameEndModalVisible"
			:score="score"
			:questions="questions"
			@close="isGameEndModalVisible = false"
		/>
	</div>
</template>

<script>
import useFetch from "@/hooks/useFetch";

import { computed, ref } from "vue";
import { useRoute } from "vue-router";

import QuestionAnsweredModal from "@/components/modals/QuestionAnsweredModal.vue";
import GameEndModal from "@/components/modals/GameEndModal.vue";
import Answer from "@/components/Answer.vue";

export default {
	name: "Game",
	components: { QuestionAnsweredModal, GameEndModal, Answer },

	setup() {
		const route = useRoute();
		const { id, difficulty, questions } = route.params;

		console.log(id, difficulty, questions);
		const sessionToken = localStorage.getItem("sessionToken");
		const url = ref(
			`${process.env.VUE_APP_API_URL}?amount=${questions}&category=${id}&difficulty=${difficulty}&token=${sessionToken}`
		);

		const questionNumber = ref(0);
		const score = ref(0);
		const isModalVisible = ref(false);
		const isGameEndModalVisible = ref(false);
		const isAnswerCorrect = ref(false);

		const fetchedCategoryData = useFetch(url);

		const isLoading = computed(() => fetchedCategoryData.isLoading);
		const error = computed(() => fetchedCategoryData.error);

		const allQuestions = computed(() => fetchedCategoryData.data.results);

		const questionCategory = computed(() => {
			if (allQuestions.value) return allQuestions.value[0].category;
		});

		const singleQuestionText = computed(() => {
			if (singleQuestionData(questionNumber.value)) {
				return singleQuestionData(questionNumber.value).question;
			}
		});

		const answers = computed(() => {
			if (singleQuestionData(questionNumber.value)) {
				return [
					correctAnswer.value,
					...singleQuestionData(questionNumber.value)
						.incorrect_answers,
				];
			}
		});

		const correctAnswer = computed(() => {
			if (singleQuestionData(questionNumber.value)) {
				return singleQuestionData(questionNumber.value).correct_answer;
			}
		});

		const singleQuestionData = (index = 0) => {
			if (allQuestions.value) {
				return allQuestions.value[index];
			}
		};

		const submitAnswer = (answer) => {
			if (answer === correctAnswer.value) {
				isModalVisible.value = true;
				isAnswerCorrect.value = true;
				score.value++;
			} else {
				isModalVisible.value = true;
				isAnswerCorrect.value = false;
			}
		};
		const nextQuestion = () => {
			if (questionNumber.value < questions - 1) {
				questionNumber.value++;
				isModalVisible.value = false;
			} else {
				isModalVisible.value = false;
				isGameEndModalVisible.value = true;
			}
		};

		return {
			//data
			questionNumber,
			score,
			fetchedCategoryData,
			isModalVisible,
			isGameEndModalVisible,
			isAnswerCorrect,
			questions,

			//computed
			error,
			isLoading,
			questionCategory,
			allQuestions,
			singleQuestionText,
			answers,
			correctAnswer,

			//methods
			singleQuestionData,
			submitAnswer,
			nextQuestion,
		};
	},
};
</script>

<style lang="scss" scoped>
.container {
	padding-top: 12.5em;
	padding-bottom: 15em;
	min-height: 100vh;
}

.loading,
.error {
	text-align: center;
	font-size: 2.5rem;
	color: var(--font-paragraph);
}

.heading-2 {
	text-align: center;
	margin-bottom: 6rem;
	animation: appear 500ms ease-in-out;
	@include mq-min($v-10) {
		margin-bottom: 10rem;
	}
}
.game {
	animation: appear 500ms ease-in-out;
}
.question-number {
	text-align: center;
	font-size: 1.8rem;
	margin-bottom: 1rem;
}
.question {
	margin-bottom: 6rem;
	border-radius: var(--br);

	text-align: center;
	color: var(--font-primary);
	font-size: 2.2rem;
	font-weight: 500;

	max-width: 50rem;
	margin-left: auto;
	margin-right: auto;
}
.answers {
	max-width: 75rem;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 1.5rem;

	border-radius: var(--br);
}
</style>