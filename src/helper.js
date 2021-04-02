let helper = {};


helper.clone = function (obj) {
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

};
helper.throttle = function (action, delay) {
    let last = 0;
    return function () {
        let curr = +new Date();
        if (curr - last > delay) {
            action.apply(this, arguments);
            last = curr;
        }
    };
};
helper.deepCloneByJSON = function (data) {
    if (data === undefined) {
        return undefined;
    }
    return JSON.parse(JSON.stringify(data))
};


helper.filter = function (collection, test) {
    var arr = [];
    helper.each(collection, function (el, index) {
        if (test(el, index)) {
            arr.push(el);
        }
    });
    return arr;
};
helper.each = function (collection, iterator) {
    if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++)
            iterator(collection[i], i, collection);
    } else if (collection instanceof Object) {
        for (var key in collection)
            iterator(collection[key], key, collection);
    } else if (collection === null) {
        return collection;
    }
};
helper.map = function (collection, iterator) {
    var arr = [];
    helper.each(collection, function (el, index) {
        arr.push(iterator(el, index));
    });
    return arr;
};
helper.pluck = function (collection, key) {
    return helper.map(collection, function (obj) {
        return obj[key];
    });
};

helper.indexOf = function (array, target) {
    var result = -1;
    helper.each(array, function (el, index) {
        if (el === target && result === -1) {
            result = index;
        }
    });
    return result;
};

//  浅拷贝
helper.extend = function (obj) {
    helper.each(arguments, function (extendObj) {
        for (var key in extendObj)
            obj[key] = extendObj[key];
    });
    return obj;
};

helper.isUndefined = function (obj) {
    return obj === void 0;
};

helper.isNull = function(obj) {
    return obj === null;
};

helper.isNil = function(obj){
    return helper.isUndefined(obj) || helper.isNull(obj);
}
helper.indexOf = function (array, target) {
    var result = -1;
    helper.each(array, function (el, index) {
        if (el === target && result === -1) {
            result = index;
        }
    });
    return result;
};

helper.sortBy = function (collection, iterator) {
    var isString = typeof iterator === 'string';
    return collection.sort(function (x, y) {
        return isString ? x[iterator] - y[iterator] : iterator(x) - iterator(y);
    });
};

helper.find = function (collection, test) {
    for (let i = 0; i < collection.length; i++) {
        if (test(collection[i], i)) {
            return collection[i];
        }
    }
};

helper.isObject = function(obj) {
    var type = typeof obj;
    return obj && (type === 'object' || type === 'function') || false;
};

helper.isEmptyObject = function(obj){
    for(let i in obj){
        i;
        return false;
    }
    return true;
}

export default helper;
