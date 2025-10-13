import { Routes } from '@angular/router';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { QuienesSomosComponent } from './pages/quienesSomos/quienesSomos.component';
import { RecursosComponent } from './pages/recursos/recursos.component';
import { InvestigacionesComponent } from './pages/investigaciones/investigaciones.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    {
        path: '',
        component: UsuariosComponent
    },
    {
        path: 'quienesSomos',
        component: QuienesSomosComponent
    },
    {
        path: 'recursos',
        component: RecursosComponent
    },
    {
        path: 'investigaciones',
        component: InvestigacionesComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '**',
        redirectTo: '',
    },

];
