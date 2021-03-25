import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform:FormGroup;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm(){
this.loginform=this.formBuilder.group({
  email:["",Validators.required],
  password:["",Validators.required]
})

  }

  login(){
    if(this.loginform.valid){
      console.log(this.loginform.value);
    }
  }

}
