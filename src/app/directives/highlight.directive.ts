import { Directive, ElementRef, HostListener, HostBinding, Input } from "@angular/core";

@Directive({
    selector: '[app-highlight]'
})
export class HighlightDirective {

    @Input('myColor') myColor: any;

    @HostBinding('style.background-color') bgColor: any;

    @HostListener('mouseleave') mouseleave() {
        // this.elementRef.nativeElement.style.backgroundColor = "transparent";
        this.bgColor = "transparent";
    }
    @HostListener('mouseenter') mouseenter() {
        // console.log(this.bgColor);
        this.bgColor = this.myColor;
        // this.elementRef.nativeElement.style.backgroundColor = "aqua";
    }
    constructor(private elementRef: ElementRef) {
        // console.log(this.elementRef.nativeElement);
        // this.elementRef.nativeElement.style.backgroundColor = "aqua";
    }
}