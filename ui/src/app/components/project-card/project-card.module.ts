import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from './project-card.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ProjectCardComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    RouterModule
  ],
  exports: [ProjectCardComponent]
})
export class ProjectCardModule { }
