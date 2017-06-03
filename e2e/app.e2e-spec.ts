import { ZebramailPwaPage } from './app.po';

describe('zebramail-pwa App', () => {
  let page: ZebramailPwaPage;

  beforeEach(() => {
    page = new ZebramailPwaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
