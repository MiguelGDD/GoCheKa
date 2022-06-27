import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfiliadosComponent } from './pages/afiliados/afiliados.component';
import { NegociosComponent } from './pages/negocios/negocios.component';

const routes: Routes = [
  { path: 'afiliados', component: AfiliadosComponent },
  { path: 'negocios/:id', component: NegociosComponent },
  { path: '**', redirectTo: 'afiliados' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
