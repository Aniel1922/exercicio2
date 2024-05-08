import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'modulo1', loadChildren: () => import('./modulo1/modulo1.module').then(m => m.Modulo1module) },
  { path: 'modulo2', loadChildren: () => import('./modulo2/modulo2.module').then(m => m.Modulo2module) },
  {path:, redirectTo: '/modulo1/child1', pathMatch: 'full'},
  {path: '**', redirectTo: '/modulo2/child2'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
