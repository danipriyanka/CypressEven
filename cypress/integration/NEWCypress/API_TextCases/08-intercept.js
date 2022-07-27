//cyreq()----
//intercept()-----

describe('To verify intercept',()=>{
    it('TC-01 GET Comment',()=>{
       cy.intercept({
        method:"GET",
        url:"https://jsonplaceholder.cypress.io/comments/1"
       }).as('getComment')
       cy.visit("https://example.cypress.io/commands/network-requests")
       cy.get('.network-btn.btn').click()
       cy.wait('@getComment')
       cy.get('.network-comment').should('contain','laudantium enim q')
    })
    it.only('TC',()=>{
        cy.intercept({
            method:"POST",
            url:"https://jsonplaceholder.cypress.io/comments"
        }).as('POSTComment')
        cy.visit("https://example.cypress.io/commands/network-requests")
        cy.get('.network-post.btn').click()
        cy.wait('@POSTComment').then((res)=>{
            cy.log(res)

        })
        cy.get('.network-post-comment').should('contain','POST')

        
    })
    it.only('TC-03',()=>{
        cy.intercept({
            method:"PUT",
            url:"https://jsonplaceholder.cypress.io/comments/1"
        }).as('UpdateComment')
        cy.visit("https://example.cypress.io/commands/network-requests")
        cy.get('.network-put.btn ').click()
        cy.wait('@UpdateComment').then((res)=>{
            cy.log(res)

        })
        
    })
})



