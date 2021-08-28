/// <reference types="cypress" />

// Date Picker Test
// 1. Date Pick Test
describe('Date Picker Test',() => {

  // Ex1: Date Picker Test - provide property name: value 
  // NOTE1: User invoke function to get text from the webpage  
  it ('Fixed Date Test',() => {
    cy.visit('/')
    cy.contains('Forms').click()
    cy.contains('Datepicker').click()

    cy.contains('nb-card','Common Datepicker')
      .find('input').then(input => {
        cy.wrap(input).click() //input or [placeholder="Form Picker"]
        cy.get('nb-calendar-day-picker').contains('5').click()
        // property name is value
        cy.wrap(input).invoke('prop','value').should('contain','Oct 5, 2020')
     }) 
  })

  it.only('Dynamically Select Date Month & Day Test', () => {
    
    function selectDayFromCurrent(day) {
        let date = new Date()
        // Current Date of the month
        date.setDate(date.getDate() + day)
        let futureDay = date.getDate()
        let futureMonth = date.toLocaleString('default',{month: 'short'})
        let dateAssert = futureMonth+' '+futureDay +', '+date.getFullYear()

         cy.get('nb-calendar-navigation').invoke('attr','ng-reflect-date').then( dateAttribute => {
            if (!dateAttribute.includes(futureMonth)) {
                cy.get('[data-name="chevron-right"]').click();   
                selectDayFromCurrent(day)  // keep repeating - function can call itself        
            } else {
                cy.get('nb-calendar-day-picker [class="day-cell ng-star-inserted"]').contains(futureDay).click()
            }
         })   
         return dateAssert
    }
    
    cy.visit('/')
    cy.contains('Forms').click()
    cy.contains('Datepicker').click()

     cy.contains('nb-card','Common Datepicker')
       .find('input').then(input => {
       cy.wrap(input).click() //input or [placeholder="Form Picker"]
       let dateAssert = selectDayFromCurrent(30)   
       cy.wrap(input).invoke('prop','value').should('contain',dateAssert)
       cy.wrap(input).should('have.value', dateAssert)
       
    }) 

  })
})