describe('To learn js alerts',()=>{
    Cypress.on('uncaught:exception',(err,runnable)=>{
        return false
    })
    it('TC-01 Handling normal alerts',()=>{
       cy.visit("https://demo.automationtesting.in/Alerts.html")
       cy.get('[id="OKTab"] > button').click()
       cy.on('window:alert',(text)=>{
           //cy.log(text)
          expect(text).to.equal('I am an alert box!')

       })
    })
    it('TC-02 Handling confirm alerts',()=>{
        cy.visit("https://demo.automationtesting.in/Alerts.html")
        cy.get('[href="#CancelTab"]').click()
        cy.get('[id="CancelTab"] >button').click()
        cy.on('window:confirm',(text)=>{
           // cy.log(text)
           expect(text).to.include('Button')
           return true
        })
        cy.get('#demo').should('have.text','You pressed Ok')
        
    })
    it('TC-03 Handling confirm alerts',()=>{
        cy.visit("https://demo.automationtesting.in/Alerts.html")
        cy.get('[href="#CancelTab"]').click()
        cy.get('[id="CancelTab"] >button').click()
        cy.on('window:confirm',(text)=>{
           // cy.log(text)
           expect(text).to.include('Button')
           return false
        })
        cy.get('#demo').should('have.text','You Pressed Cancel')
    })
    it('TC-04 Handling prompt alerts',()=>{
        cy.visit("https://demo.automationtesting.in/Alerts.html")
        cy.get('[href="#Textbox"]').click()
        cy.window().then((winObj)=>{
            cy.stub(winObj,'prompt').returns('Priyanka')
            return true
        })
        cy.get('[id="Textbox"] >button').click()
        cy.get('#demo1').should('contain','Priyanka')
    })
    it('TC-05 Handling normal alerts',()=>{
        cy.visit("https://demo.automationtesting.in/Alerts.html")
        cy.get('[id="OKTab"] > button').click()
        cy.window().then((winObj)=>{
            cy.stub(winObj,'alert').returns(true)
           
        })
    
    })
    it('TC-06 Handling normal alerts',()=>{
        cy.visit("https://demo.automationtesting.in/Alerts.html")
        cy.get('[href="#CancelTab"]').click()
        cy.window().then((winObj)=>{
            cy.stub(winObj,'confirm').returns(true)
        })
        cy.get('[id="CancelTab"] >button').click()
        cy.get('#demo').should('have.text','You pressed Ok')
    })
    it('TC-07 Handling normal alerts',()=>{
        cy.visit("https://demo.automationtesting.in/Alerts.html")
        cy.get('[href="#CancelTab"]').click()
        cy.window().then((winObj)=>{
            cy.stub(winObj,'confirm').returns(false)
        })
        cy.get('[id="CancelTab"] >button').click()
        cy.get('#demo').should('have.text','You Pressed Cancel')
    })
})