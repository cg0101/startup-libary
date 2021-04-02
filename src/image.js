export default {
    /**
     * 判断是否支持webp
     */
    isSupportWebp: (function () {
        var support = false,
            complete = false,
            img = new Image();
        img.onload = function () {
            complete = true;
            support = true;
            img = null;
        };
        img.onerror = function () {
            complete = true;
            support = false;
            img = null;
        };
        img.src = 'data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAsAAAABBxAREYiI/gcAAABWUDggGAAAADABAJ0BKgEAAQABABwlpAADcAD+/gbQAA==';
        return function () {
            if (complete) {
                return support;
            } else {
                return false;
            }
        };
    })()
}