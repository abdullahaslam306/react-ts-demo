export class Router {
    handleRequest() {
        console.log('Handling route' + this.getRoute());
    }
    getRoute() {
        return window.location.pathname;
    }
}
//# sourceMappingURL=Router.js.map