import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ContractManagementYouwriting2DatailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contract-management-youwriting2-datail',
  templateUrl: 'contract-management-youwriting2-datail.html',
})
export class ContractManagementYouwriting2DatailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  back() {
    this.navCtrl.pop();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ContractManagementYouwriting2DatailPage');
  }

}
