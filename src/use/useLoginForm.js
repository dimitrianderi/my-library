import { useField, useForm } from 'vee-validate'
import { computed, ref, watch } from 'vue'
import * as yup from 'yup'

export function useLoginForm() {
    const { handleSubmit, isSubmitting, submitCount } = useForm()
    const MIN_PASS = 6
    const isErrorEmail = ref(false)
    const isErrorPass = ref(false)

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

    const onSubmit = handleSubmit((values) => {
        console.log(values)
    })

    watch(submitCount, (newValue) => {
        if (newValue > 0) {
            isErrorEmail.value = true
            isErrorPass.value = true
        }
    })

    watch([email, pass], ([newEmail, newPass], [oldEmail, oldPass]) => {
        submitCount.value = 0;

        isErrorEmail.value = newEmail !== oldEmail ? false : isErrorEmail.value;
        isErrorPass.value = newPass !== oldPass ? false : isErrorPass.value;
    });

    return {
        email,
        errorEmail: computed(() => isErrorEmail.value ? errorEmail.value : ''),
        pass,
        errorPass: computed(() => isErrorPass.value ? errorPass.value : ''),
        isSubmitting,
        onSubmit,
    }
}