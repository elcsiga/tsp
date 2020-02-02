import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { ProjectCardModule } from 'src/app/components/project-card/project-card.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AnimatedListModule } from 'src/app/components/common/animated-list/animated-list.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ProjectsComponent],
  imports: [
    CommonModule,
    ProjectCardModule,
    NgZorroAntdModule,
    AnimatedListModule,
    RouterModule
  ]
})
export class ProjectsModule { }
