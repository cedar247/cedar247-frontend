describe('View Doctors', () => {
    it('view doctors', () => {
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
    
        cy
            .get('#sidebar-btn')
            .click()

        cy
            .get("#view-doctors")
            .click()

        cy
            .url()
            .should('include', '/view-doctors')

    })
})