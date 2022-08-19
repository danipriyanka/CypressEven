describe('To learn drag and drop functionality',()=>{
    //https://www.npmjs.com/package/@4tw/cypress-drag-drop
    it('TC-01 To verify drag & drop using trigger',()=>{
     cy.visit("https://demo.anhtester.com/drag-and-drop-demo.html")
     let dataTransfer=new DataTransfer()
     cy.get('#todrag > span').first().trigger('dragstart',{dataTransfer})
    cy.get('#mydropzone').trigger('drop',{dataTransfer})
    cy.get('#todrag > span').first().trigger('dragend',{dataTransfer})
    cy.get('#droppedlist > span').should('contain','Draggable 1')
    cy.get('#todrag > span').should('have.length',3)
    })
    it('Tc-02 To verify drag and drop using drag directly',()=>{
        cy.visit("https://demo.anhtester.com/drag-and-drop-demo.html")
        cy.get('#todrag > span').first().drag('#mydropzone')
        cy.get('#droppedlist > span').should('contain','Draggable 1')
    })
    it.only('TC-03 To scroll to a particular element',()=>{
        cy.visit("https://demo.anhtester.com/drag-and-drop-demo.html")
        cy.get('.footer > div > div > h4').first().scrollIntoView()

    })
})