import { Page, Locator } from '@playwright/test';

export class LocatorPage {
    readonly page: Page;
    //footer locators
    readonly mainFooter: Locator;

    constructor(page: Page){
        this.page = page;
       
        this.mainFooter = page.getByTitle('mainFooter');
    }
}