import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConexionDatosService {

  private urlUsers:string = "https://jsonplaceholder.typicode.com/users";
  private urlBase:string =  "https://omdbapi.com/?apikey=2c68b107&"


  constructor(private http:HttpClient) {}

  getDatosPeliculaPorNombre(patron:string)
    {return this.http.get(this.urlBase + "s=" + patron);}

    getDatosPeliculaPorId(id:string)
    {return this.http.get(this.urlBase + "i=" + id);}

    getDatosUsuarios()
    {return this.http.get(this.urlUsers);}





}
