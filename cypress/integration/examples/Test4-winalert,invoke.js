/// <reference types="Cypress" />

describe('Test four', () => {
    it('alerts', () => {
        
        //radio buttons
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")
        cy.get("#alertbtn").click()
        cy.get("#confirmbtn").click()

        //windows alert
        cy.on("window:alert", (str) => {
            //mocha
            expect(str).to.equal("Hello , share this practice page and share your knowledge")
        })

        //open page in same tab
        cy.get("#opentab").invoke("removeAttr", "target").click()

        //verify page you are
        cy.url().should("include", "rahulshettyacademy")

        //browser navigation
        cy.go("back")
    });
});
