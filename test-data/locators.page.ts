import { Page, Locator } from '@playwright/test';

export class LocatorPage {
    readonly page: Page;
    //footer locators
    readonly mainFooter: Locator;
    readonly addressField: Locator;
    readonly addressTitle: Locator;

    constructor(page: Page){
        this.page = page;
       
        //footer locators
        this.mainFooter = page.getByTitle('mainFooter');
        this.addressField = page.getByTestId('address');
        this.addressTitle = page.getByTestId('addressTitle');

    }
}