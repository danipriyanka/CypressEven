///<reference types="cypress" />
describe('To learn Calender functionality',()=>{
    Cypress.on('uncaught:exception',(err,runnable)=>{
        return false
    })
    it('TC-01 To verify particular date after currentdate is Selecting',()=>{
    let calenderData= new Date()
    cy.log(calenderData)
    let date=calenderData.getDate()
    cy.log(date)
    calenderData.setDate(date+ 200)
    cy.log(calenderData)
    let date1=calenderData.getDate()
    cy.log(date1)
    let year=calenderData.getFullYear()
    cy.log(year)
    // let month=calenderData.getMonth() 
    // cy.log(month)
    let month=calenderData.toLocaleString('default',{month:"long"})
    cy.log(month)
    cy.visit("https://demo.automationtesting.in/Datepicker.html")
    cy.get('[class="imgdp"]').click({force: true})
    function setYearAndMonth(){
        cy.get('.ui-datepicker-title').then((el)=>{
             cy.log(el.text())
             if(!el.text().includes(year)){
                cy.get('[title="Next"]').click()
                setYearAndMonth()
             }
        })
        cy.get('.ui-datepicker-title').then((el)=>{
            cy.log(el.text())
            if(!el.text().includes(month)){
               cy.get('[title="Next"]').click()
               setYearAndMonth()
            }    
       })
       function setdate(){
             cy.contains(date1).click({force:true})
       }
       setdate()
    }
    setYearAndMonth()
    })
    it.only('TC-02 To verify particular date before currentdate is Selecting',()=>{
        let calenderData= new Date()
        cy.log(calenderData)
        let date=calenderData.getDate()
        cy.log(date)
        calenderData.setDate(date - 200)
        cy.log(calenderData)
        let date1=calenderData.getDate()
        cy.log(date1)
        let year=calenderData.getFullYear()
        cy.log(year)
        // let month=calenderData.getMonth() 
        // cy.log(month)
        let month=calenderData.toLocaleString('default',{month:"long"})
        cy.log(month)
        cy.visit("https://demo.automationtesting.in/Datepicker.html")
        cy.get('[class="imgdp"]').click({force: true})
        function setYearAndMonth(){
            cy.get('.ui-datepicker-title').then((el)=>{
                 cy.log(el.text())
                 if(!el.text().includes(year)){
                    cy.get('[title="Prev"]').click()
                    setYearAndMonth()
                 }
            })
            cy.get('.ui-datepicker-title').then((el)=>{
                cy.log(el.text())
                if(!el.text().includes(month)){
                   cy.get('[title="Prev"]').click()
                   setYearAndMonth()
                }    
           })
           function setdate(){
                 cy.contains(date1).click({force:true})
           }
           setdate()
        }
        setYearAndMonth()
        })
})