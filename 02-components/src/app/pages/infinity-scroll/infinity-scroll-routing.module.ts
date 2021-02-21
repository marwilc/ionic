import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfinityScrollPage } from './infinity-scroll.page';

const routes: Routes = [
  {
    path: '',
    component: InfinityScrollPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfinityScrollPageRoutingModule {}
