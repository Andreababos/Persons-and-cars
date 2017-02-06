import { PersonsAndCarsPage } from './app.po';

describe('persons-and-cars App', function() {
  let page: PersonsAndCarsPage;

  beforeEach(() => {
    page = new PersonsAndCarsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
