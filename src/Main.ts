import { Router } from "./Router";

export class Main{
    private router: Router = new Router()
    public constructor() {
        console.log("Constructed new item")
    }
    public launchApp(){
        this.router.handleRequest();
    }
}
new Main().launchApp();