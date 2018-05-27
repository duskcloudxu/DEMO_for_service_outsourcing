import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContractManagementPage } from '../contract-management/contract-management';
import { ContractManagementIwriting2GoHandwritingPage } from '../contract-management-iwriting2-go-handwriting/contract-management-iwriting2-go-handwriting';
/**
 * Generated class for the ContractManagementIwriting2GoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contract-management-iwriting2-go',
  templateUrl: 'contract-management-iwriting2-go.html',
})
export class ContractManagementIwriting2GoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  back() {
    this.navCtrl.pop();
  }
  tohandwriting(){
    this.navCtrl.push(ContractManagementIwriting2GoHandwritingPage);
  }
  toContract(){
    this.navCtrl.push(ContractManagementPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ContractManagementIwriting2GoPage');
  }

}
