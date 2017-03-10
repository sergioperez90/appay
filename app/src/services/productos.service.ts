import { Injectable } from '@angular/core';
import { Headers,Response, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable'; //esta en el directorio node modules
import { Router } from '@angular/router';
import 'rxjs/Rx'; //para el map, catch, thow...etc
import { AuthHttp, tokenNotExpired } from 'angular2-jwt';
import { Storage } from '@ionic/storage';


export class Productos{

    //Constructor(id: number, name: string){ }
}
 
@Injectable()

export class ProductosService {


    constructor(private http: Http,
                public storage: Storage) { 
    }

    comprobacion(){
        console.log("OK");
    }
    private obtenerProductos= 'https://appayservidor.herokuapp.com/productos';

    //Metodo que busca los productos de una tienda por id de tienda
     buscarProductosTienda(id: any){
        this.obtenerProductos= 'https://appayservidor.herokuapp.com/productos?id='+id;
        return this.http.get(this.obtenerProductos).map(this.extractData);
     }

     setProductosStorage(productos: Observable<Productos>){
        this.storage.ready().then(() => {
        this.storage.set('productos', productos); //Guardamos todo el objeto de la tienda
        
       /* this.storage.get('tienda').then((tienda) => {
            console.log('ESTO ES TODA LA TIENDA ' + tienda.Id_Tienda);
        });*/
        });
     }
    
     private extractData(res: Response) //el elemento que enviamos es de tipo responde
    {
        if(res.status == 200){
            console.log("Entra");
            let body = res.json(); //los parseamos a json
            console.log(body.Productos);
            //return body.data || { }; //devolvemos los datos
            return body.Productos || { }; 
            //return [{ stores: body.Tiendas, state: res.status}]
        }else if(res.status == 204){
            return res.status;
        }
       
    }


    private handleError(error: any) //te indica el eror
    {
        let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

}