//form Filling Functionality------
describe('To learn Contact Us form',()=>{
    it('Tc-01 To learn Contact Us form',()=>{
      cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
      cy.get('[name="first_name"]').type('Priyanka')
      cy.get('[name="last_name"]').type('Dani')
      cy.get('[name="email"]').type('psk@gmail.com')
      cy.get('[name="message"]').type('Done')
      cy.get('[value="SUBMIT"]').click()
      cy.get('#contact_reply > h1').should('be.visible')
    })
    it('Tc-02 To learn Contact Us form',()=>{
     cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
     cy.get('[name="first_name"]').type('Priyanka')
     cy.get('[name="last_name"]').type('Dani')
     cy.get('[name="email"]').type('pskgmail.com')
     cy.get('[name="message"]').type('Done')
     cy.get('[value="SUBMIT"]').click()
     cy.get('body').should('contain','Error: Invalid email addres')
     let url=cy.url()
     cy.log(url)
     cy.url().should('contain','/contact_us.php')
   })
   it('Tc-03 To learn Contact Us form',()=>{
     cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
     //To check with reset button
   })
   it('Tc-04 To learn Contact Us form',()=>{
     cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
     //submit with blank
   })
 
 })
 