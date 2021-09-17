class PurchasePage
{
    getCountryEditBox(){
        return cy.get('#country')
    }

    getSuggestionList(){
        return cy.get('.suggestions > ul > li > a')
    }

    getCheckBox(){
        return cy.get('#checkbox2')
    }

    getPurchaseButton(){
        return cy.get("[value='Purchase']")
    }

    getSuccessMsg(){
        return cy.get('div.alert-success')
    }

    getProductPrice(){
        return cy.get('tr td:nth-child(4) strong')
    }

}

//export default PurchasePage
module.exports = new PurchasePage()