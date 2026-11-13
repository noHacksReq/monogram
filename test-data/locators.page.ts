import { Page, Locator } from '@playwright/test';

export class LocatorPage {
    readonly page: Page;
    //footer locators
    readonly mainFooter: Locator;
    readonly addressCont: Locator;
    readonly addressTitle: Locator;
    readonly addressField: Locator;
    //quick links list
    readonly quickLinks: Locator;
    readonly homeLink: Locator;
    readonly howItWorksLink: Locator;
    readonly shopLink: Locator;
    readonly downloadLink: Locator;
    //help list
    readonly helpList: Locator;
    readonly FAQ: Locator;
    readonly supportCent: Locator;
    readonly shipNSales: Locator;

    //info list
    readonly infoContainer: Locator;
    readonly aboutUs: Locator;
    readonly workWus: Locator;
    readonly privacy: Locator;
    readonly termsOfUse: Locator;
    readonly termsOfSale: Locator;
    readonly pressKit: Locator;

    constructor(page: Page){
        this.page = page;
       
        // footer locators
        this.mainFooter = page.getByTitle('mainFooter');
        this.addressCont = page.getByTestId('address');
        this.addressTitle = page.getByTestId('addressTitle');
        this.addressField = page.getByTestId('addressField');
        // quick links list
        this.quickLinks = page.getByTestId('quickLinks');
        this.homeLink = page.getByTestId('quickLinksLi')
        .getByRole('listitem').filter({ hasText: 'Home' });
        this.howItWorksLink = page.getByTestId('quickLinksLi')
        .getByRole('listitem').filter( { hasText: 'How it works'});
        
        this.shopLink = page.getByTestId('quickLinksLi')
        .getByRole('listitem').filter( {hasText: 'Shop' });
        this.downloadLink = page.getByTestId('quickLinksLi')
        .getByRole('listitem').filter( { hasText: 'Download' });
        
        // help list
        this.helpList = page.locator('[data-test="mainFooter"]').getByText('help');
        this.FAQ = page.locator('[data-test="mainFooter"]')
        .getByRole('listitem').filter({hasText: 'FAQ'});
        this.supportCent = page.locator('[data-test="mainFooter"]')
        .getByRole('listitem').filter({hasText: 'Support Center'});
        this.shipNSales = page.locator('[data-test="mainFooter"]')
        .getByRole('listitem').filter( {hasText: 'Shipping and Sales'});

        // info list
        this.infoContainer = page.getByTestId('infoCont');
        this.aboutUs = page.getByTestId('infoList')
        .getByRole('listitem').filter({ hasText: 'About Us'});
        this.workWus = page.getByTestId('infoList')
        .getByRole('listitem').filter( {hasText: 'Work With Us'} );
        this.privacy = page.getByTestId('infoList')
        .getByRole('listitem').filter({ hasText: 'Privacy Policy' });
        this.termsOfUse = page.getByTestId('infoList')
        .getByRole('listitem').filter({ hasText: 'Terms of Use'});
        this.termsOfSale = page.getByTestId('infoList')
        .getByRole('listitem').filter({ hasText: 'Terms of Sale'});
        this.pressKit = page.getByTestId('infoList')
        .getByRole('listitem').filter({ hasText: 'Press Kit'});

    }
}