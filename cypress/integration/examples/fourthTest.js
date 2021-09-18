describe('Fourth Test Suite', () => {

    it('Fourth Test case', () => {

        // Opening URL in browser
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // Handling web tables (In this scenario we need to validate the price of JMETER course in webtable)
        cy.get("table[name='courses'] tr td:nth-child(2)").each(($el, index, $list) => {

            if ($el.text().includes('JMETER')) {
                /* Now we have received the element where jmeter is present but to move to next element which contains the price
                we need to use the 'next()' method of cypress but it can only be used in combination with get() method of cy  */
                cy.get("table[name='courses'] tr td:nth-child(2)").eq(index).next().should('have.text', '25').then((price) => {

                    cy.log(price.text())
                })
            }

        })

        /* Cypress doesnot provide any direct method to perform mouse hover operations instead we can perform mouse hover operations
        with the help of jquery methods  */

        // To debug tests using cypress use the below code
        /* cy.pause()  */
        // We can also click hidden menu items like ones in mouse hover operations using "click()" method only

        cy.contains('Reload').click({ force: true })
        cy.get('.mouse-hover-content').scrollIntoView().invoke('show') // point to remember is jquery 'show' method is to be used on immediate parent under which hidden elements are present
        cy.contains('Top').click()
        cy.url().should('include','tops') // Make 'tops' to 'top' for the test case to pass. It is done here intentionally

/*         cy.get('#openwindow').invoke('prop','url').then((val)=> {

            cy.log(val)
        }) */


    })

})