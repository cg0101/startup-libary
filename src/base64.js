export default {
    base64ToBin: function(str) {
        var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        var bitString = "";
        var tail = 0;
        for (var i = 0; i < str.length; i++) {
            if (str[i] != "=") {
                var decode = code.indexOf(str[i]).toString(2);
                bitString += (new Array(7 - decode.length)).join("0") + decode;
            } else {
                tail++;
            }
        }
        return bitString.substr(0, bitString.length - tail * 2);
    },
    getBase64Size: function(str) {
        return parseInt(this.base64ToBin(str).length / 8);
    },
}