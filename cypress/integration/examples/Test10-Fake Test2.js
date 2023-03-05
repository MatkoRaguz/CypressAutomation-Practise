/// <reference types="Cypress" />


describe ("My fake test", () => {

    it ("Fake", () => {

        cy.visit("https://rahulshettyacademy.com/angularAppdemo/")

        cy.intercept("GET", "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty", (req) => 
        
        {
            req.url = "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra"

            req.continue((res) => {
                expect(res.statusCode).to.eq(404)
            })
            
           }).as("dummyUrl")
 
           cy.get("button[class='btn btn-primary']").click()
           cy.wait('@dummyUrl')
            
           })
        })

        
//Intercept