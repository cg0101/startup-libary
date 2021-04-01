export default {
    clone(obj) {
        // Handle the simple types (string, number, boolean, undefined, null)
        if (obj === null || typeof obj !== 'object') return obj;
        var copy;

        // Handle Date
        if (obj instanceof Date) {
            copy = new Date();
            copy.setTime(obj.getTime());
            return copy;
        }

        // handle RegExp
        if (obj instanceof RegExp) {
            copy = new RegExp(obj);
            return copy;
        }

        // Handle Array
        if (obj instanceof Array) {
            copy = [];
            for (var i = 0, len = obj.length; i < len; i++)
                copy[i] = this.clone(obj[i]);
            return copy;
        }

        // Handle Object
        if (obj instanceof Object) {
            copy = {};
            copy.__proto__ = obj.__proto__;
            for (var attr in obj) {
                if (obj.hasOwnProperty(attr))
                    copy[attr] = this.clone(obj[attr]);
            }
            return copy;
        }

    },
    throttle: function (action, delay) {
        let last = 0;
        return function () {
            let curr = +new Date();
            if (curr - last > delay) {
                action.apply(this, arguments);
                last = curr;
            }
        };
    },
    deepClone(data) {
        return JSON.parse(JSON.stringify(data))
    },
    jsonParse: function (val, defJsonParseVal) {
        let valObj = null;
        if (val) {
            try {
                valObj = JSON.parse(val);
            } catch (error) {
                valObj = defJsonParseVal !== undefined ? defJsonParseVal : null;
            }
            return valObj;
        } else {
            if (defJsonParseVal) {
                return defJsonParseVal;
            }
            return {};
        }
    },
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