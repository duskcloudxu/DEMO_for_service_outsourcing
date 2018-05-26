import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContractManagementYouwriting2Page } from '../contract-management-youwriting2/contract-management-youwriting2';
/**
 * Generated class for the ContractManagementYouwritingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contract-management-youwriting',
  templateUrl: 'contract-management-youwriting.html',
})
export class ContractManagementYouwritingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  back() {
    this.navCtrl.pop();
  }
  toYouWriting2() {
    this.navCtrl.push(ContractManagementYouwriting2Page);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ContractManagementYouwritingPage');
  }

}
