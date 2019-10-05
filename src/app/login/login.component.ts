import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private senha= '';
  private email = '';
  private wrong = '';

  constructor(private router: Router,) { }

  ngOnInit() {
  }

  validaUser(){
    
   
    if(this.email != "admin" && this.senha != 'admin' ){
    this.wrong = 'Email ou senha incorreto'
    }
    if(this.email =='admin' && this.senha == 'admin'){
      console.log('foi')
      this.router.navigate(['/home']);
    }
  }

}
