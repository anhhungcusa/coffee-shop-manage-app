import { People } from './people.model';

export class Customer extends People {
  public isRegistered: boolean;

  constructor(
      id: string,
      name: string,
      birthDate: Date,
      phoneNumber: string,
      address: string,
      isRegistered: boolean
  ) {
      super(id, name, birthDate, phoneNumber, address);
      this.isRegistered = isRegistered;
  }
}
