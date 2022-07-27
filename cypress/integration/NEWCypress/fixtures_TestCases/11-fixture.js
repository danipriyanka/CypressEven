describe('To ',function(){
    before(()=>{
        cy.fixture('details').then((data)=>{
            this.details=data
        })

    })

    it('TC-01 To use fixtures using before block',()=>{
        cy.visit("https://petstore.octoperf.com/actions/Account.action?newAccountForm=")
        cy.get('[name="username"]').type(this.details.userId)
        cy.get('[name="password"]').type(this.details.passward)
        // cy.get('[name="repeatedPassword"]').type(data.passward)
        // cy.get('[name="account.firstName"]').type(data.firstName)
        // cy.get('[name="account.lastName"]').type(data.lastName)
        // cy.get('[name="account.email"]').type(data.email)
        // cy.get('[name="account.phone"]').type(data.phone)

    })
   it('',()=>{
    cy.visit("https://petstore.octoperf.com/actions/Account.action?newAccountForm=")
    cy.get('[name="username"]').type(this.details.userId)


   })
})