import { NgModule } from '@angular/core';
import {
    PreloadAllModules,
    RouterModule,
    Routes,
} from '@angular/router';
import { UserGuard } from './guards/user.guard';

const routes: Routes = [
    {
        path: 'main',
        canLoad: [UserGuard],
        loadChildren: () =>
            import('./pages/tabs/tabs.module').then(
                (m) => m.TabsPageModule
            ),
    },
    {
        path: 'login',
        loadChildren: () =>
            import('./pages/login/login.module').then(
                (m) => m.LoginPageModule
            ),
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'main/tabs/tab1',
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
