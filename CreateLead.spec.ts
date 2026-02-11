import test from "@playwright/test";

test("leaftaps Create Lead",async({page})=>{
//1. Navigate to the URL: http://leaftaps.com/opentaps/control/main
    await page.goto("http://leaftaps.com/opentaps/control/main")
//2. Enter the username as Demosalesmanager
await page.locator('#username').fill("Demosalesmanager")
// 3. Enter the password as crmsfa
await page.locator('#password').fill("crmsfa")
// 4. Click the Login button
await page.locator(".decorativeSubmit").click()
// 5. Click CRM/SFA
await page.locator(`text='CRM/SFA'`).click()
await page.waitForTimeout(5000)
// 6. Click Leads
await page.locator('//a[text()="Leads"]').click()
// 7. Click Create Lead
await page.locator(`//a[text()="Create Lead"]`).click();
// 8. Fill the Company Name
await page.locator('#createLeadForm_companyName').fill("Kovai.co")
// 9. Fill the First Name
await page.locator('#createLeadForm_firstName').fill("Welcome")
// 10. Fill the Last Name
await page.locator('#createLeadForm_lastName').fill("To_Kovai")
// 11. Fill the Salutation
await page.locator('#createLeadForm_personalTitle').fill("Ms")
// 12. Fill the Title
await page.locator('#createLeadForm_generalProfTitle').fill("Onboard")
// 13. Fill the Annual Revenue
await page.locator('#createLeadForm_annualRevenue').fill("80000741")
// 14. Fill the Department
await page.locator('#createLeadForm_departmentName').fill("Automation Testing")
// 15. Fill the Phone Number
await page.locator('#createLeadForm_primaryPhoneNumber').fill("8412104174")
// 16. Click Create Lead button
await page.locator('.smallSubmit').click
await page.waitForTimeout(5000)
}

)