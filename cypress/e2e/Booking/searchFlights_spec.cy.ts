import {StaysPage} from "../../support/pageObject_Booking/staysPage";
import {FlightsPage} from "../../support/pageObject_Booking/flightsPage";
import city from "../../data/Booking/city";

describe('Test suite search flights', () => {
    let staysPage = new StaysPage();
    let flightsPage = new FlightsPage();

    before('Opened the application', () => {
        staysPage.open().clickOpenFlightsPage();
    });

        it('Verify a user can search flights', () => {
            flightsPage
                .waitForSeconds(1)
                .clickChangeTripLabel()
                .clickWhereFromField()
                .clickClearInput()
                .waitForSeconds(1)
                .enterWhereFromCity(city.cityFlights)
                .choiceCity().click()
            flightsPage
                .enterWhereToCity((city.cityFlights))
                .choiceCity().click()
            flightsPage
                .clickOpenCalendar()
                .clickSelectDateDepart()
                .clickSearchButton()
        });

    it('Checking search results', () => {
        flightsPage
            .verifyDateDepartInSearchResults().each((element) => {
            expect(element.text()).to.be.contain('30')})
    });

});