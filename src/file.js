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
    /**
     * 获取文件类型
     * @param file
     * @param fullTest true表示进一步细分
     * @returns {string}
     */
    "getFileType": function (file, fullTest, moreType) {
        var fileType = "common",
            fileName = file.name.toLowerCase();
        if (/\.(?:tif|eps|png|gif|jpeg|jpg|dwg|ai|cdr|bmp|webp)$/.test(fileName)) {
            fileType = "jpg";
        } else if (/\.(?:doc|docx)$/.test(fileName)) {
            fileType = "doc";
        } else if (/\.(?:pdf)$/.test(fileName)) {
            fileType = "pdf";
        } else if (/\.(?:rar)$/.test(fileName)) {
            fileType = "rar";
        } else if (/\.(?:xls|xlsx|csv)$/.test(fileName)) {
            fileType = "xls";
        } else if (/\.(?:zip)$/.test(fileName)) {
            fileType = "zip";
        } else if (/\.(?:7z)$/.test(fileName)) {
            fileType = "zip";
        } else if (/\.(?:ppt|pptx)$/.test(fileName)) {
            fileType = "ppt";
        } else if (/\.(?:txt)$/.test(fileName)) {
            fileType = "txt";
        } else if (/\.(?:rm|rmvb|swf|avi|mov|wmv|mp4|mpg|mpeg|flv)$/.test(fileName)) {
            fileType = "mov";
        } else if (/\.(?:wav|mp3|acm|aif|aifc|aiff|au|amr)$/.test(fileName)) {
            fileType = "mp3";
        }
        if (fullTest) {
            if (/\.(?:png)$/.test(fileName)) {
                fileType = "png";
            } else if (/\.(?:gif)$/.test(fileName)) {
                fileType = "gif";
            }
        }
        // 文件上传 统计扩展名
        if (moreType) {
            if (/\.(?:bmp)$/.test(fileName)) {
                fileType = "bmp";
            } else if (/\.(?:html)$/.test(fileName)) {
                fileType = "html";
            } else if (/\.(?:exe)$/.test(fileName)) {
                fileType = "exe";
            } else if (/\.(?:apk)$/.test(fileName)) {
                fileType = "apk";
            } else if (/\.(?:dmg)$/.test(fileName)) {
                fileType = "dmg";
            } else if (/\.(?:app)$/.test(fileName)) {
                fileType = "app";
            } else if (/\.(?:msi)$/.test(fileName)) {
                fileType = "msi";
            } else if (/\.(?:psd)$/.test(fileName)) {
                fileType = "psd";
            } else if (/\.(?:docx)$/.test(fileName)) {
                fileType = "docx";
            } else if (/\.(?:xlsx)$/.test(fileName)) {
                fileType = "xlsx";
            } else if (/\.(?:pptx)$/.test(fileName)) {
                fileType = "pptx";
            } else if (/\.(?:mp3)$/.test(fileName)) {
                fileType = "mp3";
            } else if (/\.(?:mp4)$/.test(fileName)) {
                fileType = "mp4";
            }
        }
        return fileType;

    },
    /**
     * 文件大小格式化
     * @param  {[type]} byteSize [description]
     * @return {[type]}          [description]
     */
    "getFileSize": function (byteSize, radmon) {
        var v = 0,
            unit = "BYTE";
        radmon = radmon || 0;
        if (byteSize >= 1073741824) { //1G=1073741824 BYTE
            v = (byteSize / 1073741824).toFixed(2); //上大文件功能后，GB的强制改成精确到小数点后两位 －jinjy
            unit = "GB";
        } else if (byteSize >= 1048576) { //1M=1048576 BYTE
            v = (byteSize / 1048576).toFixed(radmon);
            unit = "MB";
        } else if (byteSize >= 1024) {
            v = (byteSize / 1024).toFixed(radmon);
            unit = "KB";
        } else {
            v = byteSize;
            unit = "B";
        }
        return v + unit;
    },
}