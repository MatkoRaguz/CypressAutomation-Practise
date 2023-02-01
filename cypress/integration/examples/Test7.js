/// <reference types="Cypress" />


describe ("Test", () => {

    it("Test", () => {

        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")

        //child windows
        cy.get("#opentab").then(function(el)
        {
            const url = el.prop("href")
            cy.visit(url)
        }) 
    })

})