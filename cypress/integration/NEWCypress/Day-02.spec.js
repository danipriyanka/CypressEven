//Traversing methods in cypress-----
describe('TO learn Traversing methods',()=>{
    //children(),first(),last()
    //siblings-----next(),prev()
    it('TC-01 To get children of DOM elements, use the .children() command.',()=>{
        cy.visit('https://www.kesari.in/')
        cy.get('ul[class="menu list-unstyled mb-0"]').children().should('have.length',11)
        cy.get('ul[class="menu list-unstyled mb-0"]').children().should('have.length.above',8)
    })
    it('TC-02 To get the first DOM element within elements, use the .first() command.',()=>{
        cy.visit('https://www.kesari.in/')
        cy.get('ul[class="menu list-unstyled mb-0"]').children().first().should('contain','Group')
    })
    it('TC-03 To get the first DOM element within elements, use the .last() command.',()=>{
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
    it('TC-06 To get the next sibling DOM element within elements, use the .next() command.',()=>{
        cy.visit('https://www.kesari.in/')
        cy.get('ul[class="menu list-unstyled mb-0"]').children().eq(4).prev().should('contain','Tailormade')
    })
    it('TC-07 To get the closest ancestor DOM element, use the .closest() command.',()=>{
        cy.visit('https://www.kesari.in/')
        cy.get('a[href="/Group-Tours"]').first().closest('li').should('contain','Group')
        cy.get('a[href="/Group-Tours"]').first().closest('ul').should('have.class','menu list-unstyled mb-0')
        cy.get('a[href="/Group-Tours"]').first().closest('nav').should('have.id','main-menu')
    })
    it('TC-08 To get descendant DOM elements of the selector, use the .find() command.',()=>{
        cy.visit('https://www.kesari.in/')
        cy.get('.menu.list-unstyled').children().first().find('a').should('contain','Group')
        cy.get('.menu.list-unstyled').children().first().find('div')
        
    })
    it('TC-09 To get all previous sibling DOM elements within elements until other element, use the .prevUntil() command.',()=>{
        cy.visit('https://www.kesari.in/')
        cy.get('ul[class="menu list-unstyled mb-0"]').children().last().prevUntil('.menu.list-unstyled > li:nth-child(2)').should('have.length',8)
        
        
    })
    it('TC-10 To get all previous sibling DOM elements within elements until other element, use the To get the previous sibling DOM element within elements, use the .prev() command.',()=>{
        cy.visit('https://www.kesari.in/')
        cy.get('ul[class="menu list-unstyled mb-0"]').children().first().next().should('contain','')
      
    })
    it('TC-11 ,prev()',()=>{
        cy.visit('https://www.kesari.in/')
        cy.get('ul[class="menu list-unstyled mb-0"]').children().last().prev().should('contain','About Us')
      
    })
    it('TC-11 .filter()',()=>{
        cy.visit('https://www.kesari.in/')
        cy.get('ul[class="menu list-unstyled mb-0"]').children().filter('#tailor-made-holidays').should('contain','Tailormade')
      
    })
    it('TC-11 .nextAll()',()=>{
        cy.visit('https://www.kesari.in/')
        cy.get('ul[class="menu list-unstyled mb-0"]').children().first().nextAll().should('have.length',10)
      
    })
    it('TC-11 .prevAll()',()=>{
        cy.visit('https://www.kesari.in/')
        cy.get('ul[class="menu list-unstyled mb-0"]').children().eq(2).prevAll().should('have.length',2)
      
    })
  

})