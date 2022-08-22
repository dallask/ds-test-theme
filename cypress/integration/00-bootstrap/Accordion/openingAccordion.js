import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import env_data from '../../../config';

const url = `${env_data.env_url}iframe.html?id=bootstrap-components--accordion`;

Given(`I open Bootstrap Accordion page`, () => {
  cy.visit(url);
});

Then(`I see {string} in the title`, title => {
  cy.title().should("include", title);
});

When(`I click the accordion item {string}`, (number) => {
  cy.get(`.accordion .accordion-item:nth-child(${number}) h2`)
    .click();
});

Then(`I see the text of the accordion item {string}`, (number) => {
  cy.get(`.accordion .accordion-item:nth-child(${number}) .accordion-collapse`)
    .should('be.visible');
});

And(`I cannot see the text of the accordion item {string}`, (number) => {
  cy.get(`.accordion .accordion-item:nth-child(${number}) .accordion-collapse`)
    .should('be.hidden');
});
