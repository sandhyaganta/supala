import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';

export const routes: Routes = [
    {path:'',redirectTo:'main',pathMatch:'full'},
    {path:'main',component:MainPageComponent},
];
