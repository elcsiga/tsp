import { Component, OnInit, Input } from '@angular/core';
import { Participant } from 'src/app/entities/types';

@Component({
  selector: 'app-participant-card',
  templateUrl: './participant-card.component.html',
  styleUrls: ['./participant-card.component.scss']
})
export class ParticipantCardComponent implements OnInit {
  @Input() participant: Participant;
  constructor() { }

  ngOnInit() {
  }

}
