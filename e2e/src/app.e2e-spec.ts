import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Página Inicial');
  });

  it('should execute CRUD on restaurants page', () => {
    page.navigateTo('restaurants');
    expect(page.getParagraphText()).toEqual('Gerenciar Restaurantes');
  });
});
