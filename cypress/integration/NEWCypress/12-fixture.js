describe('To learn fixtures ',function(){
    // before(()=>{
    //     cy.fixture('detail').then((data)=>{
    //         this.details=data
    //     })

    // })

    it('TC-01 Filling form with user1 using fixtures ',()=>{
        cy.fixture('detail').then((data)=>{
            cy.visit("https://petstore.octoperf.com/actions/Account.action?newAccountForm=")
            cy.get('[name="username"]').type(data[0].userId)
            cy.get('[name="password"]').type(data[0].passward)
            cy.get('[name="repeatedPassword"]').type(data[0].passward)
            cy.get('[name="account.firstName"]').type(data[0].firstName)
            cy.get('[name="account.lastName"]').type(data[0].lastName)
            cy.get('[name="account.email"]').type(data[0].email)
            cy.get('[name="account.phone"]').type(data[0].phone)

        })
    })
    it('TC-02 Filling form with user2 using fixtures',()=>{
        cy.fixture('detail').then((data)=>{
            cy.visit("https://petstore.octoperf.com/actions/Account.action?newAccountForm=")
            cy.get('[name="username"]').type(data[1].userId)
            cy.get('[name="password"]').type(data[1].passward)
            cy.get('[name="repeatedPassword"]').type(data[1].passward)
            cy.get('[name="account.firstName"]').type(data[1].firstName)
            cy.get('[name="account.lastName"]').type(data[1].lastName)
            cy.get('[name="account.email"]').type(data[1].email)
            cy.get('[name="account.phone"]').type(data[1].phone)

        })
     

    })
  
})