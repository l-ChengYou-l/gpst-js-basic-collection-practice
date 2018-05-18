'use strict';

module.exports = function countSameElements(collection) {
    let result = []
    let value = []
    collection.map(ele => {
        if(!value.includes(ele)){
            let count = collection.filter(item => item === ele).length
            value.push(ele)
            result.push({key:ele,count:count})
        }
    })
    return result
}
