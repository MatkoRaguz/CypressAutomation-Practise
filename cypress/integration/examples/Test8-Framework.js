/// <reference types="Cypress" />

import HomePage from "../pageObject/HomePage"
import PlpShop from "../pageObject/PlpShop"



describe('Test Framework', () => {

    before(function () {
        cy.fixture("example").then(function (data) {
        this.data = data            
        })

    })
    
    it('Test', function () {
        const Homepage = new HomePage()
        const Plp = new PlpShop()

        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        Homepage.getEditBox().type(this.data.name)
        Homepage.getGender().select(this.data.gender)
        Homepage.get2wayBox().should("have.value", this.data.name)

        
        Homepage.shopLinkButton().click()
               
        this.data.productsName.forEach(function (element) {
            cy.selectProduct(element)
        })

        Plp.checkoutButton().click()
    })


})