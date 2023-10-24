import { useField, useForm } from 'vee-validate'
import { computed, ref, watch } from 'vue'
import * as yup from 'yup'
import { useAuthStore } from '../stores/AuthStore'
import { useRouter } from 'vue-router'

export function useRegForm() {
    const router = useRouter()
    const { handleSubmit, isSubmitting, submitCount } = useForm()
    const authStore = useAuthStore()
    const MIN_PASS = 6
    const MAX_NAME = 12
    const isErrorEmail = ref(false)
    const isErrorPass = ref(false)
    const isErrorName = ref(false)
    const isErrAuth = computed(() => authStore.getErrAuth);

    const { value: email, errorMessage: errorEmail } = useField(
        'email',
        yup
            .string()
            .trim()
            .email('aдрес почты введён некорректно')
            .required('заполните это поле')
    )
    const { value: pass, errorMessage: errorPass } = useField(
        'password',
        yup
            .string()
            .trim()
            .required('заполните это поле')
            .min(MIN_PASS, `в пароле должно быть минимум ${MIN_PASS} символов`)
    )
    const { value: name, errorMessage: errorName } = useField(
        'name',
        yup
            .string()
            .trim()
            .required('заполните это поле')
            .max(MAX_NAME, `имя должно быть не больше ${MAX_NAME} символов`)
    )

    const onSubmit = handleSubmit(async (values) => {
        try {
            await authStore.reg(values)
            router.push('/')
        } catch (e) { }
    })

    const clearErrAuth = () => {
        authStore.clearErrAuth()
    }

    watch(submitCount, (newValue) => {
        if (newValue > 0) {
            isErrorEmail.value = true
            isErrorPass.value = true
            isErrorName.value = true
        }
    })

    watch([email, pass], ([newEmail, newPass], [oldEmail, oldPass]) => {
        submitCount.value = 0;

        isErrorEmail.value = newEmail !== oldEmail ? false : isErrorEmail.value;
        isErrorPass.value = newPass !== oldPass ? false : isErrorPass.value;
    });

    return {
        email,
        errorEmail: computed(() => isErrorEmail.value ? (errorEmail.value || isErrAuth.value) : ''),
        pass,
        errorPass: computed(() => isErrorPass.value ? (errorPass.value || isErrAuth.value) : ''),
        name,
        errorName: computed(() => isErrorName.value ? (errorName.value || isErrAuth.value) : ''),
        isSubmitting,
        onSubmit,
        clearErrAuth
    }
}