/// <reference types="cypress" />

describe('Radio Button and Checkbox Test', () => {
  // Ex1: Radio Button Test
  // 2. Radio Button Test
  it.only('Radio Button Test', () => {
    cy.visit('/')
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()

    cy.contains('nb-card', 'Using the Grid')
      .find('[type="radio"]').then(radioButtons => {
        // radioButtons is JQeury
        cy.wrap(radioButtons)
          .first()
          .check({force: true})
          .should('be.checked')

        cy.wrap(radioButtons)
          .eq(1)  // Index Use to select 2nd item
          .check({force: true})

        cy.wrap(radioButtons)
          .first()
          .should('not.be.checked')  

        cy.wrap(radioButtons)
          .eq(2)          // 2nd Index
          .should('be.disabled')  
      })
  })
})