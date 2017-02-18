import { PerfilPage } from './../pages/perfil/perfil';
import { MapaPage } from './../pages/mapa/mapa';
import { SlidesPage } from './../pages/slides/slides';
import { FacturasPage } from './../pages/facturas/facturas';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform,AlertController,LoadingController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { ScanStore } from '../pages/scanstore/scanstore'
import { ContactPage } from '../pages/contact/contact'


@Component({
  selector: 'menu-menu',
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = SlidesPage;
  pages: Array<{icon: string, title: string, component: any}>;
  pages2: Array<{icon: string, title: string, component: any}>;


  constructor(
    public platform: Platform,
    private alertCtrl: AlertController,
    public loadingCtrl: LoadingController
  ){

    this.initializeApp();

    // Array de paginas para el menu, con su icono, su titulo, y el enlace.
    this.pages = [
      { icon: "home", title: 'Inicio', component: HomePage },
      { icon: "qr-scanner", title: 'Seleccionar tienda', component: ScanStore },
      { icon: "contact", title: 'Mi perfil', component: PerfilPage },
      { icon: "paper", title: 'Mis facturas', component: FacturasPage }
     
    ];
     this.pages2 = [
      { icon: "pin", title: 'Ver tiendas', component: MapaPage },
      { icon: "paper-plane", title: 'Contactar', component: ContactPage },
      { icon: "help", title: 'Ayuda', component: SlidesPage },
      //{ icon: "exit", title: 'Cerrar sesión', component: ContactPage }
    ];
  } 
 
   

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

    NavegarPerfil() {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(PerfilPage);
  }

  CerrarSesion(){
    let alert = this.alertCtrl.create({
    title: 'Cerrar sesión',
    message: '¿Estás seguro de que deseas cerrar tu sesión en Appay?',
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Confirmar',
        handler: () => {
          this.MostrarLoading();
        }
      }
    ]
  });
  alert.present();
  }

  MostrarLoading(){
    let loader = this.loadingCtrl.create({
      content: "Cerrando sesión...",
      duration: 3000 //luego lo quitaremos 
    });
    loader.present();
  }
  
}
