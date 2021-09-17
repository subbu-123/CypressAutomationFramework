describe('Third Test Suite', () => {

    it('Third Test case', () => {

        // Opening URL in browser
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // Cypress auto handles the alerts appearing on webpages
        cy.get('#alertbtn').click()
        // Cypress auto handles the confirm alerts appearing on webpages
        cy.get('#confirmbtn').click()

        /* As cypress automatically accepts the alerts so in order to validate the text present in alerts
        we need to fire browser events through cypress and validate them  */
        // For alerts
        cy.on('window:alert', (alertString) => {
            // To validate strings we have 'expect()' method in chai library
            expect(alertString).to.equal('Hello , share this practice page and share your knowledge')
        })
        // For confirm alerts
        cy.on('window:confirm', (alertString) => {
            // To validate strings we have 'expect()' method in chai library
            expect(alertString).to.contain('confirm?')
        })

        /* To handle child tabs cypress doesnot provide any way. We need to change the html dom dynamically at run time
        so that the link which opens in a new tab by clicking a button opens in the current active browser */
        // The html attribute which needs to deleted is 'target' for which we need to invoke a jquery method 'removeattr' in cypress

        cy.get('#opentab').invoke('removeAttr', 'target').click()
        cy.wait(4000)

        // Validate thet we navigated to the correct child url
        cy.url().should('include', 'rahulshettyacademy')

        // to perform browser operations like going forward or back we can use 'go()' method
        // navigate back to the parent url from child url
        cy.go('back')


    })

})