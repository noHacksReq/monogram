import { Page, Locator } from '@playwright/test';

export class LocatorPage {
    readonly page: Page;
    //footer locators
    readonly mainFooter: Locator;
    readonly addressCont: Locator;
    readonly addressTitle: Locator;
    readonly addressField: Locator;
    readonly quickLinks: Locator;
    readonly homeLink: Locator;
    readonly howItWorksLink: Locator;
    readonly shopLink: Locator;
    readonly downloadLink: Locator;

    constructor(page: Page){
        this.page = page;
       
        //footer locators
        this.mainFooter = page.getByTitle('mainFooter');
        this.addressCont = page.getByTestId('address');
        this.addressTitle = page.getByTestId('addressTitle');
        this.addressField = page.getByTestId('addressField');

        this.quickLinks =  page.getByText('QUICK LINKS');
        this.homeLink = page.getByRole('listItem').filter({hasText: 'Home'});
        this.howItWorksLink = page.locator('[data-test="monoInfo"]').getByRole('listitem').filter({ hasText: 'How it works' });
        this.shopLink = page.locator('[data-test="monoInfo"]').getByRole('listitem').filter({ hasText: 'Shop' })
        this.downloadLink = page.getByRole('listItem').filter({hasText: 'Download'});
    }
}