import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import {RecepieListComponent} from './components/recepie-list/recepie-list.component';
import {AddRecepieComponent} from './components/add-recepie/add-recepie.component';



const routes: Routes = [
 
  {path: '', component: RecepieListComponent},
  {path: 'recipies', component: RecepieListComponent},
  {path: 'recipie/add', component: AddRecepieComponent}
  

 // {path: 'client/:id', component: ClientDetailsComponent ,canActivate:[AuthGuard]},
  
  //{path: '**', component: NotFoundComponent},
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  providers:[]
})
export class AppRoutingModule { }
