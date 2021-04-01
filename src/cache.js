export default {
    cache: {

    },
    /**
      * [setCache 设置缓存]
      * @param {[type]} key        [缓存标示]
      * @param {[type]} val        [缓存值]
      * @param {[type]} expireTime [过期时间]
      */
    setCache(key, val, expireTime) {
        this.cache[key] = {
            val: val,
            expireTime: expireTime
        }
    },
    /**
     * [getCache 获取缓存]
     * @param  {[type]} key [缓存标示]
     * @return {[type]}     [缓存值]
     */
    getCache(key) {
        let cacheObj = this.cache[key];
        if (cacheObj) {
            if (cacheObj.expireTime && cacheObj.expireTime < new Date().getTime()) {
                return;
            } else {
                return cacheObj.val;
            }
        }
    }
}