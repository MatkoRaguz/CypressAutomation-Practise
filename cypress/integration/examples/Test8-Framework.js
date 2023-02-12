/// <reference types="Cypress" />

describe('Test Framework', () => {

    before(function () {
        cy.fixture("example").then(function (data) {
        this.data = data            
        })

    })
    
    it('Test', function () {
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        cy.get(".form-control").eq(0).type(this.data.name)
        cy.get("#exampleFormControlSelect1").select(this.data.gender)
        cy.get(".ng-valid").eq(1).should("have.value", this.data.name)

        
        cy.get(".nav-link").contains("Shop").click()
               
        this.data.productsName.forEach(function (element) {
            cy.selectProduct(element)
        })

    })


})