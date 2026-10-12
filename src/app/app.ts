import { Component } from '@angular/core';
import { TrainingList } from './application/training-list/training-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TrainingList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
