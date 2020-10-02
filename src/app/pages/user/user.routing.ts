import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

//COMPONENTS
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
    { 
        path: 'user', 
        children: [
            { path: 'register', component: RegisterComponent },
            { path: 'login', component: LoginComponent},
            { path: 'profile', component: ProfileComponent},
        ]
    },
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class UserRoutingModule {}