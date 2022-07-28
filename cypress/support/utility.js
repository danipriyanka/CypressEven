export class Utility {
    getBaseUrl() {
        let envi = Cypress.env('ENV'); 
        if (envi == 'production')
            return "https://www.proudction-website.com"; 
        else if (envi == 'staging')
            return "https://staging-website.com";
        else if (envi == 'qa')
            return "http://qa-website.com";
    }
}