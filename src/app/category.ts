export class Category {
  id: number;
  name: string;
  parent_category_id?: number;
  parent_category?: string;
  children_category_ids?: number[];
  children_categories?: Category[];
}