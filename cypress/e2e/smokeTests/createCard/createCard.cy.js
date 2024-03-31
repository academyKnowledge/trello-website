/// <reference types="cypress" />
import { Given, Then, When  } from "cypress-cucumber-preprocessor/steps";
import CreateCardActions from "../../../pageObjects/createCard/actions.cy";
import CreateCardAssertions from "../../../pageObjects/createCard/assertions.cy";
import sharedDataUtils from "../../../pageObjects/shared/dataUtils.cy";

const createCardAction = new CreateCardActions();
const createCardAssertion = new CreateCardAssertions();
const dataUtils = new sharedDataUtils();

const title = "My Card";
const boardName = "RazanBoard";
let boardUrl , boardId ; 
const listName ="My List";

before(()=>{
    dataUtils.createBoard(boardName).then((resp)=>{
        boardUrl = resp.body.url ; 
        boardId = resp.body.id ; 
        dataUtils.createList(boardId, listName)
    })
    cy.loginToTrello();

    // cy.getCookies()
    // cy.getCookie("hasAccount").should("have.property","domain","trello.com")
    // cy.getCookie("hasAccount").should("have.property","value","atlassian")
    // cy.setCookie("myCookie","testing")
    // cy.clearCookie("myCookie")
});

Given("The user navigate to the board",()=>{
    // url for the board 
    // cy.wait(3000)
    createCardAction.openBoard(boardUrl);
});

When("Clicks on Add a card button",()=>{
    createCardAction.clickOnAddACardButton();
});

When("Types in card title input field",()=>{
    createCardAction.typeInCardTitleInputField(title);
});

When("Clicks on Add Card button",()=>{
    createCardAction.clickOnAddCardButton();
});

Then("The card will be created successfully",()=>{

});

after(()=>{
    cy.wait(3000)
    dataUtils.deleteBoard(boardId)
})