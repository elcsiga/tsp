import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from './project-card.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';



@NgModule({
  declarations: [ProjectCardComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule
  ],
  exports: [ProjectCardComponent]
})
export class ProjectCardModule { }
