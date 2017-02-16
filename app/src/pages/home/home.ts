import { DetallePage } from './../detalle/detalle';
import { Usuario, UsuariosService } from './../../services/usuarios.service';
import { Component, OnInit} from '@angular/core';

import { MenuController } from 'ionic-angular';

import { ScanProduct } from '../scanproduct/scanproduct';

import { ScanStore } from '../scanstore/scanstore';

declare var cordova:any;


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
  scanProduct = ScanProduct;
  scanStore = ScanProduct;
  deal : any;
  usuarios: Usuario[];
  buscadorUsuarios: string="";
  constructor(public menuCtrl: MenuController, public usuariosService: UsuariosService) {
    this.deal = "ofertas";
  }
    

     scan() {
    
        cordova.plugins.barcodeScanner.scan(
          function (result) {
            //Cuando el escaneo es correcto, me redireccionara a la pagina de detalle producto
              alert("Codigo encontrado\n" +
                    "Codigo: " + result.text + "\n" +
                    "Formato: " + result.format + "\n" +
                    "Cancelado: " + result.cancelled);
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
              formats : "QR_CODE,PDF_417,EAN_8,EAN_13", // default: all but PDF_417 and RSS_EXPANDED
              orientation : "portrait", // Android only (portrait|landscape), default unset so it rotates with the device
              disableAnimations : true // iOS
          }
      );
    }

  ngOnInit() {
    console.log("Entra en el ngOnInit");
    
    this.usuariosService.getUsers().subscribe(
      users => {
        this.usuarios=users;
      }
    );
  }


}
