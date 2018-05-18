'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
    var result = collectionA.filter(ele => collectionB[0].includes(ele))
    return result
}
