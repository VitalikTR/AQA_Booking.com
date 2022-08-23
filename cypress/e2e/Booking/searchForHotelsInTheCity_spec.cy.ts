import {StaysPage} from "../../support/pageObject_Booking/staysPage";
import {SearchResultsStaysPage} from "../../support/pageObject_Booking/searchResultsStaysPage";
import city from "../../data/Booking/city";

describe('Test suite search for hotels in the city', () => {
    let staysPage = new StaysPage();
    let searchResultsStaysPage = new SearchResultsStaysPage();

    before('Opened the application', () => {
        staysPage.open();
    });

        it('Verify a user can search for hotels in the city', () => {
            staysPage
                .enterCityToTheSearch(city.cityStays);
            staysPage
                .clickOpenCalendar().should('be.visible');
            staysPage
                .clickSelectMonthCheckIn()
            staysPage
                .clickSelectMonthCheckIn()
            staysPage
                .clickSelectMonthCheckIn()
            staysPage
                .clickSelectDateCheckIn()
            staysPage
                .clickSelectDateCheckOut()
            staysPage
                .clickSearchButton()
           searchResultsStaysPage
                .getSearchLabel().then((element) =>{cy.log(element.text())})
        });

        it('Checking search results', () => {
            searchResultsStaysPage
                .verifyAddressOfSearchResult().each((element) => {
                    expect(element.text()).to.be.contain('New York')})
            searchResultsStaysPage
                .verifyNumberOfNights().each((element) => {
                    expect(element.text()).to.be.contain('29 nights')})
        });
});