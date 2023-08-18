Feature('login');

Scenario('Login com sucesso',  ({ I }) => {

    I.amOnPage('http://automationpratice.com.br/')
    I.click('Login')
    I.waitForText('Login', 10)
    I.fillField('#user', 'testautomation@gmail.com')
    I.fillField('#password', '123456')
    I.click('#btnLogin')
    I.waitForText('Login realizado', 3)

}).tag('@loginSucesso')

Scenario('Tentando logar digitando apenas o e-mail',  ({ I }) => {

    I.amOnPage('http://automationpratice.com.br/')
    I.click('Login')
    I.waitForText('Login', 10)
    I.fillField('#user', 'testautomation@gmail.com')
    I.click('#btnLogin')
    I.waitForText('Senha inválida.', 3)

}).tag('loginApenasComEmail')

Scenario('Tentando logar sem digitar e-mail e senha',  ({ I }) => {

    I.amOnPage('http://automationpratice.com.br/')
    I.click('Login')
    I.waitForText('Login', 10)
    I.click('#btnLogin')
    I.waitForText('E-mail inválido.', 3)

}).tag('loginSemSenhaESemEmail')

Scenario('Tentando logar digitando apenas a senha',  ({ I }) => {

    I.amOnPage('http://automationpratice.com.br/')
    I.click('Login')
    I.waitForText('Login', 10)
    I.fillField('#password', '123456')
    I.click('#btnLogin')
    I.waitForText('E-mail inválido.', 3)

}).tag('loginApenasComSenha')