
describe('To learn end-to-end flow',()=>{
    it('TC-01 ',()=>{
        cy.login("https://www.saucedemo.com/",'standard_user','secret_sauce')
        cy.get('.inventory_item').should('have.length',6)
        cy.get('.inventory_item_name').each((el)=>{
            cy.log(el.text())
            if(el.text()=="Sauce Labs Backpack" || el.text()=="Sauce Labs Bike Light"){
              cy.contains('Add to cart').click()
            }
        })
        var price;
        cy.get('.inventory_item_price').each((el)=>{
             price=el.text()
             cy.log(price)
             price.replace('$',' ').trim()
             return price;
        }).then((p)=>{
            cy.log(p)
        })
        var cartPrice;
         cy.get('.shopping_cart_link').click()
         cy.get('.inventory_item_price').first().then((finalPrice)=>{
            cartPrice=finalPrice.text()
             cy.log(cartPrice)
             return cartPrice;       
         })
       

    })
})
