import { Injectable } from '@angular/core';
import { Headers,Response, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable'; //esta en el directorio node modules
import { Router } from '@angular/router';
import 'rxjs/Rx'; //para el map, catch, thow...etc
import { AuthHttp, tokenNotExpired } from 'angular2-jwt';

export class Usuario{
    //Constructor(id: number, name: string){ }
    Constructor(Nombre: string, Municipio: string, Telefono: string, Precio: string,CP:string, Email:string,Fecha:string){ }
}
 
@Injectable()

export class UsuariosService {

    constructor(private http: Http) {
        
    }

    comprobacion(){
        console.log("DEBERIA IR");
    }
    private usersUrl= 'https://appayservidor.herokuapp.com/usuarios';
     getUsers(): Observable<Usuario[]>{
        return this.http.get(this.usersUrl)
        .map(this.extractData);
    }
    
     private extractData(res: Response) //el elemento que enviamos es de tipo responde
    {
        console.log("Entra");
        let body = res.json(); //los parseamos a json
       console.log(body.Usuarios);
        //return body.data || { }; //devolvemos los datos
        return body.Usuarios || { };
    }


    private handleError(error: any) //te indica el eror
    {
        let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

}