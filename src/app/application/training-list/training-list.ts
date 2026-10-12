import { Component, signal,} from '@angular/core';
import { Training } from '../training';
import { TrainingItem } from '../training-item/training-item';
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-training-list',
  standalone: true,
  imports: [TrainingItem,JsonPipe],
  templateUrl: './training-list.html'
})
export class TrainingList {
  trainingCatalog = signal<Training[]>([
    { id: 125, name: 'Introduction à Angular', nbDays: 3, isFree: false },
    { id: 587, name: 'Grid & Flexbox', nbDays: 3, isFree: true },
    { id: 879, name: 'Node JS avancé', nbDays: 4, isFree: false },
    { id: 859, name: 'HTML5 & CSS', nbDays: 2, isFree: true }
  ]);
  addTraining() {
    const newTraining: Training = {
      id: Math.floor(Math.random() * 10000),
      name: 'nouveau',
      nbDays: 7,
      isFree: true
    };

    this.trainingCatalog.update(list => [...list, newTraining]);
  }

}
