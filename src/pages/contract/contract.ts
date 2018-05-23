import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContractConsultantPage } from '../contract-consultant/contract-consultant';
import { ContractManagementPage } from '../contract-management/contract-management';
import { ContractSupervisionPage } from '../contract-supervision/contract-supervision';
import { ContractWritingPage } from '../contract-writing/contract-writing';
/**
 * Generated class for the ContractPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contract',
  templateUrl: 'contract.html',
})
export class ContractPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
  toWriting(){
    this.navCtrl.push(ContractWritingPage);
  }
  toSupervision(){
    this.navCtrl.push(ContractSupervisionPage);
  }
  toManagement(){
    this.navCtrl.push(ContractManagementPage);
  }
  toConsultant(){
    this.navCtrl.push(ContractConsultantPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ContractPage');
  }

}
