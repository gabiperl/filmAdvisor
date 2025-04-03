import { Component } from '@angular/core';
import { LogicaService } from '../../logica.service';
import { FormsModule } from '@angular/forms';
import { StarsRatingPipe } from '../../stars-rating.pipe';

@Component({
  selector: 'app-profiles',
  imports: [FormsModule, StarsRatingPipe],
  templateUrl: './profiles.component.html',
  styles: `
  div.row { margin-top: 1cm;}
  `
})
export class ProfilesComponent {

  selValue:string = ""

  constructor(private conexion:LogicaService) {}

  ngOnInit()
  {let activeUser = this.conexion.getLoggedUser()
    if(activeUser)
    {this.selValue = activeUser}
  }

  getNameById(id:string)
  {return this.conexion.getNameById(id);}
  getMoviesRecommendedFrom(userId:string)
  { return this.conexion.getMoviesRecommendedFrom(userId);}

  getMoviesRecommendedTo(userId:string)
  { return this.conexion.getMoviesRecommendedTo(userId);}
  getUsuarios()
  {return this.conexion.getUsers();}

  RemoveRecommendation(recommendation:any)
  {this.conexion.removeRecommendation(recommendation);}

  setUserLogged(userId:string)
  {this.conexion.setUserLogged(userId);}

  

}
