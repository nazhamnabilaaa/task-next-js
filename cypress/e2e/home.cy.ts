describe('Home Component Navigation', () => {
    it('should navigate to the correct pages when links are clicked', () => {
      // Kunjungi halaman dengan komponen Home
      cy.visit("http://localhost:3000");
  
      // Periksa apakah judul komponen ada
      cy.get('h1').should('contain', 'Welcome Home!');
  
      // Klik tautan "Blog"
      cy.contains('Blog').click();
  
      // Periksa apakah pengguna diarahkan ke halaman Blog
      cy.url().should('include', 'http://localhost:3000/blog');
  
      // Kembali ke halaman Home
      cy.go('back');
  
      // Klik tautan "Products"
      cy.contains('Products').click();
  
      // Periksa apakah pengguna diarahkan ke halaman Products
      cy.url().should('include', 'http://localhost:3000/products');
    });
  });
  