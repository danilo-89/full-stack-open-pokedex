describe('Pokedex', function () {
  it('front page can be opened', function () {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains(
      'Pokémon and Pokémon character names are trademarks of Nintendo.'
    )
  })

  it('page of a particular Pokemon can be navigated from the main page', function () {
    cy.visit('http://localhost:5000')
    cy.get('a').contains('ivysaur').click()
    cy.contains('chlorophyll')
  })
})
