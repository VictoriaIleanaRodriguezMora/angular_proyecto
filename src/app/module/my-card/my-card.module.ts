import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCardComponent } from '../../shared/components/my-card/my-card.component';



@NgModule({
  declarations: [MyCardComponent],
  imports: [CommonModule],
  exports: [MyCardComponent]
})
export class MyCardModule { }
