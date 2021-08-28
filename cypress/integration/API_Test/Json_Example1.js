/// <reference types="cypress" />

// Lecture #254 - JSON - Practical Example1
describe("JSON Object1", () => {
    it ("Json Object Example1", () => {
        const exampleObject = { "key1": "John", "key2": "Smith"}
        const exampleArrayOfValues = ["Jack", "Brown", "Bo"]

        // Ex1: exampleObject
        cy.log(exampleObject["key1"])
        cy.log(exampleObject.key1)

        cy.log(exampleObject.key2)
        cy.log(exampleObject["key2"])

        // Ex2: exampleArrayOfValues
        cy.log(exampleArrayOfValues[1])
        cy.log(exampleArrayOfValues[2])

        const owner = {
            "name": "Lee",
            "Age": 32,
            "Friends": [
                {
                    "firstName":"Bo",
                    "lastName":"Jackson", 
                },
                {
                    "firstName":"Deon",
                    "lastName":"Sanders",
                }
            ]
        }

        cy.log(owner.name)
        cy.log(owner["Age"])
        cy.log(owner.Friends[1].firstName)
        cy.log(owner.Friends[1].lastName)
        cy.log(owner["Friends"][0].lastName)
        cy.log(owner["Friends"][0].firstName)

    })


})  