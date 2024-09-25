import { ExpenseListRelationFilter } from "../expense/ExpenseListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type UserWhereInput = {
  expenses?: ExpenseListRelationFilter;
  id?: StringFilter;
  telegramId?: IntNullableFilter;
  username?: StringNullableFilter;
};
