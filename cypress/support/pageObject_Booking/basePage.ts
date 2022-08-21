export default abstract class  basePage{

    public waitForSeconds(secondsToWait :number) {
        cy.wait(secondsToWait * 1000);
        return this
    }

    protected goto(url) {
        cy.visit(url, {failOnStatusCode: false});
        return this
    }
}