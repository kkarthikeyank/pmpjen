


# Feature: Member Portal Login
#   # Positive scenario for valid login
#   Scenario: Login with valid credentials
#     Given I navigate to the login page
#     When I login with username "Julia" and password "Batman123"
#     Then I should be redirected to the member portal dashboard
#     And I should see a welcome message
#     And I should see my Member ID

#   # Negative scenario for invalid login (incorrect username or password)
#   Scenario: Login with invalid username
#     Given I navigate to the login page
#     When I login with username "invalidUser" and password "Batman123"
#     Then I should see an error message indicating invalid credentials

#   Scenario: Login with invalid password
#     Given I navigate to the login page
#     When I login with username "Julia" and password "wrongPassword"
#     Then I should see an error message indicating invalid credentials

#   Scenario: Login with both invalid username and password
#     Given I navigate to the login page
#     When I login with username "invalidUser" and password "wrongPassword"
#     Then I should see an error message indicating invalid credentials
