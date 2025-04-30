import { Given,When,Then } from "@wdio/cucumber-framework";
import * as chai from "chai";
Given(/^Google page is opened$/, async function(){
    await browser.url("https://www.google.com")
    await browser.pause(10000)
})

When(/^Search with (.*)$/,async function(SearchItem){
    await console.log(`>> searchItem: ${SearchItem}`);
    let ele = await $(`//*[@id="APjFqb"]`) 
    await ele.setValue(SearchItem)
    await browser.keys("Enter")
    await browser.pause(20000)
})

Then(/^Click on the first search result$/,async function(){
 let ele = await $(`<h3>`)  
 await ele.click() 
})

Then(/^URL should match (.*)$/,async function(ExpectedURL){
    console.log(`>> expectedURL: ${ExpectedURL}`);
    let url = await browser.getUrl()
    await browser.pause(10000)
    chai.expect(url).to.equal(ExpectedURL)
})
Given(/^A web page page is opened$/,async function(){
    await browser.url("/inputs")
    await browser.setTimeout({implicit: 15000,pageLoad: 10000})
    await browser.maximizeWindow()
})
When (/^Perform web interactions$/,async function () {
let ele =await $(`[type=number]`)
await ele.setValue("1234")
await browser.debug()
//let num =12345
//let strNum =num.toString()
//await ele.click()
//for(let i=0;i<strNum.length;i++){
//let charstr =strNum.charAt(i)
//await browser.pause(1000)
//await browser.keys(charStr)
    
})