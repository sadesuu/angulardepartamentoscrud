import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MenuComponent } from './components/menu-component/menu-component';
import { HomeComponent } from './components/home-component/home-component';
import { ServiceDepartamento } from './services/serviceDepartamento';
import { CreateComponent } from './components/create-component/create-component';
import { DetailComponent } from './components/detail-component/detail-component';

@NgModule({
  declarations: [App, MenuComponent, HomeComponent, CreateComponent, DetailComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners(), ServiceDepartamento],
  bootstrap: [App],
})
export class AppModule {}
