import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dataCRM: any[];
  public nome = "pedro";
  
  
  constructor(
    
    private service: ServicesService) { }

  ngOnInit() {
    this.service.getDataAgenda().subscribe(data => {
      this.dataCRM = data['RESULT'];
      console.log(data)
    });
  }
  }
