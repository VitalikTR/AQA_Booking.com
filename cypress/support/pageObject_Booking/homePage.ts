import basePage from "./basePage";

export class HomePage extends basePage {

    public urlPage() {return cy.url();}
    public  logoApp() {return cy.get(".-streamline-booking_logo_dark_bg_mono");}
    public languageApp() {return cy.xpath("//*[@class='bui-avatar__image']")}

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
}

