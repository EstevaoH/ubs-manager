import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformacaoConsultaPage } from './informacao-consulta.page';

const routes: Routes = [
  {
    path: '',
    component: InformacaoConsultaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformacaoConsultaPageRoutingModule {}
