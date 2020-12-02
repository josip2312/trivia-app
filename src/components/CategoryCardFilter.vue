<template>
	<div class="filter">
		<select
			name="select-category"
			class="select-category"
			id="select-category"
			@change="$emit('update:filter', $event.target.value)"
		>
			<option
				v-for="category in categories"
				:key="category.id"
				class="select-option"
			>
				{{ category.name }}
			</option>
		</select>
		<button @click="$emit('clear-category-filter')" class="btn clear">
			Clear
		</button>
	</div>
</template>

<script>
export default {
	name: "CategoryFilter",

	props: {
		categories: {
			type: Array,
			default: () => [],
		},
		filter: {
			type: String || null,
		},
	},
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped>
.filter {
	display: flex;
	align-items: center;
	margin-bottom: 6rem;
}
.select-category {
	width: 100%;
	padding: 1.5rem 2.5rem;
	border: none;
	background-color: var(--secondary-200);

	color: var(--font-primary);
	border-radius: var(--br);
	font-size: 1.8rem;

	margin-right: 1.5rem;
	cursor: pointer;

	&:focus {
		outline: 2px solid var(--accent);
	}
}
</style>