import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {LoginPage} from '../pages/login/login';
import {TabsPage} from '../pages/tabs/tabs';
import {ContractWritingPreviewEditPage} from "../pages/contract-writing-preview-edit/contract-writing-preview-edit";
import {ContractManagementIwriting2GoPage} from "../pages/contract-management-iwriting2-go/contract-management-iwriting2-go";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;
  // rootPage: any = ContractWritingPreviewEditPage;
  // rootPage:any = ContractManagementIwriting2GoPage;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
