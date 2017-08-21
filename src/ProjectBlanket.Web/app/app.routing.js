"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var user_component_1 = require("./components/user.component");
var home_component_1 = require("./components/home.component");
var quotes_component_1 = require("./components/quotes/quotes.component");
var contract_review_component_1 = require("./components/contract-review/contract-review.component");
var register_component_1 = require("./components/security/register/register.component");
var appRoutes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: 'dashboard', component: home_component_1.HomeComponent },
    { path: 'user', component: user_component_1.UserComponent },
    { path: 'quotes', component: quotes_component_1.QuotesComponent },
    { path: 'contract-review', component: contract_review_component_1.ContractReviewComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map