const { test, expect } = require('@playwright/test')
const LoginPage = require('../pages/loginpage')
const loginDetails = require('../testdata/loginDetails.json')
const HomePage = require('../pages/homepage')


test('Login To Application using POM', async ({ page }) => {
    const loginpage = new LoginPage(page)
    await page.goto(loginDetails.url)
    await loginpage.login(loginDetails.username, loginDetails.password)
    await expect(page).toHaveURL('https://freelance-learn-automation.vercel.app/')
    await expect(page.locator('text=Welcome')).toBeVisible()
    const homepage = new HomePage(page)
    const isVisible = await homepage.isWelcomeMessageVisible()
    expect(isVisible).toBeTruthy()
    await homepage.logOut()
    await expect(page).toHaveURL(loginDetails.url)
})