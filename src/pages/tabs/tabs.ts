import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ContractPage } from '../contract/contract';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tabRoots: Object[];

  constructor() {
    this.tabRoots = [
      {
        root: HomePage,
        tabTitle: '首页',
        tabIcon: 'home'
      },
      {
        root: ContactPage,
        tabTitle: '会话',
        tabIcon: 'notifications'
      },
      {
        root: ContractPage,
        tabTitle: '合同',
        tabIcon: 'document'
      },
      {
        root: AboutPage,
        tabTitle: '我的',
        tabIcon: 'person'
      }
    ];
  }
}
