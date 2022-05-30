import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { LogOutComponent } from './log-out/log-out.component';



@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    LogOutComponent
  ],
  imports: [
    SharedModule,
    AuthRoutingModule,

  ]
})
export class AuthModule { }
