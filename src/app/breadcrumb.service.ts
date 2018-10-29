import { Injectable } from '@angular/core';
import { Category } from './category';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  breadcrumbList: Category[] = [];

  constructor() { }

  addBreadCrumb(category: Category): void {
    console.log('Adding breadcrumb!: ', JSON.stringify(category));
    this.breadcrumbList.push(category);
  }

  getBreadCrumbs(): Category[] {
    console.log('Gettinb breadcrumbs!', JSON.stringify(this.breadcrumbList));
    return this.breadcrumbList;
  }
  
  popBreadCrumb(): void {
    if ( this.breadcrumbList.length) {
      console.log('Popping off a category!');
      this.breadcrumbList.pop();
    } else {
      console.log('Nothing to pop!');
    }
  }
}
