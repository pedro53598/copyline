import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from '../app/home/home.component';
import { CadastroClienteComponent} from '../app/cadastro-cliente/cadastro-cliente.component'
import { LoginComponent } from './login/login.component'
import { BuscaComponent} from './clientes/busca/busca.component'
import {DeletaComponent } from './clientes/deleta/deleta.component'
import { EditaComponent} from './clientes/edita/edita.component'

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
      path: 'buscacli', component: BuscaComponent, pathMatch: 'full'
       
   },
   {
      path: 'deletacli', component: DeletaComponent, pathMatch: 'full'
       
   },
   
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