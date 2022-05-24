describe('TryAgain component', () => {
  beforeEach(() => cy.visit(`/iframe.html?id=tryagain--primary`));

    it('should render the component', () => {
      cy.contains("TryAgain");
    });
});
