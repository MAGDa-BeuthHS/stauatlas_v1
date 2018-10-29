import { StauatlasPage } from './app.po';

describe('stauatlas App', function() {
  let page: StauatlasPage;

  beforeEach(() => {
    page = new StauatlasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
