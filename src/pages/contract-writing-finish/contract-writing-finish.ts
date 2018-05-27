import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ContractPage} from "../contract/contract";
import {TabsPage} from "../tabs/tabs";

/**
 * Generated class for the ContractWritingFinishPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contract-writing-finish',
  templateUrl: 'contract-writing-finish.html',
})
export class ContractWritingFinishPage {
  private partyAName;
  private partyBName;
  private myDate;
  private isHide = 1;
  private PicNum = [1, 2, 3, 4];
  private method="无序签署";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.partyAName=navParams.get("partyA");
    this.partyBName=navParams.get("partyB");

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContractWritingFinishPage');
  }

  public showPic(index) {
    this.isHide = 0;
  }
  hide() {
    this.isHide = 1;
  }
  toAddPartyB(){
    // this.navCtrl.push()
  }
  back() {
    this.navCtrl.popToRoot()
  }
}
