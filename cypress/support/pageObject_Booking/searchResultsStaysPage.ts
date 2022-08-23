import basePage from "./basePage";

export class SearchResultsStaysPage extends basePage {

    public searchLabel() { return cy.xpath("//h1[contains(text(),'New York:')]"); }
    public addressOfSearchResult() { return cy.xpath("//span[@data-testid='address']"); }
    public numberOfNights() { return cy.xpath("//div[@data-testid='price-for-x-nights']"); }

    public getSearchLabel(){
        return this.searchLabel();
    }

    public getAddressOfSearchResult(){
        return this.addressOfSearchResult();
    }

    public verifyAddressOfSearchResult(){
        return this.getAddressOfSearchResult();
    }

    public getNumberOfNights(){
        return this.numberOfNights();
    }

    public verifyNumberOfNights(){
        return this.getNumberOfNights();
    }
}

