import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import { formLabel,formMessage } from "../../../../lib/formLabelMessage";
import {IAccount} from "../../../../Entities/account"
@Component({
  selector: 'app-account-entry',
  templateUrl: './account-entry.component.html',
  styleUrls: ['./account-entry.component.css']
})
export class AccountEntryComponent implements OnInit {

  @Input() account:IAccount;
  @Output() onFormSubmit:EventEmitter<IAccount> = new EventEmitter<IAccount>();
  accountForm:FormGroup;
  formLabel =  formLabel.account;
  formMessage = formMessage.account;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.accountForm = this.fb.group({
      accountName:['',Validators.required],
      accountAddress:['',Validators.required],
      panNumber:['',Validators.required],
      isGSTRegistered:[false],
      gstNumber:[''],
      bankAccountNumber:['',Validators.required],
      bankName:['',Validators.required],
      bankBranch:['',Validators.required],
      ifscCode:['',Validators.required]
    });
    this.accountForm.get("isGSTRegistered").valueChanges.subscribe((value)=>{
      if(value){
        this.accountForm.get("gstNumber").setValidators(Validators.required)
      }else{
        this.accountForm.get("gstNumber").clearValidators();
        this.accountForm.get("gstNumber").setValue(null);
      }
      this.accountForm.get("gstNumber").updateValueAndValidity();
    });
  }

  onAccountFormSubmit():void{
    this.onFormSubmit.emit(this.account);
    this.accountForm.reset();
  }

}
