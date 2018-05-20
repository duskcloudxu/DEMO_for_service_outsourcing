import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContractPage } from '../contract/contract';
import { ContractConsultantEvaluatePage } from '../contract-consultant-evaluate/contract-consultant-evaluate';
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
  toContract() {
    this.navCtrl.pop();
  }
  toContractConsultantEvaluate() {
    this.navCtrl.push(ContractConsultantEvaluatePage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ContractConsultantPage');
  }

}
