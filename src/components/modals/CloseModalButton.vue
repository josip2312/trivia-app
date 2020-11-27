<template>
	<button class="close-modal">
		<img src="@/assets/icons/xWhite.svg" alt="Close" />
	</button>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.close-modal {
	position: absolute;

	display: block;
	top: 1rem;
	right: 0.75rem;
	margin-top: 0;

	cursor: pointer;
	img {
		width: 3.5rem;
	}
}
</style>