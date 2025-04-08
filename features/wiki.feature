Feature: Wikipedia site

    Scenario: Check playwright wiki page
        Given I am on home page
        When I search for "Playwright (software)"
        Then wiki title page "Playwright (software)" should open
