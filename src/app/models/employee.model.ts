import { People } from './people.model';

export class Employee extends People {
  private static readonly idPrefix = 'E';
  private static readonly numberAmount = 3;
  public id: string;
  constructor(
      name: string,
      birthDate: Date,
      phoneNumber: string,
      address: string,
      length: string,
      public type: string,
      public updateDate: Date,
      public status: boolean = true
  ) {
      super(name, birthDate, phoneNumber, address);
      this.id = this.generateId(length);
  }

  generateId(length) {
    length++;
    const suffixNumber = length.toString();
    let zeroAmount = Employee.numberAmount - suffixNumber.length;
    let suffix = '';
    while (zeroAmount > 0) {
      suffix += '0';
      --zeroAmount;
    }
    suffix += suffixNumber;
    return Employee.idPrefix + suffix;
  }
}
