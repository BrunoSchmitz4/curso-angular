import { Injectable } from '@angular/core';
import { flushMicrotasks } from '@angular/core/testing';

import { Animal } from '../Animal';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  remove(animals: Animal[], animal: Animal){
    return animals.filter((a) => animal.name !== a.name);
  }

}