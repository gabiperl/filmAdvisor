import { Component } from '@angular/core';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { LogicaService } from '../../logica.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recommend',
  imports: [TarjetaComponent, FormsModule],
  templateUrl: './recommend.component.html',
  styles: `div.row { margin-top: 0.5cm;}`
})
export class RecommendComponent {


constructor(private conexion:LogicaService) {}
private movies:any = [];
patron:string = "";
private selectedMovie:any = undefined;
userToRecommend:string = "0";



getLoggedUser()
{return this.conexion.getLoggedUser();}

getNameById(id:string)
{return this.conexion.getNameById(id);}

  getSelectedMovie()
  {return this.selectedMovie;}
  getUsuarios()
  {return this.conexion.getUsers();}

  recommend()
  {
    if(this.userToRecommend != "0" && this.selectedMovie != undefined)
      {this.conexion.recommend(this.userToRecommend, this.selectedMovie)} 
  }

  setMovieToRecommend(m:any)
  {this.selectedMovie = m;}

  searchMoviesByString(patron:string)
  {this.conexion.getMoviesByString(patron).subscribe( (data:any) => {
    this.movies = data.Search
  })}

  getMovies()
  {return this.movies;}

}
