import 'cypress-iframe'

describe('Frames Suite', () => {

    it('Frame case', () => {

        // Opening URL in browser
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // scenario: To click on mentorship link within frame and validate the packages present
        // first need to load frame within cypress
        cy.frameLoaded('#courses-iframe')
        // always write cy.iframe(). then perform operations which will be automatically performed within the frame
        cy.iframe().find("[href*='mentorship']").eq(0).click()
        cy.iframe().find("[class*='pricing-title']").should('have.length', '2')
       

    })

})