import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopoverInfoPage } from './popover-info.page';

const routes: Routes = [
  {
    path: '',
    component: PopoverInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopoverInfoPageRoutingModule {}
