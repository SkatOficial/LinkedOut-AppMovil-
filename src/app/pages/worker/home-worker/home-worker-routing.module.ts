import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeWorkerPage } from './home-worker.page';

const routes: Routes = [
  {
    path: '',
    component: HomeWorkerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeWorkerPageRoutingModule {}
