import ProductClass from "../Pages/rahulShetty"
import mydata from "../../../fixtures/mydata.json"
import assertFunc from "../../../support/Utilities/assertions"
import utilities from "../../../support/Utilities/utilities"
let util=new assertFunc()
let obj=new ProductClass()

describe('To verify end-to-end flow',()=>{

    it('TC-01 User able to add the prod to cart',()=>{
        obj.visitApp()
        obj.SearchProd(mydata[1].prodShortcut1)
        obj.AddProdToCart(mydata[1].Product1)
        obj.clickByIndex(obj.AddToCart,0)
        obj.clickUsingText(obj.proceedToCheckout)
        util.containsText(obj.CartProdText,mydata[1].Product1)
        obj.clickUsingText(obj.placeOrder)
        obj.selectValFromDropdown(mydata[2].country1)
        obj.manageCheckbox()
        obj.clickUsingText(obj.proceedText)
        util.verifyVisibility(obj.homePageEle, utilities.visible)
        
    })
    it.only('TC-02 User able to add the prod to cart',()=>{
        obj.visitApp()
        obj.SearchProd(mydata[1].prodShortcut2)
        obj.AddProdToCart(mydata[1].Product3)
        obj.clickByIndex(obj.AddToCart,0)
        obj.clickUsingText(obj.proceedToCheckout)
        util.containsText(obj.CartProdText,mydata[1].Product3)
        obj.clickUsingText(obj.placeOrder)
        obj.selectValFromDropdown(mydata[2].country2)
        obj.manageCheckbox()
        obj.clickUsingText(obj.proceedText)
        util.verifyVisibility(obj.homePageEle, utilities.visible)
        
    })
})