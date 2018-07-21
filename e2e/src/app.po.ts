import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(page = '') {
    return browser.get(`/${page}`);
  }

  getParagraphText() {
    return element(by.css('app-root span')).getText();
  }
}
