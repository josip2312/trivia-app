<template>
	<transition name="fade" mode="out-in">
		<div class="overlay" v-if="isModalVisible">
			<div class="modal spacing">
				<h3 class="modal-title heading-3">
					Choose the number of questions
				</h3>
				<router-link
					:to="{
						name: 'Game',
						params: { id, difficulty, questions: 5 },
					}"
					class="choice"
				>
					5 questions
				</router-link>
				<router-link
					:to="{
						name: 'Game',
						params: { id, difficulty, questions: 10 },
					}"
					class="choice"
				>
					10 questions
				</router-link>
				<router-link
					:to="{
						name: 'Game',
						params: { id, difficulty, questions: 15 },
					}"
					class="choice"
				>
					15 questions
				</router-link>

				<CloseModalButton @click="$emit('close')" />
			</div>
		</div>
	</transition>
</template>

<script>
import CloseModalButton from "@/components/modals/CloseModalButton";
import escToClose from "@/hooks/escToClose";
export default {
	name: "NumberOfQuestionsModal",
	components: {
		CloseModalButton,
	},
	props: {
		isModalVisible: {
			type: Boolean,
			default: false,
		},
		id: {
			type: Number,
			required: true,
		},
		difficulty: {
			type: String,
			required: true,
		},
	},

	setup(props, { emit }) {
		const closeModal = (e) => {
			if (e.keyCode === 27) emit("close");
		};
		escToClose(closeModal);
	},
};
</script>

<style lang="scss" scoped>
@import "@/sass/_modal";

.modal {
	--spacer: 2rem;
}

.choice {
	padding: 1rem 2.5rem;
	border-radius: var(--br);

	transition: background-color 200ms ease-in-out;
	@include mq-max($v-8) {
		background-color: var(--secondary-400);
	}
	&:hover {
		background-color: var(--secondary-400);
	}
}
</style>