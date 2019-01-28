import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private auth : AuthService,
    private formBuilder: FormBuilder
    ) { 
      this.loginForm = this.formBuilder.group({
        username : ['',Validators.required],
        password : ['',Validators.required]
      });
    }

  ngOnInit() {
    
  }

  doLogin(){
    console.log("Creadentials");
    this.auth.login();
  }
}
