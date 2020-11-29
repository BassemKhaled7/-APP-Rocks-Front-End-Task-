import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  alert:boolean = false;
  success:boolean = false;
    constructor( private _formBuilder : FormBuilder) { }
    login: FormGroup = this._formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
    });
  ngOnInit() {
  }

  onClickLogin(){
    if (this.login.invalid){
      this.alert = true;
    }else{
      this.success = true;
      this.alert = false;

    }
  }

}
