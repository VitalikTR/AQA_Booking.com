import basePage from "./basePage";
import {SearchResultsStaysPage} from "./searchResultsStaysPage";
import {FlightsPage} from "./flightsPage";

export class StaysPage extends basePage {

    public urlPage() { return cy.url(); }
    public logoApp() { return cy.get(".-streamline-booking_logo_dark_bg_mono"); }
    public languageApp() { return cy.xpath("//img[@class='bui-avatar__image']"); }
    public cityNameInput() { return cy.xpath("//input[@id='ss']"); }
    public checkField() { return cy.get(".xp__dates"); }
    public nextMonthButton() { return cy.xpath("//div[@data-bui-ref='calendar-next']"); }
    public dateStartField() { return cy.xpath("//span[@aria-label='1 December 2022']"); }
    public dateEndField() { return cy.xpath("//span[@aria-label='30 December 2022']"); }
    public searchButton() { return cy.xpath("//button[@data-sb-id='main']"); }
    public flightsLink() { return cy.xpath("//a[@data-decider-header='flights']"); }


    public open() {
        super.goto(Cypress.env("UI_HOST"));
        this.waitForSeconds(1);
        return this;
    }

    public getUrlPage(){
        return this.urlPage();
    }

    public getLogoApp(){
        return this.logoApp();
    }

    public getLanguageApp(){
        return this.languageApp();
    }

    public enterCityToTheSearch(city) {
        this.cityNameInput().type(city.cityName)
            return this
    }

    public clickOpenCalendar() {
        this.checkField().click();
            return this
    }

    public clickSelectMonthCheckIn() {
        this.nextMonthButton().click();
            return this
    }

    public clickSelectDateCheckIn() {
        this.dateStartField().click()
            return this
    }

    public clickSelectDateCheckOut() {
        this.dateEndField().click()
            return this
    }

    public clickSearchButton(){
        this.searchButton().click()
        this.waitForSeconds(1)
            return new SearchResultsStaysPage()
    }

    public clickOpenFlightsPage() {
        this.flightsLink().click()
            return new FlightsPage()
    }
}

