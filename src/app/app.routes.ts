import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { ObsDemoComponent } from './obs-demo/obs-demo.component';
import { UserComponent } from './user/user.component';
import { LoginGaurdService } from './services/login-gaurd.service';
import { ProductComponent } from './product/product.component';
import { OverviewComponent } from './product/overview/overview.component';
import { SpecificationComponent } from './product/specification/specification.component';

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
        canActivate : [ LoginGaurdService ],
        component : UserComponent
    },{
        path : 'products',
        component : ProductComponent,
        children : [{
            path : "overview",
            component : OverviewComponent
        },{
            path : 'specification',
            component : SpecificationComponent
        }]
    },{
        path : "**",
        redirectTo : "login",
        pathMatch : 'full'              //http://localhost:4200/nowhere
    }
] 