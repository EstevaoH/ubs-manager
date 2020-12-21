import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuasInformacoesPage } from './suas-informacoes.page';

const routes: Routes = [
  {
    path: '',
    component: SuasInformacoesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuasInformacoesPageRoutingModule {}
