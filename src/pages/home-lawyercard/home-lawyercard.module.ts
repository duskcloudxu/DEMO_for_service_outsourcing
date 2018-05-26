import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeLawyercardPage } from './home-lawyercard';

@NgModule({
  declarations: [
    HomeLawyercardPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeLawyercardPage),
  ],
})
export class HomeLawyercardPageModule {}
