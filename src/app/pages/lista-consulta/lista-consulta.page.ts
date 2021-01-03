import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-lista-consulta',
  templateUrl: './lista-consulta.page.html',
  styleUrls: ['./lista-consulta.page.scss'],
})
export class ListaConsultaPage implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  mostrarConsulta(){
    this.router.navigate(['tabs/informacao-consulta'])
  }

}
