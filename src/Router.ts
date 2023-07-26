export class Router {
    public handleRequest() {
        console.log('Handling route'+ this.getRoute())
    }
    private getRoute():string {
        return window.location.pathname
    }
}