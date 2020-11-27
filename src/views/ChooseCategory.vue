<template>
	<div class="container">
		<h2 class="heading-2">Categories</h2>
		<CategoryCardFilter
			v-model:filter="categoryFilter"
			:categories="categories"
			@clear-category-filter="categoryFilter = null"
		/>

		<div v-if="categoriesData.isLoading" class="loading">Loading...</div>
		<div v-if="categoriesData.error !== null" class="error">
			{{ categoriesData.error }}
		</div>
		<section
			v-if="!categoriesData.isLoading && categoriesData.error === null"
			class="categories spacing"
		>
			<CategoryCard
				v-for="category in filteredCategories"
				:key="category.id"
				:category="category"
			/>
		</section>
	</div>
</template>

<script>
import useFetch from "@/hooks/useFetch";
import CategoryCard from "../components/CategoryCard.vue";
import CategoryCardFilter from "../components/CategoryCardFilter.vue";

import { computed, ref } from "vue";

export default {
	name: "Categories",
	components: {
		CategoryCard,
		CategoryCardFilter,
	},
	setup() {
		const url = ref(`${process.env.VUE_APP_HELPER_URL}/api_category.php`);

		let categoriesData = { isLoading: false, error: null };
		let categories;
		let filteredCategories;
		const categoryFilter = ref(null);

		//request data is stored in local storage
		const storedCategories = JSON.parse(localStorage.getItem("categories"));
		if (!storedCategories) {
			categoriesData = useFetch(url);

			categories = computed(() => {
				localStorage.setItem(
					"categories",
					JSON.stringify(categoriesData.data.trivia_categories)
				);
				return categoriesData.data.trivia_categories;
			});

			filteredCategories = computed(() => {
				if (categoryFilter.value) {
					return categoriesData.data.trivia_categories.filter(
						(category) => {
							return category.name === categoryFilter.value;
						}
					);
				}
				return categoriesData.data.trivia_categories;
			});
		} else {
			categories = storedCategories;

			filteredCategories = computed(() => {
				if (categoryFilter.value) {
					return storedCategories.filter((category) => {
						return category.name === categoryFilter.value;
					});
				}
				return storedCategories;
			});
		}

		return {
			categoriesData,
			categories,
			filteredCategories,
			categoryFilter,
		};
	},
};
</script>

<style lang="scss" scoped>
.container {
	padding: 10em 0;
}
.categories {
	--spacer: 7.5rem;
	animation: appear 500ms ease-in-out;
}
.heading-2 {
	margin-bottom: 5rem;
}

.loading,
.error {
	font-size: 2.5rem;
	color: var(--font-paragraph);
}
</style>