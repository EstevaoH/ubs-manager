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
            loadChildren: () => import('./pages/lista-consulta/lista-consulta.module').then( m => m.ListaConsultaPageModule)


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
