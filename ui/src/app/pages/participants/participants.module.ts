import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParticipantsComponent } from './participants.component';
import { ParticipantCardModule } from 'src/app/components/participant-card/participant-card.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AnimatedListModule } from 'src/app/components/common/animated-list/animated-list.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ParticipantsComponent],
  imports: [
    CommonModule,
    ParticipantCardModule,
    NgZorroAntdModule,
    AnimatedListModule,
    RouterModule
  ], exports: [
    ParticipantsComponent
  ]
})
export class ParticipantsModule { }
