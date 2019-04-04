import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdminComponent} from './admin/admin.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {AuthguardGuard} from './authguard.guard';
import {SignUpComponent} from './sign-up/sign-up.component';
import {LoginComponent} from './login/login.component';

const appRoutes = [
  {path: 'login', component: LoginComponent},
  {path: 'admin', canActivate: [AuthguardGuard], component: AdminComponent},
  {path: 'admin/create_user', component: SignUpComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: ([RouterModule.forRoot(appRoutes, {useHash: true})]),
  exports: [RouterModule]
})
export class AppRoutingModule {
}
