describe('Swaglabs Test',()=>{
    it('TC-01',()=>{
        cy.login('https://www.saucedemo.com/','standard_user','secret_sauce')
        cy.get('.inventory_item').should('have.length',6)
        cy.get('.inventory_item_name').each((el,i)=>{
            cy.log(el.text())
            let title=el.text()
            if(title=="Sauce Labs Backpack" || title=="Sauce Labs Bike Light"){
                cy.contains('Add to cart').click()
            }
        })
        cy.get('.shopping_cart_link').click()
         let amt=["$29.99","$9.99"]
         cy.get('.inventory_item_price').each((el,i)=>{
            cy.log(el.text())
            let price=el.text().replace('$',' ').trim()
            cy.log(price)
           expect(el.text()).to.equal(amt[i])
        })
    })
})