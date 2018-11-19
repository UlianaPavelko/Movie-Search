import { browser, by, element } from 'protractor';

export class MovieSearchPage {
    navigateTo() {
        return browser.get('/');
    }

    getMovieSearchInput() {
        return element(by.css('.mat-input-element'));
    }

    getSleep() {
        browser.driver.sleep(500);
    }

    getFirstResult() {
        return element(by.css('.movie-title'));
    }

    getMoviePageTitle() {
        return element(by.css('.title'));
    }
}
