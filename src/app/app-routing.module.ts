import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'sing_in',
    loadChildren: () =>
      import('./auth/sing-in/sing-in.module').then(
        (childRouting) => childRouting.SingInModule
      ),
  },
  {
    path: 'sing_up',
    loadChildren: () =>
      import('./auth/sing-up/sing-up.module').then(
        (childRouting) => childRouting.SingUpModule
      ),
  },
  {
    path: '**',
    redirectTo: 'sing_in',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
