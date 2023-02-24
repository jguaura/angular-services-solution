import { User } from './user.model';
import { Injectable } from '@angular/core';
import { CountService } from './count.service';

@Injectable({ providedIn: 'root' })

export class UsersService {
  users: User[] = [
    { id: 1, name: 'Max', active: true },
    { id: 2, name: 'Anna', active: true },
    { id: 3, name: 'Chris', active: false },
    { id: 4, name: 'Manu', active: false }
  ];

  constructor(private countService: CountService) {}

  setUserStatus(id: number) {
    const user = this.users.find((user) => user.id === id);
    this.countService.onAddToCount()
    return user.active = !user.active;
  }
  onSetToActive(id: number) { 
    this.setUserStatus(id)
  }
  onSetToInactive(id: number) {
    this.setUserStatus(id)
  }
}
