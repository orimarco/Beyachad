import { BeyachadPage } from './app.po';

describe('beyachad App', function() {
  let page: BeyachadPage;

  beforeEach(() => {
    page = new BeyachadPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
