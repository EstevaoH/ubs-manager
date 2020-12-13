import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarcaConsultaPageRoutingModule } from './marca-consulta-routing.module';

import { MarcaConsultaPage } from './marca-consulta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarcaConsultaPageRoutingModule
  ],
  declarations: [MarcaConsultaPage]
})
export class MarcaConsultaPageModule {}
