import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the DetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhes',
  templateUrl: 'detalhes.html',
})
export class DetalhesPage {

  public filme;
  public filmeid

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public mp : MovieProvider ) {
  }

  ionViewDidEnter() {
    this.filmeid = this.navParams.get("id");
    this.mp.getMovieDetails(this.filmeid).subscribe(
      data=>{
        let response = (data as any);
        this.filme = response;
      }, error => {
        console.log(error);
      }
    )

  }

}
