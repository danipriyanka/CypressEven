describe('To learn some commands in cypress',()=>{
    it('TC-01 To verify title of the page using doc',()=>{
        cy.visit("https://kitchen.applitools.com/")
        cy.document().then((doc)=>{
            cy.log(doc)
            cy.log(doc.title)
            // cy.log(doc.URL)
            // cy.log(doc.body)
            expect(doc.title).to.equal('The Kitchen')
        })
        cy.visit("https://kitchen.applitools.com/ingredients/cookie")
        cy.document().then((doc1)=>{
            cy.log(doc1.title)
            cy.log(doc1.URL)

        })
     
        
    })
    it('Verify the title of page using title command',function(){
        cy.visit("https://kitchen.applitools.com/")
        cy.title().then((title)=>{
            cy.log(title)
            expect(doc.title).to.equal('The Kitchen')
        })
      

     
    })
    it('Validate Height and Width of Page',function(){
        cy.visit("https://kitchen.applitools.com/")
        cy.document().then((doc)=>{
            let jqEle= Cypress.$(doc)  //jeqry--- .each()
            cy.log(jqEle)
            cy.log(jqEle.width())
            cy.log(jqEle.height())
            let jqEle2=cy.$$(doc)
            cy.log(jqEle2)
            cy.log(jqEle2.width())
            cy.log(jqEle2.height())
            Cypress.$.each((el)=>{
                cy.log(el)
            })
            cy.$$.each((el)=>{
                cy.log(el)
            })

        })
    })
    it('ViewPort',function(){
        cy.visit("https://kitchen.applitools.com/")
       cy.viewport(500,560)
       cy.viewport('ipad-2','portrait')
       cy.viewport('iphone-5','landscape')
    
      })
    it('Cookies',function(){
        cy.visit("https://kitchen.applitools.com/ingredients/cookie")
        cy.document().then((doc)=>{
            //cy.log(doc.cookie)
            doc.cookie="name=Priyanka"
            cy.log(doc.cookie)
        })

  
   
      })
    it.only('Cookies commands',function(){
        cy.visit("https://kitchen.applitools.com/ingredients/cookie")
        cy.getCookies().then((cookie)=>{
            cy.log(cookie)
        })
        cy.setCookie('name','Shital')
        cy.getCookies().then((cookie)=>{
            cy.log(cookie)
        })
        cy.clearCookie('name','Shital')
        cy.getCookies().then((cookie)=>{
            cy.log(cookie)
        })
        cy.clearCookies()
        cy.getCookies().then((cookie)=>{
            cy.log(cookie)
        })

      
      })

})