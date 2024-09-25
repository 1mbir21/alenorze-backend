import { ExpenseUpdateManyWithoutUsersInput } from "./ExpenseUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  expenses?: ExpenseUpdateManyWithoutUsersInput;
  telegramId?: number | null;
  username?: string | null;
};
