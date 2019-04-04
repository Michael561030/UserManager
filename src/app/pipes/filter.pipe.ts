import {Pipe, PipeTransform} from '@angular/core';
import {User} from '../models/user.model';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {
  transform(users: User[], name: any, searchName: string): any {
    if (users.length === 0 || name !== undefined) {
      return users.filter((user) => {
        if (searchName) {
          return (user.firstname.toLowerCase().indexOf(name.toLowerCase()) !== -1);
        } else {
          return (user.firstname.indexOf(name) !== -1);
        }
      });
    }
    return users;
  }
}
