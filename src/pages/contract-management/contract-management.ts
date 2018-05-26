import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContractPage } from '../contract/contract';
import { ContractManagementAllfilePage } from '../contract-management-allfile/contract-management-allfile';
import { ContractManagementFinishPage } from '../contract-management-finish/contract-management-finish';
import { ContractManagementShow1Page } from '../contract-management-show1/contract-management-show1';
import { ContractManagementShow2Page } from '../contract-management-show2/contract-management-show2';
import { ContractManagementYouwritingPage } from '../contract-management-youwriting/contract-management-youwriting';
import { ContractManagementIwritingPage } from '../contract-management-iwriting/contract-management-iwriting';
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
  toFinish(){
    this.navCtrl.push(ContractManagementFinishPage);
  }
  toShow1() {
    this.navCtrl.push(ContractManagementShow1Page);
  }
  toShow2() {
    this.navCtrl.push(ContractManagementShow2Page);
  }
  toYouWriting() {
    this.navCtrl.push(ContractManagementYouwritingPage);
  }
  toIWriting() {
    this.navCtrl.push(ContractManagementIwritingPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ContractManagementPage');
  }

}
