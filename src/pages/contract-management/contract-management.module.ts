import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContractManagementPage } from './contract-management';

@NgModule({
  declarations: [
    ContractManagementPage,
  ],
  imports: [
    IonicPageModule.forChild(ContractManagementPage),
  ],
})
export class ContractManagementPageModule {}
