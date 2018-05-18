'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
    var result = collectionA.map(item => item.key).filter(ele => objectB.value.includes(ele))
    return result
}
