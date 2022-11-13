describe('Set Deadline', () => {
    it('set Deadline', () => {
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
            .get("#set-deadline")
            .click()

        cy
            .url()
            .should('include', '/set-deadline')

        // select a year
        cy
            .get('#year')
            .parent()
            .click()
            .get('ul > li[data-value="2022"]')
            .click()

        // select a month
        cy
            .get('#month')
            .parent()
            .click()
            .get('ul > li[data-value="12"]')
            .click()

        // input deadline
        cy
            .get("#date")
            .type("2022-11-30")

        // click set deadline button
        cy
            .get("#set-deadline-btn")
            .click()

        cy
            .url()
            .should('include', '/ConsultantDashboard')
    })
})