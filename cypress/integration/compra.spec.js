/// <reference types="cypress" />

context('Compra', () => {
    it('Efetuar uma compra', () => {
        
        //navegar para a urlbase configurada
        cy.visit('/');

        //setar nome do produto a ser adicionado
        let nomeProduto = 'Faded Short Sleeve T-shirts';

        //disparar evento mouseover no primeiro produto
        cy.contains(nomeProduto).trigger('mouseover');

        //clicar para add no carrinho
        cy.contains(nomeProduto) //selecionar o elemento do produto
            .parent() //buscar pelo pai do elemento
            .siblings('div.button-container') //buscar pelo irmão que contem a class button-container
            .children('a') //buscar os filhos tag a
            .first() //buscar o primeiro deles 'add to cart'
            .click();

        //clicar para prosseguir ao checkout
        cy.get(".button-container a[href$='controller=order']").click();

        //clicar para prosseguir ao checkout na tela de resumo da compra
        cy.get(".cart_navigation a[title='Proceed to checkout']").click();

        //preencher campos de usuário e senha
        cy.get('#email').type('emailteste@allan.com'); //localizar campos pelo id com #
        cy.get('#passwd').type('123456');

        //clicar para logar
        cy.get('button#SubmitLogin').click();

        //clicar para prosseguir ao checkout na tela de confirmação de endereço
        cy.get('button[name=processAddress]').click();

        //clicar para marcar checkbox de termos de serviço
        cy.get('[type=checkbox]#cgv').click();

        //clicar para prosseguir ao checkout na tela de confirmação de endereço
        cy.get('button[name=processCarrier]').click();

        //clicar para selecionar a forma de pagamento
        cy.get('.bankwire').click();

        //clicar para confirmar a compra
        cy.get('.cart_navigation button[type=submit]')
            .find('span')
            .contains('I confirm my order')
            .click();

        //confirmar se o pedido foi processado
        cy.get('.cheque-indent strong')
            .should('contain.text','Your order on My Store is complete.');
    });
});