import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Category } from './category';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const categories = [
      {
        id: 1,
        name: 'Music',
        parent_category_id: null,
        children_category_ids: [2,3]
      },
      {
        id: 2,
        name: 'Trumpet',
        parent_category_id: 1,
        children_category_ids: []
      },
      {
        id: 3,
        name: 'Clarinet',
        parent_category_id: 1,
        children_category_ids: []
      },
      {
        id: 4,
        name: 'Activewear',
        parent_category_id: null,
        children_category_ids: [5]
      },
      {
        id: 5,
        name: 'yoga pants',
        parent_category_id: 4,
        children_category_ids: []
      },
    ];
    return {categories};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  // genId(categories: Category[]): number {
    // return categories.length > 0 ? Math.max(...categories.map(c => c.id)) + 1 : 11;
  // }
}