describe('To learn Login Functionality',()=>{
   //Customised Functions
       it('TC-01 To test with valid Crendential',()=>{
         cy.login("https://www.saucedemo.com/",'standard_user','secret_sauce')
         cy.login("https://www.saucedemo.com/",'problem_user','secret_sauce')
         cy.login("https://www.saucedemo.com/",'performance_glitch_user','secret_sauce')
       })
    //    it('TC-02 To test with valid Crendential',()=>{
    //     cy.visit("https://www.saucedemo.com/")
    //     cy.get('#user-name').type('problem_user')
    //     cy.get('#password').type('secret_sauce')
    //     cy.get('#login-button').click()
    //   })  
    //   it('TC-03 To test with valid Crendential',()=>{
    //     cy.visit("https://www.saucedemo.com/")
    //     cy.get('#user-name').type('performance_glitch_user')
    //     cy.get('#password').type('secret_sauce')
    //     cy.get('#login-button').click()
    //   })    
    it('Tc-04 To learn Contact Us form',()=>{
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.form('Priyanka','Dani','psk@gmail.com','Done')
        // cy.get('[name="first_name"]').type('Priyanka')
        // cy.get('[name="last_name"]').type('Dani')
        // cy.get('[name="email"]').type('psk@gmail.com')
        // cy.get('[name="message"]').type('Done')
     
      })
    })
    
    
    