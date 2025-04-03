import { Injectable } from '@angular/core';
import { ConexionDatosService } from './conexion-datos.service';

@Injectable({
  providedIn: 'root'
})
export class LogicaService {

  private users:any = []
  private loggedUser:string
  private recommendations:any[]
  
// En el constructor implementamos todo lo que queremos que se cargue de manera automática nada más abrir la app
  constructor(private conexion:ConexionDatosService) {
    this.conexion.getDatosUsuarios().subscribe( (data:any) => {
      this.users = data
    })
    this.recommendations = JSON.parse(localStorage.getItem("recommendations") || "[]")
    this.loggedUser = localStorage.getItem("loggedUser") || "0"
   }

  getUsers() 
  {return this.users}

  getNameById(id:string)
  { let usuarioBuscado = this.users.find( (user:any) => user.id == id)
    if (usuarioBuscado) return usuarioBuscado.name
    else return "Anonymous"
  }

  // Después de un find, hacemos un if para más control.

  getLoggedUser()
  {return this.loggedUser}

  getMoviesByString(patron:string) {return this.conexion.getDatosPeliculaPorNombre(patron)}

  getMoviesRecommendedFrom(userId:string)
  {return this.recommendations.filter( (r:any) => r.fromUser == userId)}

  getMoviesRecommendedTo(userId:string)
  {return this.recommendations.filter( (r:any) => r.toUser == userId)}

  recommend(userIdToRecommend: string, movieToRecommend: any) {
    if (this.loggedUser !== "0") {
      this.conexion.getDatosPeliculaPorId(movieToRecommend.imdbID).subscribe((movie: any) => {
        this.recommendations.push({
          fromUser: this.loggedUser,
          toUser: userIdToRecommend,
          movie: movie
        });
        this.saveLS();
      });
    }
  }

  removeRecommendation(recommendation:any)
  {let recommendationToRemove = this.recommendations.indexOf(recommendation)
    this.recommendations.splice(recommendationToRemove, 1)
    this.saveLS()
      
  
  }

  saveLS()
  {localStorage.setItem("recommendations", JSON.stringify(this.recommendations))
  localStorage.setItem("loggedUser", this.loggedUser)
  }
  setUserLogged(UserId:string)
  {this.loggedUser = UserId
  this.saveLS()
  }
  
  
  
}
