import { Ng2AsanaPage } from './app.po';

describe('ng2-asana App', function() {
  let page: Ng2AsanaPage;

  beforeEach(() => {
    page = new Ng2AsanaPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ng2-asana works!');
  });
});
