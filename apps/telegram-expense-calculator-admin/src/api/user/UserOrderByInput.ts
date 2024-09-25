import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  telegramId?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
