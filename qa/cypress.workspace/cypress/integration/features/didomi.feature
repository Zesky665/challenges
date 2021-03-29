  Feature: Didomi Notice

  As a user which is visiting a website with didomi
  I want to be presented with a notice asking for my consent
  That closes after I respond

  Scenario: Vitis Didomi website and check if consent notice appears
    Given I visit the didomi.io website
    Then I see see that a didomi consent notice has pop up
    And I see that the didomi consent notice has three buttons
    Then I press the Agree and Close button
    And I see that the didomi consent notice has closed
    And I check that the consent.given POST request is sent
    And I check that the didomi.getUserStatus response is correct