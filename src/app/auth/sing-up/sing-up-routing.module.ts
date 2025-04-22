import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingUpComponent } from './components/sing-up/sing-up.component';

const routes: Routes = [
    {
      path: '',
      component: SingUpComponent,
    },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SingUpRoutingModule { }
