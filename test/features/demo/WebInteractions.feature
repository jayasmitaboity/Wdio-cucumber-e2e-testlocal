Feature: Demo feature

 @demo    
Scenario Outline: Run first demo feature
Given A web page page is opened
When Perform web interactions
#Then Click on the first search result
#Then URL should match <ExpectedURL>
Examples:
    | TestID | SearchItem | ExpectedURL |
    | WEB_TC002 | WDIO   | https://webdriver.io/ |
   