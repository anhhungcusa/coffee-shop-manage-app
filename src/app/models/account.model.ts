export class Account {
  private static readonly idPrefix = 'AC';
  private static readonly numberAmount = 4;
  public id: string;
  constructor(
    length: number,
    public idUser: string,
    public userName: string,
    public password: string,
    public role: number,
    public registerDate: Date,
    public status: boolean = true
  ) {
    this.id = this.generateId(length);
  }

  generateId(length) {
    length++;
    const suffixNumber = length.toString();
    let zeroAmount = Account.numberAmount - suffixNumber.length;
    let suffix = '';
    while (zeroAmount > 0) {
      suffix += '0';
      --zeroAmount;
    }
    suffix += suffixNumber;
    return Account.idPrefix + suffix;
  }
}
