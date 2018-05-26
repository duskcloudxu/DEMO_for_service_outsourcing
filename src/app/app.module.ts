import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {CallNumber} from "@ionic-native/call-number";

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
  ],
  imports: [
    BrowserModule,
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
