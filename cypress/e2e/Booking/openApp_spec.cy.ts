import {StaysPage} from "../../support/pageObject_Booking/staysPage";

describe('Test suite for checking a user opened the application', () => {
    let homePage = new StaysPage();

    before('Opened the application', () => {
        cy.log('Start')
        homePage.open();
    });

        it('Verify the URL of the home page', () => {
            homePage
                .getUrlPage().should('eq', Cypress.env("UI_HOST"))
        });

        it('Verify the logo App is displayed on the main page', () => {
            homePage
                .getLogoApp().should('be.visible');
        });

        it('Verify the App language ', () => {
            homePage
                .getLanguageApp()
                    .should('be.visible')
                    .should('have.attr', 'src')
                    .and('contain', 'https://cf.bstatic.com/static/img/flags/new/48-squared/us');
        });

    after(() => {
        cy.log('Finish')
    });
});