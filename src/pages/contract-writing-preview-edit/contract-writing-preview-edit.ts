import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ContractWrtingEditPartyAPage} from "../contract-wrting-edit-party-a/contract-wrting-edit-party-a";
import {ContractWrtingEditPartyBPage} from "../contract-wrting-edit-party-b/contract-wrting-edit-party-b";
import {ContractWritingFinishPage} from "../contract-writing-finish/contract-writing-finish";

/**
 * Generated class for the ContractWritingPreviewEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contract-writing-preview-edit',
  templateUrl: 'contract-writing-preview-edit.html',
})
export class ContractWritingPreviewEditPage {
  private firstList: any[] = ["法定住址：", "法定代表人：", "职务：", "身份证号码：", "通讯地址：", "邮政编码：", "电话："];
  private secondList: any[] = ["法定住址：", "法定代表人：", "职务：", "身份证号码：", "通讯地址：", "邮政编码：", "电话："];
  private thirdList: any[] = ["商品名称：", "商标品牌：", "规格型号：", "生产厂家：", "计量单位：", "数量：", "单价：", "合计：", "合计金额人民币大小：",];
  private fourthList: any[] = ["2、代售商品种类增减的条件及方法：", "3、约定新产品（是/否）包括在内：", "4、销商品的交付时间、地点、方式及费用负担：",];
  private fifthList: any[] = [
    "（1）较好地履行了本合同的义务，没有发生过重大违约行为；",
    "（2）已经向甲方支付了到期的全部款项；",
    "（3）签署放弃可针对甲方提起诉讼和仲裁的文件；",
  ];
  private sixthList: any[] = [
    "2、佣金以发票金额计算，任何附加费用如包装费、运输费、保险费、海关税或由进口国家征收的关税等应另开发票。",
    "3、佣金按成交的货币来计算和支付。",
    "4、甲方每季度应向乙方说明佣金数额和支付佣金的有关商务，甲方在收到货款后，应在30天内支付佣金。",
    "5、乙方所介绍的询价或订单，如甲方不予接受则无佣金。若乙方所介绍的订单合约已中止，乙方无权索取佣金。若该合约的中止是由于甲方的责任，则不在此限。"
  ];
  private partyAName;
  private partyBName;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContractWritingPreviewEditPage');
  }

  callBackFromA = (params) => {
    return new Promise((resolve, reject) => {
      if (params) {
        resolve('成功取到A页面返回的参数');
        this.partyAName = params;
      } else {
        reject("无数据")
      }
    });
  };
  callBackFromB = (params) => {
    return new Promise((resolve, reject) => {
      if (params) {
        resolve('成功取到B页面返回的参数');
        this.partyBName = params;
      } else {
        reject("无数据")
      }
    });
  };

  toPartyA() {
    this.navCtrl.push(ContractWrtingEditPartyAPage, {
      callback: this.callBackFromA,
    });
  }

  toPartyB() {
    this.navCtrl.push(ContractWrtingEditPartyBPage, {
      callback: this.callBackFromB,
    });
  }

  next() {
    this.navCtrl.push(ContractWritingFinishPage, {
      partyA: this.partyAName,
      partyB: [this.partyBName]
    })
  }

  back() {
    this.navCtrl.pop();
  }


}
