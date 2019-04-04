import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AdminComponent} from './admin/admin.component';
import {LoginComponent} from './login/login.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {ReactiveFormsModule} from '@angular/forms';
import {UserService} from './user.service';
import {AuthguardGuard} from './authguard.guard';
import {AppService} from './app.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NotFoundComponent} from './not-found/not-found.component';
import {FilterPipe} from './pipes/filter.pipe';
import {ErrorDialogComponent} from './error-dialog/error-dialog.component';
import {HttpConfigInterceptor} from './Interceptor/httpconfig.interceptor'
import {ErrorDialogService} from './error-dialog/errordialog.service';
import {DialogModalComponent} from './dialog-modal/dialog-modal.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from './shared/shared.module';
import {EditModalComponent} from './edit-modal/edit-modal.component';
import {GetUserByIdService} from './get-user-by-id.service';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    LoginComponent,
    SignUpComponent,
    NotFoundComponent,
    FilterPipe,
    ErrorDialogComponent,
    DialogModalComponent,
    EditModalComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [
    UserService,
    AuthguardGuard,
    AppService,
    {provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true},
    ErrorDialogService,
    GetUserByIdService,


  ],
  bootstrap: [AppComponent],
  entryComponents: [DialogModalComponent, EditModalComponent]
})
export class AppModule {
}
