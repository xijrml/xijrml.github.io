//const GameDownUrlIos = ""; // iOS
const GameDownUrlIos = "itms-services://?action=download-manifest&url=https://kh109gm.kkd666.com/xjby/xingji.plist"; // iOS
const GameDownUrlAndroid = "https://kh109gm.kkd666.com/xjby/xingjibuyu.apk"; // Android

function getDevice() {
    const u = navigator.userAgent;
    const AdrType = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1 || u.indexOf('android') > -1 || u.indexOf('linux') > -1 || u.indexOf('Windows') > -1;
    const iOSType = u.indexOf('iphone') > -1 || u.indexOf('ipad') > -1 || !!u.match(/AppleWebKit.*Mobile.*/) || u.indexOf('Mac OS X') > -1;
    if (AdrType) {
        return "android"
    } else if (iOSType) {
        return "ios"
    }
}

wechatOrQQBrowser();

function wechatOrQQBrowser() {
    const ua = window.navigator.userAgent.toLocaleLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger' || ua.match(/ QQ\//i) == " qq\/") {
        $('.mask').show();
    } else {
        $('.mask').show();
        deviceType();
    }
}

function deviceType() {
    const type = this.getDevice();
    if (type == "android") {
        window.location.href = GameDownUrlAndroid;
    } else if (type == "ios") {
        window.location.href = GameDownUrlIos;
    }
}