'use strict';

module.exports = function countSameElements(collection) {
  let allValueCollection = allValue(collection);
  return summarize(allValueCollection)
}
function split(ele){
    if(ele.match('-')){
        let arr = ele.split('-')
        //return {key:arr[0],count:Number(arr[1])}
        let key = arr[0]
        let count = Number(arr[1])
        return {key,count}
    }
    if (ele.includes("[")) {
        let key = ele.charAt(0);
        let count = parseInt(ele.substring(2, ele.length));
        return {key,count}
    }
    if (ele.includes(":")) {
        let arr = ele.split(":");
        return {key: arr[0],count: Number(arr[1])};
    }
}
function allValue(collection) {
    let result = [];
    for (let item of collection) {
        if (item.length === 1) {
            result.push(item);
        } else {
            let {key, count} = split(item);
            for (var i = 0; i < count; i++) {
                result.push(key);
            }
        }
    }
    return result;
}
function summarize(collection) {
    let result = []
    let value = []
    collection.map(ele => {
        if(!value.includes(ele)){
            let count = collection.filter(item => item === ele).length
            value.push(ele)
            result.push({name:ele,summary:count})
        }
    })
    return result;
}