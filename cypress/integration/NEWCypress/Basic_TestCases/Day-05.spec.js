
describe('To learn dropdown functionality',()=>{
    Cypress.on('uncaught:exception',(err,runnable)=>{
        return false
    })

   it('Tc-01 To test dropdown',()=>{
      cy.visit("https://www.lonavalacab.com/")
      cy.get('[id="package"]').select('Waterfall Special').should('have.value','Waterfall Special')
      cy.get('[id="car"]').select('7 Seater').should('have.value','2')
   })
   it('Tc-02 To test dropdown',()=>{
    cy.visit("https://www.lonavalacab.com/")
    let plzSelect=["Waterfall Special","7 Seater"]
    cy.get('[class="form-control tm-select"]').each((el,i)=>{
      
       cy.wrap(el).select(plzSelect[i]).should('contain',plzSelect[i])

    })
 })
 it('Tc-03 To test dynamic dropdown',()=>{
    cy.visit("https://paytm.com/train-tickets")
    cy.get('[id="text-box"]').first().click()
    cy.get('[class="_16Y_"] ._3ewH ._3sXO').each((el)=>{
        
         let stat=el.text()
         cy.log(stat)

       if(stat=="Delhi- All Stations") {
        cy.wrap(el).click()
       } 
    })

})
it('Tc-04 To test dynamic dropdown',()=>{
    cy.visit("https://paytm.com/train-tickets")
    cy.get('[id="text-box"]').first().click()
    cy.get('[class="_16Y_"] ._3ewH ._3sXO').each((el)=>{   //jquery
         let stat=el.text()
         cy.log(stat)

       if(stat=="Delhi- All Stations") {
        cy.wrap(el).click()          //click, should., type
       } 
    })

})
it('Tc-05 To test dependent dropdown',()=>{
    cy.visit("https://www.coderglass.com/jquery/demo/country-state-city-dropdown/")
    cy.get('#country').select('India')
    cy.get('#state').select('Maharashtra').then((el)=>{
        cy.get('#city').select('Nagpur').should('contain','Nagpur')

    })
  
})

})