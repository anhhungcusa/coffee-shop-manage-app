export class Food {
  static readonly idPrefix = 'F';
  static readonly numberAmount = 3;
  static readonly idLength = 4;
  public id: string;
  constructor(
    length: number,
    public idFoodCategory: string,
    public name: string,
    public imgUrl: string,
    public price: number,
    public updateDate: string,
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

export class SelectedFood {
  constructor(public selectedFoodCategory: Food,
              public index: number ) {}
}


