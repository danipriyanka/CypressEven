class webDriver {

    visitApp(){
        cy.visit("https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
    }

    verifySingleDropdown(locator,value){
        cy.get(locator).select(value).should('have.value',value)
    }
    verifyMultipleDropdowns(value){
        cy.get('.dropdown-menu-lists').each((el)=>{
            cy.wrap(el).select(value).should('have.value',value)
        })
    }
     dropDown2='#dropdowm-menu-2'
     verifyCheckBoxes(){
        cy.get('[type="checkbox"]').each((el)=>{
            cy.wrap(el).check().should('be.checked')
        })
     }

     verifyRadioButton(){
        cy.get('[type="radio"]').each((el)=>{
            if(!el.text()=="Cabbage"){
                cy.wrap(el).check().should('be.checked')
            }
           
        })

     }

  

}

export default webDriver;