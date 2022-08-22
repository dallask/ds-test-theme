import env_data from '../../config';

describe('Bootstrap compponents accordion', () => {

  it('Open the second item', () => {
    cy.visitStorybook()
    cy.loadStory('Bootstrap components', 'Accordion')

    cy.contains('Accordion Item One')
      .get('.accordion .accordion-item:nth-child(2) h2')
      .click()
      .get('.accordion .accordion-item:nth-child(2) .accordion-collapse')
      .should('have.class','show')

    cy.xpath('//*[@data-bs-target=\'#collapse2\']').should('have.class','accordion-button')

    cy.compareSnapshot('open-second-item')
  })
})
