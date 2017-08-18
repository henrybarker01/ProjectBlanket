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
var forms_1 = require("@angular/forms");
var QuotesComponent = (function () {
    function QuotesComponent(fb) {
        this.fb = fb;
    }
    QuotesComponent.prototype.ngOnInit = function () {
        this.quoteList = [{
                key: 1,
                name: 'Quote One'
            }, {
                key: 2,
                name: 'Quote Two'
            }];
    };
    QuotesComponent.prototype.ngOnChanges = function (val) {
        this.selectedQuoteId = val;
    };
    return QuotesComponent;
}());
QuotesComponent = __decorate([
    core_1.Component({
        selector: 'quotes',
        templateUrl: 'app/components/quotes/quotes.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], QuotesComponent);
exports.QuotesComponent = QuotesComponent;
//# sourceMappingURL=quotes.component.js.map