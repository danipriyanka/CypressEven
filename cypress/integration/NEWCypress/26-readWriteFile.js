describe('T0 learn read and write file functionality',()=>{
    it('TC-01 write file',()=>{
        cy.writeFile('firstFile.txt','My name is Priyanka\n')
        cy.writeFile('firstFile.txt','My lastname is Dani\n',{flag:'a'})
        cy.writeFile('firstFile.txt','I love paintaing\n',{flag:'a'})
    })
    it('Tc-02 To write file in fixtures',()=>{
        cy.writeFile('cypress/fixtures/secondFile.json',
        {
            firstName:"Priyanka",
            lastName:"Dani",
            Profile:"QA"
        })
    })
    it('TC-03 To read text file',()=>{
        cy.readFile('firstFile.txt').then((data)=>{
            expect(data).includes('paintaing')

        })
    })
    it.only('TC-04 To read fixture file',()=>{
        cy.fixture('secondFile').then((data)=>{
            expect(data.firstName).to.equal("Priyanka")
            expect(data.lastName).to.equal("Dani")
        })

    })
})