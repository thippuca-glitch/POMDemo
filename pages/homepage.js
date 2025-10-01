class HomePage {
  constructor(page) {
    this.page = page;
    this.welcomeMessage = page.locator('text=Welcome');
  }

  async isWelcomeMessageVisible() {
    return this.welcomeMessage.isVisible();
  }

  async logOut() {
    await this.page.getByAltText('menu').click();
    await this.page.waitForSelector('text=Sign out');
    await this.page.click('text=Sign out');
  }

}
module.exports = HomePage;