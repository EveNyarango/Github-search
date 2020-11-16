import { Directive,ElementRef, Renderer2, HostListener} from '@angular/core';

@Directive({
  selector: '[appHovering]'
})
export class HoveringDirective {

  constructor(private elem:ElementRef, private renderer:Renderer2) {}
   setColor(color: string) {
    this.renderer.setStyle(
      this.elem.nativeElement, 'backgroundColor', color
    );
  }
  @HostListener('mouseover')
  onMouseOver() {
    this.setColor('lightblue')
  }
  @HostListener('mouseout')
  onMouseOut() {
    this.setColor('lightcyan')
  }

}
