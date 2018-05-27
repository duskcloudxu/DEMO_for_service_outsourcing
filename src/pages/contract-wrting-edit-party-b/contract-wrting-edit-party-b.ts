import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ContractWrtingEditPartyBPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contract-wrting-edit-party-b',
  templateUrl: 'contract-wrting-edit-party-b.html',
})
export class ContractWrtingEditPartyBPage {
  private partyBName="徐暮云";
  private callback;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.callback = this.navParams.get("callback")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContractWrtingEditPartyBPage');
  }
  back() {
    this.callback(this.partyBName).then(() => {
      // pop返回方法
      this.navCtrl.pop();
    });
  }
}
