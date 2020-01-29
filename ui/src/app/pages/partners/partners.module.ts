import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartnersComponent } from './partners.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { PartnerCardModule } from 'src/app/components/partner-card/partner-card.module';



@NgModule({
  declarations: [PartnersComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    PartnerCardModule
  ]
})
export class PartnersModule { }
