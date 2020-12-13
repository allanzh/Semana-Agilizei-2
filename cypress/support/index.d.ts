/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject> {
      /**
       * Comando para executar login em background através de configuração no cookie
       * @example
       * cy.backgroundLogin()
       * 
       */
      backgroundLogin(): Chainable<any>
  
    }
  }