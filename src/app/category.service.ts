import { Injectable } from '@angular/core';
import { Category } from './category';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const MOCK_CATEGORIES = [
  {
    id: 1,
    name: 'Music',
    parent_category_id: null,
    children_category_ids: [2,3]
  } as Category,
  {
    id: 2,
    name: 'Trumpet',
    parent_category_id: 1,
    children_category_ids: []
  } as Category,
  {
    id: 3,
    name: 'Clarinet',
    parent_category_id: 1,
    children_category_ids: []
  }  as Category,,
  {
    id: 4,
    name: 'Activewear',
    parent_category_id: null,
    children_category_ids: [5]
  }  as Category,,
  {
    id: 5,
    name: 'yoga pants',
    parent_category_id: 4,
    children_category_ids: []
  }  as Category,,
];

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categoriesUrl = 'api/heroes';

  constructor(
    private http: HttpClient,
  ) { 
  }

  getCategories(): Promise<Category[]> {
    return new Promise((resolve, reject) => {
      resolve(MOCK_CATEGORIES);
    });
  }

  getCategory(id: number): Promise<Category> {
    return new Promise((resolve, reject) => {
      const index = MOCK_CATEGORIES.findIndex(c => c.id === id);
      resolve(MOCK_CATEGORIES[index]);
    });
  }

  getParentCategories(): Promise<Category[]> {
    return new Promise((resolve, reject) => {
      const parentCategories = MOCK_CATEGORIES.filter(category => {
        return !category.parent_category_id;
      });
      resolve(parentCategories);
    });
  }

  getChildrenCategories(id: number): Promise<Category[]> {
    return new Promise((resolve, reject) => {
      const childrenCategories = MOCK_CATEGORIES.filter(category => {
        return category.parent_category_id === id;
      });
      resolve(childrenCategories);
    });
  }

  updateCategory(category: Category): void {
  }

  delete(category: Category): void {

  }

  deleteChild(category: Category): void {
  }

  add(parent: Category, categoryName: string): void {
    const newCategory: Category = {
      id: MOCK_CATEGORIES.length,
      name: categoryName,
      parent_category_id: parent.id,
      children_category_ids: []
    };

    MOCK_CATEGORIES.push(newCategory);
  }
}
