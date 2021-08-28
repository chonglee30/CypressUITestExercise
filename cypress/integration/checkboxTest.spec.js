describe('Modal & Overlays', () => {

    it.only('CheckBox Test', () => {
        cy.visit('/')
        cy.contains('Modal & Overlays').click()
        cy.contains('Toastr').click()

        // NOTE: Check Method:
        // Only Work with Input Elements with checkbox or radiobutton element type (not any other element types)
        // Can pick and check multiple checkboxes
        // NOTE1: if checkbox is already checked, check command will not uncheck the checkbox
        // only check if it was already unchecked.
        cy.get('[type="checkbox"]').check({force: true})
        // NOTE2: in order to uncheck the checkbox, use click method
        cy.get('[type="checkbox"]').eq(0).click({force: true})

    })
})