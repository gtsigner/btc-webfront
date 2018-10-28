const config = {
    API_HOST: "",
    API_BASE: ""
};
const isProd = process.env.NODE_ENV === "production";
console.warn("it's godtoy debug");
/**
 * build 后的产品环境配置
 */
if (isProd === true) {
    //config.API_HOST = "";
}
/**
 * 获取语言配置
 * @param key
 * @returns {string | string}
 */
export const localRead = (key) => {
    return localStorage.getItem(key) || ''
}
export default config;
