/**
 * 分割指定长度的元素数组
 * @param {Array} list
 * @param {Number} size
 * @param {Array} cacheList
 */
const listChunk = (list, size = 1, cacheList = []) => {
  const tmp = [...list];
  if (size <= 0) {
    return cacheList;
  }
  while (tmp.length) {
    cacheList.push(tmp.splice(0, size));
  }
  return cacheList;
};

/**
 * 获取数组交集
 * @param {Array} list
 * @param  {Array} args
 */
const intersection = (list, ...args) =>
  list.filter((item) => args.every((list) => list.includes(item)));

export default {
  listChunk,
  intersection,
};
