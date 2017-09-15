"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var user_component_1 = require("./components/user.component");
var quotes_component_1 = require("./components/quotes/quotes.component");
var contract_review_component_1 = require("./components/contract-review/contract-review.component");
var register_component_1 = require("./components/security/register/register.component");
var login_component_1 = require("./components/security/login/login.component");
var auth_1 = require("./Helpers/auth");
var appRoutes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'register', component: register_component_1.RegisterComponent },
    // { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
    { path: 'user', component: user_component_1.UserComponent, canActivate: [auth_1.AuthGuard] },
    { path: 'quotes', component: quotes_component_1.QuotesComponent, canActivate: [auth_1.AuthGuard] },
    { path: 'contract-review', component: contract_review_component_1.ContractReviewComponent, canActivate: [auth_1.AuthGuard] }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map