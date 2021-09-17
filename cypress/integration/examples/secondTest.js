describe('Second Test Suite', () => {

    it('Second Test case', () => {

        // Opening URL in browser
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // To select and unselect a check box using cypress

        /* To validate the behaviour of an object like whether it is visible or checked etc we should use'be.' assertions
and to validate the property of an object like what value it contains or length of an array then we should use 'have.' assertions */

        //To chain the assertions/validations we need not add more than one should statement instead use 'add' statement 
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

        // check() method can accept the checkbox value attribute as parameter to select those particular checkboxes
        cy.get("[type='checkbox']").check(['option2', 'option3']).should('be.checked')

        //Radio buttons can be selected using check() method but cannot be unselected by uncheck() method unlike checkboxes
        cy.get("[value='radio1']").check().should('be.checked')
        cy.get("[type='radio']").check('radio2').should('be.checked')

        // To select a value from static dropdown use 'select()' method which accepts any value which is displayed within the list on UI
        cy.get('#dropdown-class-example').select('Option3')

        // Dynamic dropdown
        cy.get('#autocomplete').scrollIntoView().type('Ind')
        cy.get('.ui-menu-item').each(($el, index, $list) => {

            if($el.find('div').text()==='India'){

                $el.find('div').click()
            }

        })
        // To validate whether the value selected from list appears on the UI or not
        cy.get('#autocomplete').should('have.value','India')

        // Visible & Invisible elements
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

    })

})