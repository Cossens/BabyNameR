import { BabyNameRPage } from './app.po';

describe('baby-name-r App', function() {
  let page: BabyNameRPage;

  beforeEach(() => {
    page = new BabyNameRPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
