/// <reference types="cypress" />
describe('Checkbox Sites',() => {
    it('Select auto complete list', () => {
        cy.visit('http://webdriveruniversity.com/')
        // Redirect to the current page instead of new tab
        cy.get('#autocomplete-textfield').invoke('removeAttr','target').click({force:true})
        cy.get('#myInput').type('c')

        cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
            const product = $el.text();
            const productToSelect = 'Chicken'

            if (product === productToSelect) {
                $el.click();
                cy.get('#submit-button').click()
                cy.url().should('include', productToSelect)
            }
        })
    });
})