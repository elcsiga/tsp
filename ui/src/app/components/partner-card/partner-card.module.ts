import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartnerCardComponent } from './partner-card.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';



@NgModule({
  declarations: [PartnerCardComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule
  ],
  exports: [PartnerCardComponent]
})
export class PartnerCardModule { }
