import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../shared/cocktails.model';

@Component({
  selector: 'app-cocktail-container',
  templateUrl: './cocktail-container.component.html',
  styleUrls: ['./cocktail-container.component.css']
})
export class CocktailContainerComponent implements OnInit {
  public cocktails: Cocktail[] = [
    new Cocktail('Mojito','http://static.cuisineaz.com/610x610/i14978-recette-de-mojito.jpeg','Le mojito, prononcé [moˈxito] en espagnol, est un cocktail à base de rhum, de citron vert et de feuilles de menthe fraîche, né à Cuba dans les années 1910 et inspiré du mint julep'),
    new Cocktail('Margarita','http://www.seriouseats.com/recipes/assets_c/2015/04/20150323-cocktails-vicky-wasik-margarita-thumb-1500xauto-421493.jpg','La Margarita est un cocktail à base de tequila, inventé par des Américains au Mexique. C\'est un before lunch qui serait une version du cocktail daisy dans lequel on remplaça le brandy par de la téquila durant la prohibition')
  ];

  public cocktail: Cocktail;

  constructor() { }

  ngOnInit() {
    this.cocktail = this.cocktails[0];
  }

}
