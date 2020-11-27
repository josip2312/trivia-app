<template>
	<div v-html="answer" class="answer"></div>
</template>

<script>
export default {
	name: "Answer",
	props: {
		answer: {
			type: String,
			required: true,
		},
	},
};
</script>

<style lang="scss" scoped>
.answer {
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;

	padding: 3rem 2rem;
	border-radius: var(--br);
	background-color: var(--primary-400);

	font-size: 2.25rem;
	font-weight: 800;
	text-align: center;
	cursor: pointer;

	transition: background-color 200ms ease-in-out;

	&:hover {
		background-color: var(--accent);
	}
}
</style>