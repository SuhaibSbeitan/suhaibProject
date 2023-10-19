import { Injectable } from '@angular/core';
import { User } from '../user';
import { USERS } from '../users';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  createUser(user: User) {
    USERS.push(user);
  }

  getAllUsers(): User[] {
    return USERS;
  }

  getUserById(id: number): User {
    return USERS.find(user => user.id = id)
  }

  updateUser(user: User) {
    const userIndex = USERS.findIndex((obj => obj.id === user.id));
    USERS[userIndex].name = user.name;
    USERS[userIndex].major = user.major;
    USERS[userIndex].phone = user.phone;
    USERS[userIndex].userName = user.userName;
    USERS[userIndex].password = user.password;
  }

  deleteUser(id: number) {
    const userIndex = USERS.findIndex((user => user.id === id));
    USERS.splice(userIndex, 1);
  }

  userCount(): number {
    return USERS.length;
  }
}
