import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { NgxMaskModule } from 'ngx-mask';
import { LoginComponent } from './login/login.component';
import { BuscaComponent } from './clientes/busca/busca.component';
import { DeletaComponent } from './clientes/deleta/deleta.component';
import { EditaComponent } from './clientes/edita/edita.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CadastroClienteComponent,
    LoginComponent,
    BuscaComponent,
    DeletaComponent,
    EditaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
