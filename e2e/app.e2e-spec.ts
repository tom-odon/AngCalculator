import { AngCalculatorPage } from './app.po';

describe('ang-calculator App', function() {
  let page: AngCalculatorPage;

  beforeEach(() => {
    page = new AngCalculatorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Calc works!');
  });
});
