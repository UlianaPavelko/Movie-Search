import { MovieSearchPage } from './movie-search.po';

describe('workspace-project App', () => {
  let page: MovieSearchPage;

  beforeEach(() => {
    page = new MovieSearchPage();
  });

  it('should display list of movies', () => {
    page.navigateTo();
    page.getMovieSearchInput().sendKeys('ava');
    page.getSleep();

    expect(page.getFirstResult().getText()).toBe('Ava');
  });

  it('should display movie page', () => {
    page.navigateTo();
    page.getMovieSearchInput().sendKeys('ava');
    page.getSleep();
    page.getFirstResult().click();
    page.getSleep();

    expect(page.getMoviePageTitle().getText()).toBe('Ava');
  });
});
