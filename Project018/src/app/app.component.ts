
import { Component } from '@angular/core';
import Character from './character';
@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project018';
   characters: Character[] = [
    {
    actor_name: 'Peter Dinklage',
    character_name: 'Tyrion Lannister',
    gender: 'Male',
    status: 'Alive'
    },
    {
    actor_name: 'Sean Bean',
    character_name: 'Ned Stark',
    gender: 'Male',
    status: 'Dead'
    },
    {
    actor_name: 'Emilia Clark',
    character_name: 'Khaleesi',
    gender: 'Female',
    status: 'Dead'
    },
    {
    actor_name: 'Catelyn Stark',
    character_name: 'Michelle Fairley',
    gender: 'Female',
    status: 'Dead'
    }
  ];
}
