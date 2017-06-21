import { TamrielPage } from './app.po';

describe('tamriel App', () => {
  let page: TamrielPage;

  beforeEach(() => {
	page = new TamrielPage();
  });

  it('should display welcome message', () => {
	page.navigateTo();
	expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
