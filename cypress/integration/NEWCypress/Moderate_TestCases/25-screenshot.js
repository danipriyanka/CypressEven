describe('To learn screenshots functionality',()=>{
   beforeEach(()=>{
       cy.visit("https://www.flipkart.com/")
   })

    it('TC-01 To take ss of current page',()=>{
        cy.screenshot('filpkart')  
    })
    it('Tc-02 To get clipped ss image',()=>{
        cy.screenshot('filkartClip',{clip:{x:12,y:34,width:300,height:200}})
        cy.screenshot('filpkart3',{capture:'fullPage'})
        cy.screenshot('filpkart4',{capture:'runner'})
        cy.screenshot('filpkart5',{capture:'viewport'})
    })
    it.only('TC-03 To get ss of particular image',()=>{
        cy.get('[alt="Flipkart"]').screenshot('filpkart6')
    })
})