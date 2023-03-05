/// <reference types="Cypress" />



describe('API test', () => {

    it('API test', () => {

        cy.request("POST", "http://216.10.245.166/Library/Addbook.php", 
        
        {
        "name":"Learn Appium Automation with Java",
        "isbn":"bcd",
        "aisle":"227",
        "author":"John foe"
        }).then((response) =>{
            expect(response.body).to.have.property("Msg", "successfully added")
            expect(response.status).to.eq(200)
        })

    });
});