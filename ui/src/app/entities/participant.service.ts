import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Participant } from './types';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService extends EntityCollectionServiceBase<Participant> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Participant', serviceElementsFactory);
  }
}
