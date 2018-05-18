'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    let collectionC = calculateAmount(collectionA)
    return selectCommon(collectionC,objectB)
}
function calculateAmount(collection){
    let result = []
    let value = []
    collection.map(ele => {
        if(ele.match('-')){
            result.push(split(ele))
        }else{
            if(!value.includes(ele)){
                let count = collection.filter(item => item === ele).length
                value.push(ele)
                result.push({key:ele,count:count})
            }
        }
    })
    return result
}
function split(ele) {
        let arr = ele.split('-')
        return {key:arr[0],count:Number(arr[1])}
}
function selectCommon(collectionC, objectB) {
    let result = []
    collectionC.map(item => {
        let key = item.key;
        let count = item.count;
        if(objectB.value.includes(key)){
            count = count - Math.floor(count/3)
        }
        result.push({key, count})
    })
    return result
}