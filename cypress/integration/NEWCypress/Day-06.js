//API-----APPlication Programming Interface
//Validate response when User Interface is not ready
//Webdriver----API
///<reference types="cypress" />

describe('To validate GET,POST,PUT, DELETE req',()=>{
    it('TC-01 To verify GET Req',()=>{
     //   cy.request(url)
      cy.request({
        method:"GET",
        url:"https://reqres.in/api/users?page=2"
      }).then((res)=>{
        cy.log(res)
        expect(res.status).equal(200)
        expect(res.body.per_page).equal(6)
        expect(res.body.per_page).to.equal(6)
        expect(res.body.data['0'].first_name).to.equal("Michael")
        expect(res.statusText).equal("OK")

      })
    
    })
    it('TC-01 To verify POST Req',()=>{
        //   cy.request("")
         cy.request({
           method:"POST",
           url:"https://reqres.in/api/users",
           body:
            {
                "name": "Priya",
                "job": "QA",
                "lang":"Hindi"
            }
         }).then((res)=>{
           cy.log(res)
           expect(res.body.name).equal("Priya")
           expect(res.body.lang).eql("Hindi")
         })
       
       })
       it('TC-03 To verify PUT Req',()=>{
        //   cy.request("")
         cy.request({
           method:"PUT",
           url:"https://reqres.in/api/users/2",
           body:
            {
                "name": "PriyaK",
                "job": "Data Analyst"
            }
         }).then((res)=>{
           cy.log(res)
           expect(res.body.name).equal("PriyaK")
           expect(res.status).equal(200)
           expect(res.headers.connection).contain("-alive")
         })
       
       })
       it('TC-04 To verify DELETE Req',()=>{
        //   cy.request("")
         cy.request({
           method:"DELETE",
           url:"https://reqres.in/api/users/2",
         }).then((res)=>{
           cy.log(res)
           expect(res.statusText).contain("No")
           expect(res.duration).to.be.within(300,1200)
           expect(res.isOkStatusCode).eql(true)
       
         })
       
       })

})
