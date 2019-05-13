import { People } from './people.model';

export class Employee extends People {
  public type: string;

  constructor(
      id: string,
      name: string,
      birthDate: Date,
      phoneNumber: string,
      address: string,
      type: string
  ) {
      super(id, name, birthDate, phoneNumber, address);
      this.type = type;
  }
}
