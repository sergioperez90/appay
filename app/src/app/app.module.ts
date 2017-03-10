import { ProductosService } from './../services/productos.service';
import { TiendasService } from './../services/tienda.service';
import { IntroTiendaPage } from './../pages/intro-tienda/intro-tienda';
import { DetalleProductoPage } from './../pages/detalle-producto/detalle-producto';
import { PagoPage } from './../pages/pago/pago';
import { CarritoPage } from './../pages/carrito/carrito';
import { PerfilPage } from './../pages/perfil/perfil';
import { RegistroPage } from './../pages/registro/registro';
import { AccederPage } from './../pages/acceder/acceder';
import { PrincipalPage } from './../pages/principal/principal';
import { MapaInfoPage } from './../pages/mapa-info/mapa-info';
import { MapaPage } from './../pages/mapa/mapa';
import { SlidesPage } from './../pages/slides/slides';
import { DetallefacturaPage } from './../pages/facturas/detallefactura';
import { FacturasPage} from './../pages/facturas/facturas';
import { UsuariosService } from './../services/usuarios.service';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { ScanProduct } from '../pages/scanproduct/scanproduct';
import { ScanStore } from '../pages/scanstore/scanstore';
import { Storage } from '@ionic/storage';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    ScanProduct,
    ScanStore,
    FacturasPage,
    DetallefacturaPage,
    SlidesPage,
    MapaPage,
    MapaInfoPage,
    PrincipalPage,
    AccederPage,
    RegistroPage,
    PerfilPage,
    CarritoPage,
    PagoPage,
    DetalleProductoPage,
    IntroTiendaPage
      ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    ScanProduct,
    ScanStore,
    FacturasPage,
    DetallefacturaPage,
    SlidesPage,
    MapaPage,
    MapaInfoPage,
    PrincipalPage,
    AccederPage,
    RegistroPage,
    PerfilPage,
    CarritoPage,
    PagoPage,
    DetalleProductoPage,
    IntroTiendaPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, UsuariosService, TiendasService, ProductosService, Storage]
})
export class AppModule {}
