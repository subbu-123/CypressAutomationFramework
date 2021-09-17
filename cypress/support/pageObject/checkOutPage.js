class CheckOutPage
{
    getcheckOutBtn(){
        return cy.get('button.btn.btn-success')
    }

    getTotalAmount(){
        return cy.get('td.text-right strong')
    }

}

//export default CheckOutPage
module.exports = new CheckOutPage()