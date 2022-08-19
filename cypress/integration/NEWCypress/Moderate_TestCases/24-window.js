describe('Window commands',()=>{
    it('TC-01',()=>{
        cy.visit("https://kitchen.applitools.com/")
        cy.window().then((win)=>{
            cy.log(win)
            cy.log(win.document)
            cy.log(win.location)
            cy.log(win.location.href)
            expect(win.location.href).to.equal("https://kitchen.applitools.com/")
            cy.log(win.location.protocol)
            expect(win.location.protocol).to.equal("https:")
            win.location.reload()
        })
    })
    it.only('TC-02',()=>{
        cy.visit("https://kitchen.applitools.com/")
        cy.get('[href="/ingredients/cookie"]').click()
        cy.get('#vegetable').should('contain','Veggie')
        // cy.window().then((win)=>{
        //     cy.log(win.location)
        //     expect(win.location.href).to.equal("https://kitchen.applitools.com/ingredients/cookie")
        //     win.history.back()
        //     cy.url().should('eql','https://kitchen.applitools.com/')
        //     win.history.forward()
        //     cy.get('#vegetable').should('contain','Veggie')
          
        // })
        cy.go('back')
        cy.url().should('eql','https://kitchen.applitools.com/')
        cy.go('forward')
        cy.get('#vegetable').should('contain','Veggie')
        
    })
})