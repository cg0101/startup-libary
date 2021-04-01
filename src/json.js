export default {
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
    jsonParsePlus: function(str) {
        let type = typeof str;
        if (type == 'object') {
            return str;
        } else if (type == 'string') {
            try {
                let val = JSON.parse(str);
                if (typeof val == 'object') {
                    return val;
                } else {
                    return {};
                }
            } catch (e) {
                console.log(e);
                return {};
            }
        } else {
            return {};
        }
    },
}