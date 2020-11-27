<template>
	<transition name="fade" mode="out-in">
		<div class="overlay" v-if="isGameEndModalVisible">
			<div class="modal spacing">
				<h3 class="modal-title heading-3">Finished</h3>
				<p class="modal-paragraph">
					Your score is {{ score }} / {{ questions }}
				</p>
				<router-link :to="{ name: 'ChooseCategory' }" class="btn">
					Back to categories
				</router-link>
			</div>
		</div>
	</transition>
</template>

<script>
export default {
	name: "GameEndModal",

	props: {
		isGameEndModalVisible: {
			type: Boolean,
			default: false,
		},
		score: {
			type: Number,
			required: true,
		},
		questions: {
			type: String || Number,
			required: true,
		},
	},
};
</script>

<style lang="scss" scoped>
@import "@/sass/_modal";

.modal {
	&-paragraph {
		font-size: 2.2rem;
		span {
			font-weight: bold;
		}
	}
}
</style>