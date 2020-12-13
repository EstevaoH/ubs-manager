import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarcaConsultaPage } from './marca-consulta.page';

const routes: Routes = [
  {
    path: '',
    component: MarcaConsultaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarcaConsultaPageRoutingModule {}
