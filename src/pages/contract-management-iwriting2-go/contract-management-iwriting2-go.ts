import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ContractManagementPage} from '../contract-management/contract-management';
import {ContractManagementIwriting2GoHandwritingPage} from '../contract-management-iwriting2-go-handwriting/contract-management-iwriting2-go-handwriting';
/**
 * Generated class for the ContractManagementIwriting2GoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contract-management-iwriting2-go',
  templateUrl: 'contract-management-iwriting2-go.html',
})
export class ContractManagementIwriting2GoPage {
  private signPicture = 'assets/imgs/white.png';
  private myDate="";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  callBackFromSign = (params) => {
    return new Promise((resolve, reject) => {
      if (params) {
        resolve('成功取到图片');
        console.log(params);
        this.signPicture = params;
      } else {
        reject("无数据")
      }
    });
  };

  back() {
    this.navCtrl.pop();
  }

  tohandwriting() {
    this.navCtrl.push(ContractManagementIwriting2GoHandwritingPage, {
      callback: this.callBackFromSign,
    });
  }

  toContract() {
    this.navCtrl.popToRoot();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContractManagementIwriting2GoPage');
  }

}
