//Test Suite---What to test
describe('To learn Login Functionality',()=>{
//Test Cases ----How to Test
   it('To test with valid Crendential',()=>{
     cy.visit("https://practicetestautomation.com/practice-test-login/")
     cy.get('input[id="username"]').type('student')
     //cy.get('#username').type('student')
     cy.get('#password').type('Password123')
     cy.get('#submit').click()
//Assertion ways---------------
     cy.get('h1[class="post-title"]').should('be.visible')
     cy.get('h1[class="post-title"]').should('exists')
     cy.get('h1[class="post-title"]').should('have.text','Logged In Successfully')
   })
})



