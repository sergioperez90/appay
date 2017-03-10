import { DetallefacturaPage } from './../facturas/detallefactura';
import { Tienda, TiendasService } from './../../services/tienda.service';
import { DetalleProductoPage } from './../detalle-producto/detalle-producto';
import { CarritoPage } from './../carrito/carrito';
import { DetallePage } from './../detalle/detalle';
import { Usuario, UsuariosService } from './../../services/usuarios.service';
import { Component, OnInit} from '@angular/core';
import { MenuController, NavController, LoadingController, AlertController } from 'ionic-angular';
import { ScanProduct } from '../scanproduct/scanproduct';
import { ScanStore } from '../scanstore/scanstore';
import { Storage } from '@ionic/storage';

declare var cordova:any;


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
  scanProduct = ScanProduct;
  scanStore = ScanProduct;
  deal : any; 
  tiendas: Tienda[];
  nombreTienda;
  constructor(public alertCtrl: AlertController, public menuCtrl: MenuController, public tiendasService: TiendasService, public navCtrl: NavController, public loadingCtrl: LoadingController, public storage: Storage) {
    this.deal = "ofertas"; //Esto es para que por defecto quede marcada la pestaña de ofertas
  }
    

     scan() {
      let ctrl  = this.navCtrl;
      let load = this.loadingCtrl;
      let storagePro = this.storage;
      let encontrado = false;
      let alertC = this.alertCtrl;

        cordova.plugins.barcodeScanner.scan(
          function (result) {
            //Cuando el escaneo es correcto, me redireccionara a la pagina de detalle producto
            //result.text
             if(result.cancelled == 0){
                let loader = load.create({});
                loader.present();
                //Ahora se buscan los productos en local storage, luego se buscaran directamente en la web.
                storagePro.ready().then(() => {
                  storagePro.get('productos').then((productos) => {
                    for(let i = 0; i<productos.length && !encontrado; i++){
                        if(productos[i].Codigo == result.text){ //Busco en storage el codigo escaneado
                          console.log("ENCONTRADO ES EL SIGUIENTE " + productos[i].Codigo);
                          encontrado = true;
                          loader.dismiss();
                          ctrl.push(DetalleProductoPage)
                        }
                    }
                    if(!encontrado){ //Si no esta el producto me sale un alert
                      loader.dismiss(); //Cierro el loader
                        let alert = alertC.create({
                          title: '¡Ups!',
                          subTitle: 'El producto no existe, vuelve a escanear el código',
                          buttons: ['OK']
                        });
                        alert.present();
                    }
                  });
                });


             }
   
          },
          function (error) {
              alert("El escaneo a fallado: " + error);
          },
          {
              preferFrontCamera : false, // iOS and Android
              showFlipCameraButton : false, // iOS and Android
              showTorchButton : true, // iOS and Android
              torchOn: false, // Android, launch with the torch switched on (if available)
              prompt : "Introduce el codigo dentro del area", // Android
              resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
              formats : "EAN_8,EAN_13", // default: all but PDF_417 and RSS_EXPANDED
              orientation : "portrait", // Android only (portrait|landscape), default unset so it rotates with the device
              disableAnimations : true // iOS
          }
      );
    }

  ngOnInit() {

    this.menuCtrl.enable(true);
        
        this.storage.ready().then(() => {
        this.storage.get('tienda').then((tienda) => {
          this.nombreTienda = tienda.Nombre;
          console.log(this.nombreTienda);
        });
      });
      
    
  }
  carrito(){
    this.navCtrl.push(CarritoPage);
  }



}
