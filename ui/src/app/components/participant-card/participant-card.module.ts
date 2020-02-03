import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParticipantCardComponent } from './participant-card.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ParticipantCardComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    RouterModule
  ],
  exports: [ParticipantCardComponent]
})
export class ParticipantCardModule { }
