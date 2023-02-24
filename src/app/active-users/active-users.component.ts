import { UsersService } from '../shared/users.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})

export class ActiveUsersComponent implements OnInit {
  activeUsers: User[];
  
  constructor(private usersService: UsersService) {}

  filterUser(user: User) {
    return user.active;
  }
  onSetUser(id: number) {
    this.usersService.onSetToInactive(id);
  }
  ngOnInit(): void {
    this.activeUsers = this.usersService.users;
  }
}
