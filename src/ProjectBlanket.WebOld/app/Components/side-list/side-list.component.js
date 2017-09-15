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
//import { Sidelist } from '../../Model/SideMenuList/side-list';
var SideListComponent = (function () {
    function SideListComponent(fb) {
        this.fb = fb;
        this.sideListIsPinned = false;
        this.result = new core_1.EventEmitter();
    }
    SideListComponent.prototype.ngOnInit = function () {
        this.sideListForm = this.fb.group({
            Search: ['']
        });
        this.displayItemList = this.itemList;
    };
    SideListComponent.prototype.routeTo = function (key) {
        this.result.emit(key);
    };
    SideListComponent.prototype.pinSideList = function () {
        this.sideListIsPinned = !this.sideListIsPinned;
    };
    SideListComponent.prototype.filterList = function (value) {
        this.displayItemList = this.itemList.filter(function (item) { return item.name.toUpperCase().includes(value.toUpperCase()); });
    };
    return SideListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SideListComponent.prototype, "listHeading", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], SideListComponent.prototype, "itemList", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SideListComponent.prototype, "result", void 0);
SideListComponent = __decorate([
    core_1.Component({
        selector: 'side-list',
        templateUrl: 'app/components/side-list/side-list.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], SideListComponent);
exports.SideListComponent = SideListComponent;
//# sourceMappingURL=side-list.component.js.map