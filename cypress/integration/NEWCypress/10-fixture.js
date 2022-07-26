///<reference types="cypress" />
import details from '../../fixtures/details.json'
import {user} from '../../fixtures/detail'
  describe('To learn fixture',function(){
    Cypress.on('uncaught:exception',(err,runnable)=>{
        return false
    })
    it('TC-01 To fill form by data',()=>{
        cy.visit("https://petstore.octoperf.com/actions/Account.action?newAccountForm=")
        cy.get('[name="username"]').type('ppd')
        cy.get('[name="password"]').type('psk')
        cy.get('input[name="repeatedPassword"]').type('psk')
        cy.get('[name="account.firstName"]').type('Priya')
        cy.get('[name="account.lastName"]').type('Dani')
        cy.get('[name="account.email"]').type('Psk@gmail.com')
        cy.get('[name="account.phone"]').type('5646345454')
    })
    it('TC-02 To fill form by data',()=>{
        let obj={
            userId:"asd",
            passward:"pskjj",
            firstName:"Priya",
            lastName:"Dani",
            email:"psk@gmail.com",
            phone:866788887
        }
        ///obj.lastName
        ///obj[]
        cy.visit("https://petstore.octoperf.com/actions/Account.action?newAccountForm=")
        cy.get('[name="username"]').type(obj.userId)
        cy.get('[name="password"]').type(obj.passward)
        cy.get('[name="repeatedPassword"]').type(obj.passward)
        cy.get('[name="account.firstName"]').type(obj.firstName)
        cy.get('[name="account.lastName"]').type(obj.lastName)
        cy.get('[name="account.email"]').type(obj.email)
        cy.get('[name="account.phone"]').type(obj.phone)
    })
    it.only('TC-03 Using fixture',()=>{
        cy.fixture('details').then((data)=>{
            cy.log(data)
            cy.visit("https://petstore.octoperf.com/actions/Account.action?newAccountForm=")
            cy.get('[name="username"]').type(data.userId)
            cy.get('[name="password"]').type(data.passward)
            cy.get('[name="repeatedPassword"]').type(data.passward)
            cy.get('[name="account.firstName"]').type(data.firstName)
            cy.get('[name="account.lastName"]').type(data.lastName)
            cy.get('[name="account.email"]').type(data.email)
            cy.get('[name="account.phone"]').type(data.phone)
            
        })   
  })
  it.only('TC-04 Using fixture by import',()=>{   
        cy.visit("https://petstore.octoperf.com/actions/Account.action?newAccountForm=")
        cy.get('[name="username"]').type(details.userId)
        cy.get('[name="password"]').type(details.passward)
        cy.get('[name="repeatedPassword"]').type(details.passward)
        cy.get('[name="account.firstName"]').type(details.firstName)
        cy.get('[name="account.lastName"]').type(details.lastName)
        cy.get('[name="account.email"]').type(details.email)
        cy.get('[name="account.phone"]').type(details.phone)    
  })
  it.only('TC-05 Using fixture by import',()=>{   
    cy.visit("https://petstore.octoperf.com/actions/Account.action?newAccountForm=")
    cy.get('[name="username"]').type(user.userId)
    cy.get('[name="password"]').type(user.passward)
    cy.get('[name="repeatedPassword"]').type(user.passward)
    cy.get('[name="account.firstName"]').type(user.firstName)
    cy.get('[name="account.lastName"]').type(user.lastName)
    cy.get('[name="account.email"]').type(user.email)
    cy.get('[name="account.phone"]').type(user.phone)    
})

  }) 