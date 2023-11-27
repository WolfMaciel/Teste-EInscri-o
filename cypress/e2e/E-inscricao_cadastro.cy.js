import fakerbr from "faker-br";
describe('TESTE', () => {

    it('TESTE', () => {
    const user = { //objeto criado usando biblioteca faker para gerar cpf e email
        cpf: fakerbr.br.cpf(),
        email: fakerbr.internet.email()
    } 
//Acessar site
    cy.visit('https://checkout.einscricao.app/auth/signup');
    cy.get('input[name="name"]') //seleciona input através do seu name
    .type('Texto de exemplo')
    .should('have.value', 'Texto de exemplo') //Verificação do que foi digitado
    cy.get('input[name="email"]').type(user.email)
    cy.get('select[name="document_type"]').select('cpf')
    cy.get('input[name="document_value"]').type(user.cpf)
    cy.get('input[name="password"]').type('Senha@12AS3')
    cy.get('input[name="password_confirmation"]').type('Senha@12AS3')
    cy.contains('CRIAR CONTA').click()


    });
});
  
