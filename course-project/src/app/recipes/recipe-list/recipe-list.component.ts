import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'recipes-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'A test description',
      'https://cdn.pixabay.com/photo/2017/06/29/20/09/mexican-2456038_960_720.jpg'
    ),
    new Recipe(
      'A Test Recipe',
      'A test description',
      'https://cdn.pixabay.com/photo/2017/06/29/20/09/mexican-2456038_960_720.jpg'
    ),
    new Recipe(
      'A Test Recipe',
      'A test description',
      'https://cdn.pixabay.com/photo/2017/06/29/20/09/mexican-2456038_960_720.jpg'
    )
  ];

  constructor() {}

  ngOnInit() {}
}
