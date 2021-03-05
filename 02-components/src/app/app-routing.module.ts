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
    {
        path: 'list',
        loadChildren: () =>
            import('./pages/list/list.module').then(
                (m) => m.ListPageModule
            ),
    },
    {
        path: 'list-reorder',
        loadChildren: () =>
            import('./pages/list-reorder/list-reorder.module').then(
                (m) => m.ListReorderPageModule
            ),
    },
    {
        path: 'loading',
        loadChildren: () =>
            import('./pages/loading/loading.module').then(
                (m) => m.LoadingPageModule
            ),
    },
    {
        path: 'modal',
        loadChildren: () =>
            import('./pages/modal/modal.module').then(
                (m) => m.ModalPageModule
            ),
    },
  {
    path: 'popover',
    loadChildren: () => import('./pages/popover/popover.module').then( m => m.PopoverPageModule)
  },
  {
    path: 'popover-info',
    loadChildren: () => import('./pages/popover-info/popover-info.module').then( m => m.PopoverInfoPageModule)
  },
  {
    path: 'progress',
    loadChildren: () => import('./pages/progress/progress.module').then( m => m.ProgressPageModule)
  },
  {
    path: 'refresher',
    loadChildren: () => import('./pages/refresher/refresher.module').then( m => m.RefresherPageModule)
  },
  {
    path: 'search-bar',
    loadChildren: () => import('./pages/search-bar/search-bar.module').then( m => m.SearchBarPageModule)
  },
  {
    path: 'segment',
    loadChildren: () => import('./pages/segment/segment.module').then( m => m.SegmentPageModule)
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
