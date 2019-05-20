export class FoodCategory {
  private static readonly idPrefix = 'FC';
  private static readonly numberAmount = 2;
  public id: string;
  constructor(
    length: number,
    public name: string,
    public status: boolean = true
  ) {
    this.id = this.generateId(length);
  }

  generateId(length) {
    length++;
    const suffixNumber = length.toString();
    let zeroAmount = FoodCategory.numberAmount - suffixNumber.length;
    let suffix = '';
    while (zeroAmount > 0) {
      suffix += '0';
      --zeroAmount;
    }
    suffix += suffixNumber;
    return FoodCategory.idPrefix + suffix;
  }
}

export class SelectedFoodCategory {
  constructor(public selectedFoodCategory: FoodCategory,
              public index: number ) {}
}
