
import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular'
import { Content } from 'ionic-angular';


//DETALLE FACTURA
@Component({
  selector: 'page-detallefactura',
  templateUrl: 'detallefactura.html',
})
export class DetallefacturaPage {
  factura;
  	@ViewChild(Content) content: Content;

public showFooter = false;
	public items = [];
  constructor(params: NavParams, public actionSheetCtrl: ActionSheetController) {
    this.factura = params.data.factura;
  }
  ngOnInit(){
  for (let i = 1; i <= 50; i++) {
        this.items.push('Item ' + i);
      }

      setTimeout(() => {
        this.showFooter = true;

        setTimeout(() => {
          this.content.resize();
        }, 3000);
      }, 3000);
  }
 
}
