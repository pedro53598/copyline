import { Component, OnInit } from '@angular/core';
import {ServicesService} from '../../services.service';
@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})
export class BuscaComponent implements OnInit {

  cliente = '';
  dataCRM: any[];
  loading= false;
  constructor(private src: ServicesService) { }


  ngOnInit() {

    

  }   

  buscaCli(cliente){
    this.loading = true
    this.src.pesquisaCliente(cliente).subscribe(data => {
      this.dataCRM = data['RESULT'];
      this.loading = false
      console.log(data);
    })
  }
  
  deleteCliente(id){
    this.loading  = true
    this.src.deletaCliente(id).subscribe(data =>{
      console.log(data)
      if(data["SUCCESS"] == true){
        
        this.buscaCli(this.cliente)
        console.log('deletado');
        this.loading = false;
      }
      else{
        this.loading = false;
      }
    })
   
  }

}
