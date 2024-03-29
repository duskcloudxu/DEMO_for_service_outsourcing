import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {CallNumber} from "@ionic-native/call-number";
import { SignaturePadModule } from 'angular2-signaturepad';

import {AboutPage} from '../pages/about/about';
import {ContactPage} from '../pages/contact/contact';
import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs'
import {LoginPage} from '../pages/login/login';
import {ContractPage} from '../pages/contract/contract';
import {ContractConsultantPage} from '../pages/contract-consultant/contract-consultant';
import {ContractManagementPage} from '../pages/contract-management/contract-management';
import {ContractSupervisionPage} from '../pages/contract-supervision/contract-supervision';
import {ContractWritingPage} from '../pages/contract-writing/contract-writing';
import {ContractConsultantEvaluatePage} from '../pages/contract-consultant-evaluate/contract-consultant-evaluate';
import {ContractManagementAllfilePage} from '../pages/contract-management-allfile/contract-management-allfile';
import {ContractWritingPreviewPage} from '../pages/contract-writing-preview/contract-writing-preview';
import {ContractConsultantAllshowPage} from '../pages/contract-consultant-allshow/contract-consultant-allshow';
import {ContractManagementFinishPage} from '../pages/contract-management-finish/contract-management-finish';
import {ContractManagementFinishWorkingPage} from '../pages/contract-management-finish-working/contract-management-finish-working';
import {ContractSupervisionResultPage} from "../pages/contract-supervision-result/contract-supervision-result";
import {HomeLawyercardPage} from "../pages/home-lawyercard/home-lawyercard";
import { ContractManagementShow1Page } from '../pages/contract-management-show1/contract-management-show1';
import { ContractManagementShow2Page } from '../pages/contract-management-show2/contract-management-show2';
import { ContractManagementYouwritingPage } from '../pages/contract-management-youwriting/contract-management-youwriting';
import { ContractManagementYouwriting2Page } from '../pages/contract-management-youwriting2/contract-management-youwriting2';
import { ContractManagementYouwriting2DatailPage } from '../pages/contract-management-youwriting2-datail/contract-management-youwriting2-datail';
import { ContractManagementIwritingPage } from '../pages/contract-management-iwriting/contract-management-iwriting';
import { ContractManagementIwriting2Page } from '../pages/contract-management-iwriting2/contract-management-iwriting2';
import { ContractManagementIwriting2DetailPage } from '../pages/contract-management-iwriting2-detail/contract-management-iwriting2-detail';
import { ContractManagementIwriting2RefusePage } from '../pages/contract-management-iwriting2-refuse/contract-management-iwriting2-refuse';
import { ContractManagementIwriting2GoPage } from '../pages/contract-management-iwriting2-go/contract-management-iwriting2-go';
import { ContractWritingPreviewEditPage } from '../pages/contract-writing-preview-edit/contract-writing-preview-edit';
import {ContractWrtingEditPartyAPage} from "../pages/contract-wrting-edit-party-a/contract-wrting-edit-party-a";
import {ContractWrtingEditPartyBPage} from "../pages/contract-wrting-edit-party-b/contract-wrting-edit-party-b";
import {ContractWritingFinishPage} from "../pages/contract-writing-finish/contract-writing-finish";
import {ContractWritingFinishAddPartyBPage} from "../pages/contract-writing-finish-add-party-b/contract-writing-finish-add-party-b";
import { ContractManagementIwriting2GoHandwritingPage } from '../pages/contract-management-iwriting2-go-handwriting/contract-management-iwriting2-go-handwriting';

import {BackListenerDirective} from "../directives/back-listener/back-listener"

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    ContractPage,
    ContractConsultantPage,
    ContractManagementPage,
    ContractSupervisionPage,
    ContractWritingPage,
    ContractConsultantEvaluatePage,
    ContractManagementAllfilePage,
    ContractConsultantAllshowPage,
    ContractManagementFinishPage,
    ContractManagementFinishWorkingPage,
    ContractWritingPreviewPage,
    BackListenerDirective,
    ContractManagementShow1Page,
    ContractManagementShow2Page,
    ContractSupervisionResultPage,
    HomeLawyercardPage,
    ContractManagementYouwritingPage,
    ContractManagementYouwriting2Page,
    ContractManagementYouwriting2DatailPage,
    ContractManagementIwritingPage,
    ContractManagementIwriting2Page,
    ContractManagementIwriting2DetailPage,
    ContractManagementIwriting2RefusePage,
    ContractManagementIwriting2GoPage,
    ContractWritingPreviewEditPage,
    ContractWrtingEditPartyAPage,
    ContractWrtingEditPartyBPage,
    ContractWritingFinishPage,
    ContractWritingFinishAddPartyBPage,
    ContractManagementIwriting2GoHandwritingPage,
  ],
  imports: [
    BrowserModule,
    SignaturePadModule,
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: 'true',         //ionic3隐藏全部子页面tabs
      mode: 'md'          //把所有平台设置为md风格：
    })

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    ContractPage,
    ContractConsultantPage,
    ContractManagementPage,
    ContractSupervisionPage,
    ContractWritingPage,
    ContractConsultantEvaluatePage,
    ContractManagementAllfilePage,
    ContractConsultantAllshowPage,
    ContractManagementFinishPage,
    ContractManagementFinishWorkingPage,
    ContractWritingPreviewPage,
    ContractManagementShow1Page,
    ContractManagementShow2Page,
    ContractSupervisionResultPage,
    HomeLawyercardPage,
    ContractManagementYouwritingPage,
    ContractManagementYouwriting2Page,
    ContractManagementYouwriting2DatailPage,
    ContractManagementIwritingPage,
    ContractManagementIwriting2Page,
    ContractManagementIwriting2DetailPage,
    ContractManagementIwriting2RefusePage,
    ContractManagementIwriting2GoPage,
    ContractWritingPreviewEditPage,
    ContractWrtingEditPartyAPage,
    ContractWrtingEditPartyBPage,
    ContractWritingFinishPage,
    ContractWritingFinishAddPartyBPage,
    ContractManagementIwriting2GoHandwritingPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CallNumber,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
