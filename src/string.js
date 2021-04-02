export default {
    // 生成随机字符串
    randomString() {
        return Math.random().toString(36).substr(2);
    },
    // 首字母转大写
    capitalize: function (string) {
        return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
    }
};
