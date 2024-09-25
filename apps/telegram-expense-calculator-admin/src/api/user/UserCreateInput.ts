import { ExpenseCreateNestedManyWithoutUsersInput } from "./ExpenseCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  expenses?: ExpenseCreateNestedManyWithoutUsersInput;
  telegramId?: number | null;
  username?: string | null;
};
