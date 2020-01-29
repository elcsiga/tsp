import { Component, OnInit } from '@angular/core';
import { PartnerService } from 'src/app/entities/partner.service';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {

  partners$ = this.partnerService.entities$;

  constructor(
    private partnerService: PartnerService
  ) { }

  ngOnInit() {
    this.partnerService.getAll();
  }
}
