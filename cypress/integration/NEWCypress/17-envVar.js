
import {Utility} from '../../support/utility'
///<reference types="cypress"/>

describe("verify the login form",function(){
    it('verify the login for orange hrml',function(){
        //cy.visit('/index.php/auth/login')
        let baseUrl = Cypress.config().baseUrl
        let pass = Cypress.config().password
        // let username = Cypress.config().username
        // let dbUser = Cypress.config().dbUserName
        cy.log(baseUrl)
        // cy.visit(baseUrl)
         cy.log(pass)
        // cy.log(username)
    })

    it('verify the login for orange hrml',function(){
        let a = new Utility()
        let url = a.getBaseUrl()
        cy.visit(url)
    })

})