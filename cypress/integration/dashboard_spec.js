describe('Dashboard', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should have home url when visiting app', () => {
    cy.url().should('eq', 'http://localhost:3000/')
  })

  it('should render header', () => {
    cy.get('h1')
      .contains('Decisionator')
  })
})