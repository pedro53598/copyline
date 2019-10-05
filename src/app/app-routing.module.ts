import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { SobreComponent } from '../app/sobre/sobre.component';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from '../app/home/home.component';
import { CadastroClienteComponent} from '../app/cadastro-cliente/cadastro-cliente.component'
import { LoginComponent } from './login/login.component'
const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    {
      path: 'login', component: LoginComponent, pathMatch: 'full'
       
   },
    {
       path: 'home', component: HomeComponent, pathMatch: 'full'
        
    },
   
    {
      path: 'cadastrocli', component: CadastroClienteComponent, pathMatch: 'full'
       
   },
    {
       path: 'sobre', component: SobreComponent
        
    }
]

@NgModule({
  imports: [
      RouterModule.forRoot(routes),
      HttpClientModule,
      BrowserModule
  ],
exports: [RouterModule],

})
export class AppRoutingModule { }