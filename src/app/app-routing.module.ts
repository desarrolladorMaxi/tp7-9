import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { AngularComponent } from './componentes/angular/angular.component';
import { GitComponent } from './componentes/git/git.component';
import { TerminalesComponent } from './componentes/terminales/terminales.component';

const routes: Routes = [
  {path: '', component:InicioComponent},
  {path: 'angular', component:AngularComponent},
  {path: 'git', component:GitComponent},
  {path: 'terminales', component:TerminalesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
