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
        loadChildren: () =>
            import('./pages/check/check.module').then(
                (m) => m.CheckPageModule
            ),
    },
    {
        path: 'date-time',
        loadChildren: () =>
            import('./pages/datetime/datetime.module').then(
                (m) => m.DatetimePageModule
            ),
    },
    {
        path: 'fab',
        loadChildren: () =>
            import('./pages/fab/fab.module').then(
                (m) => m.FabPageModule
            ),
    },
    {
        path: 'grid',
        loadChildren: () =>
            import('./pages/grid/grid.module').then(
                (m) => m.GridPageModule
            ),
    },
    {
        path: 'infinity-scroll',
        loadChildren: () =>
            import(
                './pages/infinity-scroll/infinity-scroll.module'
            ).then((m) => m.InfinityScrollPageModule),
    },
    {
        path: 'input',
        loadChildren: () =>
            import('./pages/input/input.module').then(
                (m) => m.InputPageModule
            ),
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
