class assertFunc{
    visitApp(urlHere){
        cy.visit(urlHere)
    }
    clickMe(element,index){
        cy.get(element).eq(index).click()
    }
    verifyVisibility(element,visible){
        cy.get(element).should(visible)
    }
    
    verifytext(element,expectedText){
        cy.get(element).should('have.text',expectedText)
    }
    verifyIndexText(element,index,expectedText){
        cy.get(element).eq(index).should('have.text',expectedText)
    }
    verifyLength(element,expectedlength){
        cy.get(element).should('have.length',expectedlength)
    }
    verifyExplicitText(element,expectedText){
        cy.get(element).then(el=>{
            expect(el.text()).to.equals(expectedText)
        })
    } 
    containsText(element, containText){
        cy.get(element).should('contain', containText)
    }

    containsIndexText(element,index,textContent){
        cy.get(element).eq(index).should('have.text',textContent)

    }
    includesText(element,text){
        cy.get(element).should('includes',text)
    }
    verifyUrl(expectedUrl){
        cy.url().should('equals',expectedUrl)
    }
    verifyTitle(expectedTitle){
        cy.title().should('have.text',expectedTitle)
    }
    verifyTextContains(text){
        cy.contains(text)
    }
}
export default assertFunc;