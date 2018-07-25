import { Component, ViewChild, ElementRef  } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';

/**
 * Generated class for the ContractManagementIwriting2GoHandwritingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contract-management-iwriting2-go-handwriting',
  templateUrl: 'contract-management-iwriting2-go-handwriting.html',
})
export class ContractManagementIwriting2GoHandwritingPage {
  @ViewChild(SignaturePad) signaturePad: SignaturePad;
  @ViewChild('contentEl') contentEl: ElementRef;

  imageData: String;
  isEmpty = true;

  private signaturePadOptions: Object = { // passed through to szimek/signature_pad constructor
    'minWidth': 1,
    'canvasHeight': 600
  };
  private callback;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.callback = this.navParams.get("callback")
  }
  back() {
    this.navCtrl.pop();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ContractManagementIwriting2GoHandwritingPage');
    this.signaturePad.set('canvasWidth', this.contentEl.nativeElement.offsetWidth); // set szimek/signature_pad options at runtime
    this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
  }

  drawStart() {
    // will be notified of szimek/signature_pad's onBegin event
    console.log('begin drawing');
  }

  drawComplete() {
    // will be notified of szimek/signature_pad's onEnd event
    this.isEmpty = true;
  }
  save() {
    this.imageData = this.signaturePad.toDataURL();
    console.log(this.imageData);
    this.callback(this.imageData).then(()=>{
      this.navCtrl.pop();
    });
  }

  empty() {
    this.signaturePad.clear();
  }
}
