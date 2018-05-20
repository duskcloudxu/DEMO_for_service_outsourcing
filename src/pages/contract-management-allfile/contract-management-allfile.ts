import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ContractManagementAllfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contract-management-allfile',
  templateUrl: 'contract-management-allfile.html',
})
export class ContractManagementAllfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  toContract(){
    this.navCtrl.pop();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ContractManagementAllfilePage');
  }

}
