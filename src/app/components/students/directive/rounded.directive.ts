import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRounded]'
})
export class RoundedDirective {

  constructor(elementRef: ElementRef, renderer: Renderer2) {

    console.log("elementRef", elementRef); // Es mi referencia al DOM. Eso uso en el renderer

    renderer.setStyle(elementRef.nativeElement, 'background-color', 'yellow') // el (The element.): any, style (The name of the style.): string, value (The new value.) : any, flags?: RendererStyleFlags2 - 

    renderer.setStyle(elementRef.nativeElement, 'border-radius', '25px')
    renderer.setStyle(elementRef.nativeElement, 'padding', '25px')

  }

}
