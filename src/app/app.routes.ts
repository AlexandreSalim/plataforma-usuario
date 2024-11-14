import { Routes } from '@angular/router';
import { FoundComponent } from './components/found/found.component';

export const routes: Routes = [
    {
        path: '',
        title: 'Início',
        loadComponent: () => import('./components/inicio/inicio.component').then(m => m.InicioComponent),
    },
    {
        path: 'geral',
        title: 'Geral',
        loadChildren: () => import('./components/geral/geral.routes').then(m => m.GeralRoutes)
    },
    {
        path: 'transacoes',
        title: 'Transacões',
        loadChildren: () => import('./components/transacoes/transacoes.routes').then(m => m.TransacoesRoutes),
    },
    {
        path: '**',
        title: 'pagina não encontrada',
        component: FoundComponent
    }
];
