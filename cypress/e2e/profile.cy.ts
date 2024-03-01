describe('Test profile', () => {
    it ('test nested route', () => { //desc apa yang mau di test
        cy.visit("http://localhost:3000/profile")
        cy.get('h1').contains('My Profile') 
        
    })
})