const ERROR_CODES = {
    INVALID_LOGIN_CREDENTIALS: 'логин или пароль неверные',
}

export function error (code) {
    return ERROR_CODES[code] || 'ошибка запроса';
}