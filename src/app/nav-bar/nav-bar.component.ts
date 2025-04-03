import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-bar.component.html',
  styles: `
  
  div,nav 
  {
    background-color: rgb(222, 213, 203);
  }
  .container-fluid 
  {
    margin-left: 1cm;
  }`
})
export class NavBarComponent {

}
