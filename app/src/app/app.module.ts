import { IntroTiendaPage } from './../pages/intro-tienda/intro-tienda';
import { PerfilPage } from './../pages/perfil/perfil';
import { MapaInfoPage } from './../pages/mapa-info/mapa-info';
import { MapaPage } from './../pages/mapa/mapa';
import { SlidesPage } from './../pages/slides/slides';
import { DetallefacturaPage } from './../pages/facturas/detallefactura';
import { FacturasPage} from './../pages/facturas/facturas';
import { DetallePage } from './../pages/detalle/detalle';
import { UsuariosService } from './../services/usuarios.service';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { ScanProduct } from '../pages/scanproduct/scanproduct';
import { ScanStore } from '../pages/scanstore/scanstore';



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    ScanProduct,
    ScanStore,
    DetallePage,
    FacturasPage,
    DetallefacturaPage,
    SlidesPage,
    MapaPage,
    MapaInfoPage,
    PerfilPage,
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
    DetallePage,
    FacturasPage,
    DetallefacturaPage,
    SlidesPage,
    MapaPage,
    MapaInfoPage,
    PerfilPage,
    IntroTiendaPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, UsuariosService]
})
export class AppModule {}
