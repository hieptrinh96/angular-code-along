import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes: Recipe[] = [
  new Recipe('A test, Recipe', 'This is a simple test', 'https://www.justonecookbook.com/wp-content/uploads/2020/03/Okonomiyaki-Recipe-5681-II.jpg'),
  new Recipe('A test, Recipe', 'This is a simple test', 'https://www.justonecookbook.com/wp-content/uploads/2020/03/Okonomiyaki-Recipe-5681-II.jpg')
];
  constructor() {}

  ngOnInit(): void {
  } 

}
