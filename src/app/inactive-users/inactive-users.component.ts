import { UsersService } from './../shared/users.service';
import { User } from './../shared/user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: User[];

  constructor (private usersService: UsersService) {}
  
  filterUsers(user: User) {
    return !user.active
  }

  onSetUser(id: number) {
    this.usersService.onSetToActive(id)
  }

  ngOnInit(): void {
    this.users = this.usersService.users
  }
}
