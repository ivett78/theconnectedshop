import HomePage from "../support/pages/homePage";
import SideBarMenu from "../support/pages/sideBarMenu";
import ViewPort from "./viewPort";
import PopUps from "./popUps";


describe('Add product to cart on The Connected Shop', () => {
    const homePage = new HomePage();
    const sidebarMenu = new SideBarMenu();
    const viewPort= new ViewPort();
    const popUps  = new PopUps();
    viewPort.viewports.forEach((viewport) => {
        it(`should add product to cart on ${viewport.width}x${viewport.height} screen`, () => {

            cy.viewport(viewport.width, viewport.height);
            homePage.visitSite();
            homePage.checkUrlHomepage();
            homePage.checkTitleHomePage();
            homePage.checkLogo();
// sidebar menu button check
//            homePage.checkSidebarMenuItem();
// search element icon check
//            homePage.checkSearchElementIcon();

 //           sidebarMenu.findHeaderIcon();
 //           sidebarMenu.collapseSideBarMenu();
// button product form check
 //           home

//Connecting Add To card popup
            //       cy.get('body')
            //           .should('be.visible');
        })
    })
})