import {Utility} from "../../../support/utility"
///<reference types="cypress"/>
//Env var----Global variables
//Qa,staging,production-----------

describe('To learn env variables',()=>{
    it('TC-01',()=>{
        //  cy.visit("https://practicetestautomation.com/practice-test-login/") 
         cy.log(Cypress.config().baseUrl)
         cy.visit(Cypress.config().baseUrl +"/practice-test-login/")
         cy.log(Cypress.env('username'))
         cy.get('input[id="username"]').type(Cypress.env('username'))
         cy.get('#password').type(Cypress.env('passward'))
         cy.get('#submit').click()
    })
    it.only('TC-02',()=>{
        //  cy.visit("https://practicetestautomation.com/practice-test-login/")
        let util=new Utility()
        let url=util.getBaseUrl()
        cy.log(url)
        cy.log(Cypress.config().username)
        cy.log(Cypress.config().passward)
        
    })
})