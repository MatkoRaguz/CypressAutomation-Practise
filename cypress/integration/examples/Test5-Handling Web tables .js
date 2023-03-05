/// <reference types="Cypress" />

describe("Handling Web tables", () => {
    
    it('test', () => {
        
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")
        

        //Handling Web tables 

        cy.get("tr td:nth-child(2)").each(($el, index, $list) => {
            
            const text = $el.text()
            if (text.includes("Python")) 
            {
                cy.get("tr td:nth-child(2)").eq(index).next().then(function(price) 
                {
                    const priceText = price.text()
                    expect(priceText).to.equal("25")
                })
            }

        })

    });
});

/*
This Cypress code selects all td elements that are the second child of their parent tr element using the CSS selector "tr td:nth-child(2)", and iterates over them using the .each() command.

The .each() command iterates over the selected elements and executes a function for each element. The function is defined using an arrow function with three arguments:

$el: The current element being iterated over.
index: The index of the current element in the list of selected elements.
$list: The list of all selected elements.
Inside the function, the const text = $el.text() code gets the text content of the current element and assigns it to the text variable.

The if (text.includes("Python")) condition checks whether the text content of the current element includes the string "Python". If it does, the code inside the condition executes, which selects the td element that is the second child of its parent tr element using the CSS selector "tr td:nth-child(2)" and the .eq() command with the index argument.

The .next() command selects the next sibling element of the selected element, which is a td element containing the price value of the book.

The .then() command defines a callback function that receives the price element as its argument. The const priceText = price.text() code gets the text content of the price element and assigns it to the priceText variable.

Finally, the expect(priceText).to.equal("25") code uses the expect() assertion function provided by Cypress to assert that the priceText value is equal to "25".

Overall, this code selects all td elements that are the second child of their parent tr element, checks whether they contain the string "Python", and if so, asserts that the price value of the book is equal to "25".
*/