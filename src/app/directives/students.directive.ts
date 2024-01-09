import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStudents]'
})
export class StudentsDirective {

  constructor(elementRef: ElementRef, renderer: Renderer2) {

    console.log("directiva inicializada");
    console.log("elementRef ---> ", elementRef);
    renderer.setStyle(elementRef.nativeElement, "background-color", "yellow");
    renderer.setStyle(elementRef.nativeElement, "border-radius", "25px")
  }

}
