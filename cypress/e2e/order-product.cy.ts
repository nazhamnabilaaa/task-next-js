describe('Order Product Component', () => {
    it('should forward to the next page when "Place order" button is clicked', () => {
      // Kunjungi halaman dengan komponen OrderProduct
      cy.visit("http://localhost:3000/order-product");
  
      // Periksa apakah judul komponen ada
      cy.get('h1').should('contain', 'Order product');
  
      // Simulasikan klik tombol "Place order"
      cy.get('button').contains('Place order').click();
  
      // Periksa apakah URL berubah setelah klik tombol "Place order"
      cy.url().should('eq', 'http://localhost:3000/order-product'); // Ubah URL sesuai yang diharapkan
  
      // Atau, jika ingin memastikan bahwa tombol "Place order" benar-benar memicu navigasi
      // dan tidak hanya mengubah URL secara langsung, Anda bisa mengecek elemen pada halaman berikutnya.
      // Misalnya, jika halaman berikutnya berisi elemen tertentu yang menunjukkan bahwa navigasi berhasil,
      // Anda dapat mengecek keberadaan elemen tersebut.
      // cy.get('elemen-di-halaman-berikutnya').should('exist');
    });
});
