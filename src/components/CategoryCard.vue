<template>
	<div class="category">
		<h3 class="name">
			{{ category.name }}
		</h3>
		<div class="choose-category">
			<button
				@click="chooseEasy({ id: category.id, difficulty: 'easy' })"
				class="easy"
			>
				Easy
			</button>
			<button
				@click="chooseMedium({ id: category.id, difficulty: 'medium' })"
				class="medium"
			>
				Medium
			</button>
			<button
				@click="chooseHard({ id: category.id, difficulty: 'hard' })"
				class="hard"
			>
				Hard
			</button>
		</div>
		<NumberOfQuestionsModal
			:isModalVisible="isModalVisible"
			:id="id"
			:difficulty="difficulty"
			@close="isModalVisible = false"
		/>
	</div>
</template>

<script>
import NumberOfQuestionsModal from "@/components/modals/NumberOfQuestionsModal";

export default {
	name: "Category",
	components: {
		NumberOfQuestionsModal,
	},
	props: {
		category: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			isModalVisible: false,

			id: 0,
			difficulty: "easy",
		};
	},
	methods: {
		chooseEasy(data) {
			this.isModalVisible = true;
			const { id, difficulty } = data;
			this.id = id;
			this.difficulty = difficulty;
		},
		chooseMedium(data) {
			this.isModalVisible = true;
			const { id, difficulty } = data;
			this.id = id;
			this.difficulty = difficulty;
		},
		chooseHard(data) {
			this.isModalVisible = true;
			const { id, difficulty } = data;
			this.id = id;
			this.difficulty = difficulty;
		},
	},
};
</script>

<style lang="scss" scoped>
.category {
	display: block;
	padding: 3rem 0;
	background-color: var(--secondary-300);
	border-radius: var(--br);

	font-size: 2.2rem;
	text-align: center;
	letter-spacing: 1px;
	font-weight: bold;

	transition: opacity 250ms ease-in-out;

	.name {
		font-size: 3.5rem;
		margin-bottom: 4rem;
	}
}
.choose-category {
	display: flex;
	align-items: center;
	max-width: 60rem;
	margin-left: auto;
	margin-right: auto;

	.easy,
	.medium,
	.hard {
		flex: 1;
		padding: 1rem 0.25rem;

		color: var(--font-secondary);
		font-size: 1.8rem;
		cursor: pointer;

		transition: opacity 200ms ease-in-out;
		&:hover {
			opacity: 0.8;
		}
		&:focus {
			outline: 3px solid var(--accent);
			outline-offset: 0.25rem;
		}
	}
	.easy {
		background-color: var(--easy);
	}
	.medium {
		background-color: var(--medium);
	}
	.hard {
		background-color: var(--hard);
	}
}
</style>