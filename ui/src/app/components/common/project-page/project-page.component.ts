import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { Apollo, gql } from 'apollo-angular-boost';
import { animate, query, state, style, transition, trigger } from '@angular/animations';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime, switchMap } from 'rxjs/operators';

@Component({
    selector: 'app-project-page',
    templateUrl: './project-page.component.html',
    styleUrls: ['./project-page.component.scss'],

    animations: [
        trigger('flyInOut', [

            transition('void => *', [
                query('.transformer', [
                    style({
                        transform: 'scale(.5,.5)',
                        opacity: 0
                    }),
                    animate(300)
                ])
            ]),
            transition('* => void', [
                query('.transformer', [
                    animate(300, style({
                        transform: 'scale(.5,.5)',
                        opacity: 0
                    }))
                ])
            ])
        ])
    ]
})
export class ProjectPageComponent implements OnInit {

    projects$: Observable<any>;

    private sub: Subscription;

    constructor(
        private apollo: Apollo,
        private route: ActivatedRoute,
        private router: Router
    ) {
    }

    @ViewChildren('flowerContainer') flowerContainers: QueryList<any>;
    @ViewChildren('flower') flowers: QueryList<any>;

    ngOnInit() {
        const projectsQuery = gql`
            {
                projects {
                    id
                    name
                }
            }`;
        const projectQuery = gql`
            query PROJECT($id: ID!) {
                project (id: $id) {
                    id
                    name
                }
            }`;
        this.projects$ = this.route.params
            .pipe(switchMap(params =>
                this.apollo.watchQuery<any>(params.projectId ? {
                    query: projectQuery,
                    variables: {id: params.projectId}
                } : {
                    query: projectsQuery
                }).valueChanges
            ));

        const resize$ = fromEvent(window, 'resize')
            .pipe(debounceTime(300));


        this.sub = resize$.subscribe(() => {
            this.setPosition();
        });

        //this.setPosition();
    }

    ngOnDestroy() {
        this.sub.unsubscribe()
    }

    getUnifiedProjectList(data) {
        return data.projects ? data.projects : [data.project];
    }

    trackById(index: number, project) {
        return project.id;
    }

    ngAfterViewInit() {
        this.setPosition();
    }

    setPosition() {
/*
        for (let i = 0; i < this.flowerContainers._results.length; i++) {
            const flower = this.flowers._results[i];
            const flowerContainer = this.flowerContainers._results[i];

            const x = flowerContainer.nativeElement.offsetLeft;
            const y = flowerContainer.nativeElement.offsetTop;

            flower.nativeElement.style.transform = `translate( ${x}px, ${y}px )`;
            flowerContainer.nativeElement.style.position = `static`;
            flower.nativeElement.style.width = flowerContainer.nativeElement.offsetWidth + 'px';
            flower.nativeElement.style.height = flowerContainer.nativeElement.offsetHeight + 'px';
            flower.nativeElement.style.display = 'block';
        }*/
    }

    onFlyInOutStart() {
        this.setPosition();
    }

    onFlyInOutDone() {
        this.setPosition();
    }
}


