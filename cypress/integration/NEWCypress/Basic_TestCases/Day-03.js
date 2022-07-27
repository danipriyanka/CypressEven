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
    it('TC-02 To test checkboxes using click method',()=>{
     cy.visit("https://www.ironspider.ca/forms/checkradio.htm")
     cy.get('[value="red"]').click().should('be.checked')
     cy.get('[value="yellow"]').click().should('be.checked')
   
    })
    it('TC-03 To test multiple checkboxes at a time',()=>{
     cy.visit("https://www.ironspider.ca/forms/checkradio.htm")
     cy.get('input[type="checkbox"]').each((el,i)=>{         //jquery
       
         cy.wrap(el).check().should('be.checked')         //Why we used wrap()
 
     })
           
    })
    it('TC-04 To test multiple checkboxes at a time',()=>{
     cy.visit("https://www.ironspider.ca/forms/checkradio.htm")
     cy.get('input[type="checkbox"]').check(["red","blue","orange","green","purple"]).should('be.checked')
     
     })
     it('TC-05 To test radio buttons',()=>{
         cy.visit("https://www.ironspider.ca/forms/checkradio.htm")
         cy.get('input[type="radio"]').first().should('be.checked')
         cy.get('input[type="radio"]').eq(1).click().should('be.checked')
         cy.get('input[type="radio"]').first().should('not.be.checked')
     
       })
       it('TC-06 To test radio buttons',()=>{
         cy.visit("https://www.ironspider.ca/forms/checkradio.htm")
         cy.get('input[type="radio"]').each((el)=>{
           cy.wrap(el).click().should('be.checked')
     
         })
        
       })
 
 }) 
 
 
 