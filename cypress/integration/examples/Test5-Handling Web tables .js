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