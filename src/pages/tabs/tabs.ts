import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ListFilmPage } from '../list-film/list-film';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ListFilmPage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
