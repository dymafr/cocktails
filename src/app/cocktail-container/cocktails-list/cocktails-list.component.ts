import { Component, OnInit, Input } from '@angular/core';
import { Cocktail } from '../../shared/cocktails.model';

@Component({
  selector: 'app-cocktails-list',
  templateUrl: './cocktails-list.component.html',
  styleUrls: ['./cocktails-list.component.css']
})
export class CocktailsListComponent implements OnInit {
  @Input() cocktails: Cocktail[];
  constructor() { }

  ngOnInit() {
  }

}
