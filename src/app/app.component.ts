import { Component, OnInit  } from '@angular/core';
import { ApitesteComponent } from './apiteste/apiteste.component';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Cidade } from './models/cidade';
import { CidadeService } from './services/cidade.service';


@Injectable({
  providedIn: 'root'
})


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  cidade = {} as Cidade;
  declare cidades: Cidade[];


  constructor(private cidadeService: CidadeService) { }

  ngOnInit() {
    this.getCars();
    console.log(this.cidades);
  }

  getCars() {
    this.cidadeService.getCidades().subscribe((cidades: Cidade[]) => {
      this.cidades = cidades;
    });
  }
}
