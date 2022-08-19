class ProductClass {

    visitApp(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    }
    SearchProd(text){
        cy.get('[type="search"]').last().type(text)
        cy.get('.search-button').click()
    }
    AddProdToCart(value){
        cy.get('h4[class="product-name"]').each((el,i)=>{
            if(el.text()==value){
                cy.get('.product-action > button').eq(i).click()
            }
        })
    }
    clearText(){
        cy.get('[type="search"]').last().clear()
    }
    clickByIndex(loc,i){
        cy.get(loc).eq(i).click()
    }
    AddToCart='[class="cart-icon"]'
    proceedToCart='div[class="action-block"] button'
    CartProdText='[class="product-name"]'
    clickUsingText(text){
        cy.contains(text).click()
    }
    selectValFromDropdown(val){
        cy.get('[class="products"] select').select(val)
    }
    manageCheckbox(){
        cy.get('[type="checkbox"]').check().should('be.checked')
    }
    AssertVisibility(loc){
        cy.get(loc).should('be.visible')
    }
    proceedToCheckout="PROCEED TO CHECKOUT"
    homePageEle='.brand.greenLogo'
    proceedText='Proceed'
    placeOrder='Place Order'
}

export default ProductClass; 