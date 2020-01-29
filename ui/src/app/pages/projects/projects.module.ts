import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { ProjectCardModule } from 'src/app/components/project-card/project-card.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  declarations: [ProjectsComponent],
  imports: [
    CommonModule,
    ProjectCardModule,
    NgZorroAntdModule
  ]
})
export class ProjectsModule { }
