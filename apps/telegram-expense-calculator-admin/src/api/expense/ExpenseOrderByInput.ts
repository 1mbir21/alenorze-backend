import { SortOrder } from "../../util/SortOrder";

export type ExpenseOrderByInput = {
  amount?: SortOrder;
  categoryId?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
