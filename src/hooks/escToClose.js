import { onMounted, onUnmounted } from 'vue';

export default function escToClose(closeModal) {
	onMounted(() => {
		window.addEventListener('keyup', closeModal);
	});

	onUnmounted(() => {
		window.removeEventListener('keyup', closeModal);
	});
}
