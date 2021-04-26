const DEV_IP = "http://172.16.0.178:8010";

const env = process.env.NODE_ENV;
const vueEnv = process.env;

export const baseURL = env === "development" ? DEV_IP : vueEnv.VUE_APP_IP;

export default {
  baseURL
};
