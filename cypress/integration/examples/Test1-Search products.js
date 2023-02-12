/// <reference types="Cypress" />

describe("Cypress learn", () => {

  it("My first Cypress test", () => {

    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword").type("ca")
    cy.wait(2000)

    cy.get(".product").should("have.length", 5)
    cy.get(".product:visible").should("have.length", 4)

    //Parent child chaining
    cy.get(".products").as(".productsLocator")
    cy.get("@.productsLocator").find(".product").should("have.length", 4)
    cy.get("@.productsLocator").find(".product").eq(2).contains("ADD TO CART").click()

    //Itarate thru array, find our product and click
    cy.get("@.productsLocator").find(".product").each(($el, index, $list) => {

      const vegeText=$el.find("h4.product-name").text()
      
      if (vegeText.includes("Cashews")) 
      {
        cy.wrap($el).find("button").click()
      }
      
      //assert if logo text is correctly dispalyed
      cy.get(".brand").should("have.text", "GREENKART")

      cy.get(".brand").then(function(elementlogo){
        cy.log(elementlogo.text())
      })
    })
  });

});
