import { Directive } from '@angular/core';

@Directive({
  selector: '[appStudents]'
})
export class StudentsDirective {

  constructor() {

    console.log("directiva inicializada");

  }

}
