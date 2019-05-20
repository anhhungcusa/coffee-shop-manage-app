import { Injectable } from '@angular/core';
import { DataStorageService } from './data-storage.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private static readonly OrderStorageKey = 'orders';

  constructor(
    private dataStorageService: DataStorageService
  ) { }

}
