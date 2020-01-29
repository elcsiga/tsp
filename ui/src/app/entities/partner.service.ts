import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import { Partner } from './types';

@Injectable({
  providedIn: 'root'
})
export class PartnerService  extends EntityCollectionServiceBase<Partner> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Partner', serviceElementsFactory);
  }
}
