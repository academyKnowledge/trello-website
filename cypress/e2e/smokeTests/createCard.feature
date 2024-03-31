Feature: Create Card Functionality

    Scenario: Validate the user can create a new card
        Given The user navigate to the board
        When Clicks on Add a card button
        And Types in card title input field
        And Clicks on Add Card button
        Then The card will be created successfully