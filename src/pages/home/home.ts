import {Component, ViewChild} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Slides} from "ionic-angular";
import {HomeLawyercardPage} from "../home-lawyercard/home-lawyercard";
import {CallNumber} from '@ionic-native/call-number';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController, private callNumber: CallNumber) {

  }

  toCard() {
    this.navCtrl.push(HomeLawyercardPage);
  }

  openPhone() {
    this.callNumber.callNumber("18158517297", true);
  }
}
