class ProductPage
{
    getShopLink(){
        return cy.contains('Shop')
    }

    getCheckOutbtn(){
        return cy.get('a.nav-link.btn')
    }

    getProductsTitle(){
        return cy.get('h4.card-title')
    }

    getAddButton(){
        return cy.get('button.btn.btn-info')
    }


}

//export default ProductPage
module.exports = new ProductPage()