//检测设备平台和版本号：iOS/Android/PC
let ua = window.navigator.userAgent;
let device = {
    ios: false,
    android: false,
    pc: false,
    version: 0
};

let _android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
let _ios = ua.match(/(iPhone|iPod|iPad).*OS\s([\d_]+)/)

if (_android) {
    device.android = true;
    device.version = _android[2];

}else if (_ios) {
    device.ios = true;
    device.version = _ios[2].replace(/_/g, '.');
}else{
    device.pc = true;
}

const isFSBrowser = /FSBrowser/.test(ua);
device.isFSBrowser = isFSBrowser;

const isWxBrowser = ua.toLowerCase().indexOf('micromessenger') !== -1;
device.isWxBrowser = isWxBrowser;

const isYunZhiJia = /Qing\/.*;(iOS|iPhone|Android).*/.test(ua);
device.isYunZhiJia = isYunZhiJia;

export default device;
