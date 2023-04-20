import { Component, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
const dummyContainer = document.createDocumentFragment();
export class OffscreenFragmentComponent {
    constructor(element) {
        this.element = element;
    }
    ngAfterViewInit() {
        dummyContainer.appendChild(this.element.nativeElement);
    }
    // invoked BEFORE component removed from DOM
    ngOnDestroy() {
        dummyContainer.removeChild(this.element.nativeElement);
    }
}
OffscreenFragmentComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: OffscreenFragmentComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
OffscreenFragmentComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: OffscreenFragmentComponent, selector: "offscreen-fragment", ngImport: i0, template: '<ng-content></ng-content>', isInline: true, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: OffscreenFragmentComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'offscreen-fragment',
                    template: '<ng-content></ng-content>',
                    encapsulation: ViewEncapsulation.None
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2Zmc2NyZWVuLWZyYWdtZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9zcmMvdXRpbHMvb2Zmc2NyZWVuLWZyYWdtZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULGlCQUFpQixFQUlsQixNQUFNLGVBQWUsQ0FBQzs7QUFFdkIsTUFBTSxjQUFjLEdBQUcsUUFBUSxDQUFDLHNCQUFzQixFQUFFLENBQUE7QUFPeEQsTUFBTSxPQUFPLDBCQUEwQjtJQUNyQyxZQUFvQixPQUFtQjtRQUFuQixZQUFPLEdBQVAsT0FBTyxDQUFZO0lBQ3ZDLENBQUM7SUFFRCxlQUFlO1FBQ2IsY0FBYyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFBO0lBQ3hELENBQUM7SUFFRCw0Q0FBNEM7SUFDNUMsV0FBVztRQUNULGNBQWMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQTtJQUN4RCxDQUFDOzt3SEFYVSwwQkFBMEI7NEdBQTFCLDBCQUEwQiwwREFIM0IsMkJBQTJCOzRGQUcxQiwwQkFBMEI7a0JBTHRDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsUUFBUSxFQUFFLDJCQUEyQjtvQkFDckMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgT25EZXN0cm95LFxuICBFbGVtZW50UmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5jb25zdCBkdW1teUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdvZmZzY3JlZW4tZnJhZ21lbnQnLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIE9mZnNjcmVlbkZyYWdtZW50Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmKSB7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgZHVtbXlDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpXG4gIH1cblxuICAvLyBpbnZva2VkIEJFRk9SRSBjb21wb25lbnQgcmVtb3ZlZCBmcm9tIERPTVxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBkdW1teUNvbnRhaW5lci5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudClcbiAgfVxufVxuIl19