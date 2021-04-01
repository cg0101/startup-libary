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
    deepCloneByJSON(data) {
        if (data === undefined) {
            return undefined;
        }
        return JSON.parse(JSON.stringify(data))
    },


}