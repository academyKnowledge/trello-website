class CreateCardActions {

    openBoard(url){
        cy.visit(url);
        return this;
    }

    clickOnAddACardButton(){
        cy.findByTestId("list-add-card-button").first().click();
        return this; 
    }

    typeInCardTitleInputField(cardTitle){
        cy.findByTestId("list-card-composer-textarea").type(cardTitle);
        return this;
    }

    clickOnAddCardButton(){
        cy.findByTestId("list-card-composer-add-card-button").click();
        return this;
    }
}
export default CreateCardActions