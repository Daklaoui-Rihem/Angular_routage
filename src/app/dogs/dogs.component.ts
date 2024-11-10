import { Component } from '@angular/core';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrl: './dogs.component.css'
})
export class DogsComponent {
  dogs: string[] = ['dog 1', 'dog 2', 'dog 3', 'dog 4', 'dog 5'];
}
