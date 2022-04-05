import { Component, OnInit, ViewChild } from '@angular/core';
import { Injectable } from '@angular/core';
import { Cidade } from '../models/cidade';
import { CidadeService } from '../services/cidade.service';
import { EditSettingsModel, ToolbarItems, IEditCell, GridComponent, SaveEventArgs, DialogEditEventArgs } from '@syncfusion/ej2-angular-grids';
import { NumericTextBox } from '@syncfusion/ej2-inputs';
import { RequiredValidator, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})


@Component({
  selector: 'app-apiteste',
  templateUrl: './apiteste.component.html',
  styleUrls: ['./apiteste.component.css'],
})

export class ApitesteComponent implements OnInit {
  cidade = {} as Cidade;
  public cidades: Cidade[];

  @ViewChild('grid')
  public grid: GridComponent;
  public data: Object[];
  public editSettings: EditSettingsModel;
  public toolbar: ToolbarItems[];
  public priceParams: IEditCell;
  public stockParams: IEditCell;

  public priceElem: HTMLElement;
  public priceObj: NumericTextBox;

  public stockElem: HTMLElement;
  public stockObj: NumericTextBox;

  public nomeRules: object;

  constructor(private cidadeService: CidadeService) { }


  ngOnInit(): void {
    this.getCars();
    this.data = this.cidades;
    this.editSettings = {
      allowEditing: true,
      allowAdding: true,
      allowDeleting: true
    };

    this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];

    //this.nomeRules = { required: true, 'Nome é obrigatório' };
  }

  getCars() {
    this.cidadeService.getCidades().subscribe((cidades: Cidade[]) => {
      this.cidades = cidades;
    });
  }

}
