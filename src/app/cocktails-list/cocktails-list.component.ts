import {Component} from '@angular/core';
import {Cocktails} from 'src/app/interfaces/cocktail.interface';

@Component({
  selector: 'app-cocktails-list',
  templateUrl: './cocktails-list.component.html',
  styleUrls: ['./cocktails-list.component.scss']
})
export class CocktailsListComponent {
  cocktails: Cocktails[] = [
    {
      name: 'Mojito',
      description: 'Mojito is a traditional Cuban highball. The cocktail often consists of five ingredients: white rum, sugar (traditionally sugar cane juice), lime juice, soda water, and mint.',
      img: 'https://www.thecocktaildb.com/images/media/drink/3z6xdi1589574607.jpg'
    },
    {
      name: 'Margarita',
      description: 'A margarita is a cocktail consisting of tequila, orange liqueur, and lime juice often served with salt on the rim of the glass. The drink is served shaken with ice (on the rocks), blended with ice (frozen margarita or frozen daiquiri), or without ice (straight up).',
      img: 'https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg'
    },
    {
      name: 'Old Fashioned',
      description: 'An old fashioned is a cocktail made by muddling sugar with bitters and water, adding whiskey or bourbon, and garnishing with orange peel.',
      img: 'https://www.thecocktaildb.com/images/media/drink/loezxn1504373874.jpg'
    },
    {
      name: 'Mai Tai',
      description: 'A mai tai is a cocktail made with rum, orange curaçao, orgeat syrup (an almond syrup), and lime juice, often served in a tall glass rimmed with sugar.',
      img: 'https://www.thecocktaildb.com/images/media/drink/loezxn1504373874.jpg'
    }];
}
