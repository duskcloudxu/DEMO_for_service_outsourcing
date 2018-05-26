import {Component, ViewChild,ViewContainerRef} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Slides} from 'ionic-angular';

/**
 * Generated class for the ContractWritingPreviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contract-writing-preview',
  templateUrl: 'contract-writing-preview.html',
})
export class ContractWritingPreviewPage {
  private isHide = 1;
  private PicNum = [1, 2, 3, 4];
  @ViewChild('test') test;
  @ViewChild("slides") set todo(content: ViewContainerRef) {
    console.log('setter', content);

  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContractWritingPreviewPage');
    console.log(this.test);
  }

  public showPic(index) {
    this.isHide = 0;
  }

  hide() {
    this.isHide = 1;
  }

  back() {
    this.navCtrl.pop();
  }

}
