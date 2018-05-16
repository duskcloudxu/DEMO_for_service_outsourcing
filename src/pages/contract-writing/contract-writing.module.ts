import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContractWritingPage } from './contract-writing';

@NgModule({
  declarations: [
    ContractWritingPage,
  ],
  imports: [
    IonicPageModule.forChild(ContractWritingPage),
  ],
})
export class ContractWritingPageModule {}
