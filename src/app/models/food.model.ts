export class Food {
  private static readonly idPrefix = 'F';
  private static readonly numberAmount = 3;
  public id: string;
  constructor(
    length: number,
    public idCategory: string,
    public name: string,
    public imgUrl: string,
    public price: number,
    public updateDate: Date,
    public isSelled: boolean = true
  ) {
    this.id = this.generateId(length);
  }

  generateId(length) {
    length++;
    const suffixNumber = length.toString();
    let zeroAmount = Food.numberAmount - suffixNumber.length;
    let suffix = '';
    while (zeroAmount > 0) {
      suffix += '0';
      --zeroAmount;
    }
    suffix += suffixNumber;
    return Food.idPrefix + suffix;
  }
}


