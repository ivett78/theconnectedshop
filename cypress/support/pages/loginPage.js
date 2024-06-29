import SideBarMenu from "./sideBarMenu";

class LoginPage {
//  method responsible for site opening
    visit() {
        cy.visit('https://shopify.com/52646707372/auth/lookup?destination_uuid=362416e9-c2ca-4783-85a6-6ec0bfc44d4e&redirect_uri=https%3A%2F%2Faccount.theconnectedshop.com%2Fcallback&rid=71a0495f-8b32-459b-b5c1-7e20a34718cf&ui_locales=en-NL&verify=1718706502-fbuS4Sof1gKOoOVsq8gc092weXRS1x%2FYjb%2F9WjP0Ifg%3D');
    }
}



export default LoginPage;