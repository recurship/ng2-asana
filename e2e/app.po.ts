export class Ng2AsanaPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ng2-asana-app h1')).getText();
  }
}
