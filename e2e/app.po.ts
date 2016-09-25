import { browser, element, by } from 'protractor/globals';

export class AngCalculatorPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('Calc-root h1')).getText();
  }
}
