import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../category';
import { ActivatedRoute, Params } from '@angular/router';
import { CategoryService } from '../category.service';
import { Location } from '@angular/common';
import {Router} from "@angular/router";
import { BreadcrumbService } from '../breadcrumb.service';
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
    private breadcrumbService: BreadcrumbService,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() {
    this.showTitleEdit = true;
    this.route.params.subscribe((params: Params) => {
      this.getCategory(parseInt(params['id']));
    });  
  }

  async getCategory(id: number): Promise<void> {
    // const id = +this.route.snapshot.paramMap.get('id');
    this.category = await this.categoryService.getCategory(id);
    this.childrenCategories = await this.categoryService.getChildrenCategories(id);
  }

  async add(newCategoryName: string): Promise<void> {
    this.categoryService.add(this.category, this.newCategoryName);    
    this.childrenCategories = await this.categoryService.getChildrenCategories(this.category.id);
    
  }

  save(category: Category): void {
    this.showTitleEdit = true;
  }
  
  edit(category: Category): void {
    this.showTitleEdit = false;
  }

  goBack(): void {
    this.breadcrumbService.popBreadCrumb();
    this.location.back();
  }

  addToLineage(parent: Category): void {
    // Call breadcrumb service to add parent to breadcrumb list
    this.breadcrumbService.addBreadCrumb(parent);
  }

  getLineage(): String {
    // Call breadcrumb service to get breadcrumb list    
    const bc = this.breadcrumbService.getBreadCrumbs();

    const lineage = bc.reduce((prev, curr) => {
      if (prev.length) {
        return prev + curr['name'] + ' > '; 
      }
      return curr['name'] + ' > ';
    },'');

    console.log('lineage: ', lineage);
    return lineage;
  }
}
