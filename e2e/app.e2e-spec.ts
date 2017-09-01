import { IBase4JUIAngularJS2Page } from './app.po';

describe('i-base4-j-ui-angular-js2 App', function() {
  let page: IBase4JUIAngularJS2Page;

  beforeEach(() => {
    page = new IBase4JUIAngularJS2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
