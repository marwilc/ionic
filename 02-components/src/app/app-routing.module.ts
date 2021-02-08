import { NgModule } from '@angular/core';
import {
    PreloadAllModules,
    RouterModule,
    Routes,
} from '@angular/router';

const routes: Routes = [
    {
        path: 'init',
        loadChildren: () =>
            import('./pages/init/init.module').then(
                (m) => m.InitPageModule
            ),
    },

    {
        path: 'alert',
        loadChildren: () =>
            import('./pages/alert/alert.module').then(
                (m) => m.AlertPageModule
            ),
    },

    {
        path: '',
        redirectTo: 'init',
        pathMatch: 'full',
    },
  {
    path: 'action-sheet',
    loadChildren: () => import('./pages/action-sheet/action-sheet.module').then( m => m.ActionSheetPageModule)
  },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            preloadingStrategy: PreloadAllModules,
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
