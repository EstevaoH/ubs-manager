import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuasInformacoesPageRoutingModule } from './suas-informacoes-routing.module';

import { SuasInformacoesPage } from './suas-informacoes.page';
import { TabsPageModule } from 'src/app/tabs/tabs.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsPageModule,
    ReactiveFormsModule,
    SuasInformacoesPageRoutingModule
  ],
  declarations: [SuasInformacoesPage]
})
export class SuasInformacoesPageModule {}
