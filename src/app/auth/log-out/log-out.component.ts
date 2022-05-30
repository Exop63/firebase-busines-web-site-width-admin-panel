import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
})
export class LogOutComponent {

  constructor(private authService: AuthService) {
    authService.SignOut();
  }


}
