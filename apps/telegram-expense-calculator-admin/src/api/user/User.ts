import { Expense } from "../expense/Expense";

export type User = {
  createdAt: Date;
  expenses?: Array<Expense>;
  id: string;
  telegramId: number | null;
  updatedAt: Date;
  username: string | null;
};
