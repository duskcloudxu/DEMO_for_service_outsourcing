import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContractManagementFinishWorkingPage } from '../contract-management-finish-working/contract-management-finish-working';
/**
 * Generated class for the ContractManagementFinishPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contract-management-finish',
  templateUrl: 'contract-management-finish.html',
})
export class ContractManagementFinishPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  back() {
    this.navCtrl.pop();
  }
  working(){
    this.navCtrl.push(ContractManagementFinishWorkingPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ContractManagementFinishPage');
  }

}
