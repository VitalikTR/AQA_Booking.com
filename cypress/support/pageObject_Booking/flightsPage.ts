import basePage from "./basePage";
import {SearchResultsStaysPage} from "./searchResultsStaysPage";

export class FlightsPage extends  basePage {

    public tripLabel() { return cy.xpath("//div[@data-testid='searchbox_controller_trip_type_ONEWAY']"); }
    public whereFrom() { return cy.xpath("//div[@aria-label='Where from?']"); }
    public clearInput() { return cy.xpath("//span[@class='Icon-module__root___DweoM Icon-module__root--size-smaller___1beL5']"); }
    public choiceCity() { return cy.xpath("//span[contains(text(),'All airports')]"); }
    public whereFromInput() { return cy.xpath("//input[@placeholder='Where from?']"); }
    public whereToInput() { return cy.xpath("//input[@data-testid='searchbox_destination_input']"); }
    public dateDepartField() { return cy.xpath("//input[@placeholder='Depart']"); }
    public searchButton() { return cy.xpath("//button[@data-testid='searchbox_submit']"); }
    public dateDepart() { return cy.xpath("//span[@data-date-cell='2022-09-30']"); }
    public dateDepartInSearchResults() { return cy.xpath("//div[@data-testid='flight_card_segment_departure_date']"); }

    public clickChangeTripLabel(){
        this.tripLabel().click()
            return this
    }

    public clickWhereFromField() {
        this.whereFrom().click();
            return this
    }

    public clickClearInput() {
        this.clearInput().click();
            return this
    }

    public enterWhereFromCity(cityFrom) {
        this.whereFromInput().type(cityFrom.cityNameFrom);
            return this
    }

    public enterWhereToCity(cityTo) {
        this.whereToInput().type(cityTo.cityNameTo);
            return this
    }

    public clickOpenCalendar() {
        this.dateDepartField().click();
            return this
    }

    public clickSelectDateDepart() {
       this.dateDepart().click()
            return this
    }

    public clickSearchButton(){
        this.searchButton().click()
        this.waitForSeconds(1)
        return new SearchResultsStaysPage()
    }

    public verifyDateDepartInSearchResults(){
        return this.dateDepartInSearchResults();
    }
}