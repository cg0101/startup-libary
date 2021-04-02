export default {
    // 生成随机字符串
    randomString() {
        return Math.random().toString(36).substr(2);
    },
    // 首字母转大写
    capitalize: function (string) {
        return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
    },
    insertStr(source, start, newStr) {
        return source.slice(0, start) + newStr + source.slice(start);
    },
    removeStr(source, index) {
        return source.slice(0, index) + source.slice(index + 1);
    },
   trim: function (str) {
    return str.replace(/(^\s*)|(\s*$)/g, "");
  }
};
