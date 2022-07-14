///<reference types="cypress" />

//Checkboxes and radio buttons-----------

describe('To learn checkboxes and radiobuttons functionality',()=>{
   it('TC-01 To test checkboxes using check method',()=>{
    cy.visit("https://www.ironspider.ca/forms/checkradio.htm")
    cy.get('[value="red"]').check().should('be.checked')
    cy.get('[value="yellow"]').check().should('be.checked')
    cy.get('[value="blue"]').check().should('be.checked')
    cy.get('[value="orange"]').check().should('be.checked')
    cy.get('[value="green"]').check().should('be.checked')
    cy.get('[value="purple"]').check().should('be.checked')
   })
   it('TC-01 To test checkboxes using click method',()=>{
    cy.visit("https://www.ironspider.ca/forms/checkradio.htm")
    cy.get('[value="red"]').click().should('be.checked')
    cy.get('[value="yellow"]').click().should('be.checked')
  
   })
   it.only('TC-03 To test multiple checkboxes at a time',()=>{
    cy.visit("https://www.ironspider.ca/forms/checkradio.htm")
    cy.get('[type="checkbox"]').each((el)=>{
        let text=el.text()
        cy.log(text)
        cy.wrap(el).check().should('be.checked')    
    })
  
   })





})


