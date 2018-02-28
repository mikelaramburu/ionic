import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {HomePage} from '../../pages/home/home';

/**
 * Generated class for the BotonesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-botones',
  templateUrl: 'botones.html',
})
export class BotonesPage {
  color:string;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController
  ) {
    console.log('constructor BotonesPage');
    this.color='rosa';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BotonesPage');
  }
  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: '¿Quieres cambiar de pagina?',
      message: 'Si aceptas te vamos a llevar a la pagina de listados',
      buttons: [
        {
          text: 'Denegar',
          handler: () => {
            console.log('Denegar clicked');
          }
        },
        {
          text: 'Aceptar',
          handler: () => {
            console.log('Aceptar clicked');
            this.navCtrl.push(HomePage);
          }
        }
      ]
    });
    confirm.present();
  }
  cambiarColor(newColor:string){
    console.log("click cambiarColor %s", newColor);
    this.color = newColor;


  }
}

