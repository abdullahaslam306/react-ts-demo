import { Router } from "./Router";
export class Main {
    constructor() {
        this.router = new Router();
        console.log("Constructed new item");
    }
    launchApp() {
        this.router.handleRequest();
    }
}
new Main().launchApp();
//# sourceMappingURL=Main.js.map