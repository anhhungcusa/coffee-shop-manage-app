import { People } from './people.model';

export class Customer extends People {
  private static readonly idPrefix = 'C';
  private static readonly numberAmount = 4;
  public id: string;
  constructor(
      name: string,
      birthDate: string,
      phoneNumber: string,
      address: string,
      length: number,
      public isRegistered: boolean,
      public updateDate: string,
      public status = true
  ) {
      super(name, birthDate, phoneNumber, address);
      this.id = this.generateId(length);
  }

  generateId(length) {
    length++;
    const suffixNumber = length.toString();
    let zeroAmount = Customer.numberAmount - suffixNumber.length;
    let suffix = '';
    while (zeroAmount > 0) {
      suffix += '0';
      --zeroAmount;
    }
    suffix += suffixNumber;
    return Customer.idPrefix + suffix;
  }
}
