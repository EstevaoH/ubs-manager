import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  
  
  cadastraForms: FormGroup;
  usuario: Usuario;

  error_messages = {
    'sus': [
      { type: 'required', message: 'O Nº do SUS é necessário.' },
    ],
    'nome': [
      { type: 'required', message: 'O Nome é necessário.' },
      { type: 'minlength', message: 'O nome tem que ter no mínimo 6 caracteres.' }
    ],
    'sobrenome': [
      { type: 'required', message: 'O sobrenome é necessário.' },
    ],
    'telefone': [
      { type: 'required', message: 'O Telefone é necessário.' },
      { type: 'minlength', message: 'O telefone tem que ter no mínimo 6 caracteres.' }
    ],
    'genero': [
      { type: 'required', message: 'A escolhar o gênero é necessário.' },
    ],
    'cpf': [
      { type: 'required', message: 'O CPF é necessário.' },
      { type: 'minlength', message: 'O CPF tem que ter 11 caracteres.' }
    ],
    'cep': [
      { type: 'required', message: 'Informe o CEP do endereço.' },
    ],
    'logradouro': [
      { type: 'required', message: 'Informe o nome da rua, avenida, etc.' },
    ],
    'numero': [
      { type: 'required', message: 'Informe o número.' },
    ],
    'bairro': [
      { type: 'required', message: 'Informe o bairro.' },
    ],
    'cidade': [
      { type: 'required', message: 'Informe a cidade.' },
    ],
    'uf': [
      { type: 'required', message: 'Informe o estado.' },
    ],
    
    'email': [
      { type: 'required', message: 'O E-mail é necessário.' },
      { type: 'minlength', message: 'O E-mail tem que ter no mínimo 6 caracteres.' },
      { type: 'maxlength', message: 'O E-mail tem que ter no máximo 50 caracteres.' },
      { type: 'pattern', message: 'O E-mail inválido.' }
    ],

    'senha': [
      { type: 'required', message: 'A Senha é necessária.' },
      { type: 'minlength', message: 'A senha tem que ter no mínimo 6 caracteres.' },
      { type: 'maxlength', message: 'A senha tem que ter no máximo 30 caracteres.' },
      { type: 'pattern', message: 'A senha tem que ter números, letras maiusculos e minusculos.' }
    ],
    'senha2': [
      { type: 'required', message: 'Confirmar senha é necessária.' },
      { type: 'minlength', message: 'A senha tem que ter no mínimo 6 caracteres.' },
      { type: 'maxlength', message: 'A senha tem que ter no máximo 30 caracteres.' },
      { type: 'pattern', message: 'A senha tem que ter números, letras maiusculos e minusculos.' }
    ],
    
  }
  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
  ) {
    this.usuario = new Usuario();

    this.cadastraForms = this.formBuilder.group({
      nome: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
      ])),
      sobrenome: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
      ])),
      sus: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      telefone: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
      ])),
      genero: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      cpf: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(11),
        // Validators.maxLength(11),
        Validators.pattern('[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}')
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(50),
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      cep: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      uf: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      cidade: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      bairro: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      logradouro: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      numero: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      senha: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30),
        // Validators.pattern('^(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$')
      ])),
      senha2: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30),
        // Validators.pattern('^(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$')
      ]))
    });
   }

  ngOnInit() {
  }

}
