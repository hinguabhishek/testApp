import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import  { AgGridModule } from "ag-grid-angular"
import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountComponent } from './components/account/account.component';
import { AccountEntryComponent } from './components/account-entry/account-entry.component';



@NgModule({
  declarations: [AccountComponent, AccountEntryComponent],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([])
  ]
})
export class AccountsModule { }
