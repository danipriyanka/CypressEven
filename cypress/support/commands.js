// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('login',(url,username,passward)=>{
    cy.visit(url)
    cy.get('#user-name').type(username)
    cy.get('#password').type(passward)
    cy.get('#login-button').click()

  })
  Cypress.Commands.add('form',(firstname,lastname,email,comments)=>{
    cy.get('[name="first_name"]').type(firstname)
    cy.get('[name="last_name"]').type(lastname)
    cy.get('[name="email"]').type(email)
    cy.get('[name="message"]').type(comments)

   })

   require('@4tw/cypress-drag-drop')
   import 'cypress-file-upload';
   require('cypress-downloadfile/lib/downloadFileCommand')