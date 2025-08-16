import type { Category } from "@/data/models/Category";

export interface ICategoryService {
  getAllCategories(): Promise<Category[]>;
}
