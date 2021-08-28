/// <reference types="cypress" />

import { isConditionalExpression } from "typescript"

describe('Array of objects Test', () => {
    it('Array of Objects Example', () => {
        const arrayOfObjects = [{"key1": "value1"}, 
                                {"key2": "value2"},
                                {"key3": "value3"}]
          
        // A. Operation
        // 1. Unshift
        const obj0 = {
            "key0": "value0"
        }
        arrayOfObjects.unshift(obj0)

        console.log(arrayOfObjects[0].key0)
        console.log(arrayOfObjects[1]["key1"])  
        console.log(arrayOfObjects[2].key2)   

        //arrayOfObjects.forEach(function(obj, index, array) {
            //console.log('Index:' + index + 'Value: '+obj)
          //  console.log(array)
        //})        

    })
})