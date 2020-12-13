// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('backgroundLogin', () => {
    cy.setCookie('PrestaShop-a30a9934ef476d11b6cc3c983616e364',
    'R6xmma6F4U6edNQuu67M0qWll1lFK2h7oz0ybPEkhkAGERJSmCLZdVWGKxZphTqrd%2F4%2FBEjcUWjzn8lhHAhuvJw7S9wDxOy8hI5hGtjJ73wdUEHIeQm83EtuDzeq00IRHZzxV5Svp%2BqKtSeH3xGGiNEW%2FVVWD5KIUtIZ%2BNwOAVx533o9k8w1hXBGXC13jeHyJX62MvW%2F9DcQ43aUz4KV5115J0vnH81eF7AIe2%2BOGYAnw%2BW3LwQBoTyeiK0lbpZefNnIHADd%2BHQRSdRkzMj0DZ2PslaKhWhX6HlAFoNG2v1kSUjQ0dj9ylrR1IxY8Vq%2FKsxqdbxxnRRiN3JuM4w3Sxqdjq2BGMJsoVWAtoPVwH4JEwlaGDmcLjDG6zWO5slLvf9rJRD%2BrliXc5gFPTEOV8OzD7lKC1LzN8%2BvbgD67c0%3D000305');
})
