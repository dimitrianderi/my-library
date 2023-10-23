import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useSuccessStore = defineStore('SuccessStore', () => {
    const isSuccess = ref('')

    const getSuccess = computed(() => isSuccess.value)

    const updateSuccess = (newValue) => isSuccess.value = newValue

    return {
        getSuccess,
        updateSuccess
    }
})