import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContractManagementIwriting2DetailPage } from '../contract-management-iwriting2-detail/contract-management-iwriting2-detail';
import { ContractManagementIwriting2RefusePage } from '../contract-management-iwriting2-refuse/contract-management-iwriting2-refuse';
import { ContractManagementIwriting2GoPage } from '../contract-management-iwriting2-go/contract-management-iwriting2-go';

/**
 * Generated class for the ContractManagementIwriting2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contract-management-iwriting2',
  templateUrl: 'contract-management-iwriting2.html',
})
export class ContractManagementIwriting2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  back() {
    this.navCtrl.pop();
  }
  idetail() {
    this.navCtrl.push(ContractManagementIwriting2DetailPage);
  }
  refuse() {
    this.navCtrl.push(ContractManagementIwriting2RefusePage);
  }
  go() {
    this.navCtrl.push(ContractManagementIwriting2GoPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ContractManagementIwriting2Page');
  }

}
