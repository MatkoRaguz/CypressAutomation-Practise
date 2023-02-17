class homePage
{
    getEditBox()
    {
        return cy.get(".form-control").eq(0)
    }

    getGender()
    {
        return cy.get("#exampleFormControlSelect1")
    }

    get2wayBox()
    {
        return cy.get(".ng-valid").eq(1)
    }

    shopLinkButton()
    {
        return cy.get(".nav-link").contains("Shop")
    }
}

export default homePage