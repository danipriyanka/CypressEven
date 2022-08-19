describe('To verify end-to-end flow',()=>{

    it('TC-01 User able to add the prod to cart',()=>{
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('[type="search"]').last().type('Be')
        cy.get('[class="search-button"]').click()
        cy.get('h4[class="product-name"]').each((el,i)=>{
            let text=el.text()
            if(text=="Beetroot - 1 Kg"){
                cy.get('[class="product-action"] button').eq(i).click()
            }
        })
        cy.get('[class="cart-icon"] ').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.get('[class="product-name"]').should('contain','Beetroot - 1 Kg')
        cy.contains('Place Order').click()
        cy.get('.products > div div select').select('India')
        cy.get('[type="checkbox"]').check().should('be.checked')
        cy.contains('Proceed').click()
        cy.get('.brand.greenLogo').should('be.visible')
        
    })
})