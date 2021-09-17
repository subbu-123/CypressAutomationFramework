describe('First Test Suite', () => {

    it('First Test case', () => {

        // Opening URL in browser
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        // Entering text in edit box
        cy.get('input.search-keyword').type('ca')
        /* wait for the search results to appear. This can't be handled automatically by cypress as the webpage or 
        html dom is not in loading state  */
        cy.wait(2000)
        // To get the count of all the products after searching with 'ca'
        cy.get('.product:visible').should('have.length', 4)   //Here there are some hidden elements with same object property so ':visible' is used to filter out only visible ones

        // Parent child object finding mechanism
        cy.get('.products:visible').find('.product').should('have.length', 4)

        /* Aliasing concept to be used in cypress as we cannot place an object in a variable directly 
        because of asynchronous nature and promise resolution issues  */
        cy.get('.products:visible').find('.product').as('ProductList')
        // eq method will point to that particular object among an array of objects whose index is provided as argument
        // Contains method returns an object based on the text present in that object's html dom
        cy.get('@ProductList').eq(1).contains('ADD TO CART').click()
        // adding products to the cart by traversing through names of each product displayed as search result
        cy.get('@ProductList').each(($el, index, $list) => {

            var productName = $el.find('h4.product-name').text()
            if (productName.includes('Cashews')) {
                $el.find('button').click()
            }

        })
        // Validating the title of the web page
        cy.get("[class*='brand']").should('have.text', 'GREENKART')

        // To print the page title in cypress test runner log we need to resolve promise by using then() method like below
        cy.get("[class*='brand']").then((pageTitle) => {

            cy.log(pageTitle.text())
        })


        cy.get("[class='cart-icon']").click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()

    })

})