import homePage from '../../support/pageObject/homePage'
import productPage from '../../support/pageObject/productPage'
import checkoutPage from '../../support/pageObject/checkOutPage'
import purchasePage from '../../support/pageObject/purchasePage'

describe('Ecommerce Suite', () => {

    // before hook will execute before exceuting any of the test cases
    before(function () {
        cy.fixture('frameworkTestData').then((testData) => {
            //'this' keyword will create a variable whose scope is in the entire js file so here testData variable can be used in any block
            this.testData = testData

        })
    })

    it('Framework Concepts', function () {

/*         Create an object for the page object class which we imported at the top of our test case file
        const homePage = new HomePage()
        const productPage = new ProductPage()
        const checkoutPage = new CheckOutPage()
        const purchasePage = new PurchasePage()  */
 
        // Opening URL in browser where url is passed as global parameter/environment variable accessible to all the tests
        cy.visit(Cypress.env("URL"))
        homePage.getNameField().type(this.testData.name)
        homePage.getGenderField().select(this.testData.gender)
        // verifying if 'two way data binding' text field has same value which we entered earlier
        homePage.getTwoWayBindingTextField().should('have.value', this.testData.name)
        // We can verify/validate an html attribute's value in cypress as below we validate that minimum 2 characters need to be entered in name field
        homePage.getNameField().should('have.attr', 'minlength', '2')
        // Validate if 'Enterpreneur' radio button is disabled
        homePage.getEnterpreneurRadioBtn().should('be.disabled')

        productPage.getShopLink().click()
        //Adding two products from the website to cart
        this.testData.products.forEach((product) => {
            cy.addProductToCart(product)
        })

        productPage.getCheckOutbtn().click()
/* 
        var sum = 0
        
        cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
           var val = $el.text().split(" ")[1].trim()
            sum = Number(sum) + Number(val)
        })

        checkoutPage.getTotalAmount().then((obj) => {
            var total = obj.text().split(" ")[1].trim()
             expect(Number(total)).to.equal(sum)
         }) */


        cy.productsTotal().then((sum) => {
        checkoutPage.getTotalAmount().then((obj) => {
           var total = obj.text().split(" ")[1].trim()
            expect(Number(total)).to.equal(sum)
        })
    })


        checkoutPage.getcheckOutBtn().click()

        purchasePage.getCountryEditBox().type('India')
        purchasePage.getSuggestionList().click()
        purchasePage.getCheckBox().click({ force: true })
        purchasePage.getPurchaseButton().click()
        purchasePage.getSuccessMsg().then((obj) => {
            expect(obj.text()).to.include('Success')
        })

    })
})