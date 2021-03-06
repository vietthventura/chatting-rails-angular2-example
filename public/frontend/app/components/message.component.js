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
var core_1 = require('@angular/core');
var message_service_1 = require('../services/message.service');
var user_service_1 = require('../services/user.service');
var cable_service_1 = require('../services/cable.service');
var MessageComponent = (function () {
    function MessageComponent(userService, cableService, messageService) {
        this.userService = userService;
        this.cableService = cableService;
        this.messageService = messageService;
        setTimeout(function () { return $('#messages-content').scrollTop(100000000); }, 0);
    }
    MessageComponent.prototype.ngOnInit = function () {
        this.currentUser = currentUser;
    };
    MessageComponent.prototype.editAction = function () {
        this.cableService.eventNext('editMessage', this.message);
    };
    MessageComponent.prototype.removeAction = function () {
        this.cableService.eventEmit('removeMessage', this.message);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MessageComponent.prototype, "message", void 0);
    MessageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'message',
            templateUrl: '../views/message.component.html'
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, cable_service_1.CableService, message_service_1.MessageService])
    ], MessageComponent);
    return MessageComponent;
}());
exports.MessageComponent = MessageComponent;
//# sourceMappingURL=message.component.js.map