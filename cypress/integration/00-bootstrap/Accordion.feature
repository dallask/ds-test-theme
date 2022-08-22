Feature: The Accordion

  I want to open Bootstrap Accordion page

  Scenario: Opening Bootstrap Accordion page
    Given I open Bootstrap Accordion page
    Then I see "Webpack" in the title
    When I click the accordion item "2"
    Then I see the text of the accordion item "2"
    And I cannot see the text of the accordion item "1"

