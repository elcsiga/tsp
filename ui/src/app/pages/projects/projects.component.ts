import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProjectService } from 'src/app/entities/project.service';
import { Subject, combineLatest, Observable } from 'rxjs';
import { act } from '@ngrx/effects';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, OnDestroy {
  private destroy = new Subject();
  projectId$: Observable<number> = this.activatedRoute.paramMap.pipe(
    map ( paramMap => Number.parseInt(paramMap.get('projectId'), 10))
  );
  projects$ = combineLatest(
    this.projectService.entities$,
    this.projectId$,
  ).pipe(
    map(([entities, projectId]) => projectId ? entities.filter(e => e.id === projectId) : entities )
  );

  constructor(
    private projectService: ProjectService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.projectService.getAll();
  }

  ngOnDestroy() {
    this.destroy.next();
  }



  //   this.projects$ = this.route.params
  //   .pipe(switchMap(params =>
  //     this.apollo.watchQuery<any>(params.projectId ? {
  //       query: projectQuery,
  //       variables: { id: params.projectId }
  //     } : {
  //         query: projectsQuery
  //       }).valueChanges
  //   ));

  // const resize$ = fromEvent(window, 'resize')
  //   .pipe(debounceTime(300));


  // this.sub = resize$.subscribe(() => {
  //   this.setPosition();
  // });
}
