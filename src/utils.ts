import pako from "pako";

/**
 * 获取url参数
 * @param {String} variable
 * @return {String | Boolean}
 */
function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] === variable) {
      return pair[1];
    }
  }
  return false;
}

/**
 * 加密字符串解压
 * @param {String} b64Data
 */
function unZip(b64Data) {
  var strData = atob(b64Data);
  // Convert binary string to character-number array
  var charData = strData.split("").map(function (x) {
    return x.charCodeAt(0);
  });
  // Turn number array into byte-array
  var binData = new Uint8Array(charData);
  // // unzip
  var data = pako.inflate(binData);
  // Convert gunzipped byteArray back to ascii string:
  strData = String.fromCharCode.apply(null, new Uint16Array(data));
  return strData;
}

/**
 * 延迟函数delay
 * @param {Number} ms
 */
const delay = (ms) => new Promise((resolve, reject) => setTimeout(resolve, ms));

/**
 * 去除字符串的html代码
 * @param {String} str
 */
const removehtml = (str = "") => str.replace(/<[\/\!]*[^<>]*>/gi, "");

export default {
  getQueryVariable,
  unZip,
  delay,
  removehtml,
};
