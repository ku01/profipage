describe('PDF Export', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should have a working PDF export button', () => {
    // Find and verify the PDF export button exists
    cy.get('[data-testid="pdf-export-button"]')
      .should('exist')
      .should('have.text', 'Export as PDF')
      .click()
  })

  it('should maintain layout in print mode', () => {
    // Test print layout
    cy.viewport(1024, 768)
    cy.get('[data-testid="profile-container"]').should('be.visible')
    
    // Check if main sections are present and visible
    cy.get('[data-testid="header-section"]').should('be.visible')
    cy.get('[data-testid="experience-section"]').should('be.visible')
    cy.get('[data-testid="education-section"]').should('be.visible')
    cy.get('[data-testid="skills-section"]').should('be.visible')
  })
}) 