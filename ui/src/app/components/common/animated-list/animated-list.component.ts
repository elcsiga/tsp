import { Component, ElementRef, Input, OnInit, QueryList, ViewChildren, OnDestroy, ViewChild } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';
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
export class AnimatedListComponent implements OnInit, OnDestroy {
    @Input() items = ['1', '2', '3'];
    @Input() itemTemplate: ElementRef;
    @Input() sizes = {
        width: '200px',
        height: '100px'
    };

    @Input() itemHeight = 100;
    @Input() itemWidth = 200;

    private sub: Subscription;

    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) {
    }

    @ViewChild('container', { static: true }) container: ElementRef;
    @ViewChild('list', { static: true }) list: ElementRef;
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
        this.update();
        // const flowers = this.flowers.toArray();
        // const containers = this.flowerContainers.toArray();
        // for (let i = 0; i < containers.length; i++) {
        //     const flower = flowers[i].nativeElement;
        //     const flowerContainer = containers[i].nativeElement;

        //     const x = flowerContainer.offsetLeft;
        //     const y = flowerContainer.offsetTop;

        //     flower.style.transform = `translate( ${x}px, ${y}px )`;
        //     flower.style.width = flowerContainer.offsetWidth + 'px';
        //     flower.style.height = flowerContainer.offsetHeight + 'px';
        //     flower.style.display = 'block';
        // }
    }

    update() {
        const spacing = 8;
        const containerWidth = this.container.nativeElement.offsetWidth - spacing;
        const rowCount = Math.floor(containerWidth / (this.itemWidth + spacing));
        const colCount = Math.ceil(this.items.length / rowCount);

        this.list.nativeElement.style.width = rowCount * (this.itemWidth + spacing) + spacing + 'px';
        this.list.nativeElement.style.height = colCount * (this.itemHeight + spacing) + spacing + 'px';
        this.container.nativeElement.style.height = colCount * (this.itemHeight + spacing) + spacing + 'px';
        //this.container.nativeElement.style.width = this.items.length > 1 ? '100%' : this.itemWidth + 2 * spacing + 'px';

        const flowers = this.flowers.toArray();
        for (let y = 0; y < colCount; y++) {
            for (let x = 0; x < rowCount; x++) {
                const n = y * rowCount + x;
                if (n < flowers.length) {
                    const flower = flowers[n].nativeElement;

                    const px = (this.itemWidth + spacing) * x + spacing;
                    const py = (this.itemHeight + spacing) * y + spacing;

                    flower.style.transform = `translate( ${px}px, ${py}px )`;
                    flower.style.width = this.itemWidth + 'px';
                    flower.style.height = this.itemHeight + 'px';
                    flower.style.display = 'block';
                }
            }
        }

    }
    onFlyInOutStart() {
        this.setPosition();
    }

    onFlyInOutDone() {
        this.setPosition();
    }
}


