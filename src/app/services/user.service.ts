import { Injectable } from '@angular/core';
import User from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  postUser(data: User): boolean {
    if (localStorage.getItem('user')) {
      const item = JSON.parse(localStorage.getItem('user'));
      item[data.id] = data;
      localStorage.setItem('user', JSON.stringify(item));
    } else {
      const newUser = {
        [data.id]: data
      };
      localStorage.setItem('user', JSON.stringify(newUser));
    }
    return true;
  }

  getAll(): User {
    if (localStorage.getItem('user')) {
      return JSON.parse(localStorage.getItem('user'));
    }
  }
}
