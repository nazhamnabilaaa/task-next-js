describe('Test Routing', () => {
    it ('test nested route', () => { //desc apa yang mau di test
        cy.visit("http://localhost:3000/about")
        cy.get('h1').contains('About me') 
        
    })
})