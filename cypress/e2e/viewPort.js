class ViewPort {
//  method responsible for site opening
    constructor() {
        this.viewports = [
            { width: 1280, height: 720 }, // Desktop
           {width: 768, height: 1024},  // Tablet
             { width: 375, height: 667 }   // Mobile
        ];
    }
}
export default ViewPort;