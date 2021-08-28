/// <reference types="cypress" />

// Lecture #255 - JSON - Practical Example2
describe("JSON Object2", () => {
    it("Json Object Example2", () => {
        const simpleObject = {"key1": "name1", "key2": "name2"}
        const simpleArray = ["one", "two", "three"]

        const arrayOfObjects = [{"key1": "value1"}, 
                                {"key2": "value2"},
                                {"key3": "value3"}]

        const dataTypes = {"name": "Ham Taylor", 
                          "age": 30}

        console.log(simpleObject.key1)
        console.log(simpleObject["key2"])
        console.log(simpleArray[2])

        console.log(arrayOfObjects[1].key2)
        console.log(arrayOfObjects[2].key3)

        console.log(dataTypes.name)
        console.log(dataTypes.["age"])
    })
})