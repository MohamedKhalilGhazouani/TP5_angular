import { Component, input } from '@angular/core';
import { Training } from '../training';

@Component({
  selector: 'app-training-item',
  standalone: true,
  templateUrl: './training-item.html'
})
export class TrainingItem {
  training = input.required<Training>();
  position = input.required<number>({alias:'position'});
}
