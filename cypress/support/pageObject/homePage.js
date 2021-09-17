class HomePage
{
    getNameField(){
        return cy.get("[name='name']:nth-child(2)")
    }

    getGenderField(){
        return cy.get('select')
    }

    getTwoWayBindingTextField(){
        return cy.get("[name='name']:nth-child(1)")
    }

    getEnterpreneurRadioBtn(){
        return cy.get('#inlineRadio3')
    }

}

//export default HomePage
module.exports = new HomePage()