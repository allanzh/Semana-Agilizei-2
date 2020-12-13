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
        
        //validar mensagem de inserção do produto no carrinho
        cy.get('.icon-ok')
            .parent()
            .should('contain.text','Product successfully added to your shopping cart');
        
        //validar se o produto correto foi adicionado
        cy.get('span#layer_cart_product_title')
            .should('contain.text', nomeProduto);

        //clicar para prosseguir ao checkout
        cy.get(".button-container a[href$='controller=order']").click();

        //clicar para prosseguir ao checkout na tela de resumo da compra
        cy.get(".cart_navigation a[title='Proceed to checkout']").click();

        //preencher campos de usuário e senha
        cy.get('#email').type('emailteste@allan.com'); //localizar campos pelo id com #
        cy.get('#passwd').type('123456');

        //clicar para logar
        cy.get('button#SubmitLogin').click();

        //validar se o checkbox de uso do endereço está marcado
        cy.get('[type=checkbox]#addressesAreEquals')
            .should('have.attr', 'checked', 'checked')
            .should('have.attr','name','same');

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
        
        //capturar informações de compra e guardar em arquivo json
        cy.get('div.box').invoke('text').then((text) =>{
            //caminho do arquivo , objeto a ser guardado no json
            cy.writeFile('cypress/fixtures/pedido.json', {
                id: `${ text.match(/[A-Z]{9}/g) }`,
                price: `${text.match(/[$][0-9]+[.][0-9]+/g)}`
            })
        });

        //clicar no botão para visualizar historico de compras
        cy.get(".cart_navigation a[href$='history']").click();

        //comparar o id guardado com o id do primeiro item do histórico (arquivo)
        cy.readFile('cypress/fixtures/pedido.json').then((pedido) => {
            cy.get('tr.first_item .history_link a').should('contain.text', pedido.id);
            cy.get('tr.first_item .history_price span').should('contain.text', pedido.price);
        })

    });
});