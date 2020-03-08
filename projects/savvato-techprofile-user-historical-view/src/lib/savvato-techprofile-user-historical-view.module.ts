import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { SavvatoTechprofileUserHistoricalViewComponent } from './savvato-techprofile-user-historical-view.component';

import { DtimTechprofileModule } from 'dtim-techprofile';

@NgModule({
  declarations: [
  	SavvatoTechprofileUserHistoricalViewComponent
  ],
  imports: [
  	IonicModule.forRoot(),
  	CommonModule,
  	HttpClientModule,
  	FormsModule,

  	DtimTechprofileModule

  ],
  exports: [SavvatoTechprofileUserHistoricalViewComponent]
})
export class SavvatoTechprofileUserHistoricalViewModule { }
