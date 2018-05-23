import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContractPage } from '../contract/contract';
import { ContractManagementAllfilePage } from '../contract-management-allfile/contract-management-allfile';

/**
 * Generated class for the ContractManagementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contract-management',
  templateUrl: 'contract-management.html',
})
export class ContractManagementPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  toContract() {
    this.navCtrl.pop();
  }
  toAllfile() {
    this.navCtrl.push(ContractManagementAllfilePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContractManagementPage');
  }

}
