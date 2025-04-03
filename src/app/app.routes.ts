import { Routes } from '@angular/router';
import { HomeComponent } from './sections/home/home.component';
import { ProfilesComponent } from './sections/profiles/profiles.component';
import { RecommendComponent } from './sections/recommend/recommend.component';
import { Page404Component } from './page404/page404.component';

export const routes: Routes = [

    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'profiles', component: ProfilesComponent },
    { path: 'recommend', component: RecommendComponent },
    { path: '**', component: Page404Component }
];
