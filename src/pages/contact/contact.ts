import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }

  Sair(){
    alert("Muito Obrigado mesmo - Antônio Flávio");
    this.navCtrl.push(WelcomePage);
  }

}
