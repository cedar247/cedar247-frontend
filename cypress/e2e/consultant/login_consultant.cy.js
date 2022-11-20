describe('Login Page Consultant', () => {
    it('successfully loads', () => {
      cy.visit('/signIn') // change URL to match your dev URL

      cy.get('button')

      cy
        .get('.email')
        .type("hvijayarathna@gmail.com")

      cy
        .get('.password')
        .type("Password@123")

      cy
        .get('.sign-in')
        .click()

      cy
        .url()
        .should('include', '/ConsultantDashboard')
    })
  })