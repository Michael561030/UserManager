import {Injectable} from '@angular/core';
import {User} from './models/user.model';

@Injectable()
export class AppService {
  users: User[] = [{
    id: 1,
    email: 'John@gmail.com',
    password: 'Qwerty123',
    firstname: 'John',
    lastname: 'Maccalister'
  },
    {
      id: 2,
      email: 'Fredrick234@gmail.com',
      password: '1234567789qwerty',
      firstname: 'Fredrick',
      lastname: 'Calan'
    },
    {
      id: 3,
      email: 'Mirta1391@yahoo.com',
      password: 'Sayanara66',
      firstname: 'Mirta',
      lastname: 'Fishgold'
    },
    {
      id: 4,
      email: 'Roberto@yahoo.com',
      password: 'gRyejeUEdl',
      firstname: 'Robert',
      lastname: 'Lamberg'
    },
    {
      id: 5,
      email: 'Kobalt72@gmail.com',
      password: 'OrpedlfEfd',
      firstname: 'Dan',
      lastname: 'Balan'
    },
    {
      id: 6,
      email: 'Softgroup@gmail.com',
      password: 'softgroup2019',
      firstname: 'Our',
      lastname: 'Team'
    },
    {
      id: 7,
      email: 'maxmiha221@gmail.com',
      password: 'Password123456',
      firstname: 'Michael',
      lastname: 'Maximjuk'
    },
    {
      id: 8,
      email: 'Advanced@gmail.com',
      password: 'frDdsfbglFV',
      firstname: 'Messi',
      lastname: 'Gilbert'
    },
    {
      id: 9,
      email: 'Softgroup@gmail.com',
      password: 'JljcdlskjdDfR',
      firstname: 'Sonya',
      lastname: 'Meldon'
    },
    {
      id: 10,
      email: 'Admin@yahoo.com',
      password: 'IdfksUFVkDC5',
      firstname: 'Sara',
      lastname: 'Ternor'
    },
    {
      id: 11,
      email: 'Admin@gmail.com',
      password: 'svfbgkLEFJKVlk',
      firstname: 'Good',
      lastname: 'Blumberg'
    },
  ];

  addUser(user: User) {
    this.users.push(user);
  }

  deleteUser(id) {
    const item = this.users.findIndex(user => {
      return user.id === id;
    });
    this.users.splice(item, 1);
  }

}
