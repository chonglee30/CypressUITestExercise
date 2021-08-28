/// <reference types="cypress" />
describe('Checkbox Sites',() => {
    it('Uncheck checkbox', () => {
        cy.visit('http://webdriveruniversity.com/')
        // Redirect to the current page instead of new tab
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click({force:true})
        cy.get('#checkboxes > :nth-child(5) > input').uncheck().should('not.be.checked')  
    });

    it('Dropdown Lists Test', () => {
        cy.visit('http://webdriveruniversity.com/')
        // Redirect to the current page instead of new tab
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click({force:true})
       
        cy.get('#dropdowm-menu-1').select('c#')
        cy.get('#dropdowm-menu-2').select('testng').should('have.value','testng')
        cy.get('#dropdowm-menu-3').select('JQuery').contains('JQuery')
        
        cy.get('#dropdowm-menu-2').select('maven').should('have.value','maven')
        cy.get('#dropdowm-menu-2').select('TestNG').contains('TestNG')
    })
})