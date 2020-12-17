import axios from 'axios';
import { reactive, watch } from 'vue';

export default function useFetch(url) {
    const state = reactive({
        data: [],
        error: null,
        isLoading: false,
    });

    const fetchData = async () => {
        try {
            state.error = null;
            state.isLoading = true;
            const { data } = await axios.get(url.value);
            state.data = data;
            state.isLoading = false;
        } catch (error) {
            state.isLoading = false;
            state.error = 'Something went wrong';
            console.error(error);
        }
    };

    watch(url, fetchData, { immediate: true });

    return state;
}
