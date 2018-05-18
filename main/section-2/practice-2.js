'use strict';

module.exports = function countSameElements(collection) {
    let result = []
    let value = []
    let arr = []
    collection.map(ele => {
        if(ele.includes('-')){
            arr = ele.split('-')
            result.push({key:arr[0],count:Number(arr[1])})
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
