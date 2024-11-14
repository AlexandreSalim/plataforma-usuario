import { Routes } from "@angular/router";
import { GeralComponent } from "./geral.component";
import { BasicaComponent } from "./components/basica/basica.component";
import { ContatoComponent } from "./components/contato/contato.component";
import { EnderecoComponent } from "./components/endereco/endereco.component";

export const GeralRoutes: Routes = [
    {
        path: '',
        component: GeralComponent,
        title: 'Geral',
        children: [
            {
                path: '',
                redirectTo: 'basica',
                pathMatch: 'full'
            },
            {
                path: 'basica',
                title: 'Básico',
                component: BasicaComponent
            },
            {
                path: 'contato',
                title: 'Contato',
                component: ContatoComponent
            },
            {
                path: 'endereco',
                title: 'Endereco',
                component: EnderecoComponent
            },
        ],
    }
];