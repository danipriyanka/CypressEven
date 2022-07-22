//Mock----Dummy --Fake
import mockapiBody from '../../fixtures/mockapiBody.json'
describe('',()=>{
    it.only('verify the getComment API with stubbed data', function () {
        cy.intercept({
            url: "https://jsonplaceholder.cypress.io/comments/1",
            method: "GET"},{
            body:{name: 'Priya',
            hobby: 'Drawing'
        }   
        }).as('PostData')
        cy.visit("https://example.cypress.io/commands/network-requests")
        cy.contains('Get Comment').click()
        cy.wait('@PostData').then((res)=>{
            cy.log(res)
            expect(res.response.body.name).to.eql("Priya")

        })
    })
    it.only('TC-02',()=>{
        cy.intercept({
            method:"GET",
            url:"https://jsonplaceholder.cypress.io/comments/1"
        },{
            body:mockapiBody
        }).as('PostData')
        cy.visit("https://example.cypress.io/commands/network-requests")
        cy.contains('Get Comment').click()
        cy.wait('@PostData').then((res)=>{
            cy.log(res)
            expect(res.response.body.firstName).to.equal("Rasika")
        
        })
    })   
})