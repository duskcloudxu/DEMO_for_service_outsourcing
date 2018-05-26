import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContractManagementYouwriting2DatailPage } from '../contract-management-youwriting2-datail/contract-management-youwriting2-datail';
import { ContractManagementIwritingPage } from '../contract-management-iwriting/contract-management-iwriting';

/**
 * Generated class for the ContractManagementYouwriting2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contract-management-youwriting2',
  templateUrl: 'contract-management-youwriting2.html',
})
export class ContractManagementYouwriting2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  back() {
    this.navCtrl.pop();
  }
  detail(){
    this.navCtrl.push(ContractManagementYouwriting2DatailPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ContractManagementYouwriting2Page');
  }

}
