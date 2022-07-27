describe('To verify End-to-End flow',()=>{
    it('TC Verify ',()=>{
       //Create----POST
       //Retrive---GET
       //Update---PUT
       //Retrive updated---GET
       //Delete---DELETE
    cy.request({
        method:"POST",
        url: "https://gorest.co.in/public/v2/users",
        headers: {
            Authorization: `Bearer 6f43edc93514043dd7670b5474a630307506bd8ffcae4bc7abf5bbfabfe3a2db`
        },
        body:{
            "name":"Tenali Ramakris",
             "gender":"male", 
             "email":`psk${(Math.random())*6}@gmail.com`, 
             "status":"active"}
       }).then((res)=>{
          //cy.log(res)
          return res.body.id
       }).then((id)=>{
       // cy.log(id)
       cy.request({
        method:"PUT",
        url:`https://gorest.co.in/public/v2/users/${id}`,
        headers: {
            Authorization: `Bearer 6f43edc93514043dd7670b5474a630307506bd8ffcae4bc7abf5bbfabfe3a2db`
         },
        body:{
            "name":"Priya Kulkarni", 
            "email":`allasani.peddana@${(Math.random())*10}ce.com`, 
            "status":"active"}
     }).then((res)=>{
       // cy.log(res)
       return res.body.id
     }).then((id)=>{
        //cy.log(id)
        cy.request({
            method:"DELETE",
            url:`https://gorest.co.in/public/v2/users/${id}`,
            headers: {
                Authorization: `Bearer 6f43edc93514043dd7670b5474a630307506bd8ffcae4bc7abf5bbfabfe3a2db`
             },
        }).then((res)=>{
          //  cy.log(res)
          expect(res.statusText).contain("Content")

        })

     })
       })



    })


})