import { Component, OnInit } from '@angular/core';
import { IAccount } from 'src/app/Entities/account';
import { AccountService } from '../../../../services/account.service';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  account: IAccount;
  accounts: IAccount[];
  columnDefs = [
    { field: "id", width: 10, hide: true },
    { field: "accountName", width: 200, headerName: 'Account Name', sortable: true },
    { field: "accountAddress", width: 200, headerName: 'Address', sortable: true },
    { field: "panNumber", width: 200, headerName: 'Pan', headerClass: 'client_grid_column_align-right' },
    { field: "gstNumber", width: 200, headerName: "GST No." }
  ];
  gridApi: any;
  gridColumnApi: any;
  constructor(private accountService: AccountService) {
    //** Initalized account with default Value */
    this.account = this.getAccountDefault();
  }

  ngOnInit(): void {
    this.accounts = this.accountService.getAccounts()
  }
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }
  onSelectionChanged(event: any) {
    var selectedRows = this.gridApi.getSelectedRows();
    let data = selectedRows[0];
    this.account = data;
  }
  getAccountDefault(): IAccount {
    return {
      id: -1,
      accountName: "",
      accountAddress: "",
      panNumber: "",
      isGSTRegistered: false,
      gstNumber: null,
      bankAccountNumber: "",
      bankBranch: "",
      bankName: "",
      ifscCode: ""
    }
  }
  onAccountFormSubmit(value: IAccount) {
    let account = {...value};
    this.accounts = this.accountService.saveAccount(account);
    this.account = this.getAccountDefault();
    this.gridApi.setRowData(this.accounts);
  }
}
