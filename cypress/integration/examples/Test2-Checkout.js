/// <reference types="Cypress" />

describe("Cypress learn", () => {

    it("Adding product to the cart", () => {
  
      cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
      cy.get(".search-keyword").type("ca")
      cy.wait(2000)
  
      cy.get(".products").as(".productsLocator")
      
      //Itarate thru array, find our product and click
      cy.get("@.productsLocator").find(".product").each(($el, index, $list) => {
  
        const vegeText=$el.find("h4.product-name").text()
        if (vegeText.includes("Cashews")) 
        {
          cy.wrap($el).find("button").click()
        }
             
      })

      cy.get(".cart-icon").click()
      cy.contains("PROCEED TO CHECKOUT").click()
      cy.contains("Place Order").click()
      
      cy.get("select").select("Croatia")
      cy.get(".chkAgree").click()
      cy.contains("Proceed").click()
      
    });
  
  });
  