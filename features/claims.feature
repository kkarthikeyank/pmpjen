# Feature: Filter and view claims after login

#   Background:
#     Given I navigate to the login page
#     When I login with username "Julia" and password "Batman123"
#     And I open the Claims tab

#   Scenario: User applies filters and searches claims
#     And I filter claims for the last 60 months
#     # And I apply Payee filter for "Integra Partners Llc"
#     # And I apply Provider filter for "Nicole Koepke"
#     # And I uncheck Payee "Integra Partners Llc"
#     # And I clear all filters
#     # And I apply clear filters
#     # And I close the filter panel
#     And I view claim details
#     And I filter claims from "03/10/2024" to "03/11/2025"
#     Then I should see filtered claims


# Feature: Member Portal - Claims Functionality

  # Background:
  #   Given I am logged in as "Julia" with password "Batman123"

  # Scenario: User filters claims with Last 60 Months
  #   When I open the Claims tab
  #   And I apply Last 60 Months date filter
  #   Then I should see filtered results

  # Scenario: Filter by claims numbers
     
  #   When I open the Claims tab
  #   And I apply Last 60 Months date filter
  #   And I filter claims by claim number "144111"
  #   Then I should see filtered results

  # Scenario: Filter by payee and provider
  #   When I open the Claims tab
  #   And I apply Last 60 Months date filter
  #   And I filter claims by payee "Integra Partners Llc"
  #   And I filter claims by provider "Nicole Koepke"
  #   Then I should see filtered results

  # Scenario: View claim details and return
  #   When I open the Claims tab
  #   And I apply Last 60 Months date filter
  #   And I view claim details
  #   Then I should return to the claims page

  #   Scenario: Filter claims by custom date range

  #     When I open the Claims tab

  #  And I apply Last 60 Months date filter
  # And I filter claims by custom date range from "01/01/2023" to "03/31/2023"
  # Then I should see filtered results
  #  Feature: Claims filtering by date range

  # Background:
  #   Given I am logged in as a user with username "Julia" and password "Batman123"

  # Scenario Outline: Filter claims by date range and print claim numbers
  #   When I open the claims tab
  #   And I filter claims by "<label>"
  #   Then I see the claims printed for "<label>"

  #   Examples:
  #     | label      |
  #     | 3 Months   |
  #     | 6 Months   |
  #     | 60 Months  |

# Feature: Claims filtering by date range

#   # Background:
#   #   Given I am logged in

#   Scenario Outline: Filter claims by date range and print claims
#     When I open the claims tab
#     And I filter claims by "<label>"
#     Then I see claims printed for "<label>"

#     Examples:
#       | label    |
#       | 3 Months |
#       | 6 Months |
      # | 60 Months|
# I see claims printed for "<label>"
# Feature: Claims filtering

#   Background:
#     Given I am logged in

#   Scenario: Open claims tab
#     When I open the claims tab
#     Then I see claims page displayed

#   Scenario Outline: Filter claims by date range
#     When I filter claims by "<label>"
#     Then I see claims printed for "<label>"

#     Examples:
#       | label    |
#       | 3 Months |
#       | 6 Months |
#       | 60 Months|

Feature: Claims filtering in member portal

  Background:
    Given I am logged in with valid credentials

  Scenario Outline: Open claims tab and filter claims by date
    When I open the claims tab
    And I filter claims by "<filterLabel>"

    Examples:
      | filterLabel |
      | 3 Months    |
      | 60 Months   |



