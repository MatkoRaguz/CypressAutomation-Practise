/// <reference types="Cypress" />

describe('Mouse Hover', () => {
    
    it('Mouse Hover', () => {
        
        //Mouse hover and click
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")

        //cy.get("div.mouse-hover-content").invoke("show")
        cy.contains("Top").click({force:true})
        cy.url().should("include", "top")


    });

});