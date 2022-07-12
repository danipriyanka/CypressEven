//Test Suite---What to test
describe('To learn Login Functionality',()=>{
//Test Cases ----How to Test
   it('TC-01 To test with valid Crendential',()=>{
     cy.visit("https://practicetestautomation.com/practice-test-login/")
     cy.get('input[id="username"]').type('student')
     //cy.get('#username').type('student')
     cy.get('#password').type('Password123')
     cy.get('#submit').click()
//Assertion ways---------------
     cy.get('h1[class="post-title"]').should('be.visible')
     cy.get('h1[class="post-title"]').should('exists')
     cy.get('h1[class="post-title"]').should('have.text','Logged In Successfully')
     cy.contains('Log out').should('be.visible')
   })
   it.only('TC-02 To test with invalid Username',()=>{
    cy.visit("https://practicetestautomation.com/practice-test-login/")
    cy.get('input[name="username"]').type('studemuhh')
    cy.get('input[type="password"]').type('Password123')
    cy.get('#submit').click()
    cy.get('#error').should('have.text','Your username is invalid!')  //exact text
    cy.get('#error').should('be.visible')
    cy.get('#error').should('contain','invalid!')  //substring
  })
  it.only('TC-03 To test with invalid passward',()=>{
    cy.visit("https://practicetestautomation.com/practice-test-login/")
    cy.get('input[name="username"]').type('student')
    cy.get('input[type="password"]').type('Password')
    cy.get('#submit').click()
   //Give assertion here-----
     


  })
})



