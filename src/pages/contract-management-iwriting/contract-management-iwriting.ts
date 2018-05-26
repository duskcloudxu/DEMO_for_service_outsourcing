import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ContractManagementIwritingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contract-management-iwriting',
  templateUrl: 'contract-management-iwriting.html',
})
export class ContractManagementIwritingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  back() {
    this.navCtrl.pop();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ContractManagementIwritingPage');
  }

}
