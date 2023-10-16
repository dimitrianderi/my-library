const ERROR_CODES = {
    INVALID_LOGIN_CREDENTIALS: 'логин или пароль неверные',
}

export const error = code => ERROR_CODES[code] || 'ошибка запроса'