import { useField } from 'vee-validate'
import { useForm } from 'vee-validate'
import * as yup from 'yup'
import { computed, ref, watch } from 'vue'

export function useCreateForm(fn) {
    const { handleSubmit, isSubmitting, submitCount } = useForm()

    const isErrorName = ref(false)
    const isErrorAuthor = ref(false)
    const isErrorGenre = ref(false)
    const isErrorPublisher = ref(false)
    const isErrorCover = ref(false)
    const isErrorPages = ref(false)
    const isErrorCirculation = ref(false)
    const isErrorYear = ref(false)
    const isErrorPrice = ref(false)
    const isErrorAmount = ref(false)

    const { value: title, errorMessage: errorName } = useField(
        'title',
        yup.string().trim().required('Введите название книги')
    )
    const { value: author, errorMessage: errorAuthor } = useField('author', yup.string().trim().required('Введите автора книги'))
    const { value: genre, errorMessage: errorGenre } = useField('genre', yup.string().trim().required('Выберите жанр книги'))
    const { value: publisher, errorMessage: errorPublisher } =
        useField('publisher', yup.string().trim().required('Выберите издательство'))
    const { value: cover, errorMessage: errorCover } = useField('cover', yup.string().trim().required('Выберите тип обложки'))
    const { value: pages, errorMessage: errorPages } = useField('pages', yup.string().trim().required('Введите количетсво страниц'))
    const { value: circulation, errorMessage: errorCirculation } =
        useField('circulation', yup.string().trim().required('Введите тираж книги'))
    const { value: year, errorMessage: errorYear } = useField('year', yup.string().trim().required('Введите год издания книги'))
    const { value: price, errorMessage: errorPrice } = useField('price', yup.string().trim().required('Введите стоимость книги'))
    const { value: amount, errorMessage: errorAmount } = useField('amount', yup.string().trim().required('Введите количетсво экземпляров'))

    const genre_arr = [
        { name: 'Классика', value: 'classic' },
        { name: 'История', value: 'history' },
        { name: 'Философия', value: 'philosophy' },
        { name: 'Поэзия', value: 'poetry' },
        { name: 'Фантастика', value: 'fiction' },
        { name: 'Приключения', value: 'adventure' },
    ]
    const cover_arr = [
        { name: 'Твёрдая', value: 'hard' },
        { name: 'Мягкая', value: 'soft' },
    ]
    const publisher_arr = [
        { name: 'Азбука', value: 'azbuka' },
        { name: 'Эксмо', value: 'eksmo' },
        { name: 'Аст', value: 'ast' },
    ]

    const onSubmit = handleSubmit(fn) 

    watch(submitCount, (newValue) => {
        if (newValue > 0) {
            isErrorName.value = true
            isErrorAuthor.value = true
            isErrorGenre.value = true
            isErrorPublisher.value = true
            isErrorCover.value = true
            isErrorPages.value = true
            isErrorCirculation.value = true
            isErrorYear.value = true
            isErrorPrice.value = true
            isErrorAmount.value = true
        }
    })

    watch(
        [
            title,
            author,
            genre,
            publisher,
            cover,
            pages,
            circulation,
            year,
            price,
            amount,
        ],
        (
            [
                newTitle,
                newAuthor,
                newGenre,
                newPublisher,
                newCover,
                newPages,
                newCirculation,
                newYear,
                newPrice,
                newAmount,
            ],
            [
                oldTitle,
                oldAuthor,
                oldGenre,
                oldPublisher,
                oldCover,
                oldPages,
                oldCirculation,
                oldYear,
                oldPrice,
                oldAmount,
            ]
        ) => {
            submitCount.value = 0

            isErrorName.value = newTitle !== oldTitle ? false : isErrorName.value
            isErrorAuthor.value = newAuthor !== oldAuthor ? false : isErrorAuthor.value
            isErrorGenre.value = newGenre !== oldGenre ? false : isErrorGenre.value
            isErrorPublisher.value = newPublisher !== oldPublisher ? false : isErrorPublisher.value
            isErrorCover.value = newCover !== oldCover ? false : isErrorCover.value
            isErrorPages.value = newPages !== oldPages ? false : isErrorPages.value
            isErrorCirculation.value = newCirculation !== oldCirculation ? false : isErrorCirculation.value
            isErrorYear.value = newYear !== oldYear ? false : isErrorYear.value
            isErrorPrice.value = newPrice !== oldPrice ? false : isErrorPrice.value
            isErrorAmount.value = newAmount !== oldAmount ? false : isErrorAmount.value
        }
    )

    return {
        title,
        author,
        circulation,
        year,
        genre,
        price,
        pages,
        amount,
        cover,
        genre_arr,
        cover_arr,
        publisher,
        publisher_arr,
        isSubmitting,
        errorName: computed(() => isErrorName.value ? errorName.value : ''),
        errorAuthor: computed(() => isErrorAuthor.value ? errorAuthor.value : ''),
        errorGenre: computed(() => isErrorGenre.value ? errorGenre.value : ''),
        errorPublisher: computed(() => isErrorPublisher.value ? errorPublisher.value : ''),
        errorCover: computed(() => isErrorCover.value ? errorCover.value : ''),
        errorPages: computed(() => isErrorPages.value ? errorPages.value : ''),
        errorCirculation: computed(() => isErrorCirculation.value ? errorCirculation.value : ''),
        errorYear: computed(() => isErrorYear.value ? errorYear.value : ''),
        errorPrice: computed(() => isErrorPrice.value ? errorPrice.value : ''),
        errorAmount: computed(() => isErrorAmount.value ? errorAmount.value : ''),
        onSubmit
    }
}