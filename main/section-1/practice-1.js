'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
    var result = collectionA.filter(ele => collectionB.includes(ele))
    return result
}
