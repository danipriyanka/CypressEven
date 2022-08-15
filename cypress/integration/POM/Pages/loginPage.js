class login {
    visitApp(){
        cy.visit("https://opensource-demo.orangehrmlive.com/")
    } 
    enterUserName(value){
        cy.get('#txtUsername').type(value)
    }
    enterPassward(value2){
        cy.get('#txtPassword').type(value2)
    }
    loginButton="#btnLogin"
    click(locator){
        cy.get(locator).click()
    }
    validateMsg(){
        cy.get(' ').should('be.visible')


    }
    ValidateErrMsg(){
        cy.get('#spanMessage').should('be.visible')
    }

}
export default login;