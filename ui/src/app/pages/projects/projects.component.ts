import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/entities/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects$ = this.projectService.entities$;

  constructor(
    private projectService: ProjectService
  ) { }

  ngOnInit() {
    this.projectService.getAll();
  }

}
