import { DjlxsNg2AdminPage } from './app.po';

describe('djlxs-ng2-admin App', () => {
  let page: DjlxsNg2AdminPage;

  beforeEach(() => {
    page = new DjlxsNg2AdminPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
