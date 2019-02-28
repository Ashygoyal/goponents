/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { GoModalItem } from './go-modal.item';
import { Subject } from 'rxjs/internal/Subject';
var GoModalService = /** @class */ (function () {
    function GoModalService() {
        this.activeModalComponent = new Subject();
        this.modalOpen = new Subject();
        this.modalOpen.next(false);
    }
    /**
     * @param {?} component
     * @param {?} bindings
     * @return {?}
     */
    GoModalService.prototype.openModal = /**
     * @param {?} component
     * @param {?} bindings
     * @return {?}
     */
    function (component, bindings) {
        this.setComponent(component, bindings);
        this.toggleModal(true);
    };
    /**
     * @param {?} component
     * @param {?} bindings
     * @return {?}
     */
    GoModalService.prototype.setComponent = /**
     * @param {?} component
     * @param {?} bindings
     * @return {?}
     */
    function (component, bindings) {
        this.activeModalComponent.next(new GoModalItem(component, bindings));
    };
    /**
     * @param {?=} open
     * @return {?}
     */
    GoModalService.prototype.toggleModal = /**
     * @param {?=} open
     * @return {?}
     */
    function (open) {
        if (open === void 0) { open = true; }
        this.modalOpen.next(open);
    };
    GoModalService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    GoModalService.ctorParameters = function () { return []; };
    return GoModalService;
}());
export { GoModalService };
if (false) {
    /** @type {?} */
    GoModalService.prototype.activeModalComponent;
    /** @type {?} */
    GoModalService.prototype.modalOpen;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ28tbW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dvcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2dvLW1vZGFsL2dvLW1vZGFsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVoRDtJQU1FO1FBSEEseUJBQW9CLEdBQXlCLElBQUksT0FBTyxFQUFlLENBQUM7UUFDeEUsY0FBUyxHQUFxQixJQUFJLE9BQU8sRUFBVyxDQUFDO1FBR25ELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLENBQUM7Ozs7OztJQUVELGtDQUFTOzs7OztJQUFULFVBQVUsU0FBYyxFQUFFLFFBQVk7UUFDcEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QixDQUFDOzs7Ozs7SUFFRCxxQ0FBWTs7Ozs7SUFBWixVQUFhLFNBQWMsRUFBRSxRQUFZO1FBQ3ZDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxXQUFXLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDdkUsQ0FBQzs7Ozs7SUFFRCxvQ0FBVzs7OztJQUFYLFVBQVksSUFBb0I7UUFBcEIscUJBQUEsRUFBQSxXQUFvQjtRQUM5QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDOztnQkFyQkYsVUFBVTs7OztJQXNCWCxxQkFBQztDQUFBLEFBdEJELElBc0JDO1NBckJZLGNBQWM7OztJQUV6Qiw4Q0FBd0U7O0lBQ3hFLG1DQUFxRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgR29Nb2RhbEl0ZW0gfSBmcm9tICcuL2dvLW1vZGFsLml0ZW0nO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMvaW50ZXJuYWwvU3ViamVjdCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBHb01vZGFsU2VydmljZSB7XG5cbiAgYWN0aXZlTW9kYWxDb21wb25lbnQ6IFN1YmplY3Q8R29Nb2RhbEl0ZW0+ID0gbmV3IFN1YmplY3Q8R29Nb2RhbEl0ZW0+KCk7XG4gIG1vZGFsT3BlbjogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5tb2RhbE9wZW4ubmV4dChmYWxzZSk7XG4gIH1cblxuICBvcGVuTW9kYWwoY29tcG9uZW50OiBhbnksIGJpbmRpbmdzOiB7fSkgOiB2b2lkIHtcbiAgICB0aGlzLnNldENvbXBvbmVudChjb21wb25lbnQsIGJpbmRpbmdzKTtcbiAgICB0aGlzLnRvZ2dsZU1vZGFsKHRydWUpO1xuICB9XG5cbiAgc2V0Q29tcG9uZW50KGNvbXBvbmVudDogYW55LCBiaW5kaW5nczoge30pIDogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmVNb2RhbENvbXBvbmVudC5uZXh0KG5ldyBHb01vZGFsSXRlbShjb21wb25lbnQsIGJpbmRpbmdzKSk7XG4gIH1cblxuICB0b2dnbGVNb2RhbChvcGVuOiBib29sZWFuID0gdHJ1ZSkgOiB2b2lkIHtcbiAgICB0aGlzLm1vZGFsT3Blbi5uZXh0KG9wZW4pO1xuICB9XG59XG4iXX0=