"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var global_1 = require("../Shared/global");
var AuthenticationService = (function () {
    function AuthenticationService(_http) {
        this._http = _http;
    }
    AuthenticationService.prototype.login = function (username, password) {
        return this.getUserToken(username, password).map(function (response) {
            sessionStorage.removeItem('accessToken');
            sessionStorage.setItem('accessToken', response.json().access_token);
            return true;
        });
    };
    AuthenticationService.prototype.getUserToken = function (userName, password) {
        var user = 'userName=' +
            encodeURIComponent(userName) +
            '&password=' +
            encodeURIComponent(password) +
            '&grant_type=password';
        // return this.http.post(Global.BASE_USER_ENDPOINT + 'Token', user);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.post(global_1.Global.BASE_USER_ENDPOINT + 'Token', user, options);
    };
    AuthenticationService.prototype.logout = function () {
        sessionStorage.removeItem('accessToken');
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AuthenticationService);
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map