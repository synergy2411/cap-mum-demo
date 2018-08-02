import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { ObsDemoComponent } from './obs-demo/obs-demo.component';
import { UserComponent } from './user/user.component';

export const APP_ROUTES : Routes = [
    {
        path : '',
        redirectTo: "login",
        pathMatch : "full"
    },{
        path : 'login',
        component : LoginComponent
    },{
        path : "register",
        component : RegisterComponent
    }, {
        path : 'pipe',
        component : PipeDemoComponent
    }, {
        path : 'obs',                   //http://localhost:4200/obs
        component :ObsDemoComponent
    },{
        path : 'user',
        component : UserComponent
    },{
        path : "**",
        redirectTo : "login",
        pathMatch : 'full'              //http://localhost:4200/nowhere
    }
] 