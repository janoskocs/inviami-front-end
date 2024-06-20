const { VITE_API_URL, VITE_API_VERSION } = import.meta.env;

export const GET_EVENT_URL = `${VITE_API_URL}/${VITE_API_VERSION}/event`;

export const LOGIN_EVENT_ADMIN = `${VITE_API_URL}/${VITE_API_VERSION}/administration/login`;

export const GET_EVENT_ADMIN = `${VITE_API_URL}/${VITE_API_VERSION}/administration`;
