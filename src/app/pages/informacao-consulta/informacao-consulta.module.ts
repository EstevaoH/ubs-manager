import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformacaoConsultaPageRoutingModule } from './informacao-consulta-routing.module';

import { InformacaoConsultaPage } from './informacao-consulta.page';
import { TabsPageModule } from 'src/app/tabs/tabs.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsPageModule,
    InformacaoConsultaPageRoutingModule
  ],
  declarations: [InformacaoConsultaPage]
})
export class InformacaoConsultaPageModule {}
