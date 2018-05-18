'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
    var result = collectionA.filter(ele => objectB.value.includes(ele))
    return result
}
