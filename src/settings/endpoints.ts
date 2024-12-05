const demoEndpoints = {
    GET_DEMO: ''
}

const authEndpoint = {
    SIGNIN: '/auth/login',
    FORGET_PASSWORD: '/auth/forgot-password',
    CHANGE_PASSWORD: '/auth/changing-password',
    LOGOUT: '/auth/logout',
    SIGNUP: '/auth/register-user',
    CONFIRM_EMAIL: '/auth/confirm-email',
    RESEND_EMAIL: '/auth/resend-email-confirmation',
    GOOGLE_AUTH: '/auth/login/google',
    UPDATE_PASSWORD: '/auth/update-password',
    REFRESH_ACCESS_TOKEN: '/auth/refresh-access-token',
}

export {
    demoEndpoints,
    authEndpoint
}