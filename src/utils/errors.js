const ERROR_CODES = {
    INVALID_LOGIN_CREDENTIALS: 'логин или пароль неверные',
    EMAIL_EXISTS: 'такой пользователь уже существует',
}

export const error = code => ERROR_CODES[code] || 'ошибка запроса'