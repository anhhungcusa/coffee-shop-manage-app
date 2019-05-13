export class Account {
  constructor(
    public id: string,
    public idUser: string,
    public userName: string,
    public password: string,
    public type: number,
    public status: boolean = true
  ) {}
}
