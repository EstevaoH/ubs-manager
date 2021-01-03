import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';

const routes: Routes = [

  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'marca-consulta',
        children: [
          {
            path: '',
            loadChildren: () => import('./pages/marca-consulta/marca-consulta.module').then(m => m.MarcaConsultaPageModule)

          }
        ]
      },
      {
        path: 'lista-consulta',
        children: [
          {
            path: '',
            loadChildren: () => import('./pages/lista-consulta/lista-consulta.module').then(m => m.ListaConsultaPageModule)


          }
        ]
      },
      {
        path: 'suas-informacoes',
        children: [
          {
            path: '',
            loadChildren: () => import('./pages/suas-informacoes/suas-informacoes.module').then(m => m.SuasInformacoesPageModule)

          }
        ]
      },
      {
        path: 'informacao-consulta',
        children: [
          {
            path: '',
            loadChildren: () => import('./pages/informacao-consulta/informacao-consulta.module').then( m => m.InformacaoConsultaPageModule)

          }
        ]
      },

      {
        path: 'alterar-senha',
        children: [
          {
            path: '',
            loadChildren: () => import('./pages/alterar-senha/alterar-senha.module').then( m => m.AlterarSenhaPageModule)
 
          }
        ]
      },

      {
        path: 'consulta-concluida',
        children: [
          {
            path: '',
            loadChildren: () => import('./pages/consulta-concluida/consulta-concluida.module').then( m => m.ConsultaConcluidaPageModule)

          }
        ]
      },

    ]
  },



  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },



  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./pages/cadastro/cadastro.module').then(m => m.CadastroPageModule)
  },
  {
    path: 'recuperar-senha',
    loadChildren: () => import('./pages/recuperar-senha/recuperar-senha.module').then( m => m.RecuperarSenhaPageModule)
  },
  {
    path: 'informacao-consulta',
    loadChildren: () => import('./pages/informacao-consulta/informacao-consulta.module').then( m => m.InformacaoConsultaPageModule)
  },

  // {
  //   path: 'lista-consulta',
  //   loadChildren: () => import('./pages/lista-consulta/lista-consulta.module').then( m => m.ListaConsultaPageModule)
  // },



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
