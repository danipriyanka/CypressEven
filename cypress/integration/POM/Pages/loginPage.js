class login {
    visitApp(){
        cy.visit("https://opensource-demo.orangehrmlive.com/")
    } 
    enterUserName(value){
        cy.get('[name="username"]').type(value)
    }
    enterPassward(value2){
        cy.get('[name="password"]').type(value2)
    }
    loginButton='[type="submit"]'
    click(locator){
        cy.get(locator).click()
    }
    validateMsg(){
        cy.get(' ').should('be.visible')


    }
    ValidateErrMsg(){
        cy.get('[role="alert"] >div >p').should('have.text','Invalid credentials')
    }

}
export default login;