interface zmogelis {
  vardas: string;
  amzius: number;
  salary: number;
  currency: string;
  getPersonInfo?(): string;
}

class Zmogelis implements zmogelis {
  vardas: string;
  amzius: number;
  salary: number;
  currency: string;
  constructor(
    vardas: string,
    amzius: number,
    salary: number,
    currency: string
  ) {
    this.vardas = vardas;
    this.amzius = amzius;
    this.salary = salary;
    this.currency = currency;
  }

  getPersonInfo(): string {
    return `${this.vardas} yra ${
      this.amzius
    }-erių metų amžiaus ir šiuo metu uždirba ${
      this.salary + ' ' + this.currency
    }.`;
  }
}

export { zmogelis, Zmogelis };
