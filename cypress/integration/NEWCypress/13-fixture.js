describe('Writing to fixture', function () {
    it('verify the writing to fixture file', function () {
        cy.request({
            method: "GET",
            url: "https://reqres.in/api/users?page=2"
        }).then(function (res) {
            cy.writeFile('cypress/fixtures/resBody.json',res.body)
    
        })

        cy.fixture('resBody').then(function(data){
            expect(data.per_page).to.eqls(6)
            expect(data.data[0].first_name).to.eqls('Michael')
        })

    })
})