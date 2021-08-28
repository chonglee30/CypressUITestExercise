/// <reference types="cypress" />

describe('List and Dropdown Test', () => {
    it.only('Check selected drop down list and background Color', () => {
        cy.visit('/')

        // #1. Select each list individually 
        cy.get('nav nb-select').click()
        cy.get('.options-list').contains('Dark').click();
        cy.get('nb-layout-header nav').should('have.css','background-color','rgb(34, 43, 69)')  
        // NOTE: #222b45 && must have space between number

        // #2 Select each list dynamically
        cy.get('nav nb-select').then( dropdownList => {
            cy.wrap(dropdownList).click()

            // Select each option list
            cy.get('.options-list nb-option').each( (colorListItem, index) => {
                const colorItemText = colorListItem.text().trim() // get rid of space

                const colors = {
                    "Light": "rgb(255, 255, 255)",
                    "Dark" : "rgb(34, 43, 69)",
                    "Cosmic": "rgb(50, 50, 89)",
                    "Corporate": "rgb(255, 255, 255)"
                }

                cy.wrap(colorListItem).click()
                cy.wrap(dropdownList).should('contain', colorItemText)
                cy.get('nb-layout-header nav').should('have.css','background-color',colors[colorItemText])
                
                if (index <3) {    // Reason: Don't Click After the last Item 
                    cy.wrap(dropdownList).click()
                }
            })
        })
    })
})