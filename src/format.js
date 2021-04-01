export default {
    getIntegerValue(val) {
        if (!val && typeof val != 'number') {
            return '';
        }
        return Number(val).toFixed(0);
    },
    getNumberValue(val) {
        if (!val) {
            return '';
        } else {
            if (typeof val == 'string' && val.charAt(val.length - 1) == '.') {
                val.Substring(0, val.Length - 1);
            }
            if (typeof(val * 1) != 'number') {
                return '';
            }
            return val;
        }
    },
}