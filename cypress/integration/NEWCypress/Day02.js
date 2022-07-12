//Traversing methods in cypress-----
describe('TO learn Traversing methods',()=>{
    //children(),first(),last()
    //siblings-----next(),prev()
    it.only('TC-01 To get children of DOM elements, use the .children() command.',()=>{
        cy.visit('https://www.kesari.in/')
        cy.get('ul[class="menu list-unstyled mb-0"]').children().should('have.length',11)
        cy.get('ul[class="menu list-unstyled mb-0"]').children().should('have.length.above',8)
    })
    it.skip('TC-02 To get the first DOM element within elements, use the .first() command.',()=>{
        cy.visit('https://www.kesari.in/')
        cy.get('ul[class="menu list-unstyled mb-0"]').children().first().should('contain','Group')
    })
    it.skip('TC-03 To get the first DOM element within elements, use the .last() command.',()=>{
        cy.visit('https://www.kesari.in/')
        cy.get('ul[class="menu list-unstyled mb-0"]').children().last().should('contain','More')
    })
    it('TC-04 To get the first DOM element within elements, use the .eq() command.',()=>{
        cy.visit('https://www.kesari.in/')
        cy.get('ul[class="menu list-unstyled mb-0"]').children().eq(2).should('contain','Economy')
    })
    it('TC-05 To get the next sibling DOM element within elements, use the .next() command.',()=>{
        cy.visit('https://www.kesari.in/')
        cy.get('ul[class="menu list-unstyled mb-0"]').children().eq(2).next().should('contain','Tailormade')
    })
    it.only('TC-06 To get the next sibling DOM element within elements, use the .next() command.',()=>{
        cy.visit('https://www.kesari.in/')
        cy.get('ul[class="menu list-unstyled mb-0"]').children().eq(4).prev().should('contain','Tailormade')
    })
})