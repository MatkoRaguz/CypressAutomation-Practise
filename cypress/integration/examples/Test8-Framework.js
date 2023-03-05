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
        
        //Shetty:
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

        //Gleb:
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
        
          /*
          The cy.get("tr td:nth-child(4) strong") code selects a td element that is the fourth child of its parent tr element, and then selects the strong element inside that td.

        The .then(function ($cells) {...}) code indicates that the next set of actions should be performed on the selected elements, which are passed as the $cells argument to the function.

        The first action performed on the selected elements is to convert them to an array using the .toArray() function. The .map() function is then called twice on the resulting array. The first .map() function takes each element of the array and returns its innerText, which is the text content of the strong element, as a string. The second .map() function takes each string value and removes the '₹.' prefix and converts it to a float using parseFloat().

        The resulting totals array is then summed using Cypress._.sum(totals), where Cypress._.sum() is a utility function provided by Cypress that sums the values in an array.

        Finally, the cy.log() function logs a message to the Cypress command log with the total sum, and cy.contains() function searches for an h3 element containing the sum value as a string, which is then asserted using cy.contains().

        Overall, this code selects a table cell element and performs some operations on the cell data to compute a sum, and then logs and asserts the sum value in the Cypress command log. */


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