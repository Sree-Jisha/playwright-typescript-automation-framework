Feature: Banking customer login

  As a banking customer
  I want to log in to my account
  So that I can access my account dashboard

  Scenario: Successful login with valid credentials
    Given the customer is on the banking login page
    When the customer enters valid credentials
    Then the customer should see the welcome message