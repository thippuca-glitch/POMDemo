class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('#email1');
    this.passwordInput = page.locator('#password1');
    this.loginButton = page.locator("//button[text()='Sign in']");
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
module.exports = LoginPage