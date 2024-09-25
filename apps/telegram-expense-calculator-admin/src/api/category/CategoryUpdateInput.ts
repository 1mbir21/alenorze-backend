import { ExpenseUpdateManyWithoutCategoriesInput } from "./ExpenseUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  expenses?: ExpenseUpdateManyWithoutCategoriesInput;
  name?: string | null;
};
