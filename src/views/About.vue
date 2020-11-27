<template>
	<section class="about container">
		<h2 class="heading-2">About</h2>
	</section>
</template>
<script>
export default {
	name: "About",
};
</script>

<style lang="scss" scoped>
.container {
	padding-top: 10em;
	padding-bottom: 15em;
	@include mq-min($v-10) {
		min-height: 100vh;
	}
}
</style>
