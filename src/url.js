export default {
    // 将url和对象组合，生成url的键值对查询格式
    queryString(url, params) {
        let tmp = [];
        for (name in params) {
            tmp.push(name + '=' + window.encodeURIComponent(params[name]));
        }
        return url + (/\?/.test(url) ? '&' : '?') + tmp.join('&');
    },
    /**
  * [parseQuery 解析地址]
  * @param {[type:string] str [地址字符串]}
  */
    parseQuery(str) {
        var arr = str.replace('?', '').split('&'),
            obj = {};
        for (var i = 0; i < arr.length; i++) {
            var tmp = arr[i].split('=');
            obj[tmp[0]] = tmp[1];
        }
        return obj;
    },
}