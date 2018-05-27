import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the ContractWrtingEditPartyAPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contract-wrting-edit-party-a',
  templateUrl: 'contract-wrting-edit-party-a.html',
})
export class ContractWrtingEditPartyAPage {
  private partyAName="吕路樱";
  private callback;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.callback = this.navParams.get("callback")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContractWrtingEditPartyAPage');
  }

  back() {
    this.callback(this.partyAName).then(() => {
      // pop返回方法
      this.navCtrl.pop();
    });
  }
}
