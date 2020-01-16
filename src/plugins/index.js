export default function install(Vue) {
  Vue.prototype.setStorage = setStorageAsync
  Vue.prototype.getStorage = getStorageAsync
}
// 本地缓存策略
async function getStorageAsync(key) {
  // reutrn 一个Promise
  return JSON.parse(await localStorage.getItem(key));
}

function setStorageAsync(key, value, callback) {
  let valueStr = JSON.stringify(value);
  localStorage.setItem(key, valueStr);
  // 获取一下
  getStorageAsync(key).then(res => {
    // 调用获取函数
    if (res) {
      // 如果res不是null
      callback && callback({
        code: 200,
        message: '存储成功!'
      })
    }
  })
}
// TODO