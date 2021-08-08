export default {
    /**
     * 金额大写转换
     * @param  {[type]} n [description]
     * @return {String}   [description]
     */
    "digitUppercase": function (n) {
        var fraction = ['角', '分'];
        var digit = [
            '零', '壹', '贰', '叁', '肆',
            '伍', '陆', '柒', '捌', '玖'
        ];
        var unit = [
            ['元', '万', '亿'],
            ['', '拾', '佰', '仟']
        ];
        var head = n < 0 ? '欠' : '';
        n = Math.abs(n);
        var s = '';
        var tmp = n + '',
            arr = tmp.split('.'),
            target = arr[1];
        if (target && target.length) {
            var jiao = parseInt(target[0]);
            if (jiao) {
                s += (digit[jiao] + fraction[0]);
            }
            var fen = parseInt(target[1]);
            if (fen) {
                s += (digit[fen] + fraction[1]);
            }
        }
        s = s || '整';
        n = Math.floor(n);
        for (var i = 0; i < unit[0].length && n > 0; i++) {
            var p = '';
            for (var j = 0; j < unit[1].length && n > 0; j++) {
                p = digit[n % 10] + unit[1][j] + p;
                n = Math.floor(n / 10);
            }
            s = p.replace(/(零.)*零$/, '')
                .replace(/^$/, '零') + unit[0][i] + s;
        }
        return head + s.replace(/(零.)*零元/, '元')
            .replace(/(零.)+/g, '零')
            .replace(/^整$/, '零元整');
    },
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
            if (typeof (val * 1) != 'number') {
                return '';
            }
            return val;
        }
    },
}