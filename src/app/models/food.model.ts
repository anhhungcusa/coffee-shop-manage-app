export class Food {
  constructor(
    public id: string,
    public idCategory: string,
    public name: string,
    public imgUrl: string,
    public price: number,
    public updateDate: Date,
    public isSelled: boolean = true
  ) {}
}
