import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultaConcluidaPageRoutingModule } from './consulta-concluida-routing.module';

import { ConsultaConcluidaPage } from './consulta-concluida.page';
import { TabsPageModule } from 'src/app/tabs/tabs.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsPageModule,
    ConsultaConcluidaPageRoutingModule
  ],
  declarations: [ConsultaConcluidaPage]
})
export class ConsultaConcluidaPageModule {}
