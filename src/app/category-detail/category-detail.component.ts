import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../category';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../category.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {
  @Input() category: Category;
  showTitleEdit: boolean;
  newCategoryName: string;
  childrenCategories: Category[];

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private location: Location
  ) { }

  ngOnInit() {
    this.showTitleEdit = true;
    this.getCategory();
  }

  async getCategory(): Promise<void> {
    const id = +this.route.snapshot.paramMap.get('id');
    this.category = await this.categoryService.getCategory(id);
    this.childrenCategories = await this.categoryService.getChildrenCategories(id);
  }

  async add(newCategoryName: string): Promise<void> {
    this.categoryService.add(this.category, this.newCategoryName);    
    this.childrenCategories = await this.categoryService.getChildrenCategories(this.category.id);
    console.log(this.childrenCategories);
    console.log(this.newCategoryName);
    
  }

  save(category: Category): void {
    this.showTitleEdit = true;
  }
  
  edit(category: Category): void {
    this.showTitleEdit = false;
  }

  goRoute(id: number): void {
    this.location.go(`/category/${id}`);
  }

  goBack(): void {
    this.location.back();
  }
}
