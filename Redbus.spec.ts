import test, { chromium, webkit } from "@playwright/test";
import { channel } from "node:diagnostics_channel";
test("Launch RedBus in Edge and Flipkart in WebKit",async({})=>{
    //RedBus in Edge  
    const edgeBrowser=await chromium.launch({channel:"msedge",headless:false})
      //open the window ->context
      const edgecontext=await edgeBrowser.newContext()
         //create new page->tab
         const edgepage =await edgecontext.newPage()
await edgepage.goto("https://www.redbus.in")
await edgepage.waitForTimeout(5000)
const redbusTitle=await edgepage.title()
const redbusPageUrl=await edgepage.url()
//console.log('Redbus Page Title is :', redbusTitle,";Redbus URL is:",redbusPageUrl);
//Flipkart in a Webkit browser
const WebkitBrowser=await webkit.launch({channel:"webkit",headless:false})
    //open the window ->context
      const Webkitcontext=await WebkitBrowser.newContext()
         //create new page->tab
         const Webkitpage =await Webkitcontext.newPage()
await Webkitpage.goto("https://www.flipkart.com")
await Webkitpage.waitForTimeout(5000)
const flipkartTitle=await Webkitpage.title()
const flipkartPageUrl=await Webkitpage.url()
console.log('flipkart Page Title is:', flipkartTitle,";flipkart URL is:",flipkartPageUrl);

})
