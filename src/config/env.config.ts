export const JWT_ACCESS_TOKEN_EXPIRY_SECONDS = Number(
    process.env.JWT_ACCESS_TOKEN_EXPIRY_SECONDS
);
export const IS_NODE_ENV = String(process.env.IS_NODE_ENV);
export const JWT_REFRESH_TOKEN_EXPIRY_SECONDS = Number(
    process.env.JWT_REFRESH_TOKEN_EXPIRY_SECONDS
);
export const AUTH_OTP_ENC_KEY = String(process.env.AUTH_OTP_ENC_KEY);
export const AUTH_ENC_ALGO = String(process.env.AUTH_ENC_ALGO);
export const AUTH_OTP_EXPIRY_SECONDS = Number(
    process.env.AUTH_OTP_EXPIRY_SECONDS
);
export const AUTH_TOKEN_EXPIRY = Number(process.env.AUTH_TOKEN_EXPIRY)
export const {
    JWT_ISSUER,
    JWT_SECRET_FOR_ACCESS_TOKEN,
    JWT_SECRET_FOR_REFRESH_TOKEN,
    AUTH_ENC_IV,
    TWILIO_ACCOUNT_SID,
    TWILIO_AUTH_TOKEN,
    TWILIO_PHONE_NUMBER
} = process.env;
