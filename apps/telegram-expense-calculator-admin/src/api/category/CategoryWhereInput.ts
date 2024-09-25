import { ExpenseListRelationFilter } from "../expense/ExpenseListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CategoryWhereInput = {
  expenses?: ExpenseListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
