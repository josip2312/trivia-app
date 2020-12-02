<template>
	<TheHeader />
	<router-view v-slot="{ Component }">
		<transition name="fade" mode="out-in">
			<component :is="Component" />
		</transition>
	</router-view>
	<TheFooter />
</template>


<script>
import axios from "axios";

import TheHeader from "@/components/layout/TheHeader.vue";
import TheFooter from "@/components/layout/TheFooter.vue";

export default {
	components: { TheHeader, TheFooter },

	async created() {
		const storedToken = localStorage.getItem("sessionToken");

		const expiryTime = localStorage.getItem("expiry");
		const date = new Date().getTime();
		if (!storedToken || expiryTime < date) {
			const { data } = await axios.get(
				`${process.env.VUE_APP_HELPER_URL}/api_token.php?command=request`
			);

			const sessionToken = data.token;
			localStorage.setItem("sessionToken", sessionToken);
			const date = new Date().getTime();
			const expiryTime = date + 21600000; //6 hours;
			localStorage.setItem("expiry", expiryTime);
		}
	},
};
</script>

<style lang="scss">
@import "@/sass/main.scss";
.fade-enter-active,
.fade-leave-active {
	transition: opacity 250ms ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
#app {
	min-height: 100vh;
	display: flex;
	flex-direction: column;
}
</style>
