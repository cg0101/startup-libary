export default {
    //从客户端保存图片
    saveFileFromClient: function (fileName, data) {
        var saveLink = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
        saveLink.href = data;
        saveLink.download = fileName;

        var event = document.createEvent('MouseEvents');
        event.initMouseEvent('click', true, false,
            window, 0, 0, 0, 0, 0, false, false, false, false,
            0, null);
        saveLink.dispatchEvent(event);
    },
    /**
     * @param 字节转换函数
     * formatBytes[bytes:字节]
     */
    formatBytes: function (bytes) {
        if (bytes === 0) return '0 B';
        var k = 1024;
        var sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        var i = Math.floor(Math.log(bytes) / Math.log(k));
        return (bytes / Math.pow(k, i)).toFixed(2) + sizes[i];
    },
}