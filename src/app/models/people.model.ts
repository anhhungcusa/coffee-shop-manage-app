export class People {
  constructor(
      public id: string,
      public name: string,
      public birthDate: Date,
      public phoneNumber: string,
      public address: string,
      public status: boolean = true
  ) {}
}
