///<reference types="cypress" />

describe('To learn iframe',()=>{

    Cypress.on('uncaught:exception',()=>{
        return false
    })
    it.only('TC-01 iframe without plugin and jquery',()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.get('#mce_0_ifr').then(($iframeElement)=>{
         let iframeContentBody=$iframeElement.contents().find('body')
         cy.wrap( iframeContentBody).as('ifBody')
         cy.get('@ifBody').find('p').should('be.visible').and('have.text','Your content goes here.')

        })
    })
    it('TC-02 iframe using javascript',()=>{
        cy.visit("https://the-internet.herokuapp.com/iframe")
      //  cy.get('#tinymce > p').type('grgrgr')
      cy.get('#mce_0_ifr').then((el)=>{
       // cy.log(el)
        cy.wrap(el['0'].contentDocument.body).as('iframeBody')
        cy.get('@iframeBody').find('p')
        cy.get('@iframeBody').find('p').clear()
        cy.get('@iframeBody').find('p').type('Pjhu')
      })
    })
    let frame=function(id){
        return cy.get(id).its('0.contentDocument.body')
    }
    it('TC-03 iframe using javascript',()=>{
        cy.visit("https://the-internet.herokuapp.com/iframe")
        frame('#mce_0_ifr').then((frameBody)=>{
            cy.wrap(frameBody).as('frameBody')
            cy.get('@frameBody').find('p').type('snnjn')
        })
    })
    // it.only('TC-04 iframe using external Plugin',()=>{
    //     cy.visit("https://the-internet.herokuapp.com/iframe")
    //     cy.frameLoaded('#mce_0_ifr')
    //     cy.iframe('#mce_0_ifr').find('p')
    // })

}) 