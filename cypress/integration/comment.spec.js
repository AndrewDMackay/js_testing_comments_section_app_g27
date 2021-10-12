
describe('App', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it("Loads the app", () => {
        const counter = cy.get('h1')
    })

    it("should have pre-populated comments", () => {
        const commentListItems = cy.get('#comment-list > li')
        commentListItems.should('have.length', 2)
    })

    it("should be able to add a comment", () => {
        cy.get('#name-input').type("Craig Gough..")
        cy.get('#comment-input').type("This is a test..")
        cy.get('#comment-form').submit()
        const commentListItems = cy.get('#comment-list > li')
        commentListItems.should('have.length', 3)
    })

})

