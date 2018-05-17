import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContractPage } from '../contract/contract';
/**
 * Generated class for the ContractConsultantPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contract-consultant',
  templateUrl: 'contract-consultant.html',
})
export class ContractConsultantPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  to() {
    this.navCtrl.push(ContractPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ContractConsultantPage');
  }

}
