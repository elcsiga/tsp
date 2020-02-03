import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { ParticipantService } from 'src/app/entities/participant.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.scss']
})
export class ParticipantsComponent implements OnInit, OnDestroy {
  private destroy = new Subject();
  projectId$: Observable<number> = this.activatedRoute.paramMap.pipe(
    map ( paramMap => Number.parseInt(paramMap.get('projectId'), 10))
  );
  participantId$: Observable<number> = this.activatedRoute.paramMap.pipe(
    map ( paramMap => Number.parseInt(paramMap.get('participantId'), 10))
  );
  participants$ = combineLatest(
    this.participantService.entities$,
    this.projectId$,
    this.participantId$,
  ).pipe(
    map(([entities, projectId, participantId]) => participantId
      ? entities.filter(e => e.id === participantId)
      : entities.filter(e => e.projectId === projectId) )
  );

  constructor(
    private participantService: ParticipantService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.participantService.getAll();
  }

  ngOnDestroy() {
    this.destroy.next();
  }
}
