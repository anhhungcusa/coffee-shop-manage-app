import { DataStorageService } from './data-storage.service';
import { Account } from '../models/account.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private static readonly AccountStorageKey = 'accounts';
  private accounts: Account[];

  accounts$: Account[];
  constructor(
    private dataStorageService: DataStorageService
    ) {
    }

  setAccounts() {
  }

  getAccounts() {

  }


}
