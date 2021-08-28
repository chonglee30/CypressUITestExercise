/// <reference types="cypress" />
describe('Navigate Links Back and Forward',() => {
    it('Link redirect to the current page instead of new tab and back & forward ', () => {
        cy.visit('http://webdriveruniversity.com/')
        // Redirect to the current page instead of new tab
        cy.get('#contact-us').invoke('removeAttr','target').click({force:true})
        cy.url().should('include','contactus')

        cy.go('back')  // back to the homepage
        cy.reload()

        cy.go('forward')
        cy.url().should('include','contactus')  // forward to contactus page

        cy.go('back')
        cy.get('#login-portal').invoke('removeAttr','target').click({force:true})
        cy.url().should('include', 'Login-Portal')
        cy.go('back')

        cy.get('#to-do-list').invoke('removeAttr','target').click({force:true})
        cy.url().should('include','To-Do-List')
        cy.go('back')
        cy.reload()
    })
})