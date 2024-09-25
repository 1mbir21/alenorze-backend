import { ExpenseCreateNestedManyWithoutCategoriesInput } from "./ExpenseCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  expenses?: ExpenseCreateNestedManyWithoutCategoriesInput;
  name?: string | null;
};
