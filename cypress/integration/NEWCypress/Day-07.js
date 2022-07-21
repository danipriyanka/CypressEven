///<reference types="cypress" />

describe('To learn API testing',()=>{
    it('Tc-01 To verify GET req',()=>{
        cy.request({
            method:"GET",
            url:"https://gorest.co.in/public/v2/users",
            headers:{
                Authorization:"Bearer  c6b5153ff25996a1e896b934526996cab5095f837b8e4e02c9cc73122a50b9d6"
            }
        }).then((response)=>{
            cy.log(response)
            expect(response.status).to.eql(200)
            response.body.forEach(element => {
                expect(element).to.have.keys(["id","name","email","status","gender"])   
            });
          //  response.body
          let r= res.body.some((el)=>{
            return el.name.startsWith("A")
        })
       // cy.log(r)
       expect(r).eql(true)
        })
    })
    it('To verify POST req',()=>{
        cy.request({
            method:"POST",
            url:"https://gorest.co.in/public/v2/users",
            headers: {
                Authorization: `Bearer 6f43edc93514043dd7670b5474a630307506bd8ffcae4bc7abf5bbfabfe3a2db`
             },
            body:{
                "name":"Tenali Ramakris",
                 "gender":"male", 
                 "email":`psk${Math.random()*10}@gmail.com`, 
                 "status":"active"}
         
        }).then((res)=>{
            cy.log(res)
            expect(res.isOkStatusCode).to.equal(true)
        })

})
it.only('TC-03 To verify PUT req',()=>{
    cy.request({
       method:"PUT",
       url:"https://gorest.co.in/public/v2/users/46",
       headers: {
           Authorization: `Bearer 6f43edc93514043dd7670b5474a630307506bd8ffcae4bc7abf5bbfabfe3a2db`
        },
       body:{
           "name":"Allasani Peddana", 
           "email":`allasani.peddana@${(Math.random())*10}ce.com`, 
           "status":"active"}
    }).then((res)=>{
       cy.log(res)
    })
  })
  it.only('TC-04 To verify DELETE req',()=>{
    cy.request({
        method:"DELETE",
        url:"https://gorest.co.in/public/v2/users/46",
        headers: {
            Authorization: `Bearer 6f43edc93514043dd7670b5474a630307506bd8ffcae4bc7abf5bbfabfe3a2db`
         },
    }).then((res)=>{
        cy.log(res)
        expect(res.status).to.equal(204)
    })
   })


})

















































































































































































































































