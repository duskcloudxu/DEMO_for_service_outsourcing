import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContractManagementIwriting2Page } from '../contract-management-iwriting2/contract-management-iwriting2';
/**
 * Generated class for the ContractManagementIwritingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contract-management-iwriting',
  templateUrl: 'contract-management-iwriting.html',
})
export class ContractManagementIwritingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  back() {
    this.navCtrl.pop();
  }
  toIWriting2() {
    this.navCtrl.push(ContractManagementIwriting2Page);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ContractManagementIwritingPage');
  }

}
