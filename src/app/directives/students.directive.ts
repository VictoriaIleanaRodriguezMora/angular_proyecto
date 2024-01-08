import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appStudents]'
})
export class StudentsDirective {

  constructor(elementRef: ElementRef) {

    console.log("directiva inicializada");
    console.log("elementRef ---> ", elementRef);


  }

}
