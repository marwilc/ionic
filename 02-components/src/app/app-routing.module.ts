import { NgModule } from '@angular/core';
import {
    PreloadAllModules,
    RouterModule,
    Routes,
} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'init',
        pathMatch: 'full',
    },
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
        path: 'action-sheet',
        loadChildren: () =>
            import('./pages/action-sheet/action-sheet.module').then(
                (m) => m.ActionSheetPageModule
            ),
    },
    {
        path: 'avatar',
        loadChildren: () =>
            import('./pages/avatar/avatar.module').then(
                (m) => m.AvatarPageModule
            ),
    },
    {
        path: 'button',
        loadChildren: () =>
            import('./pages/button/button.module').then(
                (m) => m.ButtonPageModule
            ),
    },
    {
        path: 'card',
        loadChildren: () =>
            import('./pages/card/card.module').then(
                (m) => m.CardPageModule
            ),
    },
  {
    path: 'check',
    loadChildren: () => import('./pages/check/check.module').then( m => m.CheckPageModule)
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
