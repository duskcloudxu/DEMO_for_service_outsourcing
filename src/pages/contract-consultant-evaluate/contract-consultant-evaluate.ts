import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContractPage } from '../contract/contract';
import { ContractConsultantPage } from '../contract-consultant/contract-consultant';
import { ContractConsultantAllshowPage } from '../contract-consultant-allshow/contract-consultant-allshow';

/**
 * Generated class for the ContractConsultantEvaluatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contract-consultant-evaluate',
  templateUrl: 'contract-consultant-evaluate.html',
})
export class ContractConsultantEvaluatePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  toContractConsultant() {
    this.navCtrl.pop();
  }
  toAllShow() {
    this.navCtrl.push(ContractConsultantAllshowPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ContractConsultantEvaluatePage');
  }

}
