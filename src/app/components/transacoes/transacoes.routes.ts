import { Routes } from "@angular/router";
import { TransacoesComponent } from "./transacoes.component";
import { CreditoComponent } from "./components/credito/credito.component";
import { DebitoComponent } from "./components/debito/debito.component";

export const TransacoesRoutes: Routes = [
    {
        path: '',
        component: TransacoesComponent,
        children: [
            {
                path: '',
                redirectTo: 'credito',
                pathMatch: 'full'
            },            {
                path: 'credito',
                title: 'Crédito',
                component: CreditoComponent
            },
            {
                path: 'debito',
                title: 'Débito',
                component: DebitoComponent
            },

        ],
    }
]