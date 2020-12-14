import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaConsultaPageRoutingModule } from './lista-consulta-routing.module';

import { ListaConsultaPage } from './lista-consulta.page';
import { TabsPageModule } from 'src/app/tabs/tabs.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsPageModule,
    ListaConsultaPageRoutingModule
  ],
  declarations: [ListaConsultaPage]
})
export class ListaConsultaPageModule {}
