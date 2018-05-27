import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the ContractSupervisionResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contract-supervision-result',
  templateUrl: 'contract-supervision-result.html',
})
export class ContractSupervisionResultPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ContractSupervisionResultPage');
  }
  return() {
    this.navCtrl.popToRoot();
  }
  back(){
    this.navCtrl.pop();

  }

}
