import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user.model';

@Pipe({
  name: 'filterUsers',
  pure: false
})

export class FilterUsersPipe implements PipeTransform {
  transform(users: User[], callback: (user: User) => boolean): any {
    if (!users || !callback) {
      return users
    }
    return users.filter((user) => callback(user));
  }
}
