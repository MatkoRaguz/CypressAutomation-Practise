/// <reference types="Cypress" />


describe('ClickAcademy', () => {


    it('Checkboxes, Dropdowns, Hide and visible', () => {
        
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");

        //Checkboxes interaction
        cy.get("#checkBoxOption1").check().should("be.checked").and("have.value", "option1")
        cy.get("#checkBoxOption1").uncheck().should("not.be.checked")
        cy.get('input[type="checkbox"]').check(["option2", "option3"])


        //Radio buttons
        cy.get("[value='radio3']").check().should("be.checked")
        cy.get("[value='radio1']").check().should("be.checked")
        cy.get("[value='radio2']").check().should("be.checked")


        //Dropdowns interaction

        //Static 
        cy.get("select").select("Option3").should("have.value","option3")

        //Dynamic 
        cy.get("#autocomplete").type("sw")
        
        //Iterate thru elements in list and if element contain word we
        // looking for it wrap that element and click it
        cy.get(".ui-menu-item").each(($el, $list, index) =>
        {
            if ($el.text()==="Switzerland") {
                cy.wrap($el).click()
        }
        
        // cy.get("#autocomplete").should("have.value", "Switzerland")

        })

        // Handling Visible and invisible elements using Assertions in Cypress
        cy.get("#displayed-text").should("be.visible")
        cy.get("#hide-textbox").click()
        cy.get("#displayed-text").should("not.be.visible")
        cy.get("#show-textbox").click()
        cy.get("#displayed-text").should("be.visible")

    });



    
});