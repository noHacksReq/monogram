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
    //subscribe section
    readonly subscribe: Locator;
    readonly subscribeTitle: Locator;
    readonly subscribeMsg: Locator;
    readonly subscribeEmailField: Locator;
    readonly subscribeEmailBtn: Locator;
    readonly camIcon: Locator;
    readonly twitIcon: Locator;
    readonly fbIcon: Locator;
    readonly ytIcon: Locator;
    readonly copyright: Locator;

    //prodct section
    readonly prodContainer: Locator;
    readonly prodCardContainer: Locator;
    readonly prodCard1: Locator;
    readonly prodCard2: Locator;
    readonly prodCard3: Locator;
    readonly prodCard4: Locator;


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

        //subscribe sectopn
        this.subscribeCont = page.getByTestId('subscribeFooter');
        this.subscribeTitle = page.getByTestId('subscribeFooter').getByText('SUBSCRIBE TO MONOGRAM');
        this.subscribeMsg = page.getByTestId('subscribeFooter')
        .getByText('Master productivity with Creative Console and get all the latest Monogram news.');
        this.subscribeEmailField = page.getByPlaceholder('Email Address');
        this.subscribeEmailBtn = page.getByRole('button', {name: 'Submit'});
        this.camIcon = page.getByTestId('camIcon');
        this.twitIcon = page.getByTestId('twitIcon');
        this.fbIcon = page.getByTestId('fbIcon');
        this.ytIcon = page.getByTestId('ytIcon');
        this.copyright = page.getByTestId('copyright');

        // products section
        this.prodContainer = page.getByTestId('prodContainer');
        this.prodCardContainer = page.getByTestId('prodCardContainer');
        this.prodCard1 = page.getByTestId('ProdCard1');
        this.prodCard2 = page.getByTestId('ProdCard2');
        this.prodCard3 = page.getByTestId('ProdCard3');
        this.prodCard4 = page.getByTestId('ProdCard4');

    }
}