import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

/*
  Generated class for the Pago page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-pago',
  templateUrl: 'pago.html'
})
export class PagoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PagoPage');
  }

 

} 
 