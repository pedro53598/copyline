import { Component, OnInit } from '@angular/core';
import {ServicesService} from '../../services.service';
@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})
export class BuscaComponent implements OnInit {

  cliente = 'he';
  dataCRM: any[];
  constructor(private src: ServicesService) { }


  ngOnInit() {
  }

  buscaCli(){
    this.src.pesquisaCliente(this.cliente).subscribe(data => {
      this.dataCRM = data['RESULT'];
      console.log(data);
    })
  }


}
