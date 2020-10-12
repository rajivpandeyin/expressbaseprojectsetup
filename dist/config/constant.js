"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONSTANT = void 0;
exports.CONSTANT = {
    APP_NAME: "Blog App",
    LIMIT: 10,
    MAX_LIMIT: 100,
    MAX_CHILDS: 4,
    MAX_ADD_MY_BOOK: 8,
    MAX_DB_INSERT_LIMIT: 100000,
    defaultRadius: 30,
    itemLimit: 10,
    MAX_UNIX_TIME_DAY: 86400000,
    FOURTY_FIVE_MIN_MILLISECOND: 2700000,
    SIXTY_MIN_MILLISECOND: 3600000,
    CONFIGURATION: {
        CLIENT: 1
    },
    CURRENCY: {
        US: "$"
    },
    REQUEST: {
        METHOD: {
            POST: "POST",
            DELETE: "DELETE",
            PATCH: "PATCH",
            PUT: "PUT",
            GET: "GET"
        },
        METHOD_NAME: {
            ADD: "add",
            EDIT: "edit",
            DELETE: "delete",
            BLOCK: "block",
            GET: "get",
            DETAIL: "detail"
        }
    },
    PERMISSION_MODULES: {
        DASHBOARD: "dashboard",
        USERS: "users",
    },
    ADMIN_ACTION_TYPE: {
        CHANGE_STATUS: 1,
        DELETE: 2
    },
    HTTP_STATUS_CODE: {
        OK: 200,
        AGAIN: 205,
        CREATED: 201,
        UPDATED: 202,
        AADHAR: 409,
        NO_CONTENT: 204,
        BAD_REQUEST: 400,
        UNAUTHORIZED: 401,
        PAYMENY_REQUIRED: 402,
        ACCESS_FORBIDDEN: 403,
        URL_NOT_FOUND: 404,
        METHOD_NOT_ALLOWED: 405,
        UNREGISTERED: 410,
        PAYLOAD_TOO_LARGE: 413,
        CONCURRENT_LIMITED_EXCEEDED: 429,
        CALL_NOT_ONGOING: 431,
        INTERNAL_SERVER_ERROR: 500,
        BAD_GATEWAY: 502,
        SHUTDOWN: 503,
    },
    HTTP_RESPONSED: {
        FAILED_API_RESPONSE: (status, msg = null) => {
            return {
                success: false,
                statusCode: status,
                message: msg || "Internal server error",
                result: {},
                time: 0
            };
        },
        INVALID_URL_RESPONSE: {
            success: false,
            statusCode: 404,
            message: "Invalid route",
            result: {},
            time: 0
        }
    },
    DB_MODEL_REF: {
        ADMIN: "admins",
        UUSERS: "users",
    },
    DEVICE_TYPE: {
        IOS: 1,
        ANDROID: 2,
        WEB: 3,
        All: 4
    },
    REGEX: {
        EMAIL: /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,63}$/,
        URL: /^(https?|ftp|torrent|image|irc):\/\/(-\.)?([^\s\/?\.#-]+\.?)+(\/[^\s]*)?$/i,
        ZIP_CODE: /^[0-9]{5}(?:-[0-9]{4})?$/,
        // PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]\S{8,15}$/,
        PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,40})/,
        NAME: /^[a-zA-Z0-9 ]*$/,
        // COUNTRY_CODE: /^\d{1,4}$/,
        COUNTRY_CODE: /^(\+\d{1,3}|\d{1,4})$/,
        MOBILE_NUMBER: /^\d{6,16}$/,
        OBJECT_ID: /^[0-9a-fA-F]{24}$/
    },
    USER_TYPES: {
        admin: 1,
        users: 2,
    },
    GENDER: {
        male: 1,
        female: 2,
        other: 3,
        any: 4
    },
    PAGINATION: {
        limit: 20,
        DIRECTION: {
            up: 1,
            down: 2
        }
    },
    PAGE: {
        ABOUT: 1,
        TERMS: 2,
        PRIVACY: 3
    },
    PAGE_CONTENT: {
        ABOUT: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        TERMS: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        PRIVACY: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
    },
    LANGUAGE: {
        ENGLISH: 1,
        JAPANESE: 2
    },
    CONFIG_CMS: {
        FAQ: {
            QUESTION: {
                MIN_LENGTH: 10,
                MAX_LENGTH: 500,
            },
            ANSWER: {
                MIN_LENGTH: 10,
                MAX_LENGTH: 2000,
            }
        },
        PAGE: {
            BODY: {
                MIN_LENGTH: 3,
                MAX_LENGTH: 150000,
            }
        }
    }
};
//# sourceMappingURL=constant.js.map