import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the ContractWritingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contract-writing',
  templateUrl: 'contract-writing.html',
})

export class ContractWritingPage {
  private category:any[]=["劳动人事","买卖租赁","借款担保","公司经营","服务合同","技术知产","承揽合同" ,"建设工程","运输仓储","其他合同","我的合同"];
  private detailInCategory:any[]=[
    ["劳动合同","劳务合同","实习声明","员工保密协议","员工股权激励协议","竞业禁止协议",],
    ["投招标买卖合同","国际商业合同","商品购销合同","软件买卖合同","房屋租赁合同","机械租赁合同","融资租赁合同",],
    ["房产抵押合同","土地使用权抵押合同","股权质押合同","技术改造借款合同","借贷融资合同","借款展期协议",],
    ["股权转让协议","增资扩股协议","股东出资协议","中外合资公司章程","企业重组协议","合伙协议",],
    ["商品代销合同","通用委托合同","委托加工合同","家政服务合同","技术咨询服务合同","法律服务委托合同","委托销售协议书","委托招聘人才合同"],
    ["计算机软件使用许可","技术开发合同","技术咨询合同","技术保密合同","技术成果转让合同","技术服务合同",],
    ["制作广告合同书","加工承揽合同","水电安装承揽合同","网站广告合同","户外广告合同","围挡广告制作合同","广告设计与制作委托",],
    ["建筑安装承包合同","建设拆迁房屋合同","建设工程监理合同","装饰施工合作协议","建筑门窗制作安装","建设工程勘察设计",],
    ["货物运输合同","水陆联合运输合同","仓储保管协议","仓储物流区经营合同","汽车货物托运计划表","港口作业合同",],
    ["供用电合同","供用热力合同","会员充值协议","试卷命题保密协议书","编剧保密协议","数字电影拍摄合作书",],
    ["合伙协议","劳务合同"],
  ];
  private currentIndex=0;
  @ViewChild('container') itemList
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ContractWritingPage');
    console.log(this.itemList);
  }
  changeCategory(index){
    this.currentIndex=index;
  }




}
