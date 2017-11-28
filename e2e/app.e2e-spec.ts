import { CocktailsPage } from './app.po';

describe('cocktails App', () => {
  let page: CocktailsPage;

  beforeEach(() => {
    page = new CocktailsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
