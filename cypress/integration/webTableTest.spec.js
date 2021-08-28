/// <reference types="cypress" />

describe('Web Tables',() => {
    it.only('', () => {
        cy.visit('/')
        cy.contains('Tables & Data').click()
        cy.contains('Smart Table').click()

        // Ex1 Edit existing table value using table row and column
        // Find the Name: Larry and edit age 18 -> New Age Value
        cy.get('tbody').contains('tr', 'Larry').then(tableRow => {
            const NEW_AGE = 25
            cy.wrap(tableRow).find('.nb-edit').click()
            cy.wrap(tableRow).find('[placeholder="Age"]').clear().type(NEW_AGE)
            cy.wrap(tableRow).find('.nb-checkmark').click()
            // Find the age By Index number
            cy.wrap(tableRow).find('td').eq(6).should('contain', NEW_AGE)
        })

        // Ex2: Add New Value and Verify added values
        cy.get('thead').find('.nb-plus').click();
        cy.get('thead').find('tr').eq(2).then( insertTableRow => {
            cy.wrap(insertTableRow).find('[placeholder="First Name"]').type('Chong S.')
            cy.wrap(insertTableRow).find('[placeholder="Last Name"]').type('Lee')
            cy.wrap(insertTableRow).find('.nb-checkmark').click()
        })

        cy.get('tbody tr').first().find('td').then(insertedTableColumns => {
            cy.get(insertedTableColumns).eq(2).should('contain','Chong')
            cy.get(insertedTableColumns).eq(3).should('contain','Lee')
        })

        // Ex3: enter 20 then filter rows with 20
        /*
        cy.get('thead [placeholder="Age"]').type('20')
        cy.wait(500)
        cy.get('tbody tr').each( tableRow => {
            cy.wrap(tableRow).find('td').eq(6).should('contain', 20)
        })
        */

        // Ex4: iterate through age
        const age =[20, 30, 40, 200]

        cy.wrap(age).each( age => {
            cy.get('thead [placeholder="Age"]').clear().type(age)
            cy.wait(500)
            cy.get('tbody tr').each( tableRow => {
                if (age == 200) {
                    cy.wrap(tableRow).should('contain', 'No data found')
                } else {
                cy.wrap(tableRow).find('td').eq(6).should('contain', age)
                }
            })
        })

    })

})
