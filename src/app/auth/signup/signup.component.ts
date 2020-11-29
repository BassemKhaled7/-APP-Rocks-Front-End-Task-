import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
alert:boolean = false;
success:boolean = false;
  constructor( private _formBuilder : FormBuilder) { }
  signup: FormGroup = this._formBuilder.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", Validators.required],
    confirmPassword: ["", Validators.required],
  });
  onClickSignup(){
    if (this.signup.invalid){
      this.alert = true;
    }else{
      this.success = true;
      this.alert = false;

    }
  }
  ngOnInit() {
    
  }

}
