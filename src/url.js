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
    // 转换url
    parseUrl: function (url) {
        try {
            var result = {};
            var anchor = document.createElement('a');
            anchor.href = url || '';
            _.each(
                [
                    'hash',
                    'host',
                    'hostname',
                    'href',
                    'origin',
                    'pathname',
                    'port',
                    'protocol',
                    'search'
                ],
                function (i) {
                    result[i] = anchor[i];
                }
            );
            if (!result.origin) {
                result.origin = [result.protocol, '//', result.hostname].join('');
            }
            anchor = null;
            return result;
        } catch (e) {}
        return {};
    },
    isAbsolutePath: function (path) {
        return /^data:|^(https?:)?\/\//i.test(path);
    }
};
