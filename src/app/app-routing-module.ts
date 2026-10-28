import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { CreateComponent } from './components/create-component/create-component';
import { DetailComponent } from './components/detail-component/detail-component';

const routes: Routes = [
  {path: "" , component: HomeComponent},
  {path: "create", component: CreateComponent},
  {path: "details/:id/:nombre/:localidad", component: DetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
