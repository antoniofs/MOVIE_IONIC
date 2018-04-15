import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';
import { LoadingController } from 'ionic-angular';
import { DetalhesPage } from '../detalhes/detalhes';

/**
 * Generated class for the ListFilmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-film',
  templateUrl: 'list-film.html',
  providers: [
    MovieProvider
  ]
})
export class ListFilmPage {

  public lista_filme = new Array<any>();
  public loader;
  public refresher;
  public is_refresher: boolean = false;

  doRefresh(refresher) {
    this.refresher = refresher;
    this.is_refresher = true;
    this.carregarFilmes();
  }

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public mp: MovieProvider,
    public loadingCtrl: LoadingController
  ) {
  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Carregando..."
    });
    this.loader.present();
  }

  closeLoading(){
    this.loader.dismiss();
  }


  ionViewDidLoad() {
    this.carregarFilmes();
  }

  detalhes(filme){
    console.log(filme);
    this.navCtrl.push(DetalhesPage, { id: filme.id });
  }

  carregarFilmes(){
    {
     this.presentLoading();
      this.mp.getListMovie().subscribe(
        data=>{
          const response = (data as any);
          this.lista_filme = response.results;
          if(this.is_refresher){
            this.refresher.complete();
            this.is_refresher=false;
          }
          console.log(response.results);
          this.closeLoading();

        }, error=>{
          console.log(error);
          this.closeLoading();
          if(this.is_refresher){
            this.refresher.complete();
            this.is_refresher=false;
        }
      }
      )
    }
  }
}
