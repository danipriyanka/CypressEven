import webDriver from "../Pages/webDriverPage"
import mydata from "../../../fixtures/mydata.json"
let obj=new webDriver()
describe('',()=>{
    it('To verify dropdown functionality',()=>{
        obj.visitApp()
        obj.verifySingleDropdown(obj.dropDown2,mydata[0].dropDown1)
        obj.verifyCheckBoxes()
        obj.verifyRadioButton()
    
    })

})