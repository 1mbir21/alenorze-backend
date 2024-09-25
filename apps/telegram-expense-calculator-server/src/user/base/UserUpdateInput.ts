/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ExpenseUpdateManyWithoutUsersInput } from "./ExpenseUpdateManyWithoutUsersInput";
import {
  ValidateNested,
  IsOptional,
  IsInt,
  Min,
  Max,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";

@InputType()
class UserUpdateInput {
  @ApiProperty({
    required: false,
    type: () => ExpenseUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => ExpenseUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => ExpenseUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  expenses?: ExpenseUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  telegramId?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  username?: string | null;
}

export { UserUpdateInput as UserUpdateInput };
