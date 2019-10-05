import { Component, OnInit } from '@angular/core';
import { ServicesService} from '../services.service'

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {

  nome = '1';
  telretorno = '2';
  tel = '3';
  cpfcpnj: string;
  endereco = '5';
  email = '6';
  public response= '';
  loading= 'aguardando'
  status:boolean;
  canshow = false;
  constructor(private src: ServicesService) { }

  ngOnInit() {
  }

  criaCliente(){
    this.canshow = true
    this.response= ''
    console.log(this.nome,this.telretorno,this.tel,this.cpfcpnj,this.endereco,this.email)
    this.src.criaCliente(this.nome,this.telretorno,this.tel,this.cpfcpnj,this.endereco,this.email).subscribe(data =>{
      if( data['SUCCESS'] == true){
        this.canshow = false
        this.response = 'INSERIDO COM SUCESSO!'
        this.status = true
      }else{
        this.canshow = false
        this.status = false
        this.response = 'CLIENTE NAO INSERIDO, CONTATE O ADM'; 
        
      }
    })
  }


}
