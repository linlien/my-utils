/**
 * 取两个值之间的随机数
 * @param {Number} min
 * @param {Number} max
 * @return {Number}
 */
function random(min, max) {
  if (arguments.length === 2) {
    return Math.floor(min + Math.random() * (max + 1 - min));
  } else {
    return null;
  }
}

export default {
  random,
};
