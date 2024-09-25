import { Expense } from "../expense/Expense";

export type Category = {
  createdAt: Date;
  expenses?: Array<Expense>;
  id: string;
  name: string | null;
  updatedAt: Date;
};
