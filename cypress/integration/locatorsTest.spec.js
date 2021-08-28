/// <reference types="cypress" />

describe ('Inline Form Suite',() => {

    it('Using the Grid Test', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        // Test Case: Check Email Text
        cy.contains('nb-card','Using the Grid')
          .find('[for="inputEmail1"]')
          .should('contain','Email')

        // Test Case: Check Password Text  
        cy.contains('nb-card','Using the Grid')
          .find('[for="inputPassword2"]') 
          .should('contain','Password') 
    })

    it('Horizontal Form Test', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
      
        // Identify Sign in Button
        cy.contains('[status="warning"]','Sign in') // Locator: Sign In Button

        // Horizontal Form
        cy.get('#inputEmail3')
          .parents('form')
          .find('button')
          .should('contain','Sign in')  // Locator: Sign In Button 
          .parents('form')
          .find('nb-checkbox')   // Locator: Checkbox
          .click()

        cy.contains('nb-card','Horizontal form')
          .find('[type="email"]')
          .type('test@email.com')  
    })

    it('Basic Form Test ', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        //NOTE: Cypress Chainable find Method
        cy.contains('nb-card','Basic form')
          .find('[for="exampleInputEmail1"]')
          .should('contain', 'Email')

          cy.contains('nb-card','Basic form')
          .find('[for="exampleInputPassword1"]')
          .should('contain', 'Password')  

        cy.get('#exampleInputEmail1')
          .parents('form')
          .find('button')
          .should('contain','Submit')  // Locator: Submit Button
          .parents('form')
          .find('nb-checkbox')         // Locator: Checkbox
          .click()

          cy.contains('nb-card','Basic form')
            .find('[placeholder="Email"]')
            .type('test@email.com')
    })

    it('Compare between different components', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        // Reuse some form:
        // NOTE: find is JQuery function
        // If Cypress format, cannot save into the context to variable
        // Result: HTML Form and save the result of function into parameter for the next function
        // Call then function, parameter is JQuery Object (Not the Cypress Object)
        // Visible to each of next nested function
        // Inside JQuery Format:
        // Cannot Use Cypress Assertion Library
        // Cannot use cypress functions like type, click 
        // Expect - Chai Assertion Library 
        cy.contains('nb-card', 'Using the Grid').then(gridForm => {
            const emailLabelGrid = gridForm.find('[for="inputEmail1"]').text()
            const passwordLabelGrid = gridForm.find('[for="inputPassword2"]').text()
            expect(emailLabelGrid).to.equal('Email') 
            expect(passwordLabelGrid).to.equal('Password') 
            
            cy.contains('nb-card','Basic form').then(basicForm => {
                const passwordLabelBasic = basicForm.find('[for="exampleInputPassword1"]').text()
                expect(passwordLabelGrid).to.equal(passwordLabelBasic)

                cy.wrap(basicForm)
                  .find('[for="exampleInputPassword1"]')
                  .should('contain','Password')

                // NOTE: 
                // wrap function 
                // Change from JQuery context to cypress context
            })
        })
    })

    it.only('Invoke Function', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        // Ex1:
        cy.get('[for="exampleInputEmail1"]').should('contain', 'Email address')
          .should('have.class','label')
          .and('have.text', 'Email address')

        // Ex2:
        cy.get('[for="exampleInputEmail1"]').then( label => {
            expect(label.text()).to.equal('Email address')
            expect(label).to.have.class('label')
            expect(label).to.have.text('Email address')
        })
    
        // Ex3:
        cy.get('[for="exampleInputEmail1"]').invoke('text').then( text => {
            expect(text).to.equal('Email address')
        })

        // Example1: Check for checkbox
        // cy.contains('nb-card','Basic form')
        // .find('nb-checkbox')
        // .click()
        // .find('.custom-checkbox')
        // .invoke('attr','class')
        // .should('contain', 'checked')

        // Example2: Check for checkbox
        // NOTE: Invoke Command: get text from webpage
        cy.contains('nb-card','Basic form')
          .find('nb-checkbox')
          .click()
          .find('.custom-checkbox')
          .invoke('attr','class')
          .then(classValue => {
              expect(classValue).to.contain('checked')
          })  
    })
})