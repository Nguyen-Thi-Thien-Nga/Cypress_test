describe('Login Test', () => {
    it('Login successfully', () => {
      cy.visit('https://demo.guru99.com/v4/')
      cy.get("input[name='uid']").type("mngr589400")
      cy.get("input[name='password']").type("arYtege")
      cy.get("input[type='submit']").click()
      cy.get('marquee.heading3').should('contain.text', "Welcome To Manager's Page of Guru99 Bank");
  
    })
  })