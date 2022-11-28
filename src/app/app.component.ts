import { Component } from '@angular/core';
import {Cocktails} from 'src/app/interfaces/cocktail.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cocktails';
  cocktails: Cocktails = {
    name: 'Mojito',
    img: './assets/img/mojito.jpg',
    description: 'Le mojito est un cocktail à base de rhum, de citron vert, de sucre de canne, de glace pilée et de feuilles de menthe fraîche.'
  };
}
