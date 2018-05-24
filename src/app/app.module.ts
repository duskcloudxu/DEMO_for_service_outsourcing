import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs'
import { LoginPage } from '../pages/login/login';
import { ContractPage } from '../pages/contract/contract';
import { ContractConsultantPage } from '../pages/contract-consultant/contract-consultant';
import { ContractManagementPage } from '../pages/contract-management/contract-management';
import { ContractSupervisionPage } from '../pages/contract-supervision/contract-supervision';
import { ContractWritingPage } from '../pages/contract-writing/contract-writing';
import { ContractConsultantEvaluatePage } from '../pages/contract-consultant-evaluate/contract-consultant-evaluate';
import { ContractManagementAllfilePage } from '../pages/contract-management-allfile/contract-management-allfile';
import { ContractConsultantAllshowPage } from '../pages/contract-consultant-allshow/contract-consultant-allshow';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

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
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
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
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
