///<reference types="cypress" />

// describe('Tranverse method in cypress',function(){
//     //---eq()
//     it('To get a DOM element at a specific index, use the .eq() command.',function(){
//         cy.visit('https://www.lonavalacab.com/')
//         cy.get('.navbar-nav.ml-auto').children().should('have.length',6)
//         cy.get('.navbar-nav.ml-auto').children().eq(2).should('contain','T & C')
//     })
//    //-first()-----
//     it('To get the first DOM element within elements, use the .first() command.',function(){
//         cy.visit('https://www.lonavalacab.com/')
//         cy.get('.navbar-nav.ml-auto').find('li').first().should('contain','Packages')   
//     })
//      //---last()----
//     it('To get the last DOM element within elements, use the .last() command.',function(){
//         cy.visit('https://www.lonavalacab.com/')
//         cy.get('.navbar-nav.ml-auto').find('li').last().should('contain','Blog') 
//     })
//     //--children()--
//     it('To get children of DOM elements, use the .children() command.',function(){
//         cy.visit('https://www.lonavalacab.com/')
//         cy.get('.navbar-nav.ml-auto').children().should('have.length',6)
//     })
//      //-----next()---
//     it('To get the next sibling DOM element within elements, use the .next() command.',function(){
//         cy.visit('https://www.lonavalacab.com/')
//         cy.get('.navbar-nav.ml-auto').find('li').first().next().should('contain','sights')
//     })
//     //----prev()---
//     it('To get the previous sibling DOM element within elements, use the .prev() command.',function(){
//         cy.visit('https://www.lonavalacab.com/')
//         cy.get('.navbar-nav.ml-auto').children().last().prev().should('contain','FAQ')
//     })
//     //-----siblings()---
//     it('To get all sibling DOM elements of elements, use the .siblings() command.',function(){
//         cy.visit('https://www.lonavalacab.com/')
//         cy.get('.navbar-nav.ml-auto').children().first().siblings().should('have.length',5)
//     })
//     //------nextAll()----
//     it('To get all of the next sibling DOM elements within elements, use the .nextAll() command.',function(){
//         cy.visit('https://www.lonavalacab.com/')
//         cy.get('.navbar-nav.ml-auto').children().first().nextAll().should('have.length',5)

//     })
//     //------.preAll()---
//     it('To get all previous sibling DOM elements within elements, use the .prevAll() command.',function(){
//         cy.visit('https://www.lonavalacab.com/')
//         cy.get('.navbar-nav.ml-auto').children().last().prevAll().should('have.length',5)

//     })
//     //--find()--
//     it('To get descendant DOM elements of the selector, use the .find() command.',function(){
//         cy.visit('https://www.lonavalacab.com/')
//         cy.get('.navbar-nav.ml-auto').find('li').should('have.length',6)
//     })
//     //---closest()---
//     it('To get the closest ancestor DOM element, use the .closest() command.',function(){
//         cy.visit('https://www.lonavalacab.com/')
//         cy.get('button[id="nav-toggle"]').closest('nav').should('have.attr','class','navbar navbar-expand-lg narbar-light')
//     })
//     //---parents()-----
//     it('To get parents DOM element of elements, use the .parents() command.',function(){
//         cy.visit('https://www.lonavalacab.com/')
//         cy.get('[id="mainNav"]').parents().should('have.length',6)
//         cy.get('[id="mainNav"]').parents().should('match', 'div')
//         cy.get('[id="mainNav"]').parents().should('match', 'nav')
   
//     })
// //   //-----prevUnti()---
// //   it.only('To get all previous sibling DOM elements within elements until other element, use the .prevUntil() command.',function(){
// //     cy.visit('https://www.lonavalacab.com/')
// //     cy.get('.navbar-nav.ml-auto').children().last().prevUntil('a[href="#packages"]').should('have.length',5)

// // })
//})