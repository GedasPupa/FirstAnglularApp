import { Injectable } from '@angular/core';
import { zmogelis, Zmogelis } from '../models/Zmogelis';

@Injectable({
  providedIn: 'root',
})
export class ZmogeliaiService {
  zmogeliai: zmogelis[] = [
    { vardas: 'rokelis', amzius: 27, salary: 2000, currency: 'Eur' },
    { vardas: 'dŽiujeta', amzius: 27, salary: 3000, currency: 'uSD' },
    { vardas: 'jonaS', amzius: 39, salary: 4000, currency: 'jpY' },
    new Zmogelis('toMAS', 21, 3000, 'eUR'),
    new Zmogelis('gEdas', 39, 999.0555, 'JpY'),
    new Zmogelis('mindĖ', 33, 10000, 'uSd'),
  ];
  constructor() {}

  getZmogeliai(): zmogelis[] {
    return this.zmogeliai;
  }
}
