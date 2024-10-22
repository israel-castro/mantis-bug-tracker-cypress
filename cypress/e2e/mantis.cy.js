import userData from '../fixtures/user-data.json'

describe('Mantis-Bug-Tracker', () => {

  const selectorsList = {
    usernameField: "#username",
    enterButton: "[type='submit']",
    passwordField: "#password",
    errorAlert: ".alert-danger > p"
  }
  it('Login Success', () => {
    cy.visit('/login_page.php')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.enterButton).click()
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.enterButton).click()
    cy.location('pathname').should('equal','/index.php')
  })

  it('Login Fail - wrong username', () => {
    cy.visit('/login_page.php')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.enterButton).click()
    cy.get(selectorsList.errorAlert).contains('Sua conta pode estar desativada ou bloqueada ou o nome de usuário e a senha que você digitou não estão corretos.')
    
  })

  it('Login Fail - wrong password', () => {
    cy.visit('/login_page.php')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.enterButton).click()
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.enterButton).click()
    cy.get(selectorsList.errorAlert).contains('Sua conta pode estar desativada ou bloqueada ou o nome de usuário e a senha que você digitou não estão corretos.')
    
  })
})