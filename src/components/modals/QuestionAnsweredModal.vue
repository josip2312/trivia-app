<template>
	<transition name="fade" mode="out-in">
		<div class="overlay" v-if="isModalVisible">
			<div v-if="isAnswerCorrect" class="modal spacing">
				<div class="modal-icon">
					<img src="@/assets/icons/check.svg" alt="" />
				</div>
				<h3 class="modal-title heading-3">That's right!</h3>
				<button @click="$emit('next-question')" class="btn">
					Next question
				</button>
			</div>
			<div v-else class="modal spacing">
				<div class="modal-icon">
					<img src="@/assets/icons/x.svg" alt="" />
				</div>
				<h3 class="modal-title heading-3">Wrong, sorry</h3>
				<p class="modal-paragraph">
					The correct answer is
					<span>
						{{ correctAnswer }}
					</span>
				</p>
				<button @click="$emit('next-question')" class="btn">
					Next question
				</button>
			</div>
		</div>
	</transition>
</template>

<script>
export default {
	name: "QuestionAnsweredModal",

	props: {
		isModalVisible: {
			type: Boolean,
			default: false,
		},
		isAnswerCorrect: {
			type: Boolean,
		},
		correctAnswer: {
			type: String,
		},
	},
};
</script>

<style lang="scss" scoped>
@import "@/sass/_modal";

.modal {
	&-icon {
		img {
			width: 7.5rem;
		}
	}
	&-paragraph {
		span {
			font-weight: bold;
		}
	}
}
</style>