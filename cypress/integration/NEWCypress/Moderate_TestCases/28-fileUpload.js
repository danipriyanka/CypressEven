
describe('To learn file upload functionality',()=>{
    it('TC-01 Upload single file',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        var img='download.jpg'
        cy.get('#file-upload').attachFile(img)
        cy.get('#file-submit').click()
        cy.get('#uploaded-files').should('contain',img)

    })
    it('TC-02 Upload Multiple files at a time',()=>{
        cy.visit("https://www.igniteui.com/file-upload/multiple-upload")
        let arr=['download.jpg','download.jpg']
        cy.get('[type="file"]').attachFile(arr)
        cy.get('#igUpload1_spbtncncl_lbl').click()
        cy.get('#igUpload1_fc > div').should('have.length',arr.length)
    })
    it('TC-03 Upload file using path',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        let myImg='cypress/fixtures/download.jpg'
        cy.get('#file-upload').selectFile(myImg)
        cy.get('#file-submit').click()
        cy.get('#uploaded-files').should('contain','download.jpg')

    })
    it.only('TC-04 Upload multiple files by using path',()=>{
        cy.visit("https://www.igniteui.com/file-upload/multiple-upload")
        cy.get('[type="file"]').selectFile([
            'cypress/fixtures/download.jpg',
            'cypress/fixtures/download.jpg'

        ],{action:'drag-drop'})
        cy.get('#igUpload1_spbtncncl_lbl').click()
        cy.get('#igUpload1_fc > div').should('have.length',2)

     


    })
   
})