
describe('Handling WebTables',()=>{
    Cypress.on('uncaught:exception',()=>{
        return false
    })
    it.only('Tc-03 ',()=>{
        cy.visit("https://www.techlistic.com/p/demo-selenium-practice.html")
        cy.get('#customers > tbody').find('tr').each((el,i)=>{
            if(i==0){
                let headings=(el.children()).text()
                cy.log(headings)  
     }
        })
    })
    it.only('Tc-04 ',()=>{
        let company=[]
        cy.visit("https://www.techlistic.com/p/demo-selenium-practice.html")
        cy.get('#customers > tbody').find('tr').each((el,i)=>{
        if(i!=0){
        cy.get('#customers > tbody > tr').eq(i).find('td').eq(0).invoke('text').then((text)=>{
            company.push(text)
        })   
    
     }
       cy.log(company)
        })
    })
})