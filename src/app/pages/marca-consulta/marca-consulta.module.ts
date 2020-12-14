import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarcaConsultaPageRoutingModule } from './marca-consulta-routing.module';

import { MarcaConsultaPage } from './marca-consulta.page';
import { TabsPageModule } from 'src/app/tabs/tabs.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    TabsPageModule,
    MarcaConsultaPageRoutingModule
  ],
  declarations: [MarcaConsultaPage]
})
export class MarcaConsultaPageModule {}
