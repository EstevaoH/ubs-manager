import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Consulta } from 'src/app/models/consulta';

@Component({
  selector: 'app-marca-consulta',
  templateUrl: './marca-consulta.page.html',
  styleUrls: ['./marca-consulta.page.scss'],
})
export class MarcaConsultaPage implements OnInit {

  consultaForms: FormGroup;
  consulta: Consulta;

  error_messages = {
    'nome': [
      { type: 'required', message: 'O nome do paciente(a) é necessário.' },
    ],
    'ubs': [
      { type: 'required', message: 'Selecione a localização da UBS.' },
    ],
    'diabetes': [
      { type: 'required', message: 'Selecione uma das opções.' },
    ],
    'hipertensao': [
      { type: 'required', message: 'Selecione uma das opções.' },
    ],
    'cardiaco': [
      { type: 'required', message: 'Selecione uma das opções.' },
    ],
    'doencasCardiacas': [
      { type: 'required', message: 'Por favor, preencher o campo acima.'},
    ],
    'alergias': [
      { type: 'required', message: 'Selecione uma das opções.' },
    ],
    'doencasAlergicas':[
      { type: 'required', message: 'Por favor, preencher o campo acima.'},
    ],
    'sintomas': [
      { type: 'required', message: 'Por favor, preencher o campo acima.' },
    ],
  }
  
  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
  ) { 

    this.consulta = new Consulta();

    this.consultaForms = this.formBuilder.group({
      nome: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      ubs: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      diabetes: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      hipertensao: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      cardiaco: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      alergias: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      doencasAlergicas: new FormControl('', Validators.compose([
        Validators.required,
        Validators.nullValidator,
      ])),
      doencasCardiacas: new FormControl('', Validators.compose([
        Validators.nullValidator,
        Validators.required,
      ])),
      sintomas: new FormControl('', Validators.compose([
        Validators.required,
      ])),
    });
  }

  ngOnInit() {
    this.validarEspecial();

  }

  validarEspecial() {
    let doencasAlergicas = this.consultaForms.get('doencasAlergicas');
    let doencasCardiacas = this.consultaForms.get('doencasCardiacas');

    this.consultaForms.get('alergias').valueChanges.subscribe(
      doencas => {
        if (doencas === '1') {
          doencasAlergicas.setValidators([Validators.required]);
          // doencasAlergicas.setValidators([Validators.pattern('[a-zA-Z ]*')]);
        } else {
          doencasAlergicas.setValidators(null);
          doencasAlergicas.setValue('')
        };
        doencasAlergicas.updateValueAndValidity();
      }
    );

    this.consultaForms.get('cardiaco').valueChanges.subscribe(
      doencas => {
        if (doencas === '1') {
          doencasCardiacas.setValidators([Validators.required]);
          // doencasCardiacas.setValidators([Validators.pattern('[a-zA-Z ]*')]);
        } else {
          doencasCardiacas.setValidators(null);
          doencasCardiacas.setValue('')
        };
        doencasCardiacas.updateValueAndValidity();
      }
    );
  };

  solicitarConsulta(){
    console.log(this.consultaForms.value)
    
  }

}
