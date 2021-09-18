import productPage from '../support/pageObject/productPage'
import purchasePage from '../support/pageObject/purchasePage'
import 'cypress-file-upload'

// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('addProductToCart', (productName) => {
    
    productPage.getProductsTitle().each(($el, index, $list) => {
        if ($el.text().includes(productName)) {

            productPage.getAddButton().eq(index).click()
        }
    })
})

Cypress.Commands.add('productsTotal', () => {

    var sum = 0
    purchasePage.getProductPrice().each(($el, index, $list) => {
        var val = $el.text().split(" ")[1].trim()
        sum = Number(sum) + Number(val)
    }).then(() => {
        cy.wrap(sum)
    })


})


















//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
