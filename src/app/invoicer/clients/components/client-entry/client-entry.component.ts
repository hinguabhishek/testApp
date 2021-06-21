import { Component, OnInit,Input, OnChanges, SimpleChanges, Output, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, Validators} from "@angular/forms"; 
import {IClientFormModel} from './componentModel/clientFormModel';

@Component({
  selector: 'app-client-entry',
  templateUrl: './client-entry.component.html',
  styleUrls: ['./client-entry.component.css']
})
export class ClientEntryComponent implements OnInit {

  clientForm:FormGroup;
  @Input('client') client:IClientFormModel;
  @Output('onClientFormSubmit') onClientFormSubmit:EventEmitter<IClientFormModel> = new EventEmitter<IClientFormModel>();
  constructor(private fb:FormBuilder) { 
  
  }
  ngOnInit(): void {
    this.clientForm = this.fb.group({
      clientName:[this.client?.clientName, Validators.required],
      clientAddress:[this.client?.clientAddress,Validators.required],
      isGSTApplication:[this.client?.isGSTApplication],
      clientGSTNumber:[this.client?.clientGSTNumber]
    });

    //subscribe to GSTCheckBox value changes event 
    this.clientForm.get("isGSTApplication").valueChanges.subscribe(value=>{
      if(value){
        this.clientForm.get("clientGSTNumber").setValidators(Validators.required);
      }else{
        this.clientForm.get("clientGSTNumber").clearValidators();
        this.clientForm.get("clientGSTNumber").setValue(null);
        this.client.clientGSTNumber = null;
      }
      this.clientForm.get("clientGSTNumber").updateValueAndValidity();
    });
  }
  onSubmit():void{
    this.onClientFormSubmit.emit(this.client);
    this.clientForm.reset();
  }
  
}
