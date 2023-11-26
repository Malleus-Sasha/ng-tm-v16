import { Injectable } from '@angular/core';
import { Donut } from '../models/donut.model';
import { DonutsMock } from '../mock/donuts.mock';

@Injectable({
  providedIn: 'root'
})
export class DonutService {

  private donuts: Donut[] = DonutsMock;

  constructor() {}

  read() {
    return this.donuts;
  }

  readOne(id: string) {
    const donut = this.read().find((donut: Donut) => donut.id === id);

    if (donut) {
      return donut;
    }

    return { name: '', icon: '', price: 0, description: '' };
  }

  create(payload: Donut) {
    this.donuts = [...this.donuts, payload];
    console.log('Create: ', this.donuts);
  }

  update(payload: Donut) {
    this.donuts = this.donuts.map((donut: Donut) => {
      if(donut.id = payload.id) return payload;
      return donut;
    });
  }

  delete(payload: Donut) {
    this.donuts = this.donuts.filter((donut) => {
      return donut.id !== payload.id;
    });
  }
}
