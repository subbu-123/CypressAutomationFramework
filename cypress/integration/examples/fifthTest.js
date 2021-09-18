describe('Fifth Test Suite', () => {

    it('Keyboard Events Test case', () => {

        // Opening URL in browser
        cy.visit('https://google.co.in')
        // Enter the text olympic in google's search box & press 2 times down arrow & then press enter
        cy.get("input.gLFyf.gsfi").type('olympics').type('{downarrow}').type('{downarrow}').type('{enter}')

    })

    it('File Upload using cypress-file-upload npm package', () => {
        const filepath = 'fileUpload/git hub new repository.txt'
        cy.visit('https://filebin.net/')
        cy.get('input.upload').attachFile(filepath)
        cy.get('a.link-primary.link-custom:nth-child(2)').then((obj) => {
            expect(obj.text()).to.include('.txt')
        })
        
        
    })

})