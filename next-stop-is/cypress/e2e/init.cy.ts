describe('When the passenger sees the screen', () => {
	it('visits the page', () => {
		cy.visit('http://localhost:5173')

		cy.get('[data-testid="George-Message"]')
			.should('have.text', 'Hello World! It\'s George! Meow~~')
	})

})
