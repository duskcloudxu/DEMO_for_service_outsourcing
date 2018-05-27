import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ContractSupervisionResultPage} from "../contract-supervision-result/contract-supervision-result";

/**
 * Generated class for the ContractSupervisionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contract-supervision',
  templateUrl: 'contract-supervision.html',
})
export class ContractSupervisionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContractSupervisionPage');
  }
  toResult() {
    this.navCtrl.push(ContractSupervisionResultPage);
  }
  back(){
    this.navCtrl.pop();
  }
}
