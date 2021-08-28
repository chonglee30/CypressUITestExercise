/// <reference types="cypress" />
describe("Traversing DOM elements in Cypress", () => {

  beforeEach(() => {
        cy.visit('http://webdriveruniversity.com/')
        cy.get("#data-table").invoke("removeAttr","target").click({force: true})
  })

   it("Get the children of DOM elements", () => {
        cy.get('.traversal-breadcrumb').children('.active').should('contain','Contact Us')
   });

   it("Get the closest ancestor unordered list", () => {
        cy.get('.traversal-badge').closest('ul').should('have.class','list-group')
   });

   // select all of individual elements
   it("Retrieve a specific element based on index", () => {
        cy.get('.traversal-drinks-list > *').eq(2).should('contain','Milk')
    });

    // select all of individual elements
    // filter based upon element that has class active
   it("Filter to retrieve DOM element that match a specific selector", () => {
        cy.get('.btn-group-toggle > *').filter('.active').should('contain','Button-1')
   });

   // Retrieve DOM element in a given selector
   // total numbers of links = 7
   it("Find to retrieve DOM elements of a given selector ", () => {
    cy.get('.traversal-pagination').find('li').find('a').should('have.length',7)
   });

   // First - retrieve the first DOM element within elements
   it("First - retrieve the first DOM element within elements", () => {
    cy.get('.traversal-table > tbody > tr > td').first().should('contain','Andy')
   })

   // Last - retrieve the last DOM element within elements
   it("Last - retrieve the last DOM element within elements", () => {
      cy.get('.traversal-table > tbody > tr > td').last().should('contain','Scott')
    })

    // nextAll - get all of the next sibling DOM elements within elements
    it("NextAll - retrieve all of the next sibling DOM element within elements", () => {
        cy.get('.traversal-drinks-list').contains('Tea').nextAll().should('have.length','3')
    })

    it("NextUntil - get all of the next sibling DOM elements within elements until another element", () => {
        cy.get('.traversal-drinks-list').contains('Coffee').nextUntil('#sugar')
    })

    // Not- exclude specifi element 
    // - all of the buttons excluding disabled button
    it("Not - remove DOM element(s) from the set of elements", () => {
        cy.get('.traversal-button-states > button').not('.disabled').should('not.have.class','disabled')
    })

    //Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    it("parent command to get parent DOM element of elements", () => {
        cy.get('.traversal-mark').parent().should('contain.text','Lorem ipsum dolor sit amet, consectetur adipiscing elit,')
    })

    it.only("Prev - get the previous sibling DOM element within elements", () => {
        cy.get('#sugar').prev().should('contain','Espresso')
    })


})