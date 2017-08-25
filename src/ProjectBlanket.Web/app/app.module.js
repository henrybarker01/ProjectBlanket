"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var ng2_bs3_modal_1 = require("ng2-bs3-modal/ng2-bs3-modal");
var http_1 = require("@angular/http");
var app_routing_1 = require("./app.routing");
var user_component_1 = require("./components/user.component");
var home_component_1 = require("./components/home.component");
var top_navigation_component_1 = require("./components/top-navigation/top-navigation.component");
var contract_review_component_1 = require("./components/contract-review/contract-review.component");
var quotes_component_1 = require("./components/quotes/quotes.component");
var user_service_1 = require("./Service/user.service");
var side_list_component_1 = require("./components/side-list/side-list.component");
var register_component_1 = require("./components/security/register/register.component");
var quote_service_1 = require("./Service/quote.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.ReactiveFormsModule, http_1.HttpModule, app_routing_1.routing, ng2_bs3_modal_1.Ng2Bs3ModalModule],
        declarations: [app_component_1.AppComponent, user_component_1.UserComponent, home_component_1.HomeComponent, top_navigation_component_1.TopNavigationComponent, quotes_component_1.QuotesComponent, contract_review_component_1.ContractReviewComponent, side_list_component_1.SideListComponent, register_component_1.RegisterComponent],
        providers: [{ provide: common_1.APP_BASE_HREF, useValue: '/' }, user_service_1.UserService, quote_service_1.QuoteService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map