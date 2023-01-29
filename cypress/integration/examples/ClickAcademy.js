/// <reference types="Cypress" />


describe('ClickAcademy', () => {


    it('Checkboxes', () => {
        
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");

        //Checkboxes interaction
        cy.get("#checkBoxOption1").check().should("be.checked").and("have.value", "option1")
        cy.get("#checkBoxOption1").uncheck().should("not.be.checked")
        cy.get('input[type="checkbox"]').check(["option2", "option3"])


        //Dropdowns interaction

        //Static 
        cy.get("select").select("Option3").should("have.value","option3")

        //Dynamic 
        cy.get("#autocomplete").type("sw")
        

        cy.get(".ui-menu-item").each(($el, $list, index) =>{
            if ($el.text()==="Switzerland") {
                cy.wrap($el).click()
            }
        // cy.get("#autocomplete").should("have.value", "Switzerland")
        
        })

    });

    
});