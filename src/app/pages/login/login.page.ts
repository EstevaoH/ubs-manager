import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  loginForm: FormGroup;
  erro: string;
  usuario: Usuario;
  loading: boolean;

  error_messages = {
    'email': [
      { type: 'required', message: 'O E-mail é necessário.' },
      { type: 'minlength', message: 'O E-mail tem que ter no mínimo 6 caracteres.' },
      { type: 'maxlength', message: 'O E-mail tem que ter no máximo 50 caracteres.' },
      { type: 'pattern', message: 'O E-mail inválido.' }
    ],
    'password': [
      { type: 'required', message: 'A Senha é necessária.' },
      { type: 'minlength', message: 'A senha tem que ter no mínimo 6 caracteres.' },
      { type: 'maxlength', message: 'A senha tem que ter no máximo 30 caracteres.' },
      { type: 'pattern', message: 'A senha tem que ter números, letras maiúsculas e minúsculas.' }
    ]
  }


  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
  ) {
    this.usuario = new Usuario();

    this.loginForm = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(50),
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30),
        // Validators.pattern('^(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$')
      ]))
    });
  }

  ngOnInit() {
  }

  cadastro() {
    this.router.navigate(['/cadastro']);
  }

  login(){
    this.router.navigate(['tabs/lista-consulta'])
  }

  recuperaSenha() {
    this.router.navigate(['/recuperar-senha'])
  }

}
