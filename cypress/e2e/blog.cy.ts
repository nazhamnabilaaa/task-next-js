describe('Blog Page', () => {
    beforeEach(() => {
      // Setup test context, misalnya kunjungi halaman blog sebelum setiap tes
      cy.visit("http://localhost:3000/blog") // Sesuaikan dengan URL blog Anda
    })
  
    it('should display correct title', () => {
      cy.get('h1').should('contain', 'My Blog')
    })
  
    // Test lainnya bisa ditambahkan sesuai kebutuhan
  })
  