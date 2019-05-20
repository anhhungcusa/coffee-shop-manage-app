import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { Account } from 'src/app/models/account.model';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss'],
  providers: []
})
export class AccountsComponent implements OnInit {
  accounts: Account[];
  accounts2: Account[];
  acount: Account;
  constructor(
    private accountService: AccountService
  ) { }

  ngOnInit() {
  }



  test2() {

  }

}
