export const EMPTY_ROUTE = '/';
export const BASE_URL = '/v1/';
export const ID_ROUTE = '/:id';
export const TEST_NOTIFICATION_ROUTE = '/test-notification';
export const GET_EMPLOYEE_BY_ADMIN = '/:userId'

export const BASE_ROUTES = {
    HEALTH_CHECK: `${BASE_URL}healthcheck`,
    AUTH: `${BASE_URL}auth`,
    USERS: `${BASE_URL}users`,
    EMPLOYEE: `${BASE_URL}employee`,
    MEDIA: `${BASE_URL}media`,
    UPLOAD: `${BASE_URL}upload`,
    MASTER: `${BASE_URL}master`,
    MOOD: `${BASE_URL}mood`,
    DASHBOARD: `${BASE_URL}dashboard`,
    CAMPAIGN: `${BASE_URL}campaign`,
    NOTIFICATION: `${BASE_URL}notification`,
    NOTIFICATION_TOKEN: `${BASE_URL}notification-token`,
    USERDETAILS: `${BASE_URL}userdetails`,
    DOCUMENT: `${BASE_URL}document`,
    APPROVE: `${BASE_URL}approve`,
};
``;
export const ROUTES = {
    USER_ID: '/:userId',
    EMPLOYEE_ID: '/:employeeId',
    GET_EMPLOYEE_BY_ID: '/get/:id',
    CREATE_USER: '/createuser',
    PING: '/ping',
    TOKEN: '/token',
    OTP_INIT: '/otp/init',
    OTP_VERIFY: '/otp/verify',
    TOKEN_REFRESH: '/token/refresh',
    ID: '/:id',
    ADD: '/add',
    LIST: '/list',
    GET: '/get',
    TYPE: '/:type',
    UPDATE: '/update',
    GET_PREFIX: '/prefix',
    GET_MOOD: '/moods',
    GET_Date: '/:date',
    GET_BY_USER: '/get/:patientId',
    DEACTIVATE: '/deactivate/:id',
    GET_Media: '/allMediaList',
    CURRENT_USER: '/currentUser',
    GET_EXPERTISE: '/getExpertise',
    SET_PASSWORD: '/setPassword',
    UPDATE_PROFILE: '/updateProfile/:id',
    LOGOUT: '/logout',
    FORGOT_PASSWORD: '/forgot-password',
    GET_MEDIA_BY_CATEGORY: '/getMediaByCategory',
    DELETE: '/delete/:id',
    UPDATE_ORDERID: '/update-orderId',
    GET_MEDIA_BY_CATEGORY_GROUP: '/getMediaByCategoryGroup',
    GET_DOCTOR_LIST: '/getDoctorList',
    GET_USER_BY_ROLE_ID: '/getUserByRoleId/:roleId',
    GET_ALL_USER: '/allUsers',
    GET_ALL_USER_PAGE: '/allUsersPage',
    UPDATE_DOCUMENT: '/updateDocument/:id',
    GET_STATUS: '/isapprove',
};
