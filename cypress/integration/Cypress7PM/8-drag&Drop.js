describe('',()=>{
    Cypress.on('uncaught:exception',(err,runnable)=>{
        return false
    })
    it('drag and drop using trigger and  data transfer',()=>{
        cy.visit('https://demo.anhtester.com/drag-and-drop-demo.html')
        const dataTransfer=new DataTransfer()
        cy.get('#todrag > span').first().trigger('dragstart',{dataTransfer})
        cy.get('#mydropzone').trigger('drop',{dataTransfer})
        cy.get('#todrag > span').first().trigger('dragend')
        cy.get('#droppedlist').should('contain','Draggable 1')
       })
       it('drag and drop using trigger and  data transfer',()=>{
        cy.visit('https://demo.anhtester.com/drag-and-drop-demo.html')
        cy.get('#todrag > span').first().drag('#mydropzone')
        cy.get('#droppedlist').should('contain','Draggable 1')
       })
       it.only('',()=>{
        cy.visit('https://demo.anhtester.com/drag-and-drop-demo.html')
        cy.get('.footer > div >div >h4').first().scrollIntoView()
       })

})