/// <reference types="cypress" />
describe('test',() => {
    it('Test to handle the execution order', () => {
        cy.visit('https://automationteststore.com/')
        cy.get("a[href$='contact']").click().then(function(txtContact) {
           console.log("Clicked Text: "+txtContact.text())
        })
    })

    it('Length and Title Check',() => {
        cy.visit('https://automationteststore.com/')
        cy.get(".thumbnail").its('length').should('eq',16)
        cy.get(".thumbnail .productcart").eq(0).invoke('text').as('productCart')
        cy.get('@productCart').should('eq','Add to Cart')
    })
})