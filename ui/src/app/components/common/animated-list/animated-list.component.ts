import { Component, ElementRef, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { Apollo, gql } from 'apollo-angular-boost';
import { animate, query, style, transition, trigger } from '@angular/animations';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';


@Component({
    selector: 'kit-animated-list',
    templateUrl: './animated-list.component.html',
    styleUrls: ['./animated-list.component.scss'],
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
export class AnimatedListComponent implements OnInit {

    @Input() items = ['1', '2', '3'];
    @Input() itemTemplate: ElementRef;

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

        const resize$ = fromEvent(window, 'resize')
            .pipe(debounceTime(300));

        this.sub = resize$.subscribe(() => {
            this.setPosition();
        });

    }

    ngOnDestroy() {
        this.sub.unsubscribe()
    }

    trackById(index: number, project) {
        return project.id;
    }

    setPosition() {
        const flowers = this.flowers.toArray();
        const containers = this.flowerContainers.toArray();
        for (let i = 0; i < containers.length; i++) {
            const flower = flowers[i].nativeElement;
            const flowerContainer = containers[i].nativeElement;

            const x = flowerContainer.offsetLeft;
            const y = flowerContainer.offsetTop;

            flower.style.transform = `translate( ${x}px, ${y}px )`;
            flower.style.width = flowerContainer.offsetWidth + 'px';
            flower.style.height = flowerContainer.offsetHeight + 'px';
            flower.style.display = 'block';
        }
    }

    onFlyInOutStart() {
        this.setPosition();
    }

    onFlyInOutDone() {
        this.setPosition();
    }
}


