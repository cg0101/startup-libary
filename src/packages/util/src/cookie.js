export default {
    cookie: function (name, value, expires, path, domain, secure) {
        if (value == undefined) { //检索
            if (name == undefined) {
                return document.cookie.split(';');
            }

            var cookieName = encodeURIComponent(name) + '=';
            var cookieStart = document.cookie.indexOf(cookieName);
            var cookieValue = null;

            if (cookieStart > -1) {
                var cookieEnd = document.cookie.indexOf(';', cookieStart);
                cookieEnd === -1 && (cookieEnd = document.cookie.length);
                cookieValue = decodeURIComponent(document.cookie.substring(
                    cookieStart + cookieName.length, cookieEnd));
            }
            return cookieValue;
        }

        //设置
        var cookieText = encodeURIComponent(name) + '=' +
            encodeURIComponent(value);
        if (expires instanceof Date) {
            cookieText += ';expires=' + expires.toGMTString()
        }
        path && (cookieText += ';path=' + path);
        domain && (cookieText += ';domain=' + domain);
        secure && (cookieText += ';secure');
        document.cookie = cookieText;
    },
}