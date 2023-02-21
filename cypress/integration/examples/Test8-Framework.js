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

        // //Itterate thru price of product and sum them to match final price
    
        // var sum = 0
        // cy.get("tr td:nth-child(4) strong").each(($el) => {

        //     const amount = $el.text()
        //     var res = amount.split(" ")
        //     res = res[1].trim()
        //     sum = Number(sum) + Number (res)
                     
        // }).then(() => {

        //     cy.log(sum)

        // })

        // //Summ total total price to match sum of all product prices

        // cy.get("h3 strong").then(function(element) {

        //     const amount = element.text()
        //     var res = amount.split(" ")
        //     var total = res[1].trim()
        //     expect(Number(total)).to.equal(sum)

        // })
        cy.get("tr td:nth-child(4) strong").then(function ($cells) {
            const totals = $cells
              .toArray()
              .map(function (el) {return el.innerText})
              .map(function (s) {return s.replace('₹.', '')})
              .map(parseFloat)
        
            const sum = Cypress._.sum(totals)
            cy.log(`Total should be ${sum}`)
            cy.contains("h3 strong", + sum)

                    
          })
        


        //final checkout
        cy.get(".btn-success").click()
        cy.get('#country').type("Croatia")
        cy.get('.suggestions > ul > li > a').click()
        //cy.get('.suggestions > ul > li > a').click()
        cy.get("#checkbox2").check( {force: true} )
        cy.get(".btn-success").click()
        cy.get(".alert-success").contains("Success! Thank you! Your order will be delivered in next few weeks :-).")
       
    })


})