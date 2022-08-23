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

    public getCityNameInput() {
        return this.cityNameInput()
    }

    public enterCityToTheSearch(city) {
        return this.getCityNameInput().type(city.cityName)
    }

    public clickOpenCalendar() {
        return this.checkField().click();
    }

    public clickSelectMonthCheckIn() {
        return this.nextMonthButton().click();
    }

    public clickSelectDateCheckIn() {
        return this.dateStartField().click()
    }

    public clickSelectDateCheckOut() {
        return this.dateEndField().click()
    }

    public getSearchButton(){
        return this.searchButton()
    }

    public clickSearchButton(){
        this.getSearchButton().click()
        this.waitForSeconds(1)
        return new SearchResultsStaysPage()
    }

    public clickOpenFlightsPage() {
        this.flightsLink().click()
        return new FlightsPage()
    }
}

