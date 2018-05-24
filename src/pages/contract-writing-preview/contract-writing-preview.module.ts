import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContractWritingPreviewPage } from './contract-writing-preview';

@NgModule({
  declarations: [
    ContractWritingPreviewPage,
  ],
  imports: [
    IonicPageModule.forChild(ContractWritingPreviewPage),
  ],
})
export class ContractWritingPreviewPageModule {}
