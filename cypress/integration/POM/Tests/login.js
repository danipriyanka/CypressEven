import login from "../Pages/loginPage"
import testData from "../../../fixtures/testData.json"
import dashboard from "../Pages/dashboard"
let obj=new login()
let obj2=new dashboard()

describe('To learn POM',()=>{
    it('TC-01',()=>{
   //  cy.visit("..")
     obj.visitApp()
     obj.enterUserName(testData.userName)
     obj.enterPassward(testData.passward)
    //  cy.get(obj.loginButton).click()
     obj.click(obj.loginButton)
     
    })

})