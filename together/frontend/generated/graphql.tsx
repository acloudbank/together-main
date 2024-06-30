import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from "graphql";
import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
import * as React from "react";
import * as ApolloReactComponents from "@apollo/client/react/components";
import * as ApolloReactHoc from "@apollo/client/react/hoc";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: string;
  uuid: any;
};

export type AuthenticateWithGoogleOutput = {
  __typename?: "AuthenticateWithGoogleOutput";
  sessionId: Scalars["uuid"];
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["Boolean"]>;
  _gt?: InputMaybe<Scalars["Boolean"]>;
  _gte?: InputMaybe<Scalars["Boolean"]>;
  _in?: InputMaybe<Array<Scalars["Boolean"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["Boolean"]>;
  _lte?: InputMaybe<Scalars["Boolean"]>;
  _neq?: InputMaybe<Scalars["Boolean"]>;
  _nin?: InputMaybe<Array<Scalars["Boolean"]>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["Int"]>;
  _gt?: InputMaybe<Scalars["Int"]>;
  _gte?: InputMaybe<Scalars["Int"]>;
  _in?: InputMaybe<Array<Scalars["Int"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["Int"]>;
  _lte?: InputMaybe<Scalars["Int"]>;
  _neq?: InputMaybe<Scalars["Int"]>;
  _nin?: InputMaybe<Array<Scalars["Int"]>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["String"]>;
  _gt?: InputMaybe<Scalars["String"]>;
  _gte?: InputMaybe<Scalars["String"]>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars["String"]>;
  _in?: InputMaybe<Array<Scalars["String"]>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars["String"]>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars["String"]>;
  _lt?: InputMaybe<Scalars["String"]>;
  _lte?: InputMaybe<Scalars["String"]>;
  _neq?: InputMaybe<Scalars["String"]>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars["String"]>;
  _nin?: InputMaybe<Array<Scalars["String"]>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars["String"]>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars["String"]>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars["String"]>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars["String"]>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars["String"]>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars["String"]>;
};

export type ValidatePasswordResetTokenOutput = {
  __typename?: "ValidatePasswordResetTokenOutput";
  userId: Scalars["uuid"];
};

export type AddUserZipCodeOutput = {
  __typename?: "addUserZipCodeOutput";
  userId: Scalars["uuid"];
};

export type AuthenticateWithCredentialsOutput = {
  __typename?: "authenticateWithCredentialsOutput";
  sessionId: Scalars["uuid"];
};

/** columns and relationships of "comments" */
export type Comments = {
  __typename?: "comments";
  /** An object relationship */
  comment?: Maybe<Comments>;
  /** An array relationship */
  comments: Array<Comments>;
  /** An aggregate relationship */
  comments_aggregate: Comments_Aggregate;
  content: Scalars["String"];
  created_at: Scalars["timestamptz"];
  id: Scalars["uuid"];
  /** An object relationship */
  issue: Issues;
  issueId: Scalars["uuid"];
  parentCommentId?: Maybe<Scalars["uuid"]>;
  updated_at: Scalars["timestamptz"];
  /** An object relationship */
  user: Users;
  userId: Scalars["uuid"];
};

/** columns and relationships of "comments" */
export type CommentsCommentsArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};

/** columns and relationships of "comments" */
export type CommentsComments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};

/** aggregated selection of "comments" */
export type Comments_Aggregate = {
  __typename?: "comments_aggregate";
  aggregate?: Maybe<Comments_Aggregate_Fields>;
  nodes: Array<Comments>;
};

export type Comments_Aggregate_Bool_Exp = {
  count?: InputMaybe<Comments_Aggregate_Bool_Exp_Count>;
};

export type Comments_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Comments_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<Comments_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "comments" */
export type Comments_Aggregate_Fields = {
  __typename?: "comments_aggregate_fields";
  count: Scalars["Int"];
  max?: Maybe<Comments_Max_Fields>;
  min?: Maybe<Comments_Min_Fields>;
};

/** aggregate fields of "comments" */
export type Comments_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Comments_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "comments" */
export type Comments_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Comments_Max_Order_By>;
  min?: InputMaybe<Comments_Min_Order_By>;
};

/** input type for inserting array relation for remote table "comments" */
export type Comments_Arr_Rel_Insert_Input = {
  data: Array<Comments_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Comments_On_Conflict>;
};

/** Boolean expression to filter rows from the table "comments". All fields are combined with a logical 'AND'. */
export type Comments_Bool_Exp = {
  _and?: InputMaybe<Array<Comments_Bool_Exp>>;
  _not?: InputMaybe<Comments_Bool_Exp>;
  _or?: InputMaybe<Array<Comments_Bool_Exp>>;
  comment?: InputMaybe<Comments_Bool_Exp>;
  comments?: InputMaybe<Comments_Bool_Exp>;
  comments_aggregate?: InputMaybe<Comments_Aggregate_Bool_Exp>;
  content?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  issue?: InputMaybe<Issues_Bool_Exp>;
  issueId?: InputMaybe<Uuid_Comparison_Exp>;
  parentCommentId?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "comments" */
export enum Comments_Constraint {
  /** unique or primary key constraint on columns "id" */
  CommentsPkey = "comments_pkey",
}

/** input type for inserting data into table "comments" */
export type Comments_Insert_Input = {
  comment?: InputMaybe<Comments_Obj_Rel_Insert_Input>;
  comments?: InputMaybe<Comments_Arr_Rel_Insert_Input>;
  content?: InputMaybe<Scalars["String"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  issue?: InputMaybe<Issues_Obj_Rel_Insert_Input>;
  issueId?: InputMaybe<Scalars["uuid"]>;
  parentCommentId?: InputMaybe<Scalars["uuid"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars["uuid"]>;
};

/** aggregate max on columns */
export type Comments_Max_Fields = {
  __typename?: "comments_max_fields";
  content?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  issueId?: Maybe<Scalars["uuid"]>;
  parentCommentId?: Maybe<Scalars["uuid"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  userId?: Maybe<Scalars["uuid"]>;
};

/** order by max() on columns of table "comments" */
export type Comments_Max_Order_By = {
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  issueId?: InputMaybe<Order_By>;
  parentCommentId?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Comments_Min_Fields = {
  __typename?: "comments_min_fields";
  content?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  issueId?: Maybe<Scalars["uuid"]>;
  parentCommentId?: Maybe<Scalars["uuid"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  userId?: Maybe<Scalars["uuid"]>;
};

/** order by min() on columns of table "comments" */
export type Comments_Min_Order_By = {
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  issueId?: InputMaybe<Order_By>;
  parentCommentId?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "comments" */
export type Comments_Mutation_Response = {
  __typename?: "comments_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Comments>;
};

/** input type for inserting object relation for remote table "comments" */
export type Comments_Obj_Rel_Insert_Input = {
  data: Comments_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Comments_On_Conflict>;
};

/** on_conflict condition type for table "comments" */
export type Comments_On_Conflict = {
  constraint: Comments_Constraint;
  update_columns?: Array<Comments_Update_Column>;
  where?: InputMaybe<Comments_Bool_Exp>;
};

/** Ordering options when selecting data from "comments". */
export type Comments_Order_By = {
  comment?: InputMaybe<Comments_Order_By>;
  comments_aggregate?: InputMaybe<Comments_Aggregate_Order_By>;
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  issue?: InputMaybe<Issues_Order_By>;
  issueId?: InputMaybe<Order_By>;
  parentCommentId?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: comments */
export type Comments_Pk_Columns_Input = {
  id: Scalars["uuid"];
};

/** select columns of table "comments" */
export enum Comments_Select_Column {
  /** column name */
  Content = "content",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  IssueId = "issueId",
  /** column name */
  ParentCommentId = "parentCommentId",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  UserId = "userId",
}

/** input type for updating data in table "comments" */
export type Comments_Set_Input = {
  content?: InputMaybe<Scalars["String"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  issueId?: InputMaybe<Scalars["uuid"]>;
  parentCommentId?: InputMaybe<Scalars["uuid"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]>;
  userId?: InputMaybe<Scalars["uuid"]>;
};

/** Streaming cursor of the table "comments" */
export type Comments_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Comments_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Comments_Stream_Cursor_Value_Input = {
  content?: InputMaybe<Scalars["String"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  issueId?: InputMaybe<Scalars["uuid"]>;
  parentCommentId?: InputMaybe<Scalars["uuid"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]>;
  userId?: InputMaybe<Scalars["uuid"]>;
};

/** update columns of table "comments" */
export enum Comments_Update_Column {
  /** column name */
  Content = "content",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  IssueId = "issueId",
  /** column name */
  ParentCommentId = "parentCommentId",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  UserId = "userId",
}

export type Comments_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Comments_Set_Input>;
  /** filter the rows which have to be updated */
  where: Comments_Bool_Exp;
};

export type ConfirmEmailOutput = {
  __typename?: "confirmEmailOutput";
  sessionId: Scalars["uuid"];
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = "ASC",
  /** descending ordering of the cursor */
  Desc = "DESC",
}

/** columns and relationships of "issueCategory" */
export type IssueCategory = {
  __typename?: "issueCategory";
  /** An array relationship */
  issues: Array<Issues>;
  /** An aggregate relationship */
  issues_aggregate: Issues_Aggregate;
  value: Scalars["String"];
};

/** columns and relationships of "issueCategory" */
export type IssueCategoryIssuesArgs = {
  distinct_on?: InputMaybe<Array<Issues_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Issues_Order_By>>;
  where?: InputMaybe<Issues_Bool_Exp>;
};

/** columns and relationships of "issueCategory" */
export type IssueCategoryIssues_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Issues_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Issues_Order_By>>;
  where?: InputMaybe<Issues_Bool_Exp>;
};

/** aggregated selection of "issueCategory" */
export type IssueCategory_Aggregate = {
  __typename?: "issueCategory_aggregate";
  aggregate?: Maybe<IssueCategory_Aggregate_Fields>;
  nodes: Array<IssueCategory>;
};

/** aggregate fields of "issueCategory" */
export type IssueCategory_Aggregate_Fields = {
  __typename?: "issueCategory_aggregate_fields";
  count: Scalars["Int"];
  max?: Maybe<IssueCategory_Max_Fields>;
  min?: Maybe<IssueCategory_Min_Fields>;
};

/** aggregate fields of "issueCategory" */
export type IssueCategory_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<IssueCategory_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** Boolean expression to filter rows from the table "issueCategory". All fields are combined with a logical 'AND'. */
export type IssueCategory_Bool_Exp = {
  _and?: InputMaybe<Array<IssueCategory_Bool_Exp>>;
  _not?: InputMaybe<IssueCategory_Bool_Exp>;
  _or?: InputMaybe<Array<IssueCategory_Bool_Exp>>;
  issues?: InputMaybe<Issues_Bool_Exp>;
  issues_aggregate?: InputMaybe<Issues_Aggregate_Bool_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "issueCategory" */
export enum IssueCategory_Constraint {
  /** unique or primary key constraint on columns "value" */
  IssueCategoryPkey = "issueCategory_pkey",
}

export enum IssueCategory_Enum {
  Animals = "Animals",
  Climate = "Climate",
  Ecology = "Ecology",
  Economy = "Economy",
  Education = "Education",
  Foreigners = "Foreigners",
  GunControl = "Gun_control",
  Healthcare = "Healthcare",
  HumanRight = "Human_right",
  Immigration = "Immigration",
  Infrastructure = "Infrastructure",
  RacialJustice = "Racial_justice",
}

/** Boolean expression to compare columns of type "issueCategory_enum". All fields are combined with logical 'AND'. */
export type IssueCategory_Enum_Comparison_Exp = {
  _eq?: InputMaybe<IssueCategory_Enum>;
  _in?: InputMaybe<Array<IssueCategory_Enum>>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  _neq?: InputMaybe<IssueCategory_Enum>;
  _nin?: InputMaybe<Array<IssueCategory_Enum>>;
};

/** input type for inserting data into table "issueCategory" */
export type IssueCategory_Insert_Input = {
  issues?: InputMaybe<Issues_Arr_Rel_Insert_Input>;
  value?: InputMaybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type IssueCategory_Max_Fields = {
  __typename?: "issueCategory_max_fields";
  value?: Maybe<Scalars["String"]>;
};

/** aggregate min on columns */
export type IssueCategory_Min_Fields = {
  __typename?: "issueCategory_min_fields";
  value?: Maybe<Scalars["String"]>;
};

/** response of any mutation on the table "issueCategory" */
export type IssueCategory_Mutation_Response = {
  __typename?: "issueCategory_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<IssueCategory>;
};

/** input type for inserting object relation for remote table "issueCategory" */
export type IssueCategory_Obj_Rel_Insert_Input = {
  data: IssueCategory_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<IssueCategory_On_Conflict>;
};

/** on_conflict condition type for table "issueCategory" */
export type IssueCategory_On_Conflict = {
  constraint: IssueCategory_Constraint;
  update_columns?: Array<IssueCategory_Update_Column>;
  where?: InputMaybe<IssueCategory_Bool_Exp>;
};

/** Ordering options when selecting data from "issueCategory". */
export type IssueCategory_Order_By = {
  issues_aggregate?: InputMaybe<Issues_Aggregate_Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: issueCategory */
export type IssueCategory_Pk_Columns_Input = {
  value: Scalars["String"];
};

/** select columns of table "issueCategory" */
export enum IssueCategory_Select_Column {
  /** column name */
  Value = "value",
}

/** input type for updating data in table "issueCategory" */
export type IssueCategory_Set_Input = {
  value?: InputMaybe<Scalars["String"]>;
};

/** Streaming cursor of the table "issueCategory" */
export type IssueCategory_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: IssueCategory_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type IssueCategory_Stream_Cursor_Value_Input = {
  value?: InputMaybe<Scalars["String"]>;
};

/** update columns of table "issueCategory" */
export enum IssueCategory_Update_Column {
  /** column name */
  Value = "value",
}

export type IssueCategory_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<IssueCategory_Set_Input>;
  /** filter the rows which have to be updated */
  where: IssueCategory_Bool_Exp;
};

/** columns and relationships of "issueFieldViewScale" */
export type IssueFieldViewScale = {
  __typename?: "issueFieldViewScale";
  /** An array relationship */
  issues: Array<Issues>;
  /** An aggregate relationship */
  issues_aggregate: Issues_Aggregate;
  value: Scalars["String"];
};

/** columns and relationships of "issueFieldViewScale" */
export type IssueFieldViewScaleIssuesArgs = {
  distinct_on?: InputMaybe<Array<Issues_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Issues_Order_By>>;
  where?: InputMaybe<Issues_Bool_Exp>;
};

/** columns and relationships of "issueFieldViewScale" */
export type IssueFieldViewScaleIssues_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Issues_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Issues_Order_By>>;
  where?: InputMaybe<Issues_Bool_Exp>;
};

/** aggregated selection of "issueFieldViewScale" */
export type IssueFieldViewScale_Aggregate = {
  __typename?: "issueFieldViewScale_aggregate";
  aggregate?: Maybe<IssueFieldViewScale_Aggregate_Fields>;
  nodes: Array<IssueFieldViewScale>;
};

/** aggregate fields of "issueFieldViewScale" */
export type IssueFieldViewScale_Aggregate_Fields = {
  __typename?: "issueFieldViewScale_aggregate_fields";
  count: Scalars["Int"];
  max?: Maybe<IssueFieldViewScale_Max_Fields>;
  min?: Maybe<IssueFieldViewScale_Min_Fields>;
};

/** aggregate fields of "issueFieldViewScale" */
export type IssueFieldViewScale_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<IssueFieldViewScale_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** Boolean expression to filter rows from the table "issueFieldViewScale". All fields are combined with a logical 'AND'. */
export type IssueFieldViewScale_Bool_Exp = {
  _and?: InputMaybe<Array<IssueFieldViewScale_Bool_Exp>>;
  _not?: InputMaybe<IssueFieldViewScale_Bool_Exp>;
  _or?: InputMaybe<Array<IssueFieldViewScale_Bool_Exp>>;
  issues?: InputMaybe<Issues_Bool_Exp>;
  issues_aggregate?: InputMaybe<Issues_Aggregate_Bool_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "issueFieldViewScale" */
export enum IssueFieldViewScale_Constraint {
  /** unique or primary key constraint on columns "value" */
  IssueFieldViewScalePkey = "issueFieldViewScale_pkey",
}

export enum IssueFieldViewScale_Enum {
  City = "City",
  Country = "Country",
  Local = "Local",
  State = "State",
}

/** Boolean expression to compare columns of type "issueFieldViewScale_enum". All fields are combined with logical 'AND'. */
export type IssueFieldViewScale_Enum_Comparison_Exp = {
  _eq?: InputMaybe<IssueFieldViewScale_Enum>;
  _in?: InputMaybe<Array<IssueFieldViewScale_Enum>>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  _neq?: InputMaybe<IssueFieldViewScale_Enum>;
  _nin?: InputMaybe<Array<IssueFieldViewScale_Enum>>;
};

/** input type for inserting data into table "issueFieldViewScale" */
export type IssueFieldViewScale_Insert_Input = {
  issues?: InputMaybe<Issues_Arr_Rel_Insert_Input>;
  value?: InputMaybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type IssueFieldViewScale_Max_Fields = {
  __typename?: "issueFieldViewScale_max_fields";
  value?: Maybe<Scalars["String"]>;
};

/** aggregate min on columns */
export type IssueFieldViewScale_Min_Fields = {
  __typename?: "issueFieldViewScale_min_fields";
  value?: Maybe<Scalars["String"]>;
};

/** response of any mutation on the table "issueFieldViewScale" */
export type IssueFieldViewScale_Mutation_Response = {
  __typename?: "issueFieldViewScale_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<IssueFieldViewScale>;
};

/** input type for inserting object relation for remote table "issueFieldViewScale" */
export type IssueFieldViewScale_Obj_Rel_Insert_Input = {
  data: IssueFieldViewScale_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<IssueFieldViewScale_On_Conflict>;
};

/** on_conflict condition type for table "issueFieldViewScale" */
export type IssueFieldViewScale_On_Conflict = {
  constraint: IssueFieldViewScale_Constraint;
  update_columns?: Array<IssueFieldViewScale_Update_Column>;
  where?: InputMaybe<IssueFieldViewScale_Bool_Exp>;
};

/** Ordering options when selecting data from "issueFieldViewScale". */
export type IssueFieldViewScale_Order_By = {
  issues_aggregate?: InputMaybe<Issues_Aggregate_Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: issueFieldViewScale */
export type IssueFieldViewScale_Pk_Columns_Input = {
  value: Scalars["String"];
};

/** select columns of table "issueFieldViewScale" */
export enum IssueFieldViewScale_Select_Column {
  /** column name */
  Value = "value",
}

/** input type for updating data in table "issueFieldViewScale" */
export type IssueFieldViewScale_Set_Input = {
  value?: InputMaybe<Scalars["String"]>;
};

/** Streaming cursor of the table "issueFieldViewScale" */
export type IssueFieldViewScale_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: IssueFieldViewScale_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type IssueFieldViewScale_Stream_Cursor_Value_Input = {
  value?: InputMaybe<Scalars["String"]>;
};

/** update columns of table "issueFieldViewScale" */
export enum IssueFieldViewScale_Update_Column {
  /** column name */
  Value = "value",
}

export type IssueFieldViewScale_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<IssueFieldViewScale_Set_Input>;
  /** filter the rows which have to be updated */
  where: IssueFieldViewScale_Bool_Exp;
};

/** columns and relationships of "issueStatus" */
export type IssueStatus = {
  __typename?: "issueStatus";
  /** An array relationship */
  issues: Array<Issues>;
  /** An aggregate relationship */
  issues_aggregate: Issues_Aggregate;
  value: Scalars["String"];
};

/** columns and relationships of "issueStatus" */
export type IssueStatusIssuesArgs = {
  distinct_on?: InputMaybe<Array<Issues_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Issues_Order_By>>;
  where?: InputMaybe<Issues_Bool_Exp>;
};

/** columns and relationships of "issueStatus" */
export type IssueStatusIssues_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Issues_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Issues_Order_By>>;
  where?: InputMaybe<Issues_Bool_Exp>;
};

/** aggregated selection of "issueStatus" */
export type IssueStatus_Aggregate = {
  __typename?: "issueStatus_aggregate";
  aggregate?: Maybe<IssueStatus_Aggregate_Fields>;
  nodes: Array<IssueStatus>;
};

/** aggregate fields of "issueStatus" */
export type IssueStatus_Aggregate_Fields = {
  __typename?: "issueStatus_aggregate_fields";
  count: Scalars["Int"];
  max?: Maybe<IssueStatus_Max_Fields>;
  min?: Maybe<IssueStatus_Min_Fields>;
};

/** aggregate fields of "issueStatus" */
export type IssueStatus_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<IssueStatus_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** Boolean expression to filter rows from the table "issueStatus". All fields are combined with a logical 'AND'. */
export type IssueStatus_Bool_Exp = {
  _and?: InputMaybe<Array<IssueStatus_Bool_Exp>>;
  _not?: InputMaybe<IssueStatus_Bool_Exp>;
  _or?: InputMaybe<Array<IssueStatus_Bool_Exp>>;
  issues?: InputMaybe<Issues_Bool_Exp>;
  issues_aggregate?: InputMaybe<Issues_Aggregate_Bool_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "issueStatus" */
export enum IssueStatus_Constraint {
  /** unique or primary key constraint on columns "value" */
  IssueStatusPkey = "issueStatus_pkey",
}

export enum IssueStatus_Enum {
  CategoryStep = "CATEGORY_STEP",
  CompletedStep = "COMPLETED_STEP",
  IssueDetailsStep = "ISSUE_DETAILS_STEP",
  PrivacySelectionStep = "PRIVACY_SELECTION_STEP",
}

/** Boolean expression to compare columns of type "issueStatus_enum". All fields are combined with logical 'AND'. */
export type IssueStatus_Enum_Comparison_Exp = {
  _eq?: InputMaybe<IssueStatus_Enum>;
  _in?: InputMaybe<Array<IssueStatus_Enum>>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  _neq?: InputMaybe<IssueStatus_Enum>;
  _nin?: InputMaybe<Array<IssueStatus_Enum>>;
};

/** input type for inserting data into table "issueStatus" */
export type IssueStatus_Insert_Input = {
  issues?: InputMaybe<Issues_Arr_Rel_Insert_Input>;
  value?: InputMaybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type IssueStatus_Max_Fields = {
  __typename?: "issueStatus_max_fields";
  value?: Maybe<Scalars["String"]>;
};

/** aggregate min on columns */
export type IssueStatus_Min_Fields = {
  __typename?: "issueStatus_min_fields";
  value?: Maybe<Scalars["String"]>;
};

/** response of any mutation on the table "issueStatus" */
export type IssueStatus_Mutation_Response = {
  __typename?: "issueStatus_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<IssueStatus>;
};

/** input type for inserting object relation for remote table "issueStatus" */
export type IssueStatus_Obj_Rel_Insert_Input = {
  data: IssueStatus_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<IssueStatus_On_Conflict>;
};

/** on_conflict condition type for table "issueStatus" */
export type IssueStatus_On_Conflict = {
  constraint: IssueStatus_Constraint;
  update_columns?: Array<IssueStatus_Update_Column>;
  where?: InputMaybe<IssueStatus_Bool_Exp>;
};

/** Ordering options when selecting data from "issueStatus". */
export type IssueStatus_Order_By = {
  issues_aggregate?: InputMaybe<Issues_Aggregate_Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: issueStatus */
export type IssueStatus_Pk_Columns_Input = {
  value: Scalars["String"];
};

/** select columns of table "issueStatus" */
export enum IssueStatus_Select_Column {
  /** column name */
  Value = "value",
}

/** input type for updating data in table "issueStatus" */
export type IssueStatus_Set_Input = {
  value?: InputMaybe<Scalars["String"]>;
};

/** Streaming cursor of the table "issueStatus" */
export type IssueStatus_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: IssueStatus_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type IssueStatus_Stream_Cursor_Value_Input = {
  value?: InputMaybe<Scalars["String"]>;
};

/** update columns of table "issueStatus" */
export enum IssueStatus_Update_Column {
  /** column name */
  Value = "value",
}

export type IssueStatus_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<IssueStatus_Set_Input>;
  /** filter the rows which have to be updated */
  where: IssueStatus_Bool_Exp;
};

/** columns and relationships of "issues" */
export type Issues = {
  __typename?: "issues";
  category?: Maybe<IssueCategory_Enum>;
  /** An array relationship */
  comments: Array<Comments>;
  /** An aggregate relationship */
  comments_aggregate: Comments_Aggregate;
  content?: Maybe<Scalars["String"]>;
  created_at: Scalars["timestamptz"];
  creatorId: Scalars["uuid"];
  fieldViewScale?: Maybe<IssueFieldViewScale_Enum>;
  id: Scalars["uuid"];
  isPrivate?: Maybe<Scalars["Boolean"]>;
  /** An object relationship */
  issueCategory?: Maybe<IssueCategory>;
  /** An object relationship */
  issueFieldViewScale?: Maybe<IssueFieldViewScale>;
  /** An object relationship */
  issueStatus?: Maybe<IssueStatus>;
  /** An array relationship */
  issues_users: Array<Issues_Users>;
  /** An aggregate relationship */
  issues_users_aggregate: Issues_Users_Aggregate;
  /** An array relationship */
  letters: Array<Letters>;
  /** An aggregate relationship */
  letters_aggregate: Letters_Aggregate;
  link?: Maybe<Scalars["String"]>;
  status?: Maybe<IssueStatus_Enum>;
  title?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  /** An object relationship */
  user: Users;
  /** An array relationship */
  userIssueListEntries: Array<UserIssueListEntries>;
  /** An aggregate relationship */
  userIssueListEntries_aggregate: UserIssueListEntries_Aggregate;
};

/** columns and relationships of "issues" */
export type IssuesCommentsArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};

/** columns and relationships of "issues" */
export type IssuesComments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};

/** columns and relationships of "issues" */
export type IssuesIssues_UsersArgs = {
  distinct_on?: InputMaybe<Array<Issues_Users_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Issues_Users_Order_By>>;
  where?: InputMaybe<Issues_Users_Bool_Exp>;
};

/** columns and relationships of "issues" */
export type IssuesIssues_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Issues_Users_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Issues_Users_Order_By>>;
  where?: InputMaybe<Issues_Users_Bool_Exp>;
};

/** columns and relationships of "issues" */
export type IssuesLettersArgs = {
  distinct_on?: InputMaybe<Array<Letters_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Letters_Order_By>>;
  where?: InputMaybe<Letters_Bool_Exp>;
};

/** columns and relationships of "issues" */
export type IssuesLetters_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Letters_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Letters_Order_By>>;
  where?: InputMaybe<Letters_Bool_Exp>;
};

/** columns and relationships of "issues" */
export type IssuesUserIssueListEntriesArgs = {
  distinct_on?: InputMaybe<Array<UserIssueListEntries_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<UserIssueListEntries_Order_By>>;
  where?: InputMaybe<UserIssueListEntries_Bool_Exp>;
};

/** columns and relationships of "issues" */
export type IssuesUserIssueListEntries_AggregateArgs = {
  distinct_on?: InputMaybe<Array<UserIssueListEntries_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<UserIssueListEntries_Order_By>>;
  where?: InputMaybe<UserIssueListEntries_Bool_Exp>;
};

/** aggregated selection of "issues" */
export type Issues_Aggregate = {
  __typename?: "issues_aggregate";
  aggregate?: Maybe<Issues_Aggregate_Fields>;
  nodes: Array<Issues>;
};

export type Issues_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Issues_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Issues_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Issues_Aggregate_Bool_Exp_Count>;
};

export type Issues_Aggregate_Bool_Exp_Bool_And = {
  arguments: Issues_Select_Column_Issues_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<Issues_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Issues_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Issues_Select_Column_Issues_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<Issues_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Issues_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Issues_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<Issues_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "issues" */
export type Issues_Aggregate_Fields = {
  __typename?: "issues_aggregate_fields";
  count: Scalars["Int"];
  max?: Maybe<Issues_Max_Fields>;
  min?: Maybe<Issues_Min_Fields>;
};

/** aggregate fields of "issues" */
export type Issues_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Issues_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "issues" */
export type Issues_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Issues_Max_Order_By>;
  min?: InputMaybe<Issues_Min_Order_By>;
};

/** input type for inserting array relation for remote table "issues" */
export type Issues_Arr_Rel_Insert_Input = {
  data: Array<Issues_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Issues_On_Conflict>;
};

/** Boolean expression to filter rows from the table "issues". All fields are combined with a logical 'AND'. */
export type Issues_Bool_Exp = {
  _and?: InputMaybe<Array<Issues_Bool_Exp>>;
  _not?: InputMaybe<Issues_Bool_Exp>;
  _or?: InputMaybe<Array<Issues_Bool_Exp>>;
  category?: InputMaybe<IssueCategory_Enum_Comparison_Exp>;
  comments?: InputMaybe<Comments_Bool_Exp>;
  comments_aggregate?: InputMaybe<Comments_Aggregate_Bool_Exp>;
  content?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  creatorId?: InputMaybe<Uuid_Comparison_Exp>;
  fieldViewScale?: InputMaybe<IssueFieldViewScale_Enum_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isPrivate?: InputMaybe<Boolean_Comparison_Exp>;
  issueCategory?: InputMaybe<IssueCategory_Bool_Exp>;
  issueFieldViewScale?: InputMaybe<IssueFieldViewScale_Bool_Exp>;
  issueStatus?: InputMaybe<IssueStatus_Bool_Exp>;
  issues_users?: InputMaybe<Issues_Users_Bool_Exp>;
  issues_users_aggregate?: InputMaybe<Issues_Users_Aggregate_Bool_Exp>;
  letters?: InputMaybe<Letters_Bool_Exp>;
  letters_aggregate?: InputMaybe<Letters_Aggregate_Bool_Exp>;
  link?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<IssueStatus_Enum_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userIssueListEntries?: InputMaybe<UserIssueListEntries_Bool_Exp>;
  userIssueListEntries_aggregate?: InputMaybe<UserIssueListEntries_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "issues" */
export enum Issues_Constraint {
  /** unique or primary key constraint on columns "id" */
  IssuesPkey = "issues_pkey",
}

/** input type for inserting data into table "issues" */
export type Issues_Insert_Input = {
  category?: InputMaybe<IssueCategory_Enum>;
  comments?: InputMaybe<Comments_Arr_Rel_Insert_Input>;
  content?: InputMaybe<Scalars["String"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]>;
  creatorId?: InputMaybe<Scalars["uuid"]>;
  fieldViewScale?: InputMaybe<IssueFieldViewScale_Enum>;
  id?: InputMaybe<Scalars["uuid"]>;
  isPrivate?: InputMaybe<Scalars["Boolean"]>;
  issueCategory?: InputMaybe<IssueCategory_Obj_Rel_Insert_Input>;
  issueFieldViewScale?: InputMaybe<IssueFieldViewScale_Obj_Rel_Insert_Input>;
  issueStatus?: InputMaybe<IssueStatus_Obj_Rel_Insert_Input>;
  issues_users?: InputMaybe<Issues_Users_Arr_Rel_Insert_Input>;
  letters?: InputMaybe<Letters_Arr_Rel_Insert_Input>;
  link?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<IssueStatus_Enum>;
  title?: InputMaybe<Scalars["String"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userIssueListEntries?: InputMaybe<UserIssueListEntries_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Issues_Max_Fields = {
  __typename?: "issues_max_fields";
  content?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  creatorId?: Maybe<Scalars["uuid"]>;
  id?: Maybe<Scalars["uuid"]>;
  link?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** order by max() on columns of table "issues" */
export type Issues_Max_Order_By = {
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  creatorId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  link?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Issues_Min_Fields = {
  __typename?: "issues_min_fields";
  content?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  creatorId?: Maybe<Scalars["uuid"]>;
  id?: Maybe<Scalars["uuid"]>;
  link?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** order by min() on columns of table "issues" */
export type Issues_Min_Order_By = {
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  creatorId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  link?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "issues" */
export type Issues_Mutation_Response = {
  __typename?: "issues_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Issues>;
};

/** input type for inserting object relation for remote table "issues" */
export type Issues_Obj_Rel_Insert_Input = {
  data: Issues_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Issues_On_Conflict>;
};

/** on_conflict condition type for table "issues" */
export type Issues_On_Conflict = {
  constraint: Issues_Constraint;
  update_columns?: Array<Issues_Update_Column>;
  where?: InputMaybe<Issues_Bool_Exp>;
};

/** Ordering options when selecting data from "issues". */
export type Issues_Order_By = {
  category?: InputMaybe<Order_By>;
  comments_aggregate?: InputMaybe<Comments_Aggregate_Order_By>;
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  creatorId?: InputMaybe<Order_By>;
  fieldViewScale?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isPrivate?: InputMaybe<Order_By>;
  issueCategory?: InputMaybe<IssueCategory_Order_By>;
  issueFieldViewScale?: InputMaybe<IssueFieldViewScale_Order_By>;
  issueStatus?: InputMaybe<IssueStatus_Order_By>;
  issues_users_aggregate?: InputMaybe<Issues_Users_Aggregate_Order_By>;
  letters_aggregate?: InputMaybe<Letters_Aggregate_Order_By>;
  link?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userIssueListEntries_aggregate?: InputMaybe<UserIssueListEntries_Aggregate_Order_By>;
};

/** primary key columns input for table: issues */
export type Issues_Pk_Columns_Input = {
  id: Scalars["uuid"];
};

/** select columns of table "issues" */
export enum Issues_Select_Column {
  /** column name */
  Category = "category",
  /** column name */
  Content = "content",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  CreatorId = "creatorId",
  /** column name */
  FieldViewScale = "fieldViewScale",
  /** column name */
  Id = "id",
  /** column name */
  IsPrivate = "isPrivate",
  /** column name */
  Link = "link",
  /** column name */
  Status = "status",
  /** column name */
  Title = "title",
  /** column name */
  UpdatedAt = "updated_at",
}

/** select "issues_aggregate_bool_exp_bool_and_arguments_columns" columns of table "issues" */
export enum Issues_Select_Column_Issues_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsPrivate = "isPrivate",
}

/** select "issues_aggregate_bool_exp_bool_or_arguments_columns" columns of table "issues" */
export enum Issues_Select_Column_Issues_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsPrivate = "isPrivate",
}

/** input type for updating data in table "issues" */
export type Issues_Set_Input = {
  category?: InputMaybe<IssueCategory_Enum>;
  content?: InputMaybe<Scalars["String"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]>;
  creatorId?: InputMaybe<Scalars["uuid"]>;
  fieldViewScale?: InputMaybe<IssueFieldViewScale_Enum>;
  id?: InputMaybe<Scalars["uuid"]>;
  isPrivate?: InputMaybe<Scalars["Boolean"]>;
  link?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<IssueStatus_Enum>;
  title?: InputMaybe<Scalars["String"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]>;
};

/** Streaming cursor of the table "issues" */
export type Issues_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Issues_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Issues_Stream_Cursor_Value_Input = {
  category?: InputMaybe<IssueCategory_Enum>;
  content?: InputMaybe<Scalars["String"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]>;
  creatorId?: InputMaybe<Scalars["uuid"]>;
  fieldViewScale?: InputMaybe<IssueFieldViewScale_Enum>;
  id?: InputMaybe<Scalars["uuid"]>;
  isPrivate?: InputMaybe<Scalars["Boolean"]>;
  link?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<IssueStatus_Enum>;
  title?: InputMaybe<Scalars["String"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]>;
};

/** update columns of table "issues" */
export enum Issues_Update_Column {
  /** column name */
  Category = "category",
  /** column name */
  Content = "content",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  CreatorId = "creatorId",
  /** column name */
  FieldViewScale = "fieldViewScale",
  /** column name */
  Id = "id",
  /** column name */
  IsPrivate = "isPrivate",
  /** column name */
  Link = "link",
  /** column name */
  Status = "status",
  /** column name */
  Title = "title",
  /** column name */
  UpdatedAt = "updated_at",
}

export type Issues_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Issues_Set_Input>;
  /** filter the rows which have to be updated */
  where: Issues_Bool_Exp;
};

/** Issue members */
export type Issues_Users = {
  __typename?: "issues_users";
  id: Scalars["uuid"];
  /** An object relationship */
  issue: Issues;
  issueId: Scalars["uuid"];
  /** An object relationship */
  user: Users;
  userId: Scalars["uuid"];
};

/** aggregated selection of "issues_users" */
export type Issues_Users_Aggregate = {
  __typename?: "issues_users_aggregate";
  aggregate?: Maybe<Issues_Users_Aggregate_Fields>;
  nodes: Array<Issues_Users>;
};

export type Issues_Users_Aggregate_Bool_Exp = {
  count?: InputMaybe<Issues_Users_Aggregate_Bool_Exp_Count>;
};

export type Issues_Users_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Issues_Users_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<Issues_Users_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "issues_users" */
export type Issues_Users_Aggregate_Fields = {
  __typename?: "issues_users_aggregate_fields";
  count: Scalars["Int"];
  max?: Maybe<Issues_Users_Max_Fields>;
  min?: Maybe<Issues_Users_Min_Fields>;
};

/** aggregate fields of "issues_users" */
export type Issues_Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Issues_Users_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "issues_users" */
export type Issues_Users_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Issues_Users_Max_Order_By>;
  min?: InputMaybe<Issues_Users_Min_Order_By>;
};

/** input type for inserting array relation for remote table "issues_users" */
export type Issues_Users_Arr_Rel_Insert_Input = {
  data: Array<Issues_Users_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Issues_Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "issues_users". All fields are combined with a logical 'AND'. */
export type Issues_Users_Bool_Exp = {
  _and?: InputMaybe<Array<Issues_Users_Bool_Exp>>;
  _not?: InputMaybe<Issues_Users_Bool_Exp>;
  _or?: InputMaybe<Array<Issues_Users_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  issue?: InputMaybe<Issues_Bool_Exp>;
  issueId?: InputMaybe<Uuid_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "issues_users" */
export enum Issues_Users_Constraint {
  /** unique or primary key constraint on columns "id" */
  IssuesUsersPkey = "issues_users_pkey",
}

/** input type for inserting data into table "issues_users" */
export type Issues_Users_Insert_Input = {
  id?: InputMaybe<Scalars["uuid"]>;
  issue?: InputMaybe<Issues_Obj_Rel_Insert_Input>;
  issueId?: InputMaybe<Scalars["uuid"]>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars["uuid"]>;
};

/** aggregate max on columns */
export type Issues_Users_Max_Fields = {
  __typename?: "issues_users_max_fields";
  id?: Maybe<Scalars["uuid"]>;
  issueId?: Maybe<Scalars["uuid"]>;
  userId?: Maybe<Scalars["uuid"]>;
};

/** order by max() on columns of table "issues_users" */
export type Issues_Users_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  issueId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Issues_Users_Min_Fields = {
  __typename?: "issues_users_min_fields";
  id?: Maybe<Scalars["uuid"]>;
  issueId?: Maybe<Scalars["uuid"]>;
  userId?: Maybe<Scalars["uuid"]>;
};

/** order by min() on columns of table "issues_users" */
export type Issues_Users_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  issueId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "issues_users" */
export type Issues_Users_Mutation_Response = {
  __typename?: "issues_users_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Issues_Users>;
};

/** on_conflict condition type for table "issues_users" */
export type Issues_Users_On_Conflict = {
  constraint: Issues_Users_Constraint;
  update_columns?: Array<Issues_Users_Update_Column>;
  where?: InputMaybe<Issues_Users_Bool_Exp>;
};

/** Ordering options when selecting data from "issues_users". */
export type Issues_Users_Order_By = {
  id?: InputMaybe<Order_By>;
  issue?: InputMaybe<Issues_Order_By>;
  issueId?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: issues_users */
export type Issues_Users_Pk_Columns_Input = {
  id: Scalars["uuid"];
};

/** select columns of table "issues_users" */
export enum Issues_Users_Select_Column {
  /** column name */
  Id = "id",
  /** column name */
  IssueId = "issueId",
  /** column name */
  UserId = "userId",
}

/** input type for updating data in table "issues_users" */
export type Issues_Users_Set_Input = {
  id?: InputMaybe<Scalars["uuid"]>;
  issueId?: InputMaybe<Scalars["uuid"]>;
  userId?: InputMaybe<Scalars["uuid"]>;
};

/** Streaming cursor of the table "issues_users" */
export type Issues_Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Issues_Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Issues_Users_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars["uuid"]>;
  issueId?: InputMaybe<Scalars["uuid"]>;
  userId?: InputMaybe<Scalars["uuid"]>;
};

/** update columns of table "issues_users" */
export enum Issues_Users_Update_Column {
  /** column name */
  Id = "id",
  /** column name */
  IssueId = "issueId",
  /** column name */
  UserId = "userId",
}

export type Issues_Users_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Issues_Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Issues_Users_Bool_Exp;
};

/** columns and relationships of "language" */
export type Language = {
  __typename?: "language";
  /** An array relationship */
  letters: Array<Letters>;
  /** An aggregate relationship */
  letters_aggregate: Letters_Aggregate;
  value: Scalars["String"];
};

/** columns and relationships of "language" */
export type LanguageLettersArgs = {
  distinct_on?: InputMaybe<Array<Letters_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Letters_Order_By>>;
  where?: InputMaybe<Letters_Bool_Exp>;
};

/** columns and relationships of "language" */
export type LanguageLetters_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Letters_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Letters_Order_By>>;
  where?: InputMaybe<Letters_Bool_Exp>;
};

/** aggregated selection of "language" */
export type Language_Aggregate = {
  __typename?: "language_aggregate";
  aggregate?: Maybe<Language_Aggregate_Fields>;
  nodes: Array<Language>;
};

/** aggregate fields of "language" */
export type Language_Aggregate_Fields = {
  __typename?: "language_aggregate_fields";
  count: Scalars["Int"];
  max?: Maybe<Language_Max_Fields>;
  min?: Maybe<Language_Min_Fields>;
};

/** aggregate fields of "language" */
export type Language_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Language_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** Boolean expression to filter rows from the table "language". All fields are combined with a logical 'AND'. */
export type Language_Bool_Exp = {
  _and?: InputMaybe<Array<Language_Bool_Exp>>;
  _not?: InputMaybe<Language_Bool_Exp>;
  _or?: InputMaybe<Array<Language_Bool_Exp>>;
  letters?: InputMaybe<Letters_Bool_Exp>;
  letters_aggregate?: InputMaybe<Letters_Aggregate_Bool_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "language" */
export enum Language_Constraint {
  /** unique or primary key constraint on columns "value" */
  LanguagePkey = "language_pkey",
}

export enum Language_Enum {
  English = "ENGLISH",
  FrenchCanadian = "FRENCH_CANADIAN",
}

/** Boolean expression to compare columns of type "language_enum". All fields are combined with logical 'AND'. */
export type Language_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Language_Enum>;
  _in?: InputMaybe<Array<Language_Enum>>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  _neq?: InputMaybe<Language_Enum>;
  _nin?: InputMaybe<Array<Language_Enum>>;
};

/** input type for inserting data into table "language" */
export type Language_Insert_Input = {
  letters?: InputMaybe<Letters_Arr_Rel_Insert_Input>;
  value?: InputMaybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Language_Max_Fields = {
  __typename?: "language_max_fields";
  value?: Maybe<Scalars["String"]>;
};

/** aggregate min on columns */
export type Language_Min_Fields = {
  __typename?: "language_min_fields";
  value?: Maybe<Scalars["String"]>;
};

/** response of any mutation on the table "language" */
export type Language_Mutation_Response = {
  __typename?: "language_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Language>;
};

/** input type for inserting object relation for remote table "language" */
export type Language_Obj_Rel_Insert_Input = {
  data: Language_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Language_On_Conflict>;
};

/** on_conflict condition type for table "language" */
export type Language_On_Conflict = {
  constraint: Language_Constraint;
  update_columns?: Array<Language_Update_Column>;
  where?: InputMaybe<Language_Bool_Exp>;
};

/** Ordering options when selecting data from "language". */
export type Language_Order_By = {
  letters_aggregate?: InputMaybe<Letters_Aggregate_Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: language */
export type Language_Pk_Columns_Input = {
  value: Scalars["String"];
};

/** select columns of table "language" */
export enum Language_Select_Column {
  /** column name */
  Value = "value",
}

/** input type for updating data in table "language" */
export type Language_Set_Input = {
  value?: InputMaybe<Scalars["String"]>;
};

/** Streaming cursor of the table "language" */
export type Language_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Language_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Language_Stream_Cursor_Value_Input = {
  value?: InputMaybe<Scalars["String"]>;
};

/** update columns of table "language" */
export enum Language_Update_Column {
  /** column name */
  Value = "value",
}

export type Language_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Language_Set_Input>;
  /** filter the rows which have to be updated */
  where: Language_Bool_Exp;
};

/** columns and relationships of "letterContents" */
export type LetterContents = {
  __typename?: "letterContents";
  content?: Maybe<Scalars["String"]>;
  created_at: Scalars["timestamptz"];
  id: Scalars["uuid"];
  /** An object relationship */
  letter: Letters;
  letterId: Scalars["uuid"];
  /** An object relationship */
  representative: Representatives;
  representativeId: Scalars["uuid"];
  updated_at: Scalars["timestamptz"];
};

/** aggregated selection of "letterContents" */
export type LetterContents_Aggregate = {
  __typename?: "letterContents_aggregate";
  aggregate?: Maybe<LetterContents_Aggregate_Fields>;
  nodes: Array<LetterContents>;
};

export type LetterContents_Aggregate_Bool_Exp = {
  count?: InputMaybe<LetterContents_Aggregate_Bool_Exp_Count>;
};

export type LetterContents_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<LetterContents_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<LetterContents_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "letterContents" */
export type LetterContents_Aggregate_Fields = {
  __typename?: "letterContents_aggregate_fields";
  count: Scalars["Int"];
  max?: Maybe<LetterContents_Max_Fields>;
  min?: Maybe<LetterContents_Min_Fields>;
};

/** aggregate fields of "letterContents" */
export type LetterContents_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<LetterContents_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "letterContents" */
export type LetterContents_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<LetterContents_Max_Order_By>;
  min?: InputMaybe<LetterContents_Min_Order_By>;
};

/** input type for inserting array relation for remote table "letterContents" */
export type LetterContents_Arr_Rel_Insert_Input = {
  data: Array<LetterContents_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<LetterContents_On_Conflict>;
};

/** Boolean expression to filter rows from the table "letterContents". All fields are combined with a logical 'AND'. */
export type LetterContents_Bool_Exp = {
  _and?: InputMaybe<Array<LetterContents_Bool_Exp>>;
  _not?: InputMaybe<LetterContents_Bool_Exp>;
  _or?: InputMaybe<Array<LetterContents_Bool_Exp>>;
  content?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  letter?: InputMaybe<Letters_Bool_Exp>;
  letterId?: InputMaybe<Uuid_Comparison_Exp>;
  representative?: InputMaybe<Representatives_Bool_Exp>;
  representativeId?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "letterContents" */
export enum LetterContents_Constraint {
  /** unique or primary key constraint on columns "id" */
  LetterContentsPkey = "letterContents_pkey",
}

/** input type for inserting data into table "letterContents" */
export type LetterContents_Insert_Input = {
  content?: InputMaybe<Scalars["String"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  letter?: InputMaybe<Letters_Obj_Rel_Insert_Input>;
  letterId?: InputMaybe<Scalars["uuid"]>;
  representative?: InputMaybe<Representatives_Obj_Rel_Insert_Input>;
  representativeId?: InputMaybe<Scalars["uuid"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]>;
};

/** aggregate max on columns */
export type LetterContents_Max_Fields = {
  __typename?: "letterContents_max_fields";
  content?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  letterId?: Maybe<Scalars["uuid"]>;
  representativeId?: Maybe<Scalars["uuid"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** order by max() on columns of table "letterContents" */
export type LetterContents_Max_Order_By = {
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  letterId?: InputMaybe<Order_By>;
  representativeId?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type LetterContents_Min_Fields = {
  __typename?: "letterContents_min_fields";
  content?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  letterId?: Maybe<Scalars["uuid"]>;
  representativeId?: Maybe<Scalars["uuid"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** order by min() on columns of table "letterContents" */
export type LetterContents_Min_Order_By = {
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  letterId?: InputMaybe<Order_By>;
  representativeId?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "letterContents" */
export type LetterContents_Mutation_Response = {
  __typename?: "letterContents_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<LetterContents>;
};

/** on_conflict condition type for table "letterContents" */
export type LetterContents_On_Conflict = {
  constraint: LetterContents_Constraint;
  update_columns?: Array<LetterContents_Update_Column>;
  where?: InputMaybe<LetterContents_Bool_Exp>;
};

/** Ordering options when selecting data from "letterContents". */
export type LetterContents_Order_By = {
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  letter?: InputMaybe<Letters_Order_By>;
  letterId?: InputMaybe<Order_By>;
  representative?: InputMaybe<Representatives_Order_By>;
  representativeId?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: letterContents */
export type LetterContents_Pk_Columns_Input = {
  id: Scalars["uuid"];
};

/** select columns of table "letterContents" */
export enum LetterContents_Select_Column {
  /** column name */
  Content = "content",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  LetterId = "letterId",
  /** column name */
  RepresentativeId = "representativeId",
  /** column name */
  UpdatedAt = "updated_at",
}

/** input type for updating data in table "letterContents" */
export type LetterContents_Set_Input = {
  content?: InputMaybe<Scalars["String"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  letterId?: InputMaybe<Scalars["uuid"]>;
  representativeId?: InputMaybe<Scalars["uuid"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]>;
};

/** Streaming cursor of the table "letterContents" */
export type LetterContents_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: LetterContents_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type LetterContents_Stream_Cursor_Value_Input = {
  content?: InputMaybe<Scalars["String"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  letterId?: InputMaybe<Scalars["uuid"]>;
  representativeId?: InputMaybe<Scalars["uuid"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]>;
};

/** update columns of table "letterContents" */
export enum LetterContents_Update_Column {
  /** column name */
  Content = "content",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  LetterId = "letterId",
  /** column name */
  RepresentativeId = "representativeId",
  /** column name */
  UpdatedAt = "updated_at",
}

export type LetterContents_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<LetterContents_Set_Input>;
  /** filter the rows which have to be updated */
  where: LetterContents_Bool_Exp;
};

/** columns and relationships of "letterStatus" */
export type LetterStatus = {
  __typename?: "letterStatus";
  /** An array relationship */
  letters: Array<Letters>;
  /** An aggregate relationship */
  letters_aggregate: Letters_Aggregate;
  value: Scalars["String"];
};

/** columns and relationships of "letterStatus" */
export type LetterStatusLettersArgs = {
  distinct_on?: InputMaybe<Array<Letters_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Letters_Order_By>>;
  where?: InputMaybe<Letters_Bool_Exp>;
};

/** columns and relationships of "letterStatus" */
export type LetterStatusLetters_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Letters_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Letters_Order_By>>;
  where?: InputMaybe<Letters_Bool_Exp>;
};

/** aggregated selection of "letterStatus" */
export type LetterStatus_Aggregate = {
  __typename?: "letterStatus_aggregate";
  aggregate?: Maybe<LetterStatus_Aggregate_Fields>;
  nodes: Array<LetterStatus>;
};

/** aggregate fields of "letterStatus" */
export type LetterStatus_Aggregate_Fields = {
  __typename?: "letterStatus_aggregate_fields";
  count: Scalars["Int"];
  max?: Maybe<LetterStatus_Max_Fields>;
  min?: Maybe<LetterStatus_Min_Fields>;
};

/** aggregate fields of "letterStatus" */
export type LetterStatus_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<LetterStatus_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** Boolean expression to filter rows from the table "letterStatus". All fields are combined with a logical 'AND'. */
export type LetterStatus_Bool_Exp = {
  _and?: InputMaybe<Array<LetterStatus_Bool_Exp>>;
  _not?: InputMaybe<LetterStatus_Bool_Exp>;
  _or?: InputMaybe<Array<LetterStatus_Bool_Exp>>;
  letters?: InputMaybe<Letters_Bool_Exp>;
  letters_aggregate?: InputMaybe<Letters_Aggregate_Bool_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "letterStatus" */
export enum LetterStatus_Constraint {
  /** unique or primary key constraint on columns "value" */
  LetterStatusPkey = "letterStatus_pkey",
}

export enum LetterStatus_Enum {
  AiParticipationStep = "AI_PARTICIPATION_STEP",
  Completed = "COMPLETED",
  EditStep = "EDIT_STEP",
  PaymentStep = "PAYMENT_STEP",
  PersonalizeStep = "PERSONALIZE_STEP",
  PurposeStep = "PURPOSE_STEP",
  RepresentativeStep = "REPRESENTATIVE_STEP",
  SubjectStep = "SUBJECT_STEP",
}

/** Boolean expression to compare columns of type "letterStatus_enum". All fields are combined with logical 'AND'. */
export type LetterStatus_Enum_Comparison_Exp = {
  _eq?: InputMaybe<LetterStatus_Enum>;
  _in?: InputMaybe<Array<LetterStatus_Enum>>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  _neq?: InputMaybe<LetterStatus_Enum>;
  _nin?: InputMaybe<Array<LetterStatus_Enum>>;
};

/** input type for inserting data into table "letterStatus" */
export type LetterStatus_Insert_Input = {
  letters?: InputMaybe<Letters_Arr_Rel_Insert_Input>;
  value?: InputMaybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type LetterStatus_Max_Fields = {
  __typename?: "letterStatus_max_fields";
  value?: Maybe<Scalars["String"]>;
};

/** aggregate min on columns */
export type LetterStatus_Min_Fields = {
  __typename?: "letterStatus_min_fields";
  value?: Maybe<Scalars["String"]>;
};

/** response of any mutation on the table "letterStatus" */
export type LetterStatus_Mutation_Response = {
  __typename?: "letterStatus_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<LetterStatus>;
};

/** input type for inserting object relation for remote table "letterStatus" */
export type LetterStatus_Obj_Rel_Insert_Input = {
  data: LetterStatus_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<LetterStatus_On_Conflict>;
};

/** on_conflict condition type for table "letterStatus" */
export type LetterStatus_On_Conflict = {
  constraint: LetterStatus_Constraint;
  update_columns?: Array<LetterStatus_Update_Column>;
  where?: InputMaybe<LetterStatus_Bool_Exp>;
};

/** Ordering options when selecting data from "letterStatus". */
export type LetterStatus_Order_By = {
  letters_aggregate?: InputMaybe<Letters_Aggregate_Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: letterStatus */
export type LetterStatus_Pk_Columns_Input = {
  value: Scalars["String"];
};

/** select columns of table "letterStatus" */
export enum LetterStatus_Select_Column {
  /** column name */
  Value = "value",
}

/** input type for updating data in table "letterStatus" */
export type LetterStatus_Set_Input = {
  value?: InputMaybe<Scalars["String"]>;
};

/** Streaming cursor of the table "letterStatus" */
export type LetterStatus_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: LetterStatus_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type LetterStatus_Stream_Cursor_Value_Input = {
  value?: InputMaybe<Scalars["String"]>;
};

/** update columns of table "letterStatus" */
export enum LetterStatus_Update_Column {
  /** column name */
  Value = "value",
}

export type LetterStatus_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<LetterStatus_Set_Input>;
  /** filter the rows which have to be updated */
  where: LetterStatus_Bool_Exp;
};

/** columns and relationships of "letters" */
export type Letters = {
  __typename?: "letters";
  additionalInformation?: Maybe<Scalars["String"]>;
  city: Scalars["String"];
  created_at?: Maybe<Scalars["timestamptz"]>;
  creatorId: Scalars["uuid"];
  creatorName: Scalars["String"];
  creatorSurname: Scalars["String"];
  expectations?: Maybe<Scalars["String"]>;
  feelings?: Maybe<Scalars["String"]>;
  id: Scalars["uuid"];
  /** An object relationship */
  issue?: Maybe<Issues>;
  issueId?: Maybe<Scalars["uuid"]>;
  language: Language_Enum;
  /** An object relationship */
  languageByLanguage: Language;
  /** An array relationship */
  letterContents: Array<LetterContents>;
  /** An aggregate relationship */
  letterContents_aggregate: LetterContents_Aggregate;
  /** An object relationship */
  letterStatus: LetterStatus;
  sendEmail: Scalars["Boolean"];
  state: Scalars["String"];
  status: LetterStatus_Enum;
  street: Scalars["String"];
  topic?: Maybe<Scalars["String"]>;
  unit: Scalars["String"];
  updated_at?: Maybe<Scalars["timestamptz"]>;
  /** An object relationship */
  user: Users;
};

/** columns and relationships of "letters" */
export type LettersLetterContentsArgs = {
  distinct_on?: InputMaybe<Array<LetterContents_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<LetterContents_Order_By>>;
  where?: InputMaybe<LetterContents_Bool_Exp>;
};

/** columns and relationships of "letters" */
export type LettersLetterContents_AggregateArgs = {
  distinct_on?: InputMaybe<Array<LetterContents_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<LetterContents_Order_By>>;
  where?: InputMaybe<LetterContents_Bool_Exp>;
};

/** aggregated selection of "letters" */
export type Letters_Aggregate = {
  __typename?: "letters_aggregate";
  aggregate?: Maybe<Letters_Aggregate_Fields>;
  nodes: Array<Letters>;
};

export type Letters_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Letters_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Letters_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Letters_Aggregate_Bool_Exp_Count>;
};

export type Letters_Aggregate_Bool_Exp_Bool_And = {
  arguments: Letters_Select_Column_Letters_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<Letters_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Letters_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Letters_Select_Column_Letters_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<Letters_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Letters_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Letters_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<Letters_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "letters" */
export type Letters_Aggregate_Fields = {
  __typename?: "letters_aggregate_fields";
  count: Scalars["Int"];
  max?: Maybe<Letters_Max_Fields>;
  min?: Maybe<Letters_Min_Fields>;
};

/** aggregate fields of "letters" */
export type Letters_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Letters_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "letters" */
export type Letters_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Letters_Max_Order_By>;
  min?: InputMaybe<Letters_Min_Order_By>;
};

/** input type for inserting array relation for remote table "letters" */
export type Letters_Arr_Rel_Insert_Input = {
  data: Array<Letters_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Letters_On_Conflict>;
};

/** Boolean expression to filter rows from the table "letters". All fields are combined with a logical 'AND'. */
export type Letters_Bool_Exp = {
  _and?: InputMaybe<Array<Letters_Bool_Exp>>;
  _not?: InputMaybe<Letters_Bool_Exp>;
  _or?: InputMaybe<Array<Letters_Bool_Exp>>;
  additionalInformation?: InputMaybe<String_Comparison_Exp>;
  city?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  creatorId?: InputMaybe<Uuid_Comparison_Exp>;
  creatorName?: InputMaybe<String_Comparison_Exp>;
  creatorSurname?: InputMaybe<String_Comparison_Exp>;
  expectations?: InputMaybe<String_Comparison_Exp>;
  feelings?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  issue?: InputMaybe<Issues_Bool_Exp>;
  issueId?: InputMaybe<Uuid_Comparison_Exp>;
  language?: InputMaybe<Language_Enum_Comparison_Exp>;
  languageByLanguage?: InputMaybe<Language_Bool_Exp>;
  letterContents?: InputMaybe<LetterContents_Bool_Exp>;
  letterContents_aggregate?: InputMaybe<LetterContents_Aggregate_Bool_Exp>;
  letterStatus?: InputMaybe<LetterStatus_Bool_Exp>;
  sendEmail?: InputMaybe<Boolean_Comparison_Exp>;
  state?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<LetterStatus_Enum_Comparison_Exp>;
  street?: InputMaybe<String_Comparison_Exp>;
  topic?: InputMaybe<String_Comparison_Exp>;
  unit?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "letters" */
export enum Letters_Constraint {
  /** unique or primary key constraint on columns "id" */
  LettersPkey = "letters_pkey",
}

/** input type for inserting data into table "letters" */
export type Letters_Insert_Input = {
  additionalInformation?: InputMaybe<Scalars["String"]>;
  city?: InputMaybe<Scalars["String"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]>;
  creatorId?: InputMaybe<Scalars["uuid"]>;
  creatorName?: InputMaybe<Scalars["String"]>;
  creatorSurname?: InputMaybe<Scalars["String"]>;
  expectations?: InputMaybe<Scalars["String"]>;
  feelings?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  issue?: InputMaybe<Issues_Obj_Rel_Insert_Input>;
  issueId?: InputMaybe<Scalars["uuid"]>;
  language?: InputMaybe<Language_Enum>;
  languageByLanguage?: InputMaybe<Language_Obj_Rel_Insert_Input>;
  letterContents?: InputMaybe<LetterContents_Arr_Rel_Insert_Input>;
  letterStatus?: InputMaybe<LetterStatus_Obj_Rel_Insert_Input>;
  sendEmail?: InputMaybe<Scalars["Boolean"]>;
  state?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<LetterStatus_Enum>;
  street?: InputMaybe<Scalars["String"]>;
  topic?: InputMaybe<Scalars["String"]>;
  unit?: InputMaybe<Scalars["String"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Letters_Max_Fields = {
  __typename?: "letters_max_fields";
  additionalInformation?: Maybe<Scalars["String"]>;
  city?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  creatorId?: Maybe<Scalars["uuid"]>;
  creatorName?: Maybe<Scalars["String"]>;
  creatorSurname?: Maybe<Scalars["String"]>;
  expectations?: Maybe<Scalars["String"]>;
  feelings?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["uuid"]>;
  issueId?: Maybe<Scalars["uuid"]>;
  state?: Maybe<Scalars["String"]>;
  street?: Maybe<Scalars["String"]>;
  topic?: Maybe<Scalars["String"]>;
  unit?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** order by max() on columns of table "letters" */
export type Letters_Max_Order_By = {
  additionalInformation?: InputMaybe<Order_By>;
  city?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  creatorId?: InputMaybe<Order_By>;
  creatorName?: InputMaybe<Order_By>;
  creatorSurname?: InputMaybe<Order_By>;
  expectations?: InputMaybe<Order_By>;
  feelings?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  issueId?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  street?: InputMaybe<Order_By>;
  topic?: InputMaybe<Order_By>;
  unit?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Letters_Min_Fields = {
  __typename?: "letters_min_fields";
  additionalInformation?: Maybe<Scalars["String"]>;
  city?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  creatorId?: Maybe<Scalars["uuid"]>;
  creatorName?: Maybe<Scalars["String"]>;
  creatorSurname?: Maybe<Scalars["String"]>;
  expectations?: Maybe<Scalars["String"]>;
  feelings?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["uuid"]>;
  issueId?: Maybe<Scalars["uuid"]>;
  state?: Maybe<Scalars["String"]>;
  street?: Maybe<Scalars["String"]>;
  topic?: Maybe<Scalars["String"]>;
  unit?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** order by min() on columns of table "letters" */
export type Letters_Min_Order_By = {
  additionalInformation?: InputMaybe<Order_By>;
  city?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  creatorId?: InputMaybe<Order_By>;
  creatorName?: InputMaybe<Order_By>;
  creatorSurname?: InputMaybe<Order_By>;
  expectations?: InputMaybe<Order_By>;
  feelings?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  issueId?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  street?: InputMaybe<Order_By>;
  topic?: InputMaybe<Order_By>;
  unit?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "letters" */
export type Letters_Mutation_Response = {
  __typename?: "letters_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Letters>;
};

/** input type for inserting object relation for remote table "letters" */
export type Letters_Obj_Rel_Insert_Input = {
  data: Letters_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Letters_On_Conflict>;
};

/** on_conflict condition type for table "letters" */
export type Letters_On_Conflict = {
  constraint: Letters_Constraint;
  update_columns?: Array<Letters_Update_Column>;
  where?: InputMaybe<Letters_Bool_Exp>;
};

/** Ordering options when selecting data from "letters". */
export type Letters_Order_By = {
  additionalInformation?: InputMaybe<Order_By>;
  city?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  creatorId?: InputMaybe<Order_By>;
  creatorName?: InputMaybe<Order_By>;
  creatorSurname?: InputMaybe<Order_By>;
  expectations?: InputMaybe<Order_By>;
  feelings?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  issue?: InputMaybe<Issues_Order_By>;
  issueId?: InputMaybe<Order_By>;
  language?: InputMaybe<Order_By>;
  languageByLanguage?: InputMaybe<Language_Order_By>;
  letterContents_aggregate?: InputMaybe<LetterContents_Aggregate_Order_By>;
  letterStatus?: InputMaybe<LetterStatus_Order_By>;
  sendEmail?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  street?: InputMaybe<Order_By>;
  topic?: InputMaybe<Order_By>;
  unit?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
};

/** primary key columns input for table: letters */
export type Letters_Pk_Columns_Input = {
  id: Scalars["uuid"];
};

/** select columns of table "letters" */
export enum Letters_Select_Column {
  /** column name */
  AdditionalInformation = "additionalInformation",
  /** column name */
  City = "city",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  CreatorId = "creatorId",
  /** column name */
  CreatorName = "creatorName",
  /** column name */
  CreatorSurname = "creatorSurname",
  /** column name */
  Expectations = "expectations",
  /** column name */
  Feelings = "feelings",
  /** column name */
  Id = "id",
  /** column name */
  IssueId = "issueId",
  /** column name */
  Language = "language",
  /** column name */
  SendEmail = "sendEmail",
  /** column name */
  State = "state",
  /** column name */
  Status = "status",
  /** column name */
  Street = "street",
  /** column name */
  Topic = "topic",
  /** column name */
  Unit = "unit",
  /** column name */
  UpdatedAt = "updated_at",
}

/** select "letters_aggregate_bool_exp_bool_and_arguments_columns" columns of table "letters" */
export enum Letters_Select_Column_Letters_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  SendEmail = "sendEmail",
}

/** select "letters_aggregate_bool_exp_bool_or_arguments_columns" columns of table "letters" */
export enum Letters_Select_Column_Letters_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  SendEmail = "sendEmail",
}

/** input type for updating data in table "letters" */
export type Letters_Set_Input = {
  additionalInformation?: InputMaybe<Scalars["String"]>;
  city?: InputMaybe<Scalars["String"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]>;
  creatorId?: InputMaybe<Scalars["uuid"]>;
  creatorName?: InputMaybe<Scalars["String"]>;
  creatorSurname?: InputMaybe<Scalars["String"]>;
  expectations?: InputMaybe<Scalars["String"]>;
  feelings?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  issueId?: InputMaybe<Scalars["uuid"]>;
  language?: InputMaybe<Language_Enum>;
  sendEmail?: InputMaybe<Scalars["Boolean"]>;
  state?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<LetterStatus_Enum>;
  street?: InputMaybe<Scalars["String"]>;
  topic?: InputMaybe<Scalars["String"]>;
  unit?: InputMaybe<Scalars["String"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]>;
};

/** Streaming cursor of the table "letters" */
export type Letters_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Letters_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Letters_Stream_Cursor_Value_Input = {
  additionalInformation?: InputMaybe<Scalars["String"]>;
  city?: InputMaybe<Scalars["String"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]>;
  creatorId?: InputMaybe<Scalars["uuid"]>;
  creatorName?: InputMaybe<Scalars["String"]>;
  creatorSurname?: InputMaybe<Scalars["String"]>;
  expectations?: InputMaybe<Scalars["String"]>;
  feelings?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  issueId?: InputMaybe<Scalars["uuid"]>;
  language?: InputMaybe<Language_Enum>;
  sendEmail?: InputMaybe<Scalars["Boolean"]>;
  state?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<LetterStatus_Enum>;
  street?: InputMaybe<Scalars["String"]>;
  topic?: InputMaybe<Scalars["String"]>;
  unit?: InputMaybe<Scalars["String"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]>;
};

/** update columns of table "letters" */
export enum Letters_Update_Column {
  /** column name */
  AdditionalInformation = "additionalInformation",
  /** column name */
  City = "city",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  CreatorId = "creatorId",
  /** column name */
  CreatorName = "creatorName",
  /** column name */
  CreatorSurname = "creatorSurname",
  /** column name */
  Expectations = "expectations",
  /** column name */
  Feelings = "feelings",
  /** column name */
  Id = "id",
  /** column name */
  IssueId = "issueId",
  /** column name */
  Language = "language",
  /** column name */
  SendEmail = "sendEmail",
  /** column name */
  State = "state",
  /** column name */
  Status = "status",
  /** column name */
  Street = "street",
  /** column name */
  Topic = "topic",
  /** column name */
  Unit = "unit",
  /** column name */
  UpdatedAt = "updated_at",
}

export type Letters_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Letters_Set_Input>;
  /** filter the rows which have to be updated */
  where: Letters_Bool_Exp;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: "mutation_root";
  addUserZipCode?: Maybe<AddUserZipCodeOutput>;
  authenticateWithCredentials?: Maybe<AuthenticateWithCredentialsOutput>;
  authenticateWithGoogle?: Maybe<AuthenticateWithGoogleOutput>;
  confirmEmail?: Maybe<ConfirmEmailOutput>;
  /** delete data from the table: "comments" */
  delete_comments?: Maybe<Comments_Mutation_Response>;
  /** delete single row from the table: "comments" */
  delete_comments_by_pk?: Maybe<Comments>;
  /** delete data from the table: "issueCategory" */
  delete_issueCategory?: Maybe<IssueCategory_Mutation_Response>;
  /** delete single row from the table: "issueCategory" */
  delete_issueCategory_by_pk?: Maybe<IssueCategory>;
  /** delete data from the table: "issueFieldViewScale" */
  delete_issueFieldViewScale?: Maybe<IssueFieldViewScale_Mutation_Response>;
  /** delete single row from the table: "issueFieldViewScale" */
  delete_issueFieldViewScale_by_pk?: Maybe<IssueFieldViewScale>;
  /** delete data from the table: "issueStatus" */
  delete_issueStatus?: Maybe<IssueStatus_Mutation_Response>;
  /** delete single row from the table: "issueStatus" */
  delete_issueStatus_by_pk?: Maybe<IssueStatus>;
  /** delete data from the table: "issues" */
  delete_issues?: Maybe<Issues_Mutation_Response>;
  /** delete single row from the table: "issues" */
  delete_issues_by_pk?: Maybe<Issues>;
  /** delete data from the table: "issues_users" */
  delete_issues_users?: Maybe<Issues_Users_Mutation_Response>;
  /** delete single row from the table: "issues_users" */
  delete_issues_users_by_pk?: Maybe<Issues_Users>;
  /** delete data from the table: "language" */
  delete_language?: Maybe<Language_Mutation_Response>;
  /** delete single row from the table: "language" */
  delete_language_by_pk?: Maybe<Language>;
  /** delete data from the table: "letterContents" */
  delete_letterContents?: Maybe<LetterContents_Mutation_Response>;
  /** delete single row from the table: "letterContents" */
  delete_letterContents_by_pk?: Maybe<LetterContents>;
  /** delete data from the table: "letterStatus" */
  delete_letterStatus?: Maybe<LetterStatus_Mutation_Response>;
  /** delete single row from the table: "letterStatus" */
  delete_letterStatus_by_pk?: Maybe<LetterStatus>;
  /** delete data from the table: "letters" */
  delete_letters?: Maybe<Letters_Mutation_Response>;
  /** delete single row from the table: "letters" */
  delete_letters_by_pk?: Maybe<Letters>;
  /** delete data from the table: "representatives" */
  delete_representatives?: Maybe<Representatives_Mutation_Response>;
  /** delete single row from the table: "representatives" */
  delete_representatives_by_pk?: Maybe<Representatives>;
  /** delete data from the table: "sessionType" */
  delete_sessionType?: Maybe<SessionType_Mutation_Response>;
  /** delete single row from the table: "sessionType" */
  delete_sessionType_by_pk?: Maybe<SessionType>;
  /** delete data from the table: "sessions" */
  delete_sessions?: Maybe<Sessions_Mutation_Response>;
  /** delete single row from the table: "sessions" */
  delete_sessions_by_pk?: Maybe<Sessions>;
  /** delete data from the table: "userIssueListEntries" */
  delete_userIssueListEntries?: Maybe<UserIssueListEntries_Mutation_Response>;
  /** delete single row from the table: "userIssueListEntries" */
  delete_userIssueListEntries_by_pk?: Maybe<UserIssueListEntries>;
  /** delete data from the table: "userIssueListType" */
  delete_userIssueListType?: Maybe<UserIssueListType_Mutation_Response>;
  /** delete single row from the table: "userIssueListType" */
  delete_userIssueListType_by_pk?: Maybe<UserIssueListType>;
  /** delete data from the table: "userIssueLists" */
  delete_userIssueLists?: Maybe<UserIssueLists_Mutation_Response>;
  /** delete single row from the table: "userIssueLists" */
  delete_userIssueLists_by_pk?: Maybe<UserIssueLists>;
  /** delete data from the table: "userSource" */
  delete_userSource?: Maybe<UserSource_Mutation_Response>;
  /** delete single row from the table: "userSource" */
  delete_userSource_by_pk?: Maybe<UserSource>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "comments" */
  insert_comments?: Maybe<Comments_Mutation_Response>;
  /** insert a single row into the table: "comments" */
  insert_comments_one?: Maybe<Comments>;
  /** insert data into the table: "issueCategory" */
  insert_issueCategory?: Maybe<IssueCategory_Mutation_Response>;
  /** insert a single row into the table: "issueCategory" */
  insert_issueCategory_one?: Maybe<IssueCategory>;
  /** insert data into the table: "issueFieldViewScale" */
  insert_issueFieldViewScale?: Maybe<IssueFieldViewScale_Mutation_Response>;
  /** insert a single row into the table: "issueFieldViewScale" */
  insert_issueFieldViewScale_one?: Maybe<IssueFieldViewScale>;
  /** insert data into the table: "issueStatus" */
  insert_issueStatus?: Maybe<IssueStatus_Mutation_Response>;
  /** insert a single row into the table: "issueStatus" */
  insert_issueStatus_one?: Maybe<IssueStatus>;
  /** insert data into the table: "issues" */
  insert_issues?: Maybe<Issues_Mutation_Response>;
  /** insert a single row into the table: "issues" */
  insert_issues_one?: Maybe<Issues>;
  /** insert data into the table: "issues_users" */
  insert_issues_users?: Maybe<Issues_Users_Mutation_Response>;
  /** insert a single row into the table: "issues_users" */
  insert_issues_users_one?: Maybe<Issues_Users>;
  /** insert data into the table: "language" */
  insert_language?: Maybe<Language_Mutation_Response>;
  /** insert a single row into the table: "language" */
  insert_language_one?: Maybe<Language>;
  /** insert data into the table: "letterContents" */
  insert_letterContents?: Maybe<LetterContents_Mutation_Response>;
  /** insert a single row into the table: "letterContents" */
  insert_letterContents_one?: Maybe<LetterContents>;
  /** insert data into the table: "letterStatus" */
  insert_letterStatus?: Maybe<LetterStatus_Mutation_Response>;
  /** insert a single row into the table: "letterStatus" */
  insert_letterStatus_one?: Maybe<LetterStatus>;
  /** insert data into the table: "letters" */
  insert_letters?: Maybe<Letters_Mutation_Response>;
  /** insert a single row into the table: "letters" */
  insert_letters_one?: Maybe<Letters>;
  /** insert data into the table: "representatives" */
  insert_representatives?: Maybe<Representatives_Mutation_Response>;
  /** insert a single row into the table: "representatives" */
  insert_representatives_one?: Maybe<Representatives>;
  /** insert data into the table: "sessionType" */
  insert_sessionType?: Maybe<SessionType_Mutation_Response>;
  /** insert a single row into the table: "sessionType" */
  insert_sessionType_one?: Maybe<SessionType>;
  /** insert data into the table: "sessions" */
  insert_sessions?: Maybe<Sessions_Mutation_Response>;
  /** insert a single row into the table: "sessions" */
  insert_sessions_one?: Maybe<Sessions>;
  /** insert data into the table: "userIssueListEntries" */
  insert_userIssueListEntries?: Maybe<UserIssueListEntries_Mutation_Response>;
  /** insert a single row into the table: "userIssueListEntries" */
  insert_userIssueListEntries_one?: Maybe<UserIssueListEntries>;
  /** insert data into the table: "userIssueListType" */
  insert_userIssueListType?: Maybe<UserIssueListType_Mutation_Response>;
  /** insert a single row into the table: "userIssueListType" */
  insert_userIssueListType_one?: Maybe<UserIssueListType>;
  /** insert data into the table: "userIssueLists" */
  insert_userIssueLists?: Maybe<UserIssueLists_Mutation_Response>;
  /** insert a single row into the table: "userIssueLists" */
  insert_userIssueLists_one?: Maybe<UserIssueLists>;
  /** insert data into the table: "userSource" */
  insert_userSource?: Maybe<UserSource_Mutation_Response>;
  /** insert a single row into the table: "userSource" */
  insert_userSource_one?: Maybe<UserSource>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  requestPasswordReset?: Maybe<RequestPasswordResetOutput>;
  resetPassword?: Maybe<ResetPasswordOutput>;
  signUpWithCredentials?: Maybe<SignUpWithCredentialsOutput>;
  /** update data of the table: "comments" */
  update_comments?: Maybe<Comments_Mutation_Response>;
  /** update single row of the table: "comments" */
  update_comments_by_pk?: Maybe<Comments>;
  /** update multiples rows of table: "comments" */
  update_comments_many?: Maybe<Array<Maybe<Comments_Mutation_Response>>>;
  /** update data of the table: "issueCategory" */
  update_issueCategory?: Maybe<IssueCategory_Mutation_Response>;
  /** update single row of the table: "issueCategory" */
  update_issueCategory_by_pk?: Maybe<IssueCategory>;
  /** update multiples rows of table: "issueCategory" */
  update_issueCategory_many?: Maybe<
    Array<Maybe<IssueCategory_Mutation_Response>>
  >;
  /** update data of the table: "issueFieldViewScale" */
  update_issueFieldViewScale?: Maybe<IssueFieldViewScale_Mutation_Response>;
  /** update single row of the table: "issueFieldViewScale" */
  update_issueFieldViewScale_by_pk?: Maybe<IssueFieldViewScale>;
  /** update multiples rows of table: "issueFieldViewScale" */
  update_issueFieldViewScale_many?: Maybe<
    Array<Maybe<IssueFieldViewScale_Mutation_Response>>
  >;
  /** update data of the table: "issueStatus" */
  update_issueStatus?: Maybe<IssueStatus_Mutation_Response>;
  /** update single row of the table: "issueStatus" */
  update_issueStatus_by_pk?: Maybe<IssueStatus>;
  /** update multiples rows of table: "issueStatus" */
  update_issueStatus_many?: Maybe<Array<Maybe<IssueStatus_Mutation_Response>>>;
  /** update data of the table: "issues" */
  update_issues?: Maybe<Issues_Mutation_Response>;
  /** update single row of the table: "issues" */
  update_issues_by_pk?: Maybe<Issues>;
  /** update multiples rows of table: "issues" */
  update_issues_many?: Maybe<Array<Maybe<Issues_Mutation_Response>>>;
  /** update data of the table: "issues_users" */
  update_issues_users?: Maybe<Issues_Users_Mutation_Response>;
  /** update single row of the table: "issues_users" */
  update_issues_users_by_pk?: Maybe<Issues_Users>;
  /** update multiples rows of table: "issues_users" */
  update_issues_users_many?: Maybe<
    Array<Maybe<Issues_Users_Mutation_Response>>
  >;
  /** update data of the table: "language" */
  update_language?: Maybe<Language_Mutation_Response>;
  /** update single row of the table: "language" */
  update_language_by_pk?: Maybe<Language>;
  /** update multiples rows of table: "language" */
  update_language_many?: Maybe<Array<Maybe<Language_Mutation_Response>>>;
  /** update data of the table: "letterContents" */
  update_letterContents?: Maybe<LetterContents_Mutation_Response>;
  /** update single row of the table: "letterContents" */
  update_letterContents_by_pk?: Maybe<LetterContents>;
  /** update multiples rows of table: "letterContents" */
  update_letterContents_many?: Maybe<
    Array<Maybe<LetterContents_Mutation_Response>>
  >;
  /** update data of the table: "letterStatus" */
  update_letterStatus?: Maybe<LetterStatus_Mutation_Response>;
  /** update single row of the table: "letterStatus" */
  update_letterStatus_by_pk?: Maybe<LetterStatus>;
  /** update multiples rows of table: "letterStatus" */
  update_letterStatus_many?: Maybe<
    Array<Maybe<LetterStatus_Mutation_Response>>
  >;
  /** update data of the table: "letters" */
  update_letters?: Maybe<Letters_Mutation_Response>;
  /** update single row of the table: "letters" */
  update_letters_by_pk?: Maybe<Letters>;
  /** update multiples rows of table: "letters" */
  update_letters_many?: Maybe<Array<Maybe<Letters_Mutation_Response>>>;
  /** update data of the table: "representatives" */
  update_representatives?: Maybe<Representatives_Mutation_Response>;
  /** update single row of the table: "representatives" */
  update_representatives_by_pk?: Maybe<Representatives>;
  /** update multiples rows of table: "representatives" */
  update_representatives_many?: Maybe<
    Array<Maybe<Representatives_Mutation_Response>>
  >;
  /** update data of the table: "sessionType" */
  update_sessionType?: Maybe<SessionType_Mutation_Response>;
  /** update single row of the table: "sessionType" */
  update_sessionType_by_pk?: Maybe<SessionType>;
  /** update multiples rows of table: "sessionType" */
  update_sessionType_many?: Maybe<Array<Maybe<SessionType_Mutation_Response>>>;
  /** update data of the table: "sessions" */
  update_sessions?: Maybe<Sessions_Mutation_Response>;
  /** update single row of the table: "sessions" */
  update_sessions_by_pk?: Maybe<Sessions>;
  /** update multiples rows of table: "sessions" */
  update_sessions_many?: Maybe<Array<Maybe<Sessions_Mutation_Response>>>;
  /** update data of the table: "userIssueListEntries" */
  update_userIssueListEntries?: Maybe<UserIssueListEntries_Mutation_Response>;
  /** update single row of the table: "userIssueListEntries" */
  update_userIssueListEntries_by_pk?: Maybe<UserIssueListEntries>;
  /** update multiples rows of table: "userIssueListEntries" */
  update_userIssueListEntries_many?: Maybe<
    Array<Maybe<UserIssueListEntries_Mutation_Response>>
  >;
  /** update data of the table: "userIssueListType" */
  update_userIssueListType?: Maybe<UserIssueListType_Mutation_Response>;
  /** update single row of the table: "userIssueListType" */
  update_userIssueListType_by_pk?: Maybe<UserIssueListType>;
  /** update multiples rows of table: "userIssueListType" */
  update_userIssueListType_many?: Maybe<
    Array<Maybe<UserIssueListType_Mutation_Response>>
  >;
  /** update data of the table: "userIssueLists" */
  update_userIssueLists?: Maybe<UserIssueLists_Mutation_Response>;
  /** update single row of the table: "userIssueLists" */
  update_userIssueLists_by_pk?: Maybe<UserIssueLists>;
  /** update multiples rows of table: "userIssueLists" */
  update_userIssueLists_many?: Maybe<
    Array<Maybe<UserIssueLists_Mutation_Response>>
  >;
  /** update data of the table: "userSource" */
  update_userSource?: Maybe<UserSource_Mutation_Response>;
  /** update single row of the table: "userSource" */
  update_userSource_by_pk?: Maybe<UserSource>;
  /** update multiples rows of table: "userSource" */
  update_userSource_many?: Maybe<Array<Maybe<UserSource_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
  validatePasswordResetToken?: Maybe<ValidatePasswordResetTokenOutput>;
};

/** mutation root */
export type Mutation_RootAddUserZipCodeArgs = {
  sessionId: Scalars["uuid"];
  zipCode?: InputMaybe<Scalars["String"]>;
};

/** mutation root */
export type Mutation_RootAuthenticateWithCredentialsArgs = {
  email?: InputMaybe<Scalars["String"]>;
  password?: InputMaybe<Scalars["String"]>;
};

/** mutation root */
export type Mutation_RootAuthenticateWithGoogleArgs = {
  email?: InputMaybe<Scalars["String"]>;
  username?: InputMaybe<Scalars["String"]>;
};

/** mutation root */
export type Mutation_RootConfirmEmailArgs = {
  emailConfirmationToken: Scalars["String"];
};

/** mutation root */
export type Mutation_RootDelete_CommentsArgs = {
  where: Comments_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Comments_By_PkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootDelete_IssueCategoryArgs = {
  where: IssueCategory_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_IssueCategory_By_PkArgs = {
  value: Scalars["String"];
};

/** mutation root */
export type Mutation_RootDelete_IssueFieldViewScaleArgs = {
  where: IssueFieldViewScale_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_IssueFieldViewScale_By_PkArgs = {
  value: Scalars["String"];
};

/** mutation root */
export type Mutation_RootDelete_IssueStatusArgs = {
  where: IssueStatus_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_IssueStatus_By_PkArgs = {
  value: Scalars["String"];
};

/** mutation root */
export type Mutation_RootDelete_IssuesArgs = {
  where: Issues_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Issues_By_PkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootDelete_Issues_UsersArgs = {
  where: Issues_Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Issues_Users_By_PkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootDelete_LanguageArgs = {
  where: Language_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Language_By_PkArgs = {
  value: Scalars["String"];
};

/** mutation root */
export type Mutation_RootDelete_LetterContentsArgs = {
  where: LetterContents_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_LetterContents_By_PkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootDelete_LetterStatusArgs = {
  where: LetterStatus_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_LetterStatus_By_PkArgs = {
  value: Scalars["String"];
};

/** mutation root */
export type Mutation_RootDelete_LettersArgs = {
  where: Letters_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Letters_By_PkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootDelete_RepresentativesArgs = {
  where: Representatives_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Representatives_By_PkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootDelete_SessionTypeArgs = {
  where: SessionType_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_SessionType_By_PkArgs = {
  value: Scalars["String"];
};

/** mutation root */
export type Mutation_RootDelete_SessionsArgs = {
  where: Sessions_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Sessions_By_PkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootDelete_UserIssueListEntriesArgs = {
  where: UserIssueListEntries_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_UserIssueListEntries_By_PkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootDelete_UserIssueListTypeArgs = {
  where: UserIssueListType_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_UserIssueListType_By_PkArgs = {
  value: Scalars["String"];
};

/** mutation root */
export type Mutation_RootDelete_UserIssueListsArgs = {
  where: UserIssueLists_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_UserIssueLists_By_PkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootDelete_UserSourceArgs = {
  where: UserSource_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_UserSource_By_PkArgs = {
  value: Scalars["String"];
};

/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootInsert_CommentsArgs = {
  objects: Array<Comments_Insert_Input>;
  on_conflict?: InputMaybe<Comments_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Comments_OneArgs = {
  object: Comments_Insert_Input;
  on_conflict?: InputMaybe<Comments_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_IssueCategoryArgs = {
  objects: Array<IssueCategory_Insert_Input>;
  on_conflict?: InputMaybe<IssueCategory_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_IssueCategory_OneArgs = {
  object: IssueCategory_Insert_Input;
  on_conflict?: InputMaybe<IssueCategory_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_IssueFieldViewScaleArgs = {
  objects: Array<IssueFieldViewScale_Insert_Input>;
  on_conflict?: InputMaybe<IssueFieldViewScale_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_IssueFieldViewScale_OneArgs = {
  object: IssueFieldViewScale_Insert_Input;
  on_conflict?: InputMaybe<IssueFieldViewScale_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_IssueStatusArgs = {
  objects: Array<IssueStatus_Insert_Input>;
  on_conflict?: InputMaybe<IssueStatus_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_IssueStatus_OneArgs = {
  object: IssueStatus_Insert_Input;
  on_conflict?: InputMaybe<IssueStatus_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_IssuesArgs = {
  objects: Array<Issues_Insert_Input>;
  on_conflict?: InputMaybe<Issues_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Issues_OneArgs = {
  object: Issues_Insert_Input;
  on_conflict?: InputMaybe<Issues_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Issues_UsersArgs = {
  objects: Array<Issues_Users_Insert_Input>;
  on_conflict?: InputMaybe<Issues_Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Issues_Users_OneArgs = {
  object: Issues_Users_Insert_Input;
  on_conflict?: InputMaybe<Issues_Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_LanguageArgs = {
  objects: Array<Language_Insert_Input>;
  on_conflict?: InputMaybe<Language_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Language_OneArgs = {
  object: Language_Insert_Input;
  on_conflict?: InputMaybe<Language_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_LetterContentsArgs = {
  objects: Array<LetterContents_Insert_Input>;
  on_conflict?: InputMaybe<LetterContents_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_LetterContents_OneArgs = {
  object: LetterContents_Insert_Input;
  on_conflict?: InputMaybe<LetterContents_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_LetterStatusArgs = {
  objects: Array<LetterStatus_Insert_Input>;
  on_conflict?: InputMaybe<LetterStatus_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_LetterStatus_OneArgs = {
  object: LetterStatus_Insert_Input;
  on_conflict?: InputMaybe<LetterStatus_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_LettersArgs = {
  objects: Array<Letters_Insert_Input>;
  on_conflict?: InputMaybe<Letters_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Letters_OneArgs = {
  object: Letters_Insert_Input;
  on_conflict?: InputMaybe<Letters_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_RepresentativesArgs = {
  objects: Array<Representatives_Insert_Input>;
  on_conflict?: InputMaybe<Representatives_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Representatives_OneArgs = {
  object: Representatives_Insert_Input;
  on_conflict?: InputMaybe<Representatives_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_SessionTypeArgs = {
  objects: Array<SessionType_Insert_Input>;
  on_conflict?: InputMaybe<SessionType_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_SessionType_OneArgs = {
  object: SessionType_Insert_Input;
  on_conflict?: InputMaybe<SessionType_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_SessionsArgs = {
  objects: Array<Sessions_Insert_Input>;
  on_conflict?: InputMaybe<Sessions_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Sessions_OneArgs = {
  object: Sessions_Insert_Input;
  on_conflict?: InputMaybe<Sessions_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_UserIssueListEntriesArgs = {
  objects: Array<UserIssueListEntries_Insert_Input>;
  on_conflict?: InputMaybe<UserIssueListEntries_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_UserIssueListEntries_OneArgs = {
  object: UserIssueListEntries_Insert_Input;
  on_conflict?: InputMaybe<UserIssueListEntries_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_UserIssueListTypeArgs = {
  objects: Array<UserIssueListType_Insert_Input>;
  on_conflict?: InputMaybe<UserIssueListType_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_UserIssueListType_OneArgs = {
  object: UserIssueListType_Insert_Input;
  on_conflict?: InputMaybe<UserIssueListType_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_UserIssueListsArgs = {
  objects: Array<UserIssueLists_Insert_Input>;
  on_conflict?: InputMaybe<UserIssueLists_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_UserIssueLists_OneArgs = {
  object: UserIssueLists_Insert_Input;
  on_conflict?: InputMaybe<UserIssueLists_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_UserSourceArgs = {
  objects: Array<UserSource_Insert_Input>;
  on_conflict?: InputMaybe<UserSource_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_UserSource_OneArgs = {
  object: UserSource_Insert_Input;
  on_conflict?: InputMaybe<UserSource_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootRequestPasswordResetArgs = {
  email: Scalars["String"];
};

/** mutation root */
export type Mutation_RootResetPasswordArgs = {
  newPassword: Scalars["String"];
  passwordResetToken: Scalars["String"];
};

/** mutation root */
export type Mutation_RootSignUpWithCredentialsArgs = {
  accountType: Scalars["String"];
  email: Scalars["String"];
  password: Scalars["String"];
  username: Scalars["String"];
};

/** mutation root */
export type Mutation_RootUpdate_CommentsArgs = {
  _set?: InputMaybe<Comments_Set_Input>;
  where: Comments_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Comments_By_PkArgs = {
  _set?: InputMaybe<Comments_Set_Input>;
  pk_columns: Comments_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Comments_ManyArgs = {
  updates: Array<Comments_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_IssueCategoryArgs = {
  _set?: InputMaybe<IssueCategory_Set_Input>;
  where: IssueCategory_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_IssueCategory_By_PkArgs = {
  _set?: InputMaybe<IssueCategory_Set_Input>;
  pk_columns: IssueCategory_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_IssueCategory_ManyArgs = {
  updates: Array<IssueCategory_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_IssueFieldViewScaleArgs = {
  _set?: InputMaybe<IssueFieldViewScale_Set_Input>;
  where: IssueFieldViewScale_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_IssueFieldViewScale_By_PkArgs = {
  _set?: InputMaybe<IssueFieldViewScale_Set_Input>;
  pk_columns: IssueFieldViewScale_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_IssueFieldViewScale_ManyArgs = {
  updates: Array<IssueFieldViewScale_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_IssueStatusArgs = {
  _set?: InputMaybe<IssueStatus_Set_Input>;
  where: IssueStatus_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_IssueStatus_By_PkArgs = {
  _set?: InputMaybe<IssueStatus_Set_Input>;
  pk_columns: IssueStatus_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_IssueStatus_ManyArgs = {
  updates: Array<IssueStatus_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_IssuesArgs = {
  _set?: InputMaybe<Issues_Set_Input>;
  where: Issues_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Issues_By_PkArgs = {
  _set?: InputMaybe<Issues_Set_Input>;
  pk_columns: Issues_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Issues_ManyArgs = {
  updates: Array<Issues_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Issues_UsersArgs = {
  _set?: InputMaybe<Issues_Users_Set_Input>;
  where: Issues_Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Issues_Users_By_PkArgs = {
  _set?: InputMaybe<Issues_Users_Set_Input>;
  pk_columns: Issues_Users_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Issues_Users_ManyArgs = {
  updates: Array<Issues_Users_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_LanguageArgs = {
  _set?: InputMaybe<Language_Set_Input>;
  where: Language_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Language_By_PkArgs = {
  _set?: InputMaybe<Language_Set_Input>;
  pk_columns: Language_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Language_ManyArgs = {
  updates: Array<Language_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_LetterContentsArgs = {
  _set?: InputMaybe<LetterContents_Set_Input>;
  where: LetterContents_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_LetterContents_By_PkArgs = {
  _set?: InputMaybe<LetterContents_Set_Input>;
  pk_columns: LetterContents_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_LetterContents_ManyArgs = {
  updates: Array<LetterContents_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_LetterStatusArgs = {
  _set?: InputMaybe<LetterStatus_Set_Input>;
  where: LetterStatus_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_LetterStatus_By_PkArgs = {
  _set?: InputMaybe<LetterStatus_Set_Input>;
  pk_columns: LetterStatus_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_LetterStatus_ManyArgs = {
  updates: Array<LetterStatus_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_LettersArgs = {
  _set?: InputMaybe<Letters_Set_Input>;
  where: Letters_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Letters_By_PkArgs = {
  _set?: InputMaybe<Letters_Set_Input>;
  pk_columns: Letters_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Letters_ManyArgs = {
  updates: Array<Letters_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_RepresentativesArgs = {
  _set?: InputMaybe<Representatives_Set_Input>;
  where: Representatives_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Representatives_By_PkArgs = {
  _set?: InputMaybe<Representatives_Set_Input>;
  pk_columns: Representatives_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Representatives_ManyArgs = {
  updates: Array<Representatives_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_SessionTypeArgs = {
  _set?: InputMaybe<SessionType_Set_Input>;
  where: SessionType_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_SessionType_By_PkArgs = {
  _set?: InputMaybe<SessionType_Set_Input>;
  pk_columns: SessionType_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_SessionType_ManyArgs = {
  updates: Array<SessionType_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_SessionsArgs = {
  _set?: InputMaybe<Sessions_Set_Input>;
  where: Sessions_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Sessions_By_PkArgs = {
  _set?: InputMaybe<Sessions_Set_Input>;
  pk_columns: Sessions_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Sessions_ManyArgs = {
  updates: Array<Sessions_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_UserIssueListEntriesArgs = {
  _set?: InputMaybe<UserIssueListEntries_Set_Input>;
  where: UserIssueListEntries_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_UserIssueListEntries_By_PkArgs = {
  _set?: InputMaybe<UserIssueListEntries_Set_Input>;
  pk_columns: UserIssueListEntries_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_UserIssueListEntries_ManyArgs = {
  updates: Array<UserIssueListEntries_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_UserIssueListTypeArgs = {
  _set?: InputMaybe<UserIssueListType_Set_Input>;
  where: UserIssueListType_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_UserIssueListType_By_PkArgs = {
  _set?: InputMaybe<UserIssueListType_Set_Input>;
  pk_columns: UserIssueListType_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_UserIssueListType_ManyArgs = {
  updates: Array<UserIssueListType_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_UserIssueListsArgs = {
  _set?: InputMaybe<UserIssueLists_Set_Input>;
  where: UserIssueLists_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_UserIssueLists_By_PkArgs = {
  _set?: InputMaybe<UserIssueLists_Set_Input>;
  pk_columns: UserIssueLists_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_UserIssueLists_ManyArgs = {
  updates: Array<UserIssueLists_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_UserSourceArgs = {
  _set?: InputMaybe<UserSource_Set_Input>;
  where: UserSource_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_UserSource_By_PkArgs = {
  _set?: InputMaybe<UserSource_Set_Input>;
  pk_columns: UserSource_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_UserSource_ManyArgs = {
  updates: Array<UserSource_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};

/** mutation root */
export type Mutation_RootValidatePasswordResetTokenArgs = {
  passwordResetToken: Scalars["String"];
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = "asc",
  /** in ascending order, nulls first */
  AscNullsFirst = "asc_nulls_first",
  /** in ascending order, nulls last */
  AscNullsLast = "asc_nulls_last",
  /** in descending order, nulls first */
  Desc = "desc",
  /** in descending order, nulls first */
  DescNullsFirst = "desc_nulls_first",
  /** in descending order, nulls last */
  DescNullsLast = "desc_nulls_last",
}

export type Query_Root = {
  __typename?: "query_root";
  /** An array relationship */
  comments: Array<Comments>;
  /** An aggregate relationship */
  comments_aggregate: Comments_Aggregate;
  /** fetch data from the table: "comments" using primary key columns */
  comments_by_pk?: Maybe<Comments>;
  /** fetch data from the table: "issueCategory" */
  issueCategory: Array<IssueCategory>;
  /** fetch aggregated fields from the table: "issueCategory" */
  issueCategory_aggregate: IssueCategory_Aggregate;
  /** fetch data from the table: "issueCategory" using primary key columns */
  issueCategory_by_pk?: Maybe<IssueCategory>;
  /** fetch data from the table: "issueFieldViewScale" */
  issueFieldViewScale: Array<IssueFieldViewScale>;
  /** fetch aggregated fields from the table: "issueFieldViewScale" */
  issueFieldViewScale_aggregate: IssueFieldViewScale_Aggregate;
  /** fetch data from the table: "issueFieldViewScale" using primary key columns */
  issueFieldViewScale_by_pk?: Maybe<IssueFieldViewScale>;
  /** fetch data from the table: "issueStatus" */
  issueStatus: Array<IssueStatus>;
  /** fetch aggregated fields from the table: "issueStatus" */
  issueStatus_aggregate: IssueStatus_Aggregate;
  /** fetch data from the table: "issueStatus" using primary key columns */
  issueStatus_by_pk?: Maybe<IssueStatus>;
  /** An array relationship */
  issues: Array<Issues>;
  /** An aggregate relationship */
  issues_aggregate: Issues_Aggregate;
  /** fetch data from the table: "issues" using primary key columns */
  issues_by_pk?: Maybe<Issues>;
  /** An array relationship */
  issues_users: Array<Issues_Users>;
  /** An aggregate relationship */
  issues_users_aggregate: Issues_Users_Aggregate;
  /** fetch data from the table: "issues_users" using primary key columns */
  issues_users_by_pk?: Maybe<Issues_Users>;
  /** fetch data from the table: "language" */
  language: Array<Language>;
  /** fetch aggregated fields from the table: "language" */
  language_aggregate: Language_Aggregate;
  /** fetch data from the table: "language" using primary key columns */
  language_by_pk?: Maybe<Language>;
  /** An array relationship */
  letterContents: Array<LetterContents>;
  /** An aggregate relationship */
  letterContents_aggregate: LetterContents_Aggregate;
  /** fetch data from the table: "letterContents" using primary key columns */
  letterContents_by_pk?: Maybe<LetterContents>;
  /** fetch data from the table: "letterStatus" */
  letterStatus: Array<LetterStatus>;
  /** fetch aggregated fields from the table: "letterStatus" */
  letterStatus_aggregate: LetterStatus_Aggregate;
  /** fetch data from the table: "letterStatus" using primary key columns */
  letterStatus_by_pk?: Maybe<LetterStatus>;
  /** An array relationship */
  letters: Array<Letters>;
  /** An aggregate relationship */
  letters_aggregate: Letters_Aggregate;
  /** fetch data from the table: "letters" using primary key columns */
  letters_by_pk?: Maybe<Letters>;
  /** fetch data from the table: "representatives" */
  representatives: Array<Representatives>;
  /** fetch aggregated fields from the table: "representatives" */
  representatives_aggregate: Representatives_Aggregate;
  /** fetch data from the table: "representatives" using primary key columns */
  representatives_by_pk?: Maybe<Representatives>;
  /** fetch data from the table: "sessionType" */
  sessionType: Array<SessionType>;
  /** fetch aggregated fields from the table: "sessionType" */
  sessionType_aggregate: SessionType_Aggregate;
  /** fetch data from the table: "sessionType" using primary key columns */
  sessionType_by_pk?: Maybe<SessionType>;
  /** An array relationship */
  sessions: Array<Sessions>;
  /** An aggregate relationship */
  sessions_aggregate: Sessions_Aggregate;
  /** fetch data from the table: "sessions" using primary key columns */
  sessions_by_pk?: Maybe<Sessions>;
  /** An array relationship */
  userIssueListEntries: Array<UserIssueListEntries>;
  /** An aggregate relationship */
  userIssueListEntries_aggregate: UserIssueListEntries_Aggregate;
  /** fetch data from the table: "userIssueListEntries" using primary key columns */
  userIssueListEntries_by_pk?: Maybe<UserIssueListEntries>;
  /** fetch data from the table: "userIssueListType" */
  userIssueListType: Array<UserIssueListType>;
  /** fetch aggregated fields from the table: "userIssueListType" */
  userIssueListType_aggregate: UserIssueListType_Aggregate;
  /** fetch data from the table: "userIssueListType" using primary key columns */
  userIssueListType_by_pk?: Maybe<UserIssueListType>;
  /** An array relationship */
  userIssueLists: Array<UserIssueLists>;
  /** An aggregate relationship */
  userIssueLists_aggregate: UserIssueLists_Aggregate;
  /** fetch data from the table: "userIssueLists" using primary key columns */
  userIssueLists_by_pk?: Maybe<UserIssueLists>;
  /** fetch data from the table: "userSource" */
  userSource: Array<UserSource>;
  /** fetch aggregated fields from the table: "userSource" */
  userSource_aggregate: UserSource_Aggregate;
  /** fetch data from the table: "userSource" using primary key columns */
  userSource_by_pk?: Maybe<UserSource>;
  /** An array relationship */
  users: Array<Users>;
  /** An aggregate relationship */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};

export type Query_RootCommentsArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};

export type Query_RootComments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};

export type Query_RootComments_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Query_RootIssueCategoryArgs = {
  distinct_on?: InputMaybe<Array<IssueCategory_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<IssueCategory_Order_By>>;
  where?: InputMaybe<IssueCategory_Bool_Exp>;
};

export type Query_RootIssueCategory_AggregateArgs = {
  distinct_on?: InputMaybe<Array<IssueCategory_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<IssueCategory_Order_By>>;
  where?: InputMaybe<IssueCategory_Bool_Exp>;
};

export type Query_RootIssueCategory_By_PkArgs = {
  value: Scalars["String"];
};

export type Query_RootIssueFieldViewScaleArgs = {
  distinct_on?: InputMaybe<Array<IssueFieldViewScale_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<IssueFieldViewScale_Order_By>>;
  where?: InputMaybe<IssueFieldViewScale_Bool_Exp>;
};

export type Query_RootIssueFieldViewScale_AggregateArgs = {
  distinct_on?: InputMaybe<Array<IssueFieldViewScale_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<IssueFieldViewScale_Order_By>>;
  where?: InputMaybe<IssueFieldViewScale_Bool_Exp>;
};

export type Query_RootIssueFieldViewScale_By_PkArgs = {
  value: Scalars["String"];
};

export type Query_RootIssueStatusArgs = {
  distinct_on?: InputMaybe<Array<IssueStatus_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<IssueStatus_Order_By>>;
  where?: InputMaybe<IssueStatus_Bool_Exp>;
};

export type Query_RootIssueStatus_AggregateArgs = {
  distinct_on?: InputMaybe<Array<IssueStatus_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<IssueStatus_Order_By>>;
  where?: InputMaybe<IssueStatus_Bool_Exp>;
};

export type Query_RootIssueStatus_By_PkArgs = {
  value: Scalars["String"];
};

export type Query_RootIssuesArgs = {
  distinct_on?: InputMaybe<Array<Issues_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Issues_Order_By>>;
  where?: InputMaybe<Issues_Bool_Exp>;
};

export type Query_RootIssues_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Issues_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Issues_Order_By>>;
  where?: InputMaybe<Issues_Bool_Exp>;
};

export type Query_RootIssues_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Query_RootIssues_UsersArgs = {
  distinct_on?: InputMaybe<Array<Issues_Users_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Issues_Users_Order_By>>;
  where?: InputMaybe<Issues_Users_Bool_Exp>;
};

export type Query_RootIssues_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Issues_Users_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Issues_Users_Order_By>>;
  where?: InputMaybe<Issues_Users_Bool_Exp>;
};

export type Query_RootIssues_Users_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Query_RootLanguageArgs = {
  distinct_on?: InputMaybe<Array<Language_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Language_Order_By>>;
  where?: InputMaybe<Language_Bool_Exp>;
};

export type Query_RootLanguage_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Language_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Language_Order_By>>;
  where?: InputMaybe<Language_Bool_Exp>;
};

export type Query_RootLanguage_By_PkArgs = {
  value: Scalars["String"];
};

export type Query_RootLetterContentsArgs = {
  distinct_on?: InputMaybe<Array<LetterContents_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<LetterContents_Order_By>>;
  where?: InputMaybe<LetterContents_Bool_Exp>;
};

export type Query_RootLetterContents_AggregateArgs = {
  distinct_on?: InputMaybe<Array<LetterContents_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<LetterContents_Order_By>>;
  where?: InputMaybe<LetterContents_Bool_Exp>;
};

export type Query_RootLetterContents_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Query_RootLetterStatusArgs = {
  distinct_on?: InputMaybe<Array<LetterStatus_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<LetterStatus_Order_By>>;
  where?: InputMaybe<LetterStatus_Bool_Exp>;
};

export type Query_RootLetterStatus_AggregateArgs = {
  distinct_on?: InputMaybe<Array<LetterStatus_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<LetterStatus_Order_By>>;
  where?: InputMaybe<LetterStatus_Bool_Exp>;
};

export type Query_RootLetterStatus_By_PkArgs = {
  value: Scalars["String"];
};

export type Query_RootLettersArgs = {
  distinct_on?: InputMaybe<Array<Letters_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Letters_Order_By>>;
  where?: InputMaybe<Letters_Bool_Exp>;
};

export type Query_RootLetters_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Letters_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Letters_Order_By>>;
  where?: InputMaybe<Letters_Bool_Exp>;
};

export type Query_RootLetters_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Query_RootRepresentativesArgs = {
  distinct_on?: InputMaybe<Array<Representatives_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Representatives_Order_By>>;
  where?: InputMaybe<Representatives_Bool_Exp>;
};

export type Query_RootRepresentatives_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Representatives_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Representatives_Order_By>>;
  where?: InputMaybe<Representatives_Bool_Exp>;
};

export type Query_RootRepresentatives_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Query_RootSessionTypeArgs = {
  distinct_on?: InputMaybe<Array<SessionType_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<SessionType_Order_By>>;
  where?: InputMaybe<SessionType_Bool_Exp>;
};

export type Query_RootSessionType_AggregateArgs = {
  distinct_on?: InputMaybe<Array<SessionType_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<SessionType_Order_By>>;
  where?: InputMaybe<SessionType_Bool_Exp>;
};

export type Query_RootSessionType_By_PkArgs = {
  value: Scalars["String"];
};

export type Query_RootSessionsArgs = {
  distinct_on?: InputMaybe<Array<Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Sessions_Order_By>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};

export type Query_RootSessions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Sessions_Order_By>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};

export type Query_RootSessions_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Query_RootUserIssueListEntriesArgs = {
  distinct_on?: InputMaybe<Array<UserIssueListEntries_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<UserIssueListEntries_Order_By>>;
  where?: InputMaybe<UserIssueListEntries_Bool_Exp>;
};

export type Query_RootUserIssueListEntries_AggregateArgs = {
  distinct_on?: InputMaybe<Array<UserIssueListEntries_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<UserIssueListEntries_Order_By>>;
  where?: InputMaybe<UserIssueListEntries_Bool_Exp>;
};

export type Query_RootUserIssueListEntries_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Query_RootUserIssueListTypeArgs = {
  distinct_on?: InputMaybe<Array<UserIssueListType_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<UserIssueListType_Order_By>>;
  where?: InputMaybe<UserIssueListType_Bool_Exp>;
};

export type Query_RootUserIssueListType_AggregateArgs = {
  distinct_on?: InputMaybe<Array<UserIssueListType_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<UserIssueListType_Order_By>>;
  where?: InputMaybe<UserIssueListType_Bool_Exp>;
};

export type Query_RootUserIssueListType_By_PkArgs = {
  value: Scalars["String"];
};

export type Query_RootUserIssueListsArgs = {
  distinct_on?: InputMaybe<Array<UserIssueLists_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<UserIssueLists_Order_By>>;
  where?: InputMaybe<UserIssueLists_Bool_Exp>;
};

export type Query_RootUserIssueLists_AggregateArgs = {
  distinct_on?: InputMaybe<Array<UserIssueLists_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<UserIssueLists_Order_By>>;
  where?: InputMaybe<UserIssueLists_Bool_Exp>;
};

export type Query_RootUserIssueLists_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Query_RootUserSourceArgs = {
  distinct_on?: InputMaybe<Array<UserSource_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<UserSource_Order_By>>;
  where?: InputMaybe<UserSource_Bool_Exp>;
};

export type Query_RootUserSource_AggregateArgs = {
  distinct_on?: InputMaybe<Array<UserSource_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<UserSource_Order_By>>;
  where?: InputMaybe<UserSource_Bool_Exp>;
};

export type Query_RootUserSource_By_PkArgs = {
  value: Scalars["String"];
};

export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Query_RootUsers_By_PkArgs = {
  id: Scalars["uuid"];
};

/** columns and relationships of "representatives" */
export type Representatives = {
  __typename?: "representatives";
  created_at?: Maybe<Scalars["timestamptz"]>;
  firstname: Scalars["String"];
  id: Scalars["uuid"];
  lastname: Scalars["String"];
  /** An array relationship */
  letterContents: Array<LetterContents>;
  /** An aggregate relationship */
  letterContents_aggregate: LetterContents_Aggregate;
  middlename?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** columns and relationships of "representatives" */
export type RepresentativesLetterContentsArgs = {
  distinct_on?: InputMaybe<Array<LetterContents_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<LetterContents_Order_By>>;
  where?: InputMaybe<LetterContents_Bool_Exp>;
};

/** columns and relationships of "representatives" */
export type RepresentativesLetterContents_AggregateArgs = {
  distinct_on?: InputMaybe<Array<LetterContents_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<LetterContents_Order_By>>;
  where?: InputMaybe<LetterContents_Bool_Exp>;
};

/** aggregated selection of "representatives" */
export type Representatives_Aggregate = {
  __typename?: "representatives_aggregate";
  aggregate?: Maybe<Representatives_Aggregate_Fields>;
  nodes: Array<Representatives>;
};

/** aggregate fields of "representatives" */
export type Representatives_Aggregate_Fields = {
  __typename?: "representatives_aggregate_fields";
  count: Scalars["Int"];
  max?: Maybe<Representatives_Max_Fields>;
  min?: Maybe<Representatives_Min_Fields>;
};

/** aggregate fields of "representatives" */
export type Representatives_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Representatives_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** Boolean expression to filter rows from the table "representatives". All fields are combined with a logical 'AND'. */
export type Representatives_Bool_Exp = {
  _and?: InputMaybe<Array<Representatives_Bool_Exp>>;
  _not?: InputMaybe<Representatives_Bool_Exp>;
  _or?: InputMaybe<Array<Representatives_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  firstname?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  lastname?: InputMaybe<String_Comparison_Exp>;
  letterContents?: InputMaybe<LetterContents_Bool_Exp>;
  letterContents_aggregate?: InputMaybe<LetterContents_Aggregate_Bool_Exp>;
  middlename?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "representatives" */
export enum Representatives_Constraint {
  /** unique or primary key constraint on columns "id" */
  RepresentativesPkey = "representatives_pkey",
}

/** input type for inserting data into table "representatives" */
export type Representatives_Insert_Input = {
  created_at?: InputMaybe<Scalars["timestamptz"]>;
  firstname?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  lastname?: InputMaybe<Scalars["String"]>;
  letterContents?: InputMaybe<LetterContents_Arr_Rel_Insert_Input>;
  middlename?: InputMaybe<Scalars["String"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]>;
};

/** aggregate max on columns */
export type Representatives_Max_Fields = {
  __typename?: "representatives_max_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  firstname?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["uuid"]>;
  lastname?: Maybe<Scalars["String"]>;
  middlename?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** aggregate min on columns */
export type Representatives_Min_Fields = {
  __typename?: "representatives_min_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  firstname?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["uuid"]>;
  lastname?: Maybe<Scalars["String"]>;
  middlename?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** response of any mutation on the table "representatives" */
export type Representatives_Mutation_Response = {
  __typename?: "representatives_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Representatives>;
};

/** input type for inserting object relation for remote table "representatives" */
export type Representatives_Obj_Rel_Insert_Input = {
  data: Representatives_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Representatives_On_Conflict>;
};

/** on_conflict condition type for table "representatives" */
export type Representatives_On_Conflict = {
  constraint: Representatives_Constraint;
  update_columns?: Array<Representatives_Update_Column>;
  where?: InputMaybe<Representatives_Bool_Exp>;
};

/** Ordering options when selecting data from "representatives". */
export type Representatives_Order_By = {
  created_at?: InputMaybe<Order_By>;
  firstname?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastname?: InputMaybe<Order_By>;
  letterContents_aggregate?: InputMaybe<LetterContents_Aggregate_Order_By>;
  middlename?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: representatives */
export type Representatives_Pk_Columns_Input = {
  id: Scalars["uuid"];
};

/** select columns of table "representatives" */
export enum Representatives_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Firstname = "firstname",
  /** column name */
  Id = "id",
  /** column name */
  Lastname = "lastname",
  /** column name */
  Middlename = "middlename",
  /** column name */
  UpdatedAt = "updated_at",
}

/** input type for updating data in table "representatives" */
export type Representatives_Set_Input = {
  created_at?: InputMaybe<Scalars["timestamptz"]>;
  firstname?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  lastname?: InputMaybe<Scalars["String"]>;
  middlename?: InputMaybe<Scalars["String"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]>;
};

/** Streaming cursor of the table "representatives" */
export type Representatives_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Representatives_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Representatives_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars["timestamptz"]>;
  firstname?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  lastname?: InputMaybe<Scalars["String"]>;
  middlename?: InputMaybe<Scalars["String"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]>;
};

/** update columns of table "representatives" */
export enum Representatives_Update_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Firstname = "firstname",
  /** column name */
  Id = "id",
  /** column name */
  Lastname = "lastname",
  /** column name */
  Middlename = "middlename",
  /** column name */
  UpdatedAt = "updated_at",
}

export type Representatives_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Representatives_Set_Input>;
  /** filter the rows which have to be updated */
  where: Representatives_Bool_Exp;
};

export type RequestPasswordResetOutput = {
  __typename?: "requestPasswordResetOutput";
  email: Scalars["String"];
};

export type ResetPasswordOutput = {
  __typename?: "resetPasswordOutput";
  sessionId: Scalars["uuid"];
};

/** columns and relationships of "sessionType" */
export type SessionType = {
  __typename?: "sessionType";
  /** An array relationship */
  sessions: Array<Sessions>;
  /** An aggregate relationship */
  sessions_aggregate: Sessions_Aggregate;
  value: Scalars["String"];
};

/** columns and relationships of "sessionType" */
export type SessionTypeSessionsArgs = {
  distinct_on?: InputMaybe<Array<Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Sessions_Order_By>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};

/** columns and relationships of "sessionType" */
export type SessionTypeSessions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Sessions_Order_By>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};

/** aggregated selection of "sessionType" */
export type SessionType_Aggregate = {
  __typename?: "sessionType_aggregate";
  aggregate?: Maybe<SessionType_Aggregate_Fields>;
  nodes: Array<SessionType>;
};

/** aggregate fields of "sessionType" */
export type SessionType_Aggregate_Fields = {
  __typename?: "sessionType_aggregate_fields";
  count: Scalars["Int"];
  max?: Maybe<SessionType_Max_Fields>;
  min?: Maybe<SessionType_Min_Fields>;
};

/** aggregate fields of "sessionType" */
export type SessionType_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<SessionType_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** Boolean expression to filter rows from the table "sessionType". All fields are combined with a logical 'AND'. */
export type SessionType_Bool_Exp = {
  _and?: InputMaybe<Array<SessionType_Bool_Exp>>;
  _not?: InputMaybe<SessionType_Bool_Exp>;
  _or?: InputMaybe<Array<SessionType_Bool_Exp>>;
  sessions?: InputMaybe<Sessions_Bool_Exp>;
  sessions_aggregate?: InputMaybe<Sessions_Aggregate_Bool_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "sessionType" */
export enum SessionType_Constraint {
  /** unique or primary key constraint on columns "value" */
  SessionTypePkey = "sessionType_pkey",
}

export enum SessionType_Enum {
  Credentials = "CREDENTIALS",
  Github = "GITHUB",
  Google = "GOOGLE",
}

/** Boolean expression to compare columns of type "sessionType_enum". All fields are combined with logical 'AND'. */
export type SessionType_Enum_Comparison_Exp = {
  _eq?: InputMaybe<SessionType_Enum>;
  _in?: InputMaybe<Array<SessionType_Enum>>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  _neq?: InputMaybe<SessionType_Enum>;
  _nin?: InputMaybe<Array<SessionType_Enum>>;
};

/** input type for inserting data into table "sessionType" */
export type SessionType_Insert_Input = {
  sessions?: InputMaybe<Sessions_Arr_Rel_Insert_Input>;
  value?: InputMaybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type SessionType_Max_Fields = {
  __typename?: "sessionType_max_fields";
  value?: Maybe<Scalars["String"]>;
};

/** aggregate min on columns */
export type SessionType_Min_Fields = {
  __typename?: "sessionType_min_fields";
  value?: Maybe<Scalars["String"]>;
};

/** response of any mutation on the table "sessionType" */
export type SessionType_Mutation_Response = {
  __typename?: "sessionType_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<SessionType>;
};

/** input type for inserting object relation for remote table "sessionType" */
export type SessionType_Obj_Rel_Insert_Input = {
  data: SessionType_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<SessionType_On_Conflict>;
};

/** on_conflict condition type for table "sessionType" */
export type SessionType_On_Conflict = {
  constraint: SessionType_Constraint;
  update_columns?: Array<SessionType_Update_Column>;
  where?: InputMaybe<SessionType_Bool_Exp>;
};

/** Ordering options when selecting data from "sessionType". */
export type SessionType_Order_By = {
  sessions_aggregate?: InputMaybe<Sessions_Aggregate_Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: sessionType */
export type SessionType_Pk_Columns_Input = {
  value: Scalars["String"];
};

/** select columns of table "sessionType" */
export enum SessionType_Select_Column {
  /** column name */
  Value = "value",
}

/** input type for updating data in table "sessionType" */
export type SessionType_Set_Input = {
  value?: InputMaybe<Scalars["String"]>;
};

/** Streaming cursor of the table "sessionType" */
export type SessionType_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: SessionType_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type SessionType_Stream_Cursor_Value_Input = {
  value?: InputMaybe<Scalars["String"]>;
};

/** update columns of table "sessionType" */
export enum SessionType_Update_Column {
  /** column name */
  Value = "value",
}

export type SessionType_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<SessionType_Set_Input>;
  /** filter the rows which have to be updated */
  where: SessionType_Bool_Exp;
};

/** columns and relationships of "sessions" */
export type Sessions = {
  __typename?: "sessions";
  created_at: Scalars["timestamptz"];
  expires: Scalars["timestamptz"];
  id: Scalars["uuid"];
  isValid: Scalars["Boolean"];
  lastActiveAt: Scalars["timestamptz"];
  /** An object relationship */
  sessionType?: Maybe<SessionType>;
  type?: Maybe<SessionType_Enum>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  /** An object relationship */
  user: Users;
  userId: Scalars["uuid"];
  userRole: Scalars["String"];
};

/** aggregated selection of "sessions" */
export type Sessions_Aggregate = {
  __typename?: "sessions_aggregate";
  aggregate?: Maybe<Sessions_Aggregate_Fields>;
  nodes: Array<Sessions>;
};

export type Sessions_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Sessions_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Sessions_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Sessions_Aggregate_Bool_Exp_Count>;
};

export type Sessions_Aggregate_Bool_Exp_Bool_And = {
  arguments: Sessions_Select_Column_Sessions_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<Sessions_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Sessions_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Sessions_Select_Column_Sessions_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<Sessions_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Sessions_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Sessions_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<Sessions_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "sessions" */
export type Sessions_Aggregate_Fields = {
  __typename?: "sessions_aggregate_fields";
  count: Scalars["Int"];
  max?: Maybe<Sessions_Max_Fields>;
  min?: Maybe<Sessions_Min_Fields>;
};

/** aggregate fields of "sessions" */
export type Sessions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Sessions_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "sessions" */
export type Sessions_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Sessions_Max_Order_By>;
  min?: InputMaybe<Sessions_Min_Order_By>;
};

/** input type for inserting array relation for remote table "sessions" */
export type Sessions_Arr_Rel_Insert_Input = {
  data: Array<Sessions_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Sessions_On_Conflict>;
};

/** Boolean expression to filter rows from the table "sessions". All fields are combined with a logical 'AND'. */
export type Sessions_Bool_Exp = {
  _and?: InputMaybe<Array<Sessions_Bool_Exp>>;
  _not?: InputMaybe<Sessions_Bool_Exp>;
  _or?: InputMaybe<Array<Sessions_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  expires?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isValid?: InputMaybe<Boolean_Comparison_Exp>;
  lastActiveAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  sessionType?: InputMaybe<SessionType_Bool_Exp>;
  type?: InputMaybe<SessionType_Enum_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
  userRole?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "sessions" */
export enum Sessions_Constraint {
  /** unique or primary key constraint on columns "id" */
  SessionsPkey = "sessions_pkey",
}

/** input type for inserting data into table "sessions" */
export type Sessions_Insert_Input = {
  created_at?: InputMaybe<Scalars["timestamptz"]>;
  expires?: InputMaybe<Scalars["timestamptz"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  isValid?: InputMaybe<Scalars["Boolean"]>;
  lastActiveAt?: InputMaybe<Scalars["timestamptz"]>;
  sessionType?: InputMaybe<SessionType_Obj_Rel_Insert_Input>;
  type?: InputMaybe<SessionType_Enum>;
  updated_at?: InputMaybe<Scalars["timestamptz"]>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars["uuid"]>;
  userRole?: InputMaybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Sessions_Max_Fields = {
  __typename?: "sessions_max_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  expires?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  lastActiveAt?: Maybe<Scalars["timestamptz"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  userId?: Maybe<Scalars["uuid"]>;
  userRole?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "sessions" */
export type Sessions_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  expires?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastActiveAt?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
  userRole?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Sessions_Min_Fields = {
  __typename?: "sessions_min_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  expires?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  lastActiveAt?: Maybe<Scalars["timestamptz"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  userId?: Maybe<Scalars["uuid"]>;
  userRole?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "sessions" */
export type Sessions_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  expires?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastActiveAt?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
  userRole?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "sessions" */
export type Sessions_Mutation_Response = {
  __typename?: "sessions_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Sessions>;
};

/** on_conflict condition type for table "sessions" */
export type Sessions_On_Conflict = {
  constraint: Sessions_Constraint;
  update_columns?: Array<Sessions_Update_Column>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};

/** Ordering options when selecting data from "sessions". */
export type Sessions_Order_By = {
  created_at?: InputMaybe<Order_By>;
  expires?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isValid?: InputMaybe<Order_By>;
  lastActiveAt?: InputMaybe<Order_By>;
  sessionType?: InputMaybe<SessionType_Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
  userRole?: InputMaybe<Order_By>;
};

/** primary key columns input for table: sessions */
export type Sessions_Pk_Columns_Input = {
  id: Scalars["uuid"];
};

/** select columns of table "sessions" */
export enum Sessions_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Expires = "expires",
  /** column name */
  Id = "id",
  /** column name */
  IsValid = "isValid",
  /** column name */
  LastActiveAt = "lastActiveAt",
  /** column name */
  Type = "type",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  UserId = "userId",
  /** column name */
  UserRole = "userRole",
}

/** select "sessions_aggregate_bool_exp_bool_and_arguments_columns" columns of table "sessions" */
export enum Sessions_Select_Column_Sessions_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsValid = "isValid",
}

/** select "sessions_aggregate_bool_exp_bool_or_arguments_columns" columns of table "sessions" */
export enum Sessions_Select_Column_Sessions_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsValid = "isValid",
}

/** input type for updating data in table "sessions" */
export type Sessions_Set_Input = {
  created_at?: InputMaybe<Scalars["timestamptz"]>;
  expires?: InputMaybe<Scalars["timestamptz"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  isValid?: InputMaybe<Scalars["Boolean"]>;
  lastActiveAt?: InputMaybe<Scalars["timestamptz"]>;
  type?: InputMaybe<SessionType_Enum>;
  updated_at?: InputMaybe<Scalars["timestamptz"]>;
  userId?: InputMaybe<Scalars["uuid"]>;
  userRole?: InputMaybe<Scalars["String"]>;
};

/** Streaming cursor of the table "sessions" */
export type Sessions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Sessions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Sessions_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars["timestamptz"]>;
  expires?: InputMaybe<Scalars["timestamptz"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  isValid?: InputMaybe<Scalars["Boolean"]>;
  lastActiveAt?: InputMaybe<Scalars["timestamptz"]>;
  type?: InputMaybe<SessionType_Enum>;
  updated_at?: InputMaybe<Scalars["timestamptz"]>;
  userId?: InputMaybe<Scalars["uuid"]>;
  userRole?: InputMaybe<Scalars["String"]>;
};

/** update columns of table "sessions" */
export enum Sessions_Update_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Expires = "expires",
  /** column name */
  Id = "id",
  /** column name */
  IsValid = "isValid",
  /** column name */
  LastActiveAt = "lastActiveAt",
  /** column name */
  Type = "type",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  UserId = "userId",
  /** column name */
  UserRole = "userRole",
}

export type Sessions_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Sessions_Set_Input>;
  /** filter the rows which have to be updated */
  where: Sessions_Bool_Exp;
};

export type SignUpWithCredentialsOutput = {
  __typename?: "signUpWithCredentialsOutput";
  sessionId: Scalars["uuid"];
};

export type Subscription_Root = {
  __typename?: "subscription_root";
  /** An array relationship */
  comments: Array<Comments>;
  /** An aggregate relationship */
  comments_aggregate: Comments_Aggregate;
  /** fetch data from the table: "comments" using primary key columns */
  comments_by_pk?: Maybe<Comments>;
  /** fetch data from the table in a streaming manner: "comments" */
  comments_stream: Array<Comments>;
  /** fetch data from the table: "issueCategory" */
  issueCategory: Array<IssueCategory>;
  /** fetch aggregated fields from the table: "issueCategory" */
  issueCategory_aggregate: IssueCategory_Aggregate;
  /** fetch data from the table: "issueCategory" using primary key columns */
  issueCategory_by_pk?: Maybe<IssueCategory>;
  /** fetch data from the table in a streaming manner: "issueCategory" */
  issueCategory_stream: Array<IssueCategory>;
  /** fetch data from the table: "issueFieldViewScale" */
  issueFieldViewScale: Array<IssueFieldViewScale>;
  /** fetch aggregated fields from the table: "issueFieldViewScale" */
  issueFieldViewScale_aggregate: IssueFieldViewScale_Aggregate;
  /** fetch data from the table: "issueFieldViewScale" using primary key columns */
  issueFieldViewScale_by_pk?: Maybe<IssueFieldViewScale>;
  /** fetch data from the table in a streaming manner: "issueFieldViewScale" */
  issueFieldViewScale_stream: Array<IssueFieldViewScale>;
  /** fetch data from the table: "issueStatus" */
  issueStatus: Array<IssueStatus>;
  /** fetch aggregated fields from the table: "issueStatus" */
  issueStatus_aggregate: IssueStatus_Aggregate;
  /** fetch data from the table: "issueStatus" using primary key columns */
  issueStatus_by_pk?: Maybe<IssueStatus>;
  /** fetch data from the table in a streaming manner: "issueStatus" */
  issueStatus_stream: Array<IssueStatus>;
  /** An array relationship */
  issues: Array<Issues>;
  /** An aggregate relationship */
  issues_aggregate: Issues_Aggregate;
  /** fetch data from the table: "issues" using primary key columns */
  issues_by_pk?: Maybe<Issues>;
  /** fetch data from the table in a streaming manner: "issues" */
  issues_stream: Array<Issues>;
  /** An array relationship */
  issues_users: Array<Issues_Users>;
  /** An aggregate relationship */
  issues_users_aggregate: Issues_Users_Aggregate;
  /** fetch data from the table: "issues_users" using primary key columns */
  issues_users_by_pk?: Maybe<Issues_Users>;
  /** fetch data from the table in a streaming manner: "issues_users" */
  issues_users_stream: Array<Issues_Users>;
  /** fetch data from the table: "language" */
  language: Array<Language>;
  /** fetch aggregated fields from the table: "language" */
  language_aggregate: Language_Aggregate;
  /** fetch data from the table: "language" using primary key columns */
  language_by_pk?: Maybe<Language>;
  /** fetch data from the table in a streaming manner: "language" */
  language_stream: Array<Language>;
  /** An array relationship */
  letterContents: Array<LetterContents>;
  /** An aggregate relationship */
  letterContents_aggregate: LetterContents_Aggregate;
  /** fetch data from the table: "letterContents" using primary key columns */
  letterContents_by_pk?: Maybe<LetterContents>;
  /** fetch data from the table in a streaming manner: "letterContents" */
  letterContents_stream: Array<LetterContents>;
  /** fetch data from the table: "letterStatus" */
  letterStatus: Array<LetterStatus>;
  /** fetch aggregated fields from the table: "letterStatus" */
  letterStatus_aggregate: LetterStatus_Aggregate;
  /** fetch data from the table: "letterStatus" using primary key columns */
  letterStatus_by_pk?: Maybe<LetterStatus>;
  /** fetch data from the table in a streaming manner: "letterStatus" */
  letterStatus_stream: Array<LetterStatus>;
  /** An array relationship */
  letters: Array<Letters>;
  /** An aggregate relationship */
  letters_aggregate: Letters_Aggregate;
  /** fetch data from the table: "letters" using primary key columns */
  letters_by_pk?: Maybe<Letters>;
  /** fetch data from the table in a streaming manner: "letters" */
  letters_stream: Array<Letters>;
  /** fetch data from the table: "representatives" */
  representatives: Array<Representatives>;
  /** fetch aggregated fields from the table: "representatives" */
  representatives_aggregate: Representatives_Aggregate;
  /** fetch data from the table: "representatives" using primary key columns */
  representatives_by_pk?: Maybe<Representatives>;
  /** fetch data from the table in a streaming manner: "representatives" */
  representatives_stream: Array<Representatives>;
  /** fetch data from the table: "sessionType" */
  sessionType: Array<SessionType>;
  /** fetch aggregated fields from the table: "sessionType" */
  sessionType_aggregate: SessionType_Aggregate;
  /** fetch data from the table: "sessionType" using primary key columns */
  sessionType_by_pk?: Maybe<SessionType>;
  /** fetch data from the table in a streaming manner: "sessionType" */
  sessionType_stream: Array<SessionType>;
  /** An array relationship */
  sessions: Array<Sessions>;
  /** An aggregate relationship */
  sessions_aggregate: Sessions_Aggregate;
  /** fetch data from the table: "sessions" using primary key columns */
  sessions_by_pk?: Maybe<Sessions>;
  /** fetch data from the table in a streaming manner: "sessions" */
  sessions_stream: Array<Sessions>;
  /** An array relationship */
  userIssueListEntries: Array<UserIssueListEntries>;
  /** An aggregate relationship */
  userIssueListEntries_aggregate: UserIssueListEntries_Aggregate;
  /** fetch data from the table: "userIssueListEntries" using primary key columns */
  userIssueListEntries_by_pk?: Maybe<UserIssueListEntries>;
  /** fetch data from the table in a streaming manner: "userIssueListEntries" */
  userIssueListEntries_stream: Array<UserIssueListEntries>;
  /** fetch data from the table: "userIssueListType" */
  userIssueListType: Array<UserIssueListType>;
  /** fetch aggregated fields from the table: "userIssueListType" */
  userIssueListType_aggregate: UserIssueListType_Aggregate;
  /** fetch data from the table: "userIssueListType" using primary key columns */
  userIssueListType_by_pk?: Maybe<UserIssueListType>;
  /** fetch data from the table in a streaming manner: "userIssueListType" */
  userIssueListType_stream: Array<UserIssueListType>;
  /** An array relationship */
  userIssueLists: Array<UserIssueLists>;
  /** An aggregate relationship */
  userIssueLists_aggregate: UserIssueLists_Aggregate;
  /** fetch data from the table: "userIssueLists" using primary key columns */
  userIssueLists_by_pk?: Maybe<UserIssueLists>;
  /** fetch data from the table in a streaming manner: "userIssueLists" */
  userIssueLists_stream: Array<UserIssueLists>;
  /** fetch data from the table: "userSource" */
  userSource: Array<UserSource>;
  /** fetch aggregated fields from the table: "userSource" */
  userSource_aggregate: UserSource_Aggregate;
  /** fetch data from the table: "userSource" using primary key columns */
  userSource_by_pk?: Maybe<UserSource>;
  /** fetch data from the table in a streaming manner: "userSource" */
  userSource_stream: Array<UserSource>;
  /** An array relationship */
  users: Array<Users>;
  /** An aggregate relationship */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
};

export type Subscription_RootCommentsArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};

export type Subscription_RootComments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};

export type Subscription_RootComments_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Subscription_RootComments_StreamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<Comments_Stream_Cursor_Input>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};

export type Subscription_RootIssueCategoryArgs = {
  distinct_on?: InputMaybe<Array<IssueCategory_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<IssueCategory_Order_By>>;
  where?: InputMaybe<IssueCategory_Bool_Exp>;
};

export type Subscription_RootIssueCategory_AggregateArgs = {
  distinct_on?: InputMaybe<Array<IssueCategory_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<IssueCategory_Order_By>>;
  where?: InputMaybe<IssueCategory_Bool_Exp>;
};

export type Subscription_RootIssueCategory_By_PkArgs = {
  value: Scalars["String"];
};

export type Subscription_RootIssueCategory_StreamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<IssueCategory_Stream_Cursor_Input>>;
  where?: InputMaybe<IssueCategory_Bool_Exp>;
};

export type Subscription_RootIssueFieldViewScaleArgs = {
  distinct_on?: InputMaybe<Array<IssueFieldViewScale_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<IssueFieldViewScale_Order_By>>;
  where?: InputMaybe<IssueFieldViewScale_Bool_Exp>;
};

export type Subscription_RootIssueFieldViewScale_AggregateArgs = {
  distinct_on?: InputMaybe<Array<IssueFieldViewScale_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<IssueFieldViewScale_Order_By>>;
  where?: InputMaybe<IssueFieldViewScale_Bool_Exp>;
};

export type Subscription_RootIssueFieldViewScale_By_PkArgs = {
  value: Scalars["String"];
};

export type Subscription_RootIssueFieldViewScale_StreamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<IssueFieldViewScale_Stream_Cursor_Input>>;
  where?: InputMaybe<IssueFieldViewScale_Bool_Exp>;
};

export type Subscription_RootIssueStatusArgs = {
  distinct_on?: InputMaybe<Array<IssueStatus_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<IssueStatus_Order_By>>;
  where?: InputMaybe<IssueStatus_Bool_Exp>;
};

export type Subscription_RootIssueStatus_AggregateArgs = {
  distinct_on?: InputMaybe<Array<IssueStatus_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<IssueStatus_Order_By>>;
  where?: InputMaybe<IssueStatus_Bool_Exp>;
};

export type Subscription_RootIssueStatus_By_PkArgs = {
  value: Scalars["String"];
};

export type Subscription_RootIssueStatus_StreamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<IssueStatus_Stream_Cursor_Input>>;
  where?: InputMaybe<IssueStatus_Bool_Exp>;
};

export type Subscription_RootIssuesArgs = {
  distinct_on?: InputMaybe<Array<Issues_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Issues_Order_By>>;
  where?: InputMaybe<Issues_Bool_Exp>;
};

export type Subscription_RootIssues_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Issues_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Issues_Order_By>>;
  where?: InputMaybe<Issues_Bool_Exp>;
};

export type Subscription_RootIssues_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Subscription_RootIssues_StreamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<Issues_Stream_Cursor_Input>>;
  where?: InputMaybe<Issues_Bool_Exp>;
};

export type Subscription_RootIssues_UsersArgs = {
  distinct_on?: InputMaybe<Array<Issues_Users_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Issues_Users_Order_By>>;
  where?: InputMaybe<Issues_Users_Bool_Exp>;
};

export type Subscription_RootIssues_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Issues_Users_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Issues_Users_Order_By>>;
  where?: InputMaybe<Issues_Users_Bool_Exp>;
};

export type Subscription_RootIssues_Users_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Subscription_RootIssues_Users_StreamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<Issues_Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Issues_Users_Bool_Exp>;
};

export type Subscription_RootLanguageArgs = {
  distinct_on?: InputMaybe<Array<Language_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Language_Order_By>>;
  where?: InputMaybe<Language_Bool_Exp>;
};

export type Subscription_RootLanguage_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Language_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Language_Order_By>>;
  where?: InputMaybe<Language_Bool_Exp>;
};

export type Subscription_RootLanguage_By_PkArgs = {
  value: Scalars["String"];
};

export type Subscription_RootLanguage_StreamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<Language_Stream_Cursor_Input>>;
  where?: InputMaybe<Language_Bool_Exp>;
};

export type Subscription_RootLetterContentsArgs = {
  distinct_on?: InputMaybe<Array<LetterContents_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<LetterContents_Order_By>>;
  where?: InputMaybe<LetterContents_Bool_Exp>;
};

export type Subscription_RootLetterContents_AggregateArgs = {
  distinct_on?: InputMaybe<Array<LetterContents_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<LetterContents_Order_By>>;
  where?: InputMaybe<LetterContents_Bool_Exp>;
};

export type Subscription_RootLetterContents_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Subscription_RootLetterContents_StreamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<LetterContents_Stream_Cursor_Input>>;
  where?: InputMaybe<LetterContents_Bool_Exp>;
};

export type Subscription_RootLetterStatusArgs = {
  distinct_on?: InputMaybe<Array<LetterStatus_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<LetterStatus_Order_By>>;
  where?: InputMaybe<LetterStatus_Bool_Exp>;
};

export type Subscription_RootLetterStatus_AggregateArgs = {
  distinct_on?: InputMaybe<Array<LetterStatus_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<LetterStatus_Order_By>>;
  where?: InputMaybe<LetterStatus_Bool_Exp>;
};

export type Subscription_RootLetterStatus_By_PkArgs = {
  value: Scalars["String"];
};

export type Subscription_RootLetterStatus_StreamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<LetterStatus_Stream_Cursor_Input>>;
  where?: InputMaybe<LetterStatus_Bool_Exp>;
};

export type Subscription_RootLettersArgs = {
  distinct_on?: InputMaybe<Array<Letters_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Letters_Order_By>>;
  where?: InputMaybe<Letters_Bool_Exp>;
};

export type Subscription_RootLetters_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Letters_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Letters_Order_By>>;
  where?: InputMaybe<Letters_Bool_Exp>;
};

export type Subscription_RootLetters_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Subscription_RootLetters_StreamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<Letters_Stream_Cursor_Input>>;
  where?: InputMaybe<Letters_Bool_Exp>;
};

export type Subscription_RootRepresentativesArgs = {
  distinct_on?: InputMaybe<Array<Representatives_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Representatives_Order_By>>;
  where?: InputMaybe<Representatives_Bool_Exp>;
};

export type Subscription_RootRepresentatives_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Representatives_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Representatives_Order_By>>;
  where?: InputMaybe<Representatives_Bool_Exp>;
};

export type Subscription_RootRepresentatives_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Subscription_RootRepresentatives_StreamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<Representatives_Stream_Cursor_Input>>;
  where?: InputMaybe<Representatives_Bool_Exp>;
};

export type Subscription_RootSessionTypeArgs = {
  distinct_on?: InputMaybe<Array<SessionType_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<SessionType_Order_By>>;
  where?: InputMaybe<SessionType_Bool_Exp>;
};

export type Subscription_RootSessionType_AggregateArgs = {
  distinct_on?: InputMaybe<Array<SessionType_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<SessionType_Order_By>>;
  where?: InputMaybe<SessionType_Bool_Exp>;
};

export type Subscription_RootSessionType_By_PkArgs = {
  value: Scalars["String"];
};

export type Subscription_RootSessionType_StreamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<SessionType_Stream_Cursor_Input>>;
  where?: InputMaybe<SessionType_Bool_Exp>;
};

export type Subscription_RootSessionsArgs = {
  distinct_on?: InputMaybe<Array<Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Sessions_Order_By>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};

export type Subscription_RootSessions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Sessions_Order_By>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};

export type Subscription_RootSessions_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Subscription_RootSessions_StreamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<Sessions_Stream_Cursor_Input>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};

export type Subscription_RootUserIssueListEntriesArgs = {
  distinct_on?: InputMaybe<Array<UserIssueListEntries_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<UserIssueListEntries_Order_By>>;
  where?: InputMaybe<UserIssueListEntries_Bool_Exp>;
};

export type Subscription_RootUserIssueListEntries_AggregateArgs = {
  distinct_on?: InputMaybe<Array<UserIssueListEntries_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<UserIssueListEntries_Order_By>>;
  where?: InputMaybe<UserIssueListEntries_Bool_Exp>;
};

export type Subscription_RootUserIssueListEntries_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Subscription_RootUserIssueListEntries_StreamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<UserIssueListEntries_Stream_Cursor_Input>>;
  where?: InputMaybe<UserIssueListEntries_Bool_Exp>;
};

export type Subscription_RootUserIssueListTypeArgs = {
  distinct_on?: InputMaybe<Array<UserIssueListType_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<UserIssueListType_Order_By>>;
  where?: InputMaybe<UserIssueListType_Bool_Exp>;
};

export type Subscription_RootUserIssueListType_AggregateArgs = {
  distinct_on?: InputMaybe<Array<UserIssueListType_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<UserIssueListType_Order_By>>;
  where?: InputMaybe<UserIssueListType_Bool_Exp>;
};

export type Subscription_RootUserIssueListType_By_PkArgs = {
  value: Scalars["String"];
};

export type Subscription_RootUserIssueListType_StreamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<UserIssueListType_Stream_Cursor_Input>>;
  where?: InputMaybe<UserIssueListType_Bool_Exp>;
};

export type Subscription_RootUserIssueListsArgs = {
  distinct_on?: InputMaybe<Array<UserIssueLists_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<UserIssueLists_Order_By>>;
  where?: InputMaybe<UserIssueLists_Bool_Exp>;
};

export type Subscription_RootUserIssueLists_AggregateArgs = {
  distinct_on?: InputMaybe<Array<UserIssueLists_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<UserIssueLists_Order_By>>;
  where?: InputMaybe<UserIssueLists_Bool_Exp>;
};

export type Subscription_RootUserIssueLists_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Subscription_RootUserIssueLists_StreamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<UserIssueLists_Stream_Cursor_Input>>;
  where?: InputMaybe<UserIssueLists_Bool_Exp>;
};

export type Subscription_RootUserSourceArgs = {
  distinct_on?: InputMaybe<Array<UserSource_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<UserSource_Order_By>>;
  where?: InputMaybe<UserSource_Bool_Exp>;
};

export type Subscription_RootUserSource_AggregateArgs = {
  distinct_on?: InputMaybe<Array<UserSource_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<UserSource_Order_By>>;
  where?: InputMaybe<UserSource_Bool_Exp>;
};

export type Subscription_RootUserSource_By_PkArgs = {
  value: Scalars["String"];
};

export type Subscription_RootUserSource_StreamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<UserSource_Stream_Cursor_Input>>;
  where?: InputMaybe<UserSource_Bool_Exp>;
};

export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["timestamptz"]>;
  _gt?: InputMaybe<Scalars["timestamptz"]>;
  _gte?: InputMaybe<Scalars["timestamptz"]>;
  _in?: InputMaybe<Array<Scalars["timestamptz"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["timestamptz"]>;
  _lte?: InputMaybe<Scalars["timestamptz"]>;
  _neq?: InputMaybe<Scalars["timestamptz"]>;
  _nin?: InputMaybe<Array<Scalars["timestamptz"]>>;
};

/** columns and relationships of "userIssueListEntries" */
export type UserIssueListEntries = {
  __typename?: "userIssueListEntries";
  id: Scalars["uuid"];
  /** An object relationship */
  issue: Issues;
  issueId: Scalars["uuid"];
  /** An object relationship */
  userIssueList: UserIssueLists;
  userIssueListId: Scalars["uuid"];
};

/** aggregated selection of "userIssueListEntries" */
export type UserIssueListEntries_Aggregate = {
  __typename?: "userIssueListEntries_aggregate";
  aggregate?: Maybe<UserIssueListEntries_Aggregate_Fields>;
  nodes: Array<UserIssueListEntries>;
};

export type UserIssueListEntries_Aggregate_Bool_Exp = {
  count?: InputMaybe<UserIssueListEntries_Aggregate_Bool_Exp_Count>;
};

export type UserIssueListEntries_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<UserIssueListEntries_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<UserIssueListEntries_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "userIssueListEntries" */
export type UserIssueListEntries_Aggregate_Fields = {
  __typename?: "userIssueListEntries_aggregate_fields";
  count: Scalars["Int"];
  max?: Maybe<UserIssueListEntries_Max_Fields>;
  min?: Maybe<UserIssueListEntries_Min_Fields>;
};

/** aggregate fields of "userIssueListEntries" */
export type UserIssueListEntries_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<UserIssueListEntries_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "userIssueListEntries" */
export type UserIssueListEntries_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<UserIssueListEntries_Max_Order_By>;
  min?: InputMaybe<UserIssueListEntries_Min_Order_By>;
};

/** input type for inserting array relation for remote table "userIssueListEntries" */
export type UserIssueListEntries_Arr_Rel_Insert_Input = {
  data: Array<UserIssueListEntries_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<UserIssueListEntries_On_Conflict>;
};

/** Boolean expression to filter rows from the table "userIssueListEntries". All fields are combined with a logical 'AND'. */
export type UserIssueListEntries_Bool_Exp = {
  _and?: InputMaybe<Array<UserIssueListEntries_Bool_Exp>>;
  _not?: InputMaybe<UserIssueListEntries_Bool_Exp>;
  _or?: InputMaybe<Array<UserIssueListEntries_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  issue?: InputMaybe<Issues_Bool_Exp>;
  issueId?: InputMaybe<Uuid_Comparison_Exp>;
  userIssueList?: InputMaybe<UserIssueLists_Bool_Exp>;
  userIssueListId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "userIssueListEntries" */
export enum UserIssueListEntries_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserIssueListEntriesPkey = "userIssueListEntries_pkey",
}

/** input type for inserting data into table "userIssueListEntries" */
export type UserIssueListEntries_Insert_Input = {
  id?: InputMaybe<Scalars["uuid"]>;
  issue?: InputMaybe<Issues_Obj_Rel_Insert_Input>;
  issueId?: InputMaybe<Scalars["uuid"]>;
  userIssueList?: InputMaybe<UserIssueLists_Obj_Rel_Insert_Input>;
  userIssueListId?: InputMaybe<Scalars["uuid"]>;
};

/** aggregate max on columns */
export type UserIssueListEntries_Max_Fields = {
  __typename?: "userIssueListEntries_max_fields";
  id?: Maybe<Scalars["uuid"]>;
  issueId?: Maybe<Scalars["uuid"]>;
  userIssueListId?: Maybe<Scalars["uuid"]>;
};

/** order by max() on columns of table "userIssueListEntries" */
export type UserIssueListEntries_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  issueId?: InputMaybe<Order_By>;
  userIssueListId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type UserIssueListEntries_Min_Fields = {
  __typename?: "userIssueListEntries_min_fields";
  id?: Maybe<Scalars["uuid"]>;
  issueId?: Maybe<Scalars["uuid"]>;
  userIssueListId?: Maybe<Scalars["uuid"]>;
};

/** order by min() on columns of table "userIssueListEntries" */
export type UserIssueListEntries_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  issueId?: InputMaybe<Order_By>;
  userIssueListId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "userIssueListEntries" */
export type UserIssueListEntries_Mutation_Response = {
  __typename?: "userIssueListEntries_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<UserIssueListEntries>;
};

/** on_conflict condition type for table "userIssueListEntries" */
export type UserIssueListEntries_On_Conflict = {
  constraint: UserIssueListEntries_Constraint;
  update_columns?: Array<UserIssueListEntries_Update_Column>;
  where?: InputMaybe<UserIssueListEntries_Bool_Exp>;
};

/** Ordering options when selecting data from "userIssueListEntries". */
export type UserIssueListEntries_Order_By = {
  id?: InputMaybe<Order_By>;
  issue?: InputMaybe<Issues_Order_By>;
  issueId?: InputMaybe<Order_By>;
  userIssueList?: InputMaybe<UserIssueLists_Order_By>;
  userIssueListId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: userIssueListEntries */
export type UserIssueListEntries_Pk_Columns_Input = {
  id: Scalars["uuid"];
};

/** select columns of table "userIssueListEntries" */
export enum UserIssueListEntries_Select_Column {
  /** column name */
  Id = "id",
  /** column name */
  IssueId = "issueId",
  /** column name */
  UserIssueListId = "userIssueListId",
}

/** input type for updating data in table "userIssueListEntries" */
export type UserIssueListEntries_Set_Input = {
  id?: InputMaybe<Scalars["uuid"]>;
  issueId?: InputMaybe<Scalars["uuid"]>;
  userIssueListId?: InputMaybe<Scalars["uuid"]>;
};

/** Streaming cursor of the table "userIssueListEntries" */
export type UserIssueListEntries_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: UserIssueListEntries_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type UserIssueListEntries_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars["uuid"]>;
  issueId?: InputMaybe<Scalars["uuid"]>;
  userIssueListId?: InputMaybe<Scalars["uuid"]>;
};

/** update columns of table "userIssueListEntries" */
export enum UserIssueListEntries_Update_Column {
  /** column name */
  Id = "id",
  /** column name */
  IssueId = "issueId",
  /** column name */
  UserIssueListId = "userIssueListId",
}

export type UserIssueListEntries_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<UserIssueListEntries_Set_Input>;
  /** filter the rows which have to be updated */
  where: UserIssueListEntries_Bool_Exp;
};

/** columns and relationships of "userIssueListType" */
export type UserIssueListType = {
  __typename?: "userIssueListType";
  /** An array relationship */
  userIssueLists: Array<UserIssueLists>;
  /** An aggregate relationship */
  userIssueLists_aggregate: UserIssueLists_Aggregate;
  value: Scalars["String"];
};

/** columns and relationships of "userIssueListType" */
export type UserIssueListTypeUserIssueListsArgs = {
  distinct_on?: InputMaybe<Array<UserIssueLists_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<UserIssueLists_Order_By>>;
  where?: InputMaybe<UserIssueLists_Bool_Exp>;
};

/** columns and relationships of "userIssueListType" */
export type UserIssueListTypeUserIssueLists_AggregateArgs = {
  distinct_on?: InputMaybe<Array<UserIssueLists_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<UserIssueLists_Order_By>>;
  where?: InputMaybe<UserIssueLists_Bool_Exp>;
};

/** aggregated selection of "userIssueListType" */
export type UserIssueListType_Aggregate = {
  __typename?: "userIssueListType_aggregate";
  aggregate?: Maybe<UserIssueListType_Aggregate_Fields>;
  nodes: Array<UserIssueListType>;
};

/** aggregate fields of "userIssueListType" */
export type UserIssueListType_Aggregate_Fields = {
  __typename?: "userIssueListType_aggregate_fields";
  count: Scalars["Int"];
  max?: Maybe<UserIssueListType_Max_Fields>;
  min?: Maybe<UserIssueListType_Min_Fields>;
};

/** aggregate fields of "userIssueListType" */
export type UserIssueListType_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<UserIssueListType_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** Boolean expression to filter rows from the table "userIssueListType". All fields are combined with a logical 'AND'. */
export type UserIssueListType_Bool_Exp = {
  _and?: InputMaybe<Array<UserIssueListType_Bool_Exp>>;
  _not?: InputMaybe<UserIssueListType_Bool_Exp>;
  _or?: InputMaybe<Array<UserIssueListType_Bool_Exp>>;
  userIssueLists?: InputMaybe<UserIssueLists_Bool_Exp>;
  userIssueLists_aggregate?: InputMaybe<UserIssueLists_Aggregate_Bool_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "userIssueListType" */
export enum UserIssueListType_Constraint {
  /** unique or primary key constraint on columns "value" */
  UserIssueListTypePkey = "userIssueListType_pkey",
}

export enum UserIssueListType_Enum {
  Hidden = "HIDDEN",
  Liked = "LIKED",
}

/** Boolean expression to compare columns of type "userIssueListType_enum". All fields are combined with logical 'AND'. */
export type UserIssueListType_Enum_Comparison_Exp = {
  _eq?: InputMaybe<UserIssueListType_Enum>;
  _in?: InputMaybe<Array<UserIssueListType_Enum>>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  _neq?: InputMaybe<UserIssueListType_Enum>;
  _nin?: InputMaybe<Array<UserIssueListType_Enum>>;
};

/** input type for inserting data into table "userIssueListType" */
export type UserIssueListType_Insert_Input = {
  userIssueLists?: InputMaybe<UserIssueLists_Arr_Rel_Insert_Input>;
  value?: InputMaybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type UserIssueListType_Max_Fields = {
  __typename?: "userIssueListType_max_fields";
  value?: Maybe<Scalars["String"]>;
};

/** aggregate min on columns */
export type UserIssueListType_Min_Fields = {
  __typename?: "userIssueListType_min_fields";
  value?: Maybe<Scalars["String"]>;
};

/** response of any mutation on the table "userIssueListType" */
export type UserIssueListType_Mutation_Response = {
  __typename?: "userIssueListType_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<UserIssueListType>;
};

/** input type for inserting object relation for remote table "userIssueListType" */
export type UserIssueListType_Obj_Rel_Insert_Input = {
  data: UserIssueListType_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<UserIssueListType_On_Conflict>;
};

/** on_conflict condition type for table "userIssueListType" */
export type UserIssueListType_On_Conflict = {
  constraint: UserIssueListType_Constraint;
  update_columns?: Array<UserIssueListType_Update_Column>;
  where?: InputMaybe<UserIssueListType_Bool_Exp>;
};

/** Ordering options when selecting data from "userIssueListType". */
export type UserIssueListType_Order_By = {
  userIssueLists_aggregate?: InputMaybe<UserIssueLists_Aggregate_Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: userIssueListType */
export type UserIssueListType_Pk_Columns_Input = {
  value: Scalars["String"];
};

/** select columns of table "userIssueListType" */
export enum UserIssueListType_Select_Column {
  /** column name */
  Value = "value",
}

/** input type for updating data in table "userIssueListType" */
export type UserIssueListType_Set_Input = {
  value?: InputMaybe<Scalars["String"]>;
};

/** Streaming cursor of the table "userIssueListType" */
export type UserIssueListType_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: UserIssueListType_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type UserIssueListType_Stream_Cursor_Value_Input = {
  value?: InputMaybe<Scalars["String"]>;
};

/** update columns of table "userIssueListType" */
export enum UserIssueListType_Update_Column {
  /** column name */
  Value = "value",
}

export type UserIssueListType_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<UserIssueListType_Set_Input>;
  /** filter the rows which have to be updated */
  where: UserIssueListType_Bool_Exp;
};

/** columns and relationships of "userIssueLists" */
export type UserIssueLists = {
  __typename?: "userIssueLists";
  id: Scalars["uuid"];
  type: UserIssueListType_Enum;
  /** An object relationship */
  user: Users;
  userId: Scalars["uuid"];
  /** An array relationship */
  userIssueListEntries: Array<UserIssueListEntries>;
  /** An aggregate relationship */
  userIssueListEntries_aggregate: UserIssueListEntries_Aggregate;
  /** An object relationship */
  userIssueListType: UserIssueListType;
};

/** columns and relationships of "userIssueLists" */
export type UserIssueListsUserIssueListEntriesArgs = {
  distinct_on?: InputMaybe<Array<UserIssueListEntries_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<UserIssueListEntries_Order_By>>;
  where?: InputMaybe<UserIssueListEntries_Bool_Exp>;
};

/** columns and relationships of "userIssueLists" */
export type UserIssueListsUserIssueListEntries_AggregateArgs = {
  distinct_on?: InputMaybe<Array<UserIssueListEntries_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<UserIssueListEntries_Order_By>>;
  where?: InputMaybe<UserIssueListEntries_Bool_Exp>;
};

/** aggregated selection of "userIssueLists" */
export type UserIssueLists_Aggregate = {
  __typename?: "userIssueLists_aggregate";
  aggregate?: Maybe<UserIssueLists_Aggregate_Fields>;
  nodes: Array<UserIssueLists>;
};

export type UserIssueLists_Aggregate_Bool_Exp = {
  count?: InputMaybe<UserIssueLists_Aggregate_Bool_Exp_Count>;
};

export type UserIssueLists_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<UserIssueLists_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<UserIssueLists_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "userIssueLists" */
export type UserIssueLists_Aggregate_Fields = {
  __typename?: "userIssueLists_aggregate_fields";
  count: Scalars["Int"];
  max?: Maybe<UserIssueLists_Max_Fields>;
  min?: Maybe<UserIssueLists_Min_Fields>;
};

/** aggregate fields of "userIssueLists" */
export type UserIssueLists_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<UserIssueLists_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "userIssueLists" */
export type UserIssueLists_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<UserIssueLists_Max_Order_By>;
  min?: InputMaybe<UserIssueLists_Min_Order_By>;
};

/** input type for inserting array relation for remote table "userIssueLists" */
export type UserIssueLists_Arr_Rel_Insert_Input = {
  data: Array<UserIssueLists_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<UserIssueLists_On_Conflict>;
};

/** Boolean expression to filter rows from the table "userIssueLists". All fields are combined with a logical 'AND'. */
export type UserIssueLists_Bool_Exp = {
  _and?: InputMaybe<Array<UserIssueLists_Bool_Exp>>;
  _not?: InputMaybe<UserIssueLists_Bool_Exp>;
  _or?: InputMaybe<Array<UserIssueLists_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  type?: InputMaybe<UserIssueListType_Enum_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
  userIssueListEntries?: InputMaybe<UserIssueListEntries_Bool_Exp>;
  userIssueListEntries_aggregate?: InputMaybe<UserIssueListEntries_Aggregate_Bool_Exp>;
  userIssueListType?: InputMaybe<UserIssueListType_Bool_Exp>;
};

/** unique or primary key constraints on table "userIssueLists" */
export enum UserIssueLists_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserIssueListsPkey = "userIssueLists_pkey",
}

/** input type for inserting data into table "userIssueLists" */
export type UserIssueLists_Insert_Input = {
  id?: InputMaybe<Scalars["uuid"]>;
  type?: InputMaybe<UserIssueListType_Enum>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars["uuid"]>;
  userIssueListEntries?: InputMaybe<UserIssueListEntries_Arr_Rel_Insert_Input>;
  userIssueListType?: InputMaybe<UserIssueListType_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type UserIssueLists_Max_Fields = {
  __typename?: "userIssueLists_max_fields";
  id?: Maybe<Scalars["uuid"]>;
  userId?: Maybe<Scalars["uuid"]>;
};

/** order by max() on columns of table "userIssueLists" */
export type UserIssueLists_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type UserIssueLists_Min_Fields = {
  __typename?: "userIssueLists_min_fields";
  id?: Maybe<Scalars["uuid"]>;
  userId?: Maybe<Scalars["uuid"]>;
};

/** order by min() on columns of table "userIssueLists" */
export type UserIssueLists_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "userIssueLists" */
export type UserIssueLists_Mutation_Response = {
  __typename?: "userIssueLists_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<UserIssueLists>;
};

/** input type for inserting object relation for remote table "userIssueLists" */
export type UserIssueLists_Obj_Rel_Insert_Input = {
  data: UserIssueLists_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<UserIssueLists_On_Conflict>;
};

/** on_conflict condition type for table "userIssueLists" */
export type UserIssueLists_On_Conflict = {
  constraint: UserIssueLists_Constraint;
  update_columns?: Array<UserIssueLists_Update_Column>;
  where?: InputMaybe<UserIssueLists_Bool_Exp>;
};

/** Ordering options when selecting data from "userIssueLists". */
export type UserIssueLists_Order_By = {
  id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
  userIssueListEntries_aggregate?: InputMaybe<UserIssueListEntries_Aggregate_Order_By>;
  userIssueListType?: InputMaybe<UserIssueListType_Order_By>;
};

/** primary key columns input for table: userIssueLists */
export type UserIssueLists_Pk_Columns_Input = {
  id: Scalars["uuid"];
};

/** select columns of table "userIssueLists" */
export enum UserIssueLists_Select_Column {
  /** column name */
  Id = "id",
  /** column name */
  Type = "type",
  /** column name */
  UserId = "userId",
}

/** input type for updating data in table "userIssueLists" */
export type UserIssueLists_Set_Input = {
  id?: InputMaybe<Scalars["uuid"]>;
  type?: InputMaybe<UserIssueListType_Enum>;
  userId?: InputMaybe<Scalars["uuid"]>;
};

/** Streaming cursor of the table "userIssueLists" */
export type UserIssueLists_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: UserIssueLists_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type UserIssueLists_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars["uuid"]>;
  type?: InputMaybe<UserIssueListType_Enum>;
  userId?: InputMaybe<Scalars["uuid"]>;
};

/** update columns of table "userIssueLists" */
export enum UserIssueLists_Update_Column {
  /** column name */
  Id = "id",
  /** column name */
  Type = "type",
  /** column name */
  UserId = "userId",
}

export type UserIssueLists_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<UserIssueLists_Set_Input>;
  /** filter the rows which have to be updated */
  where: UserIssueLists_Bool_Exp;
};

/** columns and relationships of "userSource" */
export type UserSource = {
  __typename?: "userSource";
  /** An array relationship */
  users: Array<Users>;
  /** An aggregate relationship */
  users_aggregate: Users_Aggregate;
  value: Scalars["String"];
};

/** columns and relationships of "userSource" */
export type UserSourceUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** columns and relationships of "userSource" */
export type UserSourceUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** aggregated selection of "userSource" */
export type UserSource_Aggregate = {
  __typename?: "userSource_aggregate";
  aggregate?: Maybe<UserSource_Aggregate_Fields>;
  nodes: Array<UserSource>;
};

/** aggregate fields of "userSource" */
export type UserSource_Aggregate_Fields = {
  __typename?: "userSource_aggregate_fields";
  count: Scalars["Int"];
  max?: Maybe<UserSource_Max_Fields>;
  min?: Maybe<UserSource_Min_Fields>;
};

/** aggregate fields of "userSource" */
export type UserSource_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<UserSource_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** Boolean expression to filter rows from the table "userSource". All fields are combined with a logical 'AND'. */
export type UserSource_Bool_Exp = {
  _and?: InputMaybe<Array<UserSource_Bool_Exp>>;
  _not?: InputMaybe<UserSource_Bool_Exp>;
  _or?: InputMaybe<Array<UserSource_Bool_Exp>>;
  users?: InputMaybe<Users_Bool_Exp>;
  users_aggregate?: InputMaybe<Users_Aggregate_Bool_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "userSource" */
export enum UserSource_Constraint {
  /** unique or primary key constraint on columns "value" */
  UserSourcePkey = "userSource_pkey",
}

export enum UserSource_Enum {
  SignupCredentials = "SIGNUP_CREDENTIALS",
  SignupGithub = "SIGNUP_GITHUB",
  SignupGoogle = "SIGNUP_GOOGLE",
  Unknown = "UNKNOWN",
}

/** Boolean expression to compare columns of type "userSource_enum". All fields are combined with logical 'AND'. */
export type UserSource_Enum_Comparison_Exp = {
  _eq?: InputMaybe<UserSource_Enum>;
  _in?: InputMaybe<Array<UserSource_Enum>>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  _neq?: InputMaybe<UserSource_Enum>;
  _nin?: InputMaybe<Array<UserSource_Enum>>;
};

/** input type for inserting data into table "userSource" */
export type UserSource_Insert_Input = {
  users?: InputMaybe<Users_Arr_Rel_Insert_Input>;
  value?: InputMaybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type UserSource_Max_Fields = {
  __typename?: "userSource_max_fields";
  value?: Maybe<Scalars["String"]>;
};

/** aggregate min on columns */
export type UserSource_Min_Fields = {
  __typename?: "userSource_min_fields";
  value?: Maybe<Scalars["String"]>;
};

/** response of any mutation on the table "userSource" */
export type UserSource_Mutation_Response = {
  __typename?: "userSource_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<UserSource>;
};

/** input type for inserting object relation for remote table "userSource" */
export type UserSource_Obj_Rel_Insert_Input = {
  data: UserSource_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<UserSource_On_Conflict>;
};

/** on_conflict condition type for table "userSource" */
export type UserSource_On_Conflict = {
  constraint: UserSource_Constraint;
  update_columns?: Array<UserSource_Update_Column>;
  where?: InputMaybe<UserSource_Bool_Exp>;
};

/** Ordering options when selecting data from "userSource". */
export type UserSource_Order_By = {
  users_aggregate?: InputMaybe<Users_Aggregate_Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: userSource */
export type UserSource_Pk_Columns_Input = {
  value: Scalars["String"];
};

/** select columns of table "userSource" */
export enum UserSource_Select_Column {
  /** column name */
  Value = "value",
}

/** input type for updating data in table "userSource" */
export type UserSource_Set_Input = {
  value?: InputMaybe<Scalars["String"]>;
};

/** Streaming cursor of the table "userSource" */
export type UserSource_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: UserSource_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type UserSource_Stream_Cursor_Value_Input = {
  value?: InputMaybe<Scalars["String"]>;
};

/** update columns of table "userSource" */
export enum UserSource_Update_Column {
  /** column name */
  Value = "value",
}

export type UserSource_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<UserSource_Set_Input>;
  /** filter the rows which have to be updated */
  where: UserSource_Bool_Exp;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: "users";
  accountType?: Maybe<Scalars["String"]>;
  /** An array relationship */
  comments: Array<Comments>;
  /** An aggregate relationship */
  comments_aggregate: Comments_Aggregate;
  created_at: Scalars["timestamptz"];
  email?: Maybe<Scalars["String"]>;
  emailConfirmationLastSentAt?: Maybe<Scalars["timestamptz"]>;
  emailConfirmationToken?: Maybe<Scalars["String"]>;
  emailVerified?: Maybe<Scalars["Boolean"]>;
  id: Scalars["uuid"];
  image?: Maybe<Scalars["String"]>;
  /** An array relationship */
  issues: Array<Issues>;
  /** An aggregate relationship */
  issues_aggregate: Issues_Aggregate;
  /** An array relationship */
  issues_users: Array<Issues_Users>;
  /** An aggregate relationship */
  issues_users_aggregate: Issues_Users_Aggregate;
  lastActiveAt?: Maybe<Scalars["timestamptz"]>;
  /** An array relationship */
  letters: Array<Letters>;
  /** An aggregate relationship */
  letters_aggregate: Letters_Aggregate;
  passwordHash?: Maybe<Scalars["String"]>;
  passwordResetLastSentAt?: Maybe<Scalars["timestamptz"]>;
  passwordResetToken?: Maybe<Scalars["String"]>;
  passwordResetTokenExpiresAt?: Maybe<Scalars["timestamptz"]>;
  /** An array relationship */
  sessions: Array<Sessions>;
  /** An aggregate relationship */
  sessions_aggregate: Sessions_Aggregate;
  source?: Maybe<UserSource_Enum>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  /** An array relationship */
  userIssueLists: Array<UserIssueLists>;
  /** An aggregate relationship */
  userIssueLists_aggregate: UserIssueLists_Aggregate;
  /** An object relationship */
  userSource?: Maybe<UserSource>;
  username?: Maybe<Scalars["String"]>;
  zipCode?: Maybe<Scalars["String"]>;
};

/** columns and relationships of "users" */
export type UsersCommentsArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersComments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersIssuesArgs = {
  distinct_on?: InputMaybe<Array<Issues_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Issues_Order_By>>;
  where?: InputMaybe<Issues_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersIssues_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Issues_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Issues_Order_By>>;
  where?: InputMaybe<Issues_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersIssues_UsersArgs = {
  distinct_on?: InputMaybe<Array<Issues_Users_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Issues_Users_Order_By>>;
  where?: InputMaybe<Issues_Users_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersIssues_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Issues_Users_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Issues_Users_Order_By>>;
  where?: InputMaybe<Issues_Users_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersLettersArgs = {
  distinct_on?: InputMaybe<Array<Letters_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Letters_Order_By>>;
  where?: InputMaybe<Letters_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersLetters_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Letters_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Letters_Order_By>>;
  where?: InputMaybe<Letters_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersSessionsArgs = {
  distinct_on?: InputMaybe<Array<Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Sessions_Order_By>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersSessions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Sessions_Order_By>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersUserIssueListsArgs = {
  distinct_on?: InputMaybe<Array<UserIssueLists_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<UserIssueLists_Order_By>>;
  where?: InputMaybe<UserIssueLists_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersUserIssueLists_AggregateArgs = {
  distinct_on?: InputMaybe<Array<UserIssueLists_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<UserIssueLists_Order_By>>;
  where?: InputMaybe<UserIssueLists_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: "users_aggregate";
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

export type Users_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Users_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Users_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Users_Aggregate_Bool_Exp_Count>;
};

export type Users_Aggregate_Bool_Exp_Bool_And = {
  arguments: Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<Users_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Users_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<Users_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Users_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<Users_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: "users_aggregate_fields";
  count: Scalars["Int"];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "users" */
export type Users_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Users_Max_Order_By>;
  min?: InputMaybe<Users_Min_Order_By>;
};

/** input type for inserting array relation for remote table "users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  accountType?: InputMaybe<String_Comparison_Exp>;
  comments?: InputMaybe<Comments_Bool_Exp>;
  comments_aggregate?: InputMaybe<Comments_Aggregate_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  emailConfirmationLastSentAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  emailConfirmationToken?: InputMaybe<String_Comparison_Exp>;
  emailVerified?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  issues?: InputMaybe<Issues_Bool_Exp>;
  issues_aggregate?: InputMaybe<Issues_Aggregate_Bool_Exp>;
  issues_users?: InputMaybe<Issues_Users_Bool_Exp>;
  issues_users_aggregate?: InputMaybe<Issues_Users_Aggregate_Bool_Exp>;
  lastActiveAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  letters?: InputMaybe<Letters_Bool_Exp>;
  letters_aggregate?: InputMaybe<Letters_Aggregate_Bool_Exp>;
  passwordHash?: InputMaybe<String_Comparison_Exp>;
  passwordResetLastSentAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  passwordResetToken?: InputMaybe<String_Comparison_Exp>;
  passwordResetTokenExpiresAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  sessions?: InputMaybe<Sessions_Bool_Exp>;
  sessions_aggregate?: InputMaybe<Sessions_Aggregate_Bool_Exp>;
  source?: InputMaybe<UserSource_Enum_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  userIssueLists?: InputMaybe<UserIssueLists_Bool_Exp>;
  userIssueLists_aggregate?: InputMaybe<UserIssueLists_Aggregate_Bool_Exp>;
  userSource?: InputMaybe<UserSource_Bool_Exp>;
  username?: InputMaybe<String_Comparison_Exp>;
  zipCode?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "email" */
  UsersEmailKey = "users_email_key",
  /** unique or primary key constraint on columns "id" */
  UsersPkey = "users_pkey",
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  accountType?: InputMaybe<Scalars["String"]>;
  comments?: InputMaybe<Comments_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars["timestamptz"]>;
  email?: InputMaybe<Scalars["String"]>;
  emailConfirmationLastSentAt?: InputMaybe<Scalars["timestamptz"]>;
  emailConfirmationToken?: InputMaybe<Scalars["String"]>;
  emailVerified?: InputMaybe<Scalars["Boolean"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  image?: InputMaybe<Scalars["String"]>;
  issues?: InputMaybe<Issues_Arr_Rel_Insert_Input>;
  issues_users?: InputMaybe<Issues_Users_Arr_Rel_Insert_Input>;
  lastActiveAt?: InputMaybe<Scalars["timestamptz"]>;
  letters?: InputMaybe<Letters_Arr_Rel_Insert_Input>;
  passwordHash?: InputMaybe<Scalars["String"]>;
  passwordResetLastSentAt?: InputMaybe<Scalars["timestamptz"]>;
  passwordResetToken?: InputMaybe<Scalars["String"]>;
  passwordResetTokenExpiresAt?: InputMaybe<Scalars["timestamptz"]>;
  sessions?: InputMaybe<Sessions_Arr_Rel_Insert_Input>;
  source?: InputMaybe<UserSource_Enum>;
  updated_at?: InputMaybe<Scalars["timestamptz"]>;
  userIssueLists?: InputMaybe<UserIssueLists_Arr_Rel_Insert_Input>;
  userSource?: InputMaybe<UserSource_Obj_Rel_Insert_Input>;
  username?: InputMaybe<Scalars["String"]>;
  zipCode?: InputMaybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: "users_max_fields";
  accountType?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  email?: Maybe<Scalars["String"]>;
  emailConfirmationLastSentAt?: Maybe<Scalars["timestamptz"]>;
  emailConfirmationToken?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["uuid"]>;
  image?: Maybe<Scalars["String"]>;
  lastActiveAt?: Maybe<Scalars["timestamptz"]>;
  passwordHash?: Maybe<Scalars["String"]>;
  passwordResetLastSentAt?: Maybe<Scalars["timestamptz"]>;
  passwordResetToken?: Maybe<Scalars["String"]>;
  passwordResetTokenExpiresAt?: Maybe<Scalars["timestamptz"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  username?: Maybe<Scalars["String"]>;
  zipCode?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  accountType?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  emailConfirmationLastSentAt?: InputMaybe<Order_By>;
  emailConfirmationToken?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  lastActiveAt?: InputMaybe<Order_By>;
  passwordHash?: InputMaybe<Order_By>;
  passwordResetLastSentAt?: InputMaybe<Order_By>;
  passwordResetToken?: InputMaybe<Order_By>;
  passwordResetTokenExpiresAt?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
  zipCode?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: "users_min_fields";
  accountType?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  email?: Maybe<Scalars["String"]>;
  emailConfirmationLastSentAt?: Maybe<Scalars["timestamptz"]>;
  emailConfirmationToken?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["uuid"]>;
  image?: Maybe<Scalars["String"]>;
  lastActiveAt?: Maybe<Scalars["timestamptz"]>;
  passwordHash?: Maybe<Scalars["String"]>;
  passwordResetLastSentAt?: Maybe<Scalars["timestamptz"]>;
  passwordResetToken?: Maybe<Scalars["String"]>;
  passwordResetTokenExpiresAt?: Maybe<Scalars["timestamptz"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  username?: Maybe<Scalars["String"]>;
  zipCode?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  accountType?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  emailConfirmationLastSentAt?: InputMaybe<Order_By>;
  emailConfirmationToken?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  lastActiveAt?: InputMaybe<Order_By>;
  passwordHash?: InputMaybe<Order_By>;
  passwordResetLastSentAt?: InputMaybe<Order_By>;
  passwordResetToken?: InputMaybe<Order_By>;
  passwordResetTokenExpiresAt?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
  zipCode?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: "users_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  accountType?: InputMaybe<Order_By>;
  comments_aggregate?: InputMaybe<Comments_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  emailConfirmationLastSentAt?: InputMaybe<Order_By>;
  emailConfirmationToken?: InputMaybe<Order_By>;
  emailVerified?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  issues_aggregate?: InputMaybe<Issues_Aggregate_Order_By>;
  issues_users_aggregate?: InputMaybe<Issues_Users_Aggregate_Order_By>;
  lastActiveAt?: InputMaybe<Order_By>;
  letters_aggregate?: InputMaybe<Letters_Aggregate_Order_By>;
  passwordHash?: InputMaybe<Order_By>;
  passwordResetLastSentAt?: InputMaybe<Order_By>;
  passwordResetToken?: InputMaybe<Order_By>;
  passwordResetTokenExpiresAt?: InputMaybe<Order_By>;
  sessions_aggregate?: InputMaybe<Sessions_Aggregate_Order_By>;
  source?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  userIssueLists_aggregate?: InputMaybe<UserIssueLists_Aggregate_Order_By>;
  userSource?: InputMaybe<UserSource_Order_By>;
  username?: InputMaybe<Order_By>;
  zipCode?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars["uuid"];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  AccountType = "accountType",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Email = "email",
  /** column name */
  EmailConfirmationLastSentAt = "emailConfirmationLastSentAt",
  /** column name */
  EmailConfirmationToken = "emailConfirmationToken",
  /** column name */
  EmailVerified = "emailVerified",
  /** column name */
  Id = "id",
  /** column name */
  Image = "image",
  /** column name */
  LastActiveAt = "lastActiveAt",
  /** column name */
  PasswordHash = "passwordHash",
  /** column name */
  PasswordResetLastSentAt = "passwordResetLastSentAt",
  /** column name */
  PasswordResetToken = "passwordResetToken",
  /** column name */
  PasswordResetTokenExpiresAt = "passwordResetTokenExpiresAt",
  /** column name */
  Source = "source",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  Username = "username",
  /** column name */
  ZipCode = "zipCode",
}

/** select "users_aggregate_bool_exp_bool_and_arguments_columns" columns of table "users" */
export enum Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  EmailVerified = "emailVerified",
}

/** select "users_aggregate_bool_exp_bool_or_arguments_columns" columns of table "users" */
export enum Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  EmailVerified = "emailVerified",
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  accountType?: InputMaybe<Scalars["String"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]>;
  email?: InputMaybe<Scalars["String"]>;
  emailConfirmationLastSentAt?: InputMaybe<Scalars["timestamptz"]>;
  emailConfirmationToken?: InputMaybe<Scalars["String"]>;
  emailVerified?: InputMaybe<Scalars["Boolean"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  image?: InputMaybe<Scalars["String"]>;
  lastActiveAt?: InputMaybe<Scalars["timestamptz"]>;
  passwordHash?: InputMaybe<Scalars["String"]>;
  passwordResetLastSentAt?: InputMaybe<Scalars["timestamptz"]>;
  passwordResetToken?: InputMaybe<Scalars["String"]>;
  passwordResetTokenExpiresAt?: InputMaybe<Scalars["timestamptz"]>;
  source?: InputMaybe<UserSource_Enum>;
  updated_at?: InputMaybe<Scalars["timestamptz"]>;
  username?: InputMaybe<Scalars["String"]>;
  zipCode?: InputMaybe<Scalars["String"]>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  accountType?: InputMaybe<Scalars["String"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]>;
  email?: InputMaybe<Scalars["String"]>;
  emailConfirmationLastSentAt?: InputMaybe<Scalars["timestamptz"]>;
  emailConfirmationToken?: InputMaybe<Scalars["String"]>;
  emailVerified?: InputMaybe<Scalars["Boolean"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  image?: InputMaybe<Scalars["String"]>;
  lastActiveAt?: InputMaybe<Scalars["timestamptz"]>;
  passwordHash?: InputMaybe<Scalars["String"]>;
  passwordResetLastSentAt?: InputMaybe<Scalars["timestamptz"]>;
  passwordResetToken?: InputMaybe<Scalars["String"]>;
  passwordResetTokenExpiresAt?: InputMaybe<Scalars["timestamptz"]>;
  source?: InputMaybe<UserSource_Enum>;
  updated_at?: InputMaybe<Scalars["timestamptz"]>;
  username?: InputMaybe<Scalars["String"]>;
  zipCode?: InputMaybe<Scalars["String"]>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  AccountType = "accountType",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Email = "email",
  /** column name */
  EmailConfirmationLastSentAt = "emailConfirmationLastSentAt",
  /** column name */
  EmailConfirmationToken = "emailConfirmationToken",
  /** column name */
  EmailVerified = "emailVerified",
  /** column name */
  Id = "id",
  /** column name */
  Image = "image",
  /** column name */
  LastActiveAt = "lastActiveAt",
  /** column name */
  PasswordHash = "passwordHash",
  /** column name */
  PasswordResetLastSentAt = "passwordResetLastSentAt",
  /** column name */
  PasswordResetToken = "passwordResetToken",
  /** column name */
  PasswordResetTokenExpiresAt = "passwordResetTokenExpiresAt",
  /** column name */
  Source = "source",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  Username = "username",
  /** column name */
  ZipCode = "zipCode",
}

export type Users_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["uuid"]>;
  _gt?: InputMaybe<Scalars["uuid"]>;
  _gte?: InputMaybe<Scalars["uuid"]>;
  _in?: InputMaybe<Array<Scalars["uuid"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["uuid"]>;
  _lte?: InputMaybe<Scalars["uuid"]>;
  _neq?: InputMaybe<Scalars["uuid"]>;
  _nin?: InputMaybe<Array<Scalars["uuid"]>>;
};

export type AddUserZipCodeMutationVariables = Exact<{
  sessionId: Scalars["uuid"];
  zipCode?: InputMaybe<Scalars["String"]>;
}>;

export type AddUserZipCodeMutation = {
  __typename?: "mutation_root";
  addUserZipCode?: { __typename?: "addUserZipCodeOutput"; userId: any } | null;
};

export type AuthenticateWithCredentialsMutationVariables = Exact<{
  email?: InputMaybe<Scalars["String"]>;
  password?: InputMaybe<Scalars["String"]>;
}>;

export type AuthenticateWithCredentialsMutation = {
  __typename?: "mutation_root";
  authenticationResult?: {
    __typename?: "authenticateWithCredentialsOutput";
    sessionId: any;
  } | null;
};

export type AuthenticateWithGoogleMutationVariables = Exact<{
  email?: InputMaybe<Scalars["String"]>;
  username?: InputMaybe<Scalars["String"]>;
}>;

export type AuthenticateWithGoogleMutation = {
  __typename?: "mutation_root";
  authenticationResult?: {
    __typename?: "AuthenticateWithGoogleOutput";
    sessionId: any;
  } | null;
};

export type ConfirmEmailMutationVariables = Exact<{
  emailConfirmationToken: Scalars["String"];
}>;

export type ConfirmEmailMutation = {
  __typename?: "mutation_root";
  result?: { __typename?: "confirmEmailOutput"; sessionId: any } | null;
};

export type CreateSessionForUserMutationVariables = Exact<{
  userId?: InputMaybe<Scalars["uuid"]>;
  userRole?: InputMaybe<Scalars["String"]>;
  expires?: InputMaybe<Scalars["timestamptz"]>;
  isValid?: InputMaybe<Scalars["Boolean"]>;
  type?: InputMaybe<SessionType_Enum>;
}>;

export type CreateSessionForUserMutation = {
  __typename?: "mutation_root";
  insert_sessions_one?: { __typename?: "sessions"; id: any } | null;
};

export type InvalidateSessionsForUserMutationVariables = Exact<{
  userId: Scalars["uuid"];
}>;

export type InvalidateSessionsForUserMutation = {
  __typename?: "mutation_root";
  update_sessions?: {
    __typename?: "sessions_mutation_response";
    affected_rows: number;
  } | null;
};

export type RefreshSessionMutationVariables = Exact<{
  sessionId: Scalars["uuid"];
  userId: Scalars["uuid"];
  expires: Scalars["timestamptz"];
  lastActiveAt: Scalars["timestamptz"];
}>;

export type RefreshSessionMutation = {
  __typename?: "mutation_root";
  update_sessions_by_pk?: { __typename?: "sessions"; id: any } | null;
  updateUserLastActiveAt?: {
    __typename?: "users_mutation_response";
    returning: Array<{ __typename?: "users"; id: any }>;
  } | null;
};

export type RequestPasswordResetMutationVariables = Exact<{
  email: Scalars["String"];
}>;

export type RequestPasswordResetMutation = {
  __typename?: "mutation_root";
  requestPasswordReset?: {
    __typename?: "requestPasswordResetOutput";
    email: string;
  } | null;
};

export type ResetPasswordMutationVariables = Exact<{
  passwordResetToken: Scalars["String"];
  newPassword: Scalars["String"];
}>;

export type ResetPasswordMutation = {
  __typename?: "mutation_root";
  result?: { __typename?: "resetPasswordOutput"; sessionId: any } | null;
};

export type SignUpWithCredentialsMutationVariables = Exact<{
  email: Scalars["String"];
  password: Scalars["String"];
  accountType: Scalars["String"];
  username: Scalars["String"];
}>;

export type SignUpWithCredentialsMutation = {
  __typename?: "mutation_root";
  signUpWithCredentials?: {
    __typename?: "signUpWithCredentialsOutput";
    sessionId: any;
  } | null;
};

export type ValidatePasswordResetTokenMutationVariables = Exact<{
  passwordResetToken: Scalars["String"];
}>;

export type ValidatePasswordResetTokenMutation = {
  __typename?: "mutation_root";
  validatePasswordResetToken?: {
    __typename?: "ValidatePasswordResetTokenOutput";
    userId: any;
  } | null;
};

export type UpdateLetterContentRepresentativeNameByIdMutationVariables = Exact<{
  contentId: Scalars["uuid"];
  content?: InputMaybe<Scalars["String"]>;
}>;

export type UpdateLetterContentRepresentativeNameByIdMutation = {
  __typename?: "mutation_root";
  update_letterContents_by_pk?: {
    __typename?: "letterContents";
    id: any;
  } | null;
};

export type DeleteIssueByIdMutationVariables = Exact<{
  id: Scalars["uuid"];
}>;

export type DeleteIssueByIdMutation = {
  __typename?: "mutation_root";
  delete_issues_by_pk?: { __typename?: "issues"; id: any } | null;
};

export type InsertUserMutationVariables = Exact<{
  user: Users_Insert_Input;
}>;

export type InsertUserMutation = {
  __typename?: "mutation_root";
  insert_users_one?: { __typename?: "users"; id: any } | null;
};

export type UpdateLetterStatusByIdMutationVariables = Exact<{
  id: Scalars["uuid"];
  status: LetterStatus_Enum;
}>;

export type UpdateLetterStatusByIdMutation = {
  __typename?: "mutation_root";
  update_letters_by_pk?: { __typename?: "letters"; id: any } | null;
};

export type UpdateUserByIdMutationVariables = Exact<{
  id: Scalars["uuid"];
  user: Users_Set_Input;
}>;

export type UpdateUserByIdMutation = {
  __typename?: "mutation_root";
  update_users_by_pk?: { __typename?: "users"; id: any } | null;
};

export type DeleteUserIssueListEntryByIdMutationVariables = Exact<{
  id: Scalars["uuid"];
}>;

export type DeleteUserIssueListEntryByIdMutation = {
  __typename?: "mutation_root";
  delete_userIssueListEntries_by_pk?: {
    __typename?: "userIssueListEntries";
    id: any;
    issue: {
      __typename?: "issues";
      id: any;
      userIssueListEntries_aggregate: {
        __typename?: "userIssueListEntries_aggregate";
        aggregate?: {
          __typename?: "userIssueListEntries_aggregate_fields";
          count: number;
        } | null;
      };
    };
  } | null;
};

export type DeleteUserIssueListLikeEntryByIdMutationVariables = Exact<{
  id: Scalars["uuid"];
}>;

export type DeleteUserIssueListLikeEntryByIdMutation = {
  __typename?: "mutation_root";
  delete_userIssueListEntries_by_pk?: {
    __typename?: "userIssueListEntries";
    id: any;
    issue: {
      __typename?: "issues";
      id: any;
      userIssueListEntries_aggregate: {
        __typename?: "userIssueListEntries_aggregate";
        aggregate?: {
          __typename?: "userIssueListEntries_aggregate_fields";
          count: number;
        } | null;
      };
    };
  } | null;
};

export type InsertUserIssueListMutationVariables = Exact<{
  type: UserIssueListType_Enum;
}>;

export type InsertUserIssueListMutation = {
  __typename?: "mutation_root";
  insert_userIssueLists_one?: { __typename?: "userIssueLists"; id: any } | null;
};

export type InsertUserIssueListEntryMutationVariables = Exact<{
  issueId: Scalars["uuid"];
  userIssueListId: Scalars["uuid"];
}>;

export type InsertUserIssueListEntryMutation = {
  __typename?: "mutation_root";
  insert_userIssueListEntries_one?: {
    __typename?: "userIssueListEntries";
    id: any;
    issue: {
      __typename?: "issues";
      id: any;
      userIssueListEntries_aggregate: {
        __typename?: "userIssueListEntries_aggregate";
        aggregate?: {
          __typename?: "userIssueListEntries_aggregate_fields";
          count: number;
        } | null;
      };
    };
  } | null;
};

export type InsertUserIssueListLikeEntryMutationVariables = Exact<{
  issueId: Scalars["uuid"];
  userIssueListId: Scalars["uuid"];
}>;

export type InsertUserIssueListLikeEntryMutation = {
  __typename?: "mutation_root";
  insert_userIssueListEntries_one?: {
    __typename?: "userIssueListEntries";
    id: any;
    issue: {
      __typename?: "issues";
      id: any;
      userIssueListEntries_aggregate: {
        __typename?: "userIssueListEntries_aggregate";
        aggregate?: {
          __typename?: "userIssueListEntries_aggregate_fields";
          count: number;
        } | null;
      };
    };
  } | null;
};

export type CategoryStepUpdateIssueMutationVariables = Exact<{
  id: Scalars["uuid"];
  category: IssueCategory_Enum;
  status: IssueStatus_Enum;
}>;

export type CategoryStepUpdateIssueMutation = {
  __typename?: "mutation_root";
  update_issues_by_pk?: { __typename?: "issues"; id: any } | null;
};

export type DeleteIssuesUsersMutationVariables = Exact<{
  id: Scalars["uuid"];
}>;

export type DeleteIssuesUsersMutation = {
  __typename?: "mutation_root";
  delete_issues_users_by_pk?: { __typename?: "issues_users"; id: any } | null;
};

export type InsertCommentsMutationVariables = Exact<{
  issueId: Scalars["uuid"];
  parentCommentId: Scalars["uuid"];
  content: Scalars["String"];
}>;

export type InsertCommentsMutation = {
  __typename?: "mutation_root";
  insert_comments_one?: { __typename?: "comments"; id: any } | null;
};

export type InsertIssuesUsersMutationVariables = Exact<{
  issueId: Scalars["uuid"];
}>;

export type InsertIssuesUsersMutation = {
  __typename?: "mutation_root";
  insert_issues_users_one?: { __typename?: "issues_users"; id: any } | null;
};

export type IssueDetailsStepUpdateIssueMutationVariables = Exact<{
  id: Scalars["uuid"];
  title: Scalars["String"];
  content: Scalars["String"];
  link: Scalars["String"];
  fieldViewScale: IssueFieldViewScale_Enum;
  status: IssueStatus_Enum;
}>;

export type IssueDetailsStepUpdateIssueMutation = {
  __typename?: "mutation_root";
  update_issues_by_pk?: { __typename?: "issues"; id: any } | null;
};

export type PrivacySelectionStepInsertIssueMutationVariables = Exact<{
  isPrivate?: InputMaybe<Scalars["Boolean"]>;
  status: IssueStatus_Enum;
}>;

export type PrivacySelectionStepInsertIssueMutation = {
  __typename?: "mutation_root";
  insert_issues_one?: { __typename?: "issues"; id: any } | null;
};

export type PrivacySelectionStepUpdateIssueMutationVariables = Exact<{
  id: Scalars["uuid"];
  isPrivate?: InputMaybe<Scalars["Boolean"]>;
  status: IssueStatus_Enum;
}>;

export type PrivacySelectionStepUpdateIssueMutation = {
  __typename?: "mutation_root";
  update_issues_by_pk?: { __typename?: "issues"; id: any } | null;
};

export type LetterGenerationStepUpdateLetterByIdMutationVariables = Exact<{
  id: Scalars["uuid"];
  status: LetterStatus_Enum;
  sendEmail?: InputMaybe<Scalars["Boolean"]>;
}>;

export type LetterGenerationStepUpdateLetterByIdMutation = {
  __typename?: "mutation_root";
  update_letters_by_pk?: { __typename?: "letters"; id: any } | null;
};

export type PersonalizeStepInsertLetterMutationVariables = Exact<{
  creatorName: Scalars["String"];
  creatorSurname: Scalars["String"];
  unit: Scalars["String"];
  street: Scalars["String"];
  city: Scalars["String"];
  state: Scalars["String"];
  status: LetterStatus_Enum;
  language?: InputMaybe<Language_Enum>;
}>;

export type PersonalizeStepInsertLetterMutation = {
  __typename?: "mutation_root";
  insert_letters_one?: { __typename?: "letters"; id: any } | null;
};

export type PersonalizeStepUpdateLetterByIdMutationVariables = Exact<{
  id: Scalars["uuid"];
  creatorName: Scalars["String"];
  creatorSurname: Scalars["String"];
  unit: Scalars["String"];
  street: Scalars["String"];
  city: Scalars["String"];
  state: Scalars["String"];
  status: LetterStatus_Enum;
  language?: InputMaybe<Language_Enum>;
}>;

export type PersonalizeStepUpdateLetterByIdMutation = {
  __typename?: "mutation_root";
  update_letters_by_pk?: { __typename?: "letters"; id: any } | null;
};

export type PurposeStepUpdateLetterByIdMutationVariables = Exact<{
  id: Scalars["uuid"];
  feelings: Scalars["String"];
  expectations: Scalars["String"];
  additionalInformation?: InputMaybe<Scalars["String"]>;
  status: LetterStatus_Enum;
}>;

export type PurposeStepUpdateLetterByIdMutation = {
  __typename?: "mutation_root";
  update_letters_by_pk?: { __typename?: "letters"; id: any } | null;
};

export type RepresentativeStepDeleteLetterContentsMutationVariables = Exact<{
  letterId: Scalars["uuid"];
  representativeIds: Array<Scalars["uuid"]> | Scalars["uuid"];
}>;

export type RepresentativeStepDeleteLetterContentsMutation = {
  __typename?: "mutation_root";
  delete_letterContents?: {
    __typename?: "letterContents_mutation_response";
    returning: Array<{ __typename?: "letterContents"; id: any }>;
  } | null;
};

export type RepresentativeStepInsertLetterContentsMutationVariables = Exact<{
  inputs: Array<LetterContents_Insert_Input> | LetterContents_Insert_Input;
}>;

export type RepresentativeStepInsertLetterContentsMutation = {
  __typename?: "mutation_root";
  insert_letterContents?: {
    __typename?: "letterContents_mutation_response";
    returning: Array<{ __typename?: "letterContents"; id: any }>;
  } | null;
};

export type SubjectStepUpdateLetterByIdMutationVariables = Exact<{
  id: Scalars["uuid"];
  topic: Scalars["String"];
  status: LetterStatus_Enum;
}>;

export type SubjectStepUpdateLetterByIdMutation = {
  __typename?: "mutation_root";
  update_letters_by_pk?: { __typename?: "letters"; id: any } | null;
};

export type UpdateInitialLetterContentsMutationVariables = Exact<{
  letterId: Scalars["uuid"];
  content?: InputMaybe<Scalars["String"]>;
}>;

export type UpdateInitialLetterContentsMutation = {
  __typename?: "mutation_root";
  update_letterContents?: {
    __typename?: "letterContents_mutation_response";
    returning: Array<{ __typename?: "letterContents"; id: any }>;
  } | null;
};

export type UpdateLetterContentByIdMutationVariables = Exact<{
  contentId: Scalars["uuid"];
  content?: InputMaybe<Scalars["String"]>;
}>;

export type UpdateLetterContentByIdMutation = {
  __typename?: "mutation_root";
  update_letterContents_by_pk?: {
    __typename?: "letterContents";
    id: any;
  } | null;
};

export type GetSessionByIdQueryVariables = Exact<{
  sessionId: Scalars["uuid"];
}>;

export type GetSessionByIdQuery = {
  __typename?: "query_root";
  sessions_by_pk?: {
    __typename?: "sessions";
    id: any;
    expires: string;
    userRole: string;
    type?: SessionType_Enum | null;
    userId: any;
    user: { __typename?: "users"; accountType?: string | null; id: any };
  } | null;
};

export type GetCommentsByIssueIdQueryVariables = Exact<{
  issueId: Scalars["uuid"];
  sortBy: Order_By;
  userId: Scalars["uuid"];
}>;

export type GetCommentsByIssueIdQuery = {
  __typename?: "query_root";
  issues_by_pk?: {
    __typename?: "issues";
    id: any;
    comments: Array<{
      __typename?: "comments";
      content: string;
      id: any;
      parentCommentId?: any | null;
      created_at: string;
      user: { __typename?: "users"; id: any; username?: string | null };
    }>;
    comments_aggregate: {
      __typename?: "comments_aggregate";
      aggregate?: {
        __typename?: "comments_aggregate_fields";
        count: number;
      } | null;
    };
    issues_users: Array<{ __typename?: "issues_users"; id: any }>;
  } | null;
};

export type GetCurrentUserByIdQueryVariables = Exact<{
  userId?: InputMaybe<Scalars["uuid"]>;
}>;

export type GetCurrentUserByIdQuery = {
  __typename?: "query_root";
  user: Array<{
    __typename?: "users";
    id: any;
    email?: string | null;
    username?: string | null;
    accountType?: string | null;
  }>;
};

export type GetIssueByIdQueryVariables = Exact<{
  issueId: Scalars["uuid"];
}>;

export type GetIssueByIdQuery = {
  __typename?: "query_root";
  issues_by_pk?: {
    __typename?: "issues";
    content?: string | null;
    id: any;
    isPrivate?: boolean | null;
    title?: string | null;
    creatorId: any;
    link?: string | null;
    fieldViewScale?: IssueFieldViewScale_Enum | null;
    category?: IssueCategory_Enum | null;
    status?: IssueStatus_Enum | null;
    created_at: string;
    user: { __typename?: "users"; username?: string | null };
    letters_aggregate: {
      __typename?: "letters_aggregate";
      aggregate?: {
        __typename?: "letters_aggregate_fields";
        count: number;
      } | null;
    };
    userIssueListEntries_aggregate: {
      __typename?: "userIssueListEntries_aggregate";
      aggregate?: {
        __typename?: "userIssueListEntries_aggregate_fields";
        count: number;
      } | null;
    };
  } | null;
};

export type GetLetterByIdQueryVariables = Exact<{
  letterId: Scalars["uuid"];
}>;

export type GetLetterByIdQuery = {
  __typename?: "query_root";
  letters_by_pk?: {
    __typename?: "letters";
    city: string;
    id: any;
    state: string;
    status: LetterStatus_Enum;
    street: string;
    unit: string;
    creatorName: string;
    creatorSurname: string;
    topic?: string | null;
    feelings?: string | null;
    expectations?: string | null;
    additionalInformation?: string | null;
    issueId?: any | null;
    sendEmail: boolean;
    language: Language_Enum;
    issue?: {
      __typename?: "issues";
      content?: string | null;
      isPrivate?: boolean | null;
      updated_at?: string | null;
      created_at: string;
      title?: string | null;
      id: any;
    } | null;
    letterContents: Array<{
      __typename?: "letterContents";
      content?: string | null;
      created_at: string;
      id: any;
      updated_at: string;
      representative: {
        __typename?: "representatives";
        id: any;
        firstname: string;
        lastname: string;
        middlename?: string | null;
      };
    }>;
  } | null;
};

export type GetLetterContentByIdQueryVariables = Exact<{
  contentId: Scalars["uuid"];
}>;

export type GetLetterContentByIdQuery = {
  __typename?: "query_root";
  letterContents_by_pk?: {
    __typename?: "letterContents";
    id: any;
    content?: string | null;
    representative: {
      __typename?: "representatives";
      firstname: string;
      lastname: string;
    };
  } | null;
};

export type GetRepresentativesQueryVariables = Exact<{ [key: string]: never }>;

export type GetRepresentativesQuery = {
  __typename?: "query_root";
  representatives: Array<{
    __typename?: "representatives";
    firstname: string;
    id: any;
    lastname: string;
    middlename?: string | null;
  }>;
};

export type GetUserQueryVariables = Exact<{
  where?: InputMaybe<Users_Bool_Exp>;
}>;

export type GetUserQuery = {
  __typename?: "query_root";
  user: Array<{
    __typename?: "users";
    id: any;
    username?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    image?: string | null;
    passwordHash?: string | null;
    passwordResetToken?: string | null;
    passwordResetTokenExpiresAt?: string | null;
    emailConfirmationToken?: string | null;
    emailConfirmationLastSentAt?: string | null;
    passwordResetLastSentAt?: string | null;
    accountType?: string | null;
    lastActiveAt?: string | null;
  }>;
};

export type GetUserByIdQueryVariables = Exact<{
  userId: Scalars["uuid"];
}>;

export type GetUserByIdQuery = {
  __typename?: "query_root";
  users_by_pk?: {
    __typename?: "users";
    id: any;
    username?: string | null;
    passwordHash?: string | null;
    emailVerified?: boolean | null;
    email?: string | null;
    emailConfirmationToken?: string | null;
    emailConfirmationLastSentAt?: string | null;
    passwordResetLastSentAt?: string | null;
    passwordResetTokenExpiresAt?: string | null;
    accountType?: string | null;
  } | null;
};

export type GetExploreIssuesQueryVariables = Exact<{
  limit: Scalars["Int"];
  offset: Scalars["Int"];
  where?: InputMaybe<Issues_Bool_Exp>;
}>;

export type GetExploreIssuesQuery = {
  __typename?: "query_root";
  issues: Array<{
    __typename?: "issues";
    category?: IssueCategory_Enum | null;
    content?: string | null;
    id: any;
    title?: string | null;
    created_at: string;
    status?: IssueStatus_Enum | null;
    creatorId: any;
    fieldViewScale?: IssueFieldViewScale_Enum | null;
    user: {
      __typename?: "users";
      email?: string | null;
      id: any;
      image?: string | null;
      username?: string | null;
    };
    issues_users: Array<{
      __typename?: "issues_users";
      id: any;
      user: {
        __typename?: "users";
        email?: string | null;
        username?: string | null;
        id: any;
        image?: string | null;
      };
    }>;
    userIssueListEntries_aggregate: {
      __typename?: "userIssueListEntries_aggregate";
      aggregate?: {
        __typename?: "userIssueListEntries_aggregate_fields";
        count: number;
      } | null;
    };
  }>;
};

export type GetExploreIssuesCountQueryVariables = Exact<{
  where?: InputMaybe<Issues_Bool_Exp>;
}>;

export type GetExploreIssuesCountQuery = {
  __typename?: "query_root";
  issues_aggregate: {
    __typename?: "issues_aggregate";
    aggregate?: {
      __typename?: "issues_aggregate_fields";
      count: number;
    } | null;
  };
};

export type GetUserIssueListQueryVariables = Exact<{
  userId: Scalars["uuid"];
  type: UserIssueListType_Enum;
}>;

export type GetUserIssueListQuery = {
  __typename?: "query_root";
  userIssueLists: Array<{
    __typename?: "userIssueLists";
    id: any;
    userIssueListEntries: Array<{
      __typename?: "userIssueListEntries";
      id: any;
      issueId: any;
    }>;
  }>;
};

export const AddUserZipCodeDocument = gql`
  mutation addUserZipCode($sessionId: uuid!, $zipCode: String) {
    addUserZipCode(sessionId: $sessionId, zipCode: $zipCode) {
      userId
    }
  }
`;
export type AddUserZipCodeMutationFn = Apollo.MutationFunction<
  AddUserZipCodeMutation,
  AddUserZipCodeMutationVariables
>;
export type AddUserZipCodeComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    AddUserZipCodeMutation,
    AddUserZipCodeMutationVariables
  >,
  "mutation"
>;

export const AddUserZipCodeComponent = (
  props: AddUserZipCodeComponentProps
) => (
  <ApolloReactComponents.Mutation<
    AddUserZipCodeMutation,
    AddUserZipCodeMutationVariables
  >
    mutation={AddUserZipCodeDocument}
    {...props}
  />
);

export type AddUserZipCodeProps<
  TChildProps = {},
  TDataName extends string = "mutate"
> = {
  [key in TDataName]: Apollo.MutationFunction<
    AddUserZipCodeMutation,
    AddUserZipCodeMutationVariables
  >;
} & TChildProps;
export function withAddUserZipCode<
  TProps,
  TChildProps = {},
  TDataName extends string = "mutate"
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    AddUserZipCodeMutation,
    AddUserZipCodeMutationVariables,
    AddUserZipCodeProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    AddUserZipCodeMutation,
    AddUserZipCodeMutationVariables,
    AddUserZipCodeProps<TChildProps, TDataName>
  >(AddUserZipCodeDocument, {
    alias: "addUserZipCode",
    ...operationOptions,
  });
}

/**
 * __useAddUserZipCodeMutation__
 *
 * To run a mutation, you first call `useAddUserZipCodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddUserZipCodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addUserZipCodeMutation, { data, loading, error }] = useAddUserZipCodeMutation({
 *   variables: {
 *      sessionId: // value for 'sessionId'
 *      zipCode: // value for 'zipCode'
 *   },
 * });
 */
export function useAddUserZipCodeMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddUserZipCodeMutation,
    AddUserZipCodeMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    AddUserZipCodeMutation,
    AddUserZipCodeMutationVariables
  >(AddUserZipCodeDocument, options);
}
export type AddUserZipCodeMutationHookResult = ReturnType<
  typeof useAddUserZipCodeMutation
>;
export type AddUserZipCodeMutationResult =
  Apollo.MutationResult<AddUserZipCodeMutation>;
export type AddUserZipCodeMutationOptions = Apollo.BaseMutationOptions<
  AddUserZipCodeMutation,
  AddUserZipCodeMutationVariables
>;
export const AuthenticateWithCredentialsDocument = gql`
  mutation authenticateWithCredentials(
    $email: String = ""
    $password: String = ""
  ) {
    authenticationResult: authenticateWithCredentials(
      email: $email
      password: $password
    ) {
      sessionId
    }
  }
`;
export type AuthenticateWithCredentialsMutationFn = Apollo.MutationFunction<
  AuthenticateWithCredentialsMutation,
  AuthenticateWithCredentialsMutationVariables
>;
export type AuthenticateWithCredentialsComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    AuthenticateWithCredentialsMutation,
    AuthenticateWithCredentialsMutationVariables
  >,
  "mutation"
>;

export const AuthenticateWithCredentialsComponent = (
  props: AuthenticateWithCredentialsComponentProps
) => (
  <ApolloReactComponents.Mutation<
    AuthenticateWithCredentialsMutation,
    AuthenticateWithCredentialsMutationVariables
  >
    mutation={AuthenticateWithCredentialsDocument}
    {...props}
  />
);

export type AuthenticateWithCredentialsProps<
  TChildProps = {},
  TDataName extends string = "mutate"
> = {
  [key in TDataName]: Apollo.MutationFunction<
    AuthenticateWithCredentialsMutation,
    AuthenticateWithCredentialsMutationVariables
  >;
} & TChildProps;
export function withAuthenticateWithCredentials<
  TProps,
  TChildProps = {},
  TDataName extends string = "mutate"
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    AuthenticateWithCredentialsMutation,
    AuthenticateWithCredentialsMutationVariables,
    AuthenticateWithCredentialsProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    AuthenticateWithCredentialsMutation,
    AuthenticateWithCredentialsMutationVariables,
    AuthenticateWithCredentialsProps<TChildProps, TDataName>
  >(AuthenticateWithCredentialsDocument, {
    alias: "authenticateWithCredentials",
    ...operationOptions,
  });
}

/**
 * __useAuthenticateWithCredentialsMutation__
 *
 * To run a mutation, you first call `useAuthenticateWithCredentialsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthenticateWithCredentialsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authenticateWithCredentialsMutation, { data, loading, error }] = useAuthenticateWithCredentialsMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useAuthenticateWithCredentialsMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AuthenticateWithCredentialsMutation,
    AuthenticateWithCredentialsMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    AuthenticateWithCredentialsMutation,
    AuthenticateWithCredentialsMutationVariables
  >(AuthenticateWithCredentialsDocument, options);
}
export type AuthenticateWithCredentialsMutationHookResult = ReturnType<
  typeof useAuthenticateWithCredentialsMutation
>;
export type AuthenticateWithCredentialsMutationResult =
  Apollo.MutationResult<AuthenticateWithCredentialsMutation>;
export type AuthenticateWithCredentialsMutationOptions =
  Apollo.BaseMutationOptions<
    AuthenticateWithCredentialsMutation,
    AuthenticateWithCredentialsMutationVariables
  >;
export const AuthenticateWithGoogleDocument = gql`
  mutation authenticateWithGoogle($email: String = "", $username: String = "") {
    authenticationResult: authenticateWithGoogle(
      email: $email
      username: $username
    ) {
      sessionId
    }
  }
`;
export type AuthenticateWithGoogleMutationFn = Apollo.MutationFunction<
  AuthenticateWithGoogleMutation,
  AuthenticateWithGoogleMutationVariables
>;
export type AuthenticateWithGoogleComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    AuthenticateWithGoogleMutation,
    AuthenticateWithGoogleMutationVariables
  >,
  "mutation"
>;

export const AuthenticateWithGoogleComponent = (
  props: AuthenticateWithGoogleComponentProps
) => (
  <ApolloReactComponents.Mutation<
    AuthenticateWithGoogleMutation,
    AuthenticateWithGoogleMutationVariables
  >
    mutation={AuthenticateWithGoogleDocument}
    {...props}
  />
);

export type AuthenticateWithGoogleProps<
  TChildProps = {},
  TDataName extends string = "mutate"
> = {
  [key in TDataName]: Apollo.MutationFunction<
    AuthenticateWithGoogleMutation,
    AuthenticateWithGoogleMutationVariables
  >;
} & TChildProps;
export function withAuthenticateWithGoogle<
  TProps,
  TChildProps = {},
  TDataName extends string = "mutate"
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    AuthenticateWithGoogleMutation,
    AuthenticateWithGoogleMutationVariables,
    AuthenticateWithGoogleProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    AuthenticateWithGoogleMutation,
    AuthenticateWithGoogleMutationVariables,
    AuthenticateWithGoogleProps<TChildProps, TDataName>
  >(AuthenticateWithGoogleDocument, {
    alias: "authenticateWithGoogle",
    ...operationOptions,
  });
}

/**
 * __useAuthenticateWithGoogleMutation__
 *
 * To run a mutation, you first call `useAuthenticateWithGoogleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthenticateWithGoogleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authenticateWithGoogleMutation, { data, loading, error }] = useAuthenticateWithGoogleMutation({
 *   variables: {
 *      email: // value for 'email'
 *      username: // value for 'username'
 *   },
 * });
 */
export function useAuthenticateWithGoogleMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AuthenticateWithGoogleMutation,
    AuthenticateWithGoogleMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    AuthenticateWithGoogleMutation,
    AuthenticateWithGoogleMutationVariables
  >(AuthenticateWithGoogleDocument, options);
}
export type AuthenticateWithGoogleMutationHookResult = ReturnType<
  typeof useAuthenticateWithGoogleMutation
>;
export type AuthenticateWithGoogleMutationResult =
  Apollo.MutationResult<AuthenticateWithGoogleMutation>;
export type AuthenticateWithGoogleMutationOptions = Apollo.BaseMutationOptions<
  AuthenticateWithGoogleMutation,
  AuthenticateWithGoogleMutationVariables
>;
export const ConfirmEmailDocument = gql`
  mutation confirmEmail($emailConfirmationToken: String!) {
    result: confirmEmail(emailConfirmationToken: $emailConfirmationToken) {
      sessionId
    }
  }
`;
export type ConfirmEmailMutationFn = Apollo.MutationFunction<
  ConfirmEmailMutation,
  ConfirmEmailMutationVariables
>;
export type ConfirmEmailComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    ConfirmEmailMutation,
    ConfirmEmailMutationVariables
  >,
  "mutation"
>;

export const ConfirmEmailComponent = (props: ConfirmEmailComponentProps) => (
  <ApolloReactComponents.Mutation<
    ConfirmEmailMutation,
    ConfirmEmailMutationVariables
  >
    mutation={ConfirmEmailDocument}
    {...props}
  />
);

export type ConfirmEmailProps<
  TChildProps = {},
  TDataName extends string = "mutate"
> = {
  [key in TDataName]: Apollo.MutationFunction<
    ConfirmEmailMutation,
    ConfirmEmailMutationVariables
  >;
} & TChildProps;
export function withConfirmEmail<
  TProps,
  TChildProps = {},
  TDataName extends string = "mutate"
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    ConfirmEmailMutation,
    ConfirmEmailMutationVariables,
    ConfirmEmailProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    ConfirmEmailMutation,
    ConfirmEmailMutationVariables,
    ConfirmEmailProps<TChildProps, TDataName>
  >(ConfirmEmailDocument, {
    alias: "confirmEmail",
    ...operationOptions,
  });
}

/**
 * __useConfirmEmailMutation__
 *
 * To run a mutation, you first call `useConfirmEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConfirmEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [confirmEmailMutation, { data, loading, error }] = useConfirmEmailMutation({
 *   variables: {
 *      emailConfirmationToken: // value for 'emailConfirmationToken'
 *   },
 * });
 */
export function useConfirmEmailMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ConfirmEmailMutation,
    ConfirmEmailMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ConfirmEmailMutation,
    ConfirmEmailMutationVariables
  >(ConfirmEmailDocument, options);
}
export type ConfirmEmailMutationHookResult = ReturnType<
  typeof useConfirmEmailMutation
>;
export type ConfirmEmailMutationResult =
  Apollo.MutationResult<ConfirmEmailMutation>;
export type ConfirmEmailMutationOptions = Apollo.BaseMutationOptions<
  ConfirmEmailMutation,
  ConfirmEmailMutationVariables
>;
export const CreateSessionForUserDocument = gql`
  mutation createSessionForUser(
    $userId: uuid = ""
    $userRole: String = ""
    $expires: timestamptz = ""
    $isValid: Boolean = true
    $type: sessionType_enum
  ) {
    insert_sessions_one(
      object: {
        userId: $userId
        userRole: $userRole
        expires: $expires
        isValid: $isValid
        type: $type
      }
    ) {
      id
    }
  }
`;
export type CreateSessionForUserMutationFn = Apollo.MutationFunction<
  CreateSessionForUserMutation,
  CreateSessionForUserMutationVariables
>;
export type CreateSessionForUserComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    CreateSessionForUserMutation,
    CreateSessionForUserMutationVariables
  >,
  "mutation"
>;

export const CreateSessionForUserComponent = (
  props: CreateSessionForUserComponentProps
) => (
  <ApolloReactComponents.Mutation<
    CreateSessionForUserMutation,
    CreateSessionForUserMutationVariables
  >
    mutation={CreateSessionForUserDocument}
    {...props}
  />
);

export type CreateSessionForUserProps<
  TChildProps = {},
  TDataName extends string = "mutate"
> = {
  [key in TDataName]: Apollo.MutationFunction<
    CreateSessionForUserMutation,
    CreateSessionForUserMutationVariables
  >;
} & TChildProps;
export function withCreateSessionForUser<
  TProps,
  TChildProps = {},
  TDataName extends string = "mutate"
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    CreateSessionForUserMutation,
    CreateSessionForUserMutationVariables,
    CreateSessionForUserProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    CreateSessionForUserMutation,
    CreateSessionForUserMutationVariables,
    CreateSessionForUserProps<TChildProps, TDataName>
  >(CreateSessionForUserDocument, {
    alias: "createSessionForUser",
    ...operationOptions,
  });
}

/**
 * __useCreateSessionForUserMutation__
 *
 * To run a mutation, you first call `useCreateSessionForUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSessionForUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSessionForUserMutation, { data, loading, error }] = useCreateSessionForUserMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      userRole: // value for 'userRole'
 *      expires: // value for 'expires'
 *      isValid: // value for 'isValid'
 *      type: // value for 'type'
 *   },
 * });
 */
export function useCreateSessionForUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateSessionForUserMutation,
    CreateSessionForUserMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateSessionForUserMutation,
    CreateSessionForUserMutationVariables
  >(CreateSessionForUserDocument, options);
}
export type CreateSessionForUserMutationHookResult = ReturnType<
  typeof useCreateSessionForUserMutation
>;
export type CreateSessionForUserMutationResult =
  Apollo.MutationResult<CreateSessionForUserMutation>;
export type CreateSessionForUserMutationOptions = Apollo.BaseMutationOptions<
  CreateSessionForUserMutation,
  CreateSessionForUserMutationVariables
>;
export const InvalidateSessionsForUserDocument = gql`
  mutation invalidateSessionsForUser($userId: uuid!) {
    update_sessions(
      where: { userId: { _eq: $userId } }
      _set: { isValid: false }
    ) {
      affected_rows
    }
  }
`;
export type InvalidateSessionsForUserMutationFn = Apollo.MutationFunction<
  InvalidateSessionsForUserMutation,
  InvalidateSessionsForUserMutationVariables
>;
export type InvalidateSessionsForUserComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    InvalidateSessionsForUserMutation,
    InvalidateSessionsForUserMutationVariables
  >,
  "mutation"
>;

export const InvalidateSessionsForUserComponent = (
  props: InvalidateSessionsForUserComponentProps
) => (
  <ApolloReactComponents.Mutation<
    InvalidateSessionsForUserMutation,
    InvalidateSessionsForUserMutationVariables
  >
    mutation={InvalidateSessionsForUserDocument}
    {...props}
  />
);

export type InvalidateSessionsForUserProps<
  TChildProps = {},
  TDataName extends string = "mutate"
> = {
  [key in TDataName]: Apollo.MutationFunction<
    InvalidateSessionsForUserMutation,
    InvalidateSessionsForUserMutationVariables
  >;
} & TChildProps;
export function withInvalidateSessionsForUser<
  TProps,
  TChildProps = {},
  TDataName extends string = "mutate"
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    InvalidateSessionsForUserMutation,
    InvalidateSessionsForUserMutationVariables,
    InvalidateSessionsForUserProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    InvalidateSessionsForUserMutation,
    InvalidateSessionsForUserMutationVariables,
    InvalidateSessionsForUserProps<TChildProps, TDataName>
  >(InvalidateSessionsForUserDocument, {
    alias: "invalidateSessionsForUser",
    ...operationOptions,
  });
}

/**
 * __useInvalidateSessionsForUserMutation__
 *
 * To run a mutation, you first call `useInvalidateSessionsForUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInvalidateSessionsForUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [invalidateSessionsForUserMutation, { data, loading, error }] = useInvalidateSessionsForUserMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useInvalidateSessionsForUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    InvalidateSessionsForUserMutation,
    InvalidateSessionsForUserMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    InvalidateSessionsForUserMutation,
    InvalidateSessionsForUserMutationVariables
  >(InvalidateSessionsForUserDocument, options);
}
export type InvalidateSessionsForUserMutationHookResult = ReturnType<
  typeof useInvalidateSessionsForUserMutation
>;
export type InvalidateSessionsForUserMutationResult =
  Apollo.MutationResult<InvalidateSessionsForUserMutation>;
export type InvalidateSessionsForUserMutationOptions =
  Apollo.BaseMutationOptions<
    InvalidateSessionsForUserMutation,
    InvalidateSessionsForUserMutationVariables
  >;
export const RefreshSessionDocument = gql`
  mutation refreshSession(
    $sessionId: uuid!
    $userId: uuid!
    $expires: timestamptz!
    $lastActiveAt: timestamptz!
  ) {
    update_sessions_by_pk(
      pk_columns: { id: $sessionId }
      _set: { lastActiveAt: $lastActiveAt, expires: $expires }
    ) {
      id
    }
    updateUserLastActiveAt: update_users(
      where: { id: { _eq: $userId } }
      _set: { lastActiveAt: $lastActiveAt }
    ) {
      returning {
        id
      }
    }
  }
`;
export type RefreshSessionMutationFn = Apollo.MutationFunction<
  RefreshSessionMutation,
  RefreshSessionMutationVariables
>;
export type RefreshSessionComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    RefreshSessionMutation,
    RefreshSessionMutationVariables
  >,
  "mutation"
>;

export const RefreshSessionComponent = (
  props: RefreshSessionComponentProps
) => (
  <ApolloReactComponents.Mutation<
    RefreshSessionMutation,
    RefreshSessionMutationVariables
  >
    mutation={RefreshSessionDocument}
    {...props}
  />
);

export type RefreshSessionProps<
  TChildProps = {},
  TDataName extends string = "mutate"
> = {
  [key in TDataName]: Apollo.MutationFunction<
    RefreshSessionMutation,
    RefreshSessionMutationVariables
  >;
} & TChildProps;
export function withRefreshSession<
  TProps,
  TChildProps = {},
  TDataName extends string = "mutate"
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    RefreshSessionMutation,
    RefreshSessionMutationVariables,
    RefreshSessionProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    RefreshSessionMutation,
    RefreshSessionMutationVariables,
    RefreshSessionProps<TChildProps, TDataName>
  >(RefreshSessionDocument, {
    alias: "refreshSession",
    ...operationOptions,
  });
}

/**
 * __useRefreshSessionMutation__
 *
 * To run a mutation, you first call `useRefreshSessionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRefreshSessionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [refreshSessionMutation, { data, loading, error }] = useRefreshSessionMutation({
 *   variables: {
 *      sessionId: // value for 'sessionId'
 *      userId: // value for 'userId'
 *      expires: // value for 'expires'
 *      lastActiveAt: // value for 'lastActiveAt'
 *   },
 * });
 */
export function useRefreshSessionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RefreshSessionMutation,
    RefreshSessionMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    RefreshSessionMutation,
    RefreshSessionMutationVariables
  >(RefreshSessionDocument, options);
}
export type RefreshSessionMutationHookResult = ReturnType<
  typeof useRefreshSessionMutation
>;
export type RefreshSessionMutationResult =
  Apollo.MutationResult<RefreshSessionMutation>;
export type RefreshSessionMutationOptions = Apollo.BaseMutationOptions<
  RefreshSessionMutation,
  RefreshSessionMutationVariables
>;
export const RequestPasswordResetDocument = gql`
  mutation requestPasswordReset($email: String!) {
    requestPasswordReset(email: $email) {
      email
    }
  }
`;
export type RequestPasswordResetMutationFn = Apollo.MutationFunction<
  RequestPasswordResetMutation,
  RequestPasswordResetMutationVariables
>;
export type RequestPasswordResetComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    RequestPasswordResetMutation,
    RequestPasswordResetMutationVariables
  >,
  "mutation"
>;

export const RequestPasswordResetComponent = (
  props: RequestPasswordResetComponentProps
) => (
  <ApolloReactComponents.Mutation<
    RequestPasswordResetMutation,
    RequestPasswordResetMutationVariables
  >
    mutation={RequestPasswordResetDocument}
    {...props}
  />
);

export type RequestPasswordResetProps<
  TChildProps = {},
  TDataName extends string = "mutate"
> = {
  [key in TDataName]: Apollo.MutationFunction<
    RequestPasswordResetMutation,
    RequestPasswordResetMutationVariables
  >;
} & TChildProps;
export function withRequestPasswordReset<
  TProps,
  TChildProps = {},
  TDataName extends string = "mutate"
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    RequestPasswordResetMutation,
    RequestPasswordResetMutationVariables,
    RequestPasswordResetProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    RequestPasswordResetMutation,
    RequestPasswordResetMutationVariables,
    RequestPasswordResetProps<TChildProps, TDataName>
  >(RequestPasswordResetDocument, {
    alias: "requestPasswordReset",
    ...operationOptions,
  });
}

/**
 * __useRequestPasswordResetMutation__
 *
 * To run a mutation, you first call `useRequestPasswordResetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRequestPasswordResetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [requestPasswordResetMutation, { data, loading, error }] = useRequestPasswordResetMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useRequestPasswordResetMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RequestPasswordResetMutation,
    RequestPasswordResetMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    RequestPasswordResetMutation,
    RequestPasswordResetMutationVariables
  >(RequestPasswordResetDocument, options);
}
export type RequestPasswordResetMutationHookResult = ReturnType<
  typeof useRequestPasswordResetMutation
>;
export type RequestPasswordResetMutationResult =
  Apollo.MutationResult<RequestPasswordResetMutation>;
export type RequestPasswordResetMutationOptions = Apollo.BaseMutationOptions<
  RequestPasswordResetMutation,
  RequestPasswordResetMutationVariables
>;
export const ResetPasswordDocument = gql`
  mutation resetPassword($passwordResetToken: String!, $newPassword: String!) {
    result: resetPassword(
      passwordResetToken: $passwordResetToken
      newPassword: $newPassword
    ) {
      sessionId
    }
  }
`;
export type ResetPasswordMutationFn = Apollo.MutationFunction<
  ResetPasswordMutation,
  ResetPasswordMutationVariables
>;
export type ResetPasswordComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    ResetPasswordMutation,
    ResetPasswordMutationVariables
  >,
  "mutation"
>;

export const ResetPasswordComponent = (props: ResetPasswordComponentProps) => (
  <ApolloReactComponents.Mutation<
    ResetPasswordMutation,
    ResetPasswordMutationVariables
  >
    mutation={ResetPasswordDocument}
    {...props}
  />
);

export type ResetPasswordProps<
  TChildProps = {},
  TDataName extends string = "mutate"
> = {
  [key in TDataName]: Apollo.MutationFunction<
    ResetPasswordMutation,
    ResetPasswordMutationVariables
  >;
} & TChildProps;
export function withResetPassword<
  TProps,
  TChildProps = {},
  TDataName extends string = "mutate"
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    ResetPasswordMutation,
    ResetPasswordMutationVariables,
    ResetPasswordProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    ResetPasswordMutation,
    ResetPasswordMutationVariables,
    ResetPasswordProps<TChildProps, TDataName>
  >(ResetPasswordDocument, {
    alias: "resetPassword",
    ...operationOptions,
  });
}

/**
 * __useResetPasswordMutation__
 *
 * To run a mutation, you first call `useResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordMutation, { data, loading, error }] = useResetPasswordMutation({
 *   variables: {
 *      passwordResetToken: // value for 'passwordResetToken'
 *      newPassword: // value for 'newPassword'
 *   },
 * });
 */
export function useResetPasswordMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ResetPasswordMutation,
    ResetPasswordMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ResetPasswordMutation,
    ResetPasswordMutationVariables
  >(ResetPasswordDocument, options);
}
export type ResetPasswordMutationHookResult = ReturnType<
  typeof useResetPasswordMutation
>;
export type ResetPasswordMutationResult =
  Apollo.MutationResult<ResetPasswordMutation>;
export type ResetPasswordMutationOptions = Apollo.BaseMutationOptions<
  ResetPasswordMutation,
  ResetPasswordMutationVariables
>;
export const SignUpWithCredentialsDocument = gql`
  mutation signUpWithCredentials(
    $email: String!
    $password: String!
    $accountType: String!
    $username: String!
  ) {
    signUpWithCredentials(
      email: $email
      password: $password
      accountType: $accountType
      username: $username
    ) {
      sessionId
    }
  }
`;
export type SignUpWithCredentialsMutationFn = Apollo.MutationFunction<
  SignUpWithCredentialsMutation,
  SignUpWithCredentialsMutationVariables
>;
export type SignUpWithCredentialsComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    SignUpWithCredentialsMutation,
    SignUpWithCredentialsMutationVariables
  >,
  "mutation"
>;

export const SignUpWithCredentialsComponent = (
  props: SignUpWithCredentialsComponentProps
) => (
  <ApolloReactComponents.Mutation<
    SignUpWithCredentialsMutation,
    SignUpWithCredentialsMutationVariables
  >
    mutation={SignUpWithCredentialsDocument}
    {...props}
  />
);

export type SignUpWithCredentialsProps<
  TChildProps = {},
  TDataName extends string = "mutate"
> = {
  [key in TDataName]: Apollo.MutationFunction<
    SignUpWithCredentialsMutation,
    SignUpWithCredentialsMutationVariables
  >;
} & TChildProps;
export function withSignUpWithCredentials<
  TProps,
  TChildProps = {},
  TDataName extends string = "mutate"
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    SignUpWithCredentialsMutation,
    SignUpWithCredentialsMutationVariables,
    SignUpWithCredentialsProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    SignUpWithCredentialsMutation,
    SignUpWithCredentialsMutationVariables,
    SignUpWithCredentialsProps<TChildProps, TDataName>
  >(SignUpWithCredentialsDocument, {
    alias: "signUpWithCredentials",
    ...operationOptions,
  });
}

/**
 * __useSignUpWithCredentialsMutation__
 *
 * To run a mutation, you first call `useSignUpWithCredentialsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpWithCredentialsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpWithCredentialsMutation, { data, loading, error }] = useSignUpWithCredentialsMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      accountType: // value for 'accountType'
 *      username: // value for 'username'
 *   },
 * });
 */
export function useSignUpWithCredentialsMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SignUpWithCredentialsMutation,
    SignUpWithCredentialsMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    SignUpWithCredentialsMutation,
    SignUpWithCredentialsMutationVariables
  >(SignUpWithCredentialsDocument, options);
}
export type SignUpWithCredentialsMutationHookResult = ReturnType<
  typeof useSignUpWithCredentialsMutation
>;
export type SignUpWithCredentialsMutationResult =
  Apollo.MutationResult<SignUpWithCredentialsMutation>;
export type SignUpWithCredentialsMutationOptions = Apollo.BaseMutationOptions<
  SignUpWithCredentialsMutation,
  SignUpWithCredentialsMutationVariables
>;
export const ValidatePasswordResetTokenDocument = gql`
  mutation validatePasswordResetToken($passwordResetToken: String!) {
    validatePasswordResetToken(passwordResetToken: $passwordResetToken) {
      userId
    }
  }
`;
export type ValidatePasswordResetTokenMutationFn = Apollo.MutationFunction<
  ValidatePasswordResetTokenMutation,
  ValidatePasswordResetTokenMutationVariables
>;
export type ValidatePasswordResetTokenComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    ValidatePasswordResetTokenMutation,
    ValidatePasswordResetTokenMutationVariables
  >,
  "mutation"
>;

export const ValidatePasswordResetTokenComponent = (
  props: ValidatePasswordResetTokenComponentProps
) => (
  <ApolloReactComponents.Mutation<
    ValidatePasswordResetTokenMutation,
    ValidatePasswordResetTokenMutationVariables
  >
    mutation={ValidatePasswordResetTokenDocument}
    {...props}
  />
);

export type ValidatePasswordResetTokenProps<
  TChildProps = {},
  TDataName extends string = "mutate"
> = {
  [key in TDataName]: Apollo.MutationFunction<
    ValidatePasswordResetTokenMutation,
    ValidatePasswordResetTokenMutationVariables
  >;
} & TChildProps;
export function withValidatePasswordResetToken<
  TProps,
  TChildProps = {},
  TDataName extends string = "mutate"
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    ValidatePasswordResetTokenMutation,
    ValidatePasswordResetTokenMutationVariables,
    ValidatePasswordResetTokenProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    ValidatePasswordResetTokenMutation,
    ValidatePasswordResetTokenMutationVariables,
    ValidatePasswordResetTokenProps<TChildProps, TDataName>
  >(ValidatePasswordResetTokenDocument, {
    alias: "validatePasswordResetToken",
    ...operationOptions,
  });
}

/**
 * __useValidatePasswordResetTokenMutation__
 *
 * To run a mutation, you first call `useValidatePasswordResetTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useValidatePasswordResetTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [validatePasswordResetTokenMutation, { data, loading, error }] = useValidatePasswordResetTokenMutation({
 *   variables: {
 *      passwordResetToken: // value for 'passwordResetToken'
 *   },
 * });
 */
export function useValidatePasswordResetTokenMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ValidatePasswordResetTokenMutation,
    ValidatePasswordResetTokenMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ValidatePasswordResetTokenMutation,
    ValidatePasswordResetTokenMutationVariables
  >(ValidatePasswordResetTokenDocument, options);
}
export type ValidatePasswordResetTokenMutationHookResult = ReturnType<
  typeof useValidatePasswordResetTokenMutation
>;
export type ValidatePasswordResetTokenMutationResult =
  Apollo.MutationResult<ValidatePasswordResetTokenMutation>;
export type ValidatePasswordResetTokenMutationOptions =
  Apollo.BaseMutationOptions<
    ValidatePasswordResetTokenMutation,
    ValidatePasswordResetTokenMutationVariables
  >;
export const UpdateLetterContentRepresentativeNameByIdDocument = gql`
  mutation updateLetterContentRepresentativeNameById(
    $contentId: uuid!
    $content: String
  ) {
    update_letterContents_by_pk(
      pk_columns: { id: $contentId }
      _set: { content: $content }
    ) {
      id
    }
  }
`;
export type UpdateLetterContentRepresentativeNameByIdMutationFn =
  Apollo.MutationFunction<
    UpdateLetterContentRepresentativeNameByIdMutation,
    UpdateLetterContentRepresentativeNameByIdMutationVariables
  >;
export type UpdateLetterContentRepresentativeNameByIdComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    UpdateLetterContentRepresentativeNameByIdMutation,
    UpdateLetterContentRepresentativeNameByIdMutationVariables
  >,
  "mutation"
>;

export const UpdateLetterContentRepresentativeNameByIdComponent = (
  props: UpdateLetterContentRepresentativeNameByIdComponentProps
) => (
  <ApolloReactComponents.Mutation<
    UpdateLetterContentRepresentativeNameByIdMutation,
    UpdateLetterContentRepresentativeNameByIdMutationVariables
  >
    mutation={UpdateLetterContentRepresentativeNameByIdDocument}
    {...props}
  />
);

export type UpdateLetterContentRepresentativeNameByIdProps<
  TChildProps = {},
  TDataName extends string = "mutate"
> = {
  [key in TDataName]: Apollo.MutationFunction<
    UpdateLetterContentRepresentativeNameByIdMutation,
    UpdateLetterContentRepresentativeNameByIdMutationVariables
  >;
} & TChildProps;
export function withUpdateLetterContentRepresentativeNameById<
  TProps,
  TChildProps = {},
  TDataName extends string = "mutate"
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    UpdateLetterContentRepresentativeNameByIdMutation,
    UpdateLetterContentRepresentativeNameByIdMutationVariables,
    UpdateLetterContentRepresentativeNameByIdProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    UpdateLetterContentRepresentativeNameByIdMutation,
    UpdateLetterContentRepresentativeNameByIdMutationVariables,
    UpdateLetterContentRepresentativeNameByIdProps<TChildProps, TDataName>
  >(UpdateLetterContentRepresentativeNameByIdDocument, {
    alias: "updateLetterContentRepresentativeNameById",
    ...operationOptions,
  });
}

/**
 * __useUpdateLetterContentRepresentativeNameByIdMutation__
 *
 * To run a mutation, you first call `useUpdateLetterContentRepresentativeNameByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateLetterContentRepresentativeNameByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateLetterContentRepresentativeNameByIdMutation, { data, loading, error }] = useUpdateLetterContentRepresentativeNameByIdMutation({
 *   variables: {
 *      contentId: // value for 'contentId'
 *      content: // value for 'content'
 *   },
 * });
 */
export function useUpdateLetterContentRepresentativeNameByIdMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateLetterContentRepresentativeNameByIdMutation,
    UpdateLetterContentRepresentativeNameByIdMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateLetterContentRepresentativeNameByIdMutation,
    UpdateLetterContentRepresentativeNameByIdMutationVariables
  >(UpdateLetterContentRepresentativeNameByIdDocument, options);
}
export type UpdateLetterContentRepresentativeNameByIdMutationHookResult =
  ReturnType<typeof useUpdateLetterContentRepresentativeNameByIdMutation>;
export type UpdateLetterContentRepresentativeNameByIdMutationResult =
  Apollo.MutationResult<UpdateLetterContentRepresentativeNameByIdMutation>;
export type UpdateLetterContentRepresentativeNameByIdMutationOptions =
  Apollo.BaseMutationOptions<
    UpdateLetterContentRepresentativeNameByIdMutation,
    UpdateLetterContentRepresentativeNameByIdMutationVariables
  >;
export const DeleteIssueByIdDocument = gql`
  mutation deleteIssueById($id: uuid!) {
    delete_issues_by_pk(id: $id) {
      id
    }
  }
`;
export type DeleteIssueByIdMutationFn = Apollo.MutationFunction<
  DeleteIssueByIdMutation,
  DeleteIssueByIdMutationVariables
>;
export type DeleteIssueByIdComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    DeleteIssueByIdMutation,
    DeleteIssueByIdMutationVariables
  >,
  "mutation"
>;

export const DeleteIssueByIdComponent = (
  props: DeleteIssueByIdComponentProps
) => (
  <ApolloReactComponents.Mutation<
    DeleteIssueByIdMutation,
    DeleteIssueByIdMutationVariables
  >
    mutation={DeleteIssueByIdDocument}
    {...props}
  />
);

export type DeleteIssueByIdProps<
  TChildProps = {},
  TDataName extends string = "mutate"
> = {
  [key in TDataName]: Apollo.MutationFunction<
    DeleteIssueByIdMutation,
    DeleteIssueByIdMutationVariables
  >;
} & TChildProps;
export function withDeleteIssueById<
  TProps,
  TChildProps = {},
  TDataName extends string = "mutate"
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    DeleteIssueByIdMutation,
    DeleteIssueByIdMutationVariables,
    DeleteIssueByIdProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    DeleteIssueByIdMutation,
    DeleteIssueByIdMutationVariables,
    DeleteIssueByIdProps<TChildProps, TDataName>
  >(DeleteIssueByIdDocument, {
    alias: "deleteIssueById",
    ...operationOptions,
  });
}

/**
 * __useDeleteIssueByIdMutation__
 *
 * To run a mutation, you first call `useDeleteIssueByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteIssueByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteIssueByIdMutation, { data, loading, error }] = useDeleteIssueByIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteIssueByIdMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteIssueByIdMutation,
    DeleteIssueByIdMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteIssueByIdMutation,
    DeleteIssueByIdMutationVariables
  >(DeleteIssueByIdDocument, options);
}
export type DeleteIssueByIdMutationHookResult = ReturnType<
  typeof useDeleteIssueByIdMutation
>;
export type DeleteIssueByIdMutationResult =
  Apollo.MutationResult<DeleteIssueByIdMutation>;
export type DeleteIssueByIdMutationOptions = Apollo.BaseMutationOptions<
  DeleteIssueByIdMutation,
  DeleteIssueByIdMutationVariables
>;
export const InsertUserDocument = gql`
  mutation insertUser($user: users_insert_input!) {
    insert_users_one(object: $user) {
      id
    }
  }
`;
export type InsertUserMutationFn = Apollo.MutationFunction<
  InsertUserMutation,
  InsertUserMutationVariables
>;
export type InsertUserComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    InsertUserMutation,
    InsertUserMutationVariables
  >,
  "mutation"
>;

export const InsertUserComponent = (props: InsertUserComponentProps) => (
  <ApolloReactComponents.Mutation<
    InsertUserMutation,
    InsertUserMutationVariables
  >
    mutation={InsertUserDocument}
    {...props}
  />
);

export type InsertUserProps<
  TChildProps = {},
  TDataName extends string = "mutate"
> = {
  [key in TDataName]: Apollo.MutationFunction<
    InsertUserMutation,
    InsertUserMutationVariables
  >;
} & TChildProps;
export function withInsertUser<
  TProps,
  TChildProps = {},
  TDataName extends string = "mutate"
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    InsertUserMutation,
    InsertUserMutationVariables,
    InsertUserProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    InsertUserMutation,
    InsertUserMutationVariables,
    InsertUserProps<TChildProps, TDataName>
  >(InsertUserDocument, {
    alias: "insertUser",
    ...operationOptions,
  });
}

/**
 * __useInsertUserMutation__
 *
 * To run a mutation, you first call `useInsertUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertUserMutation, { data, loading, error }] = useInsertUserMutation({
 *   variables: {
 *      user: // value for 'user'
 *   },
 * });
 */
export function useInsertUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    InsertUserMutation,
    InsertUserMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<InsertUserMutation, InsertUserMutationVariables>(
    InsertUserDocument,
    options
  );
}
export type InsertUserMutationHookResult = ReturnType<
  typeof useInsertUserMutation
>;
export type InsertUserMutationResult =
  Apollo.MutationResult<InsertUserMutation>;
export type InsertUserMutationOptions = Apollo.BaseMutationOptions<
  InsertUserMutation,
  InsertUserMutationVariables
>;
export const UpdateLetterStatusByIdDocument = gql`
  mutation updateLetterStatusById($id: uuid!, $status: letterStatus_enum!) {
    update_letters_by_pk(pk_columns: { id: $id }, _set: { status: $status }) {
      id
    }
  }
`;
export type UpdateLetterStatusByIdMutationFn = Apollo.MutationFunction<
  UpdateLetterStatusByIdMutation,
  UpdateLetterStatusByIdMutationVariables
>;
export type UpdateLetterStatusByIdComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    UpdateLetterStatusByIdMutation,
    UpdateLetterStatusByIdMutationVariables
  >,
  "mutation"
>;

export const UpdateLetterStatusByIdComponent = (
  props: UpdateLetterStatusByIdComponentProps
) => (
  <ApolloReactComponents.Mutation<
    UpdateLetterStatusByIdMutation,
    UpdateLetterStatusByIdMutationVariables
  >
    mutation={UpdateLetterStatusByIdDocument}
    {...props}
  />
);

export type UpdateLetterStatusByIdProps<
  TChildProps = {},
  TDataName extends string = "mutate"
> = {
  [key in TDataName]: Apollo.MutationFunction<
    UpdateLetterStatusByIdMutation,
    UpdateLetterStatusByIdMutationVariables
  >;
} & TChildProps;
export function withUpdateLetterStatusById<
  TProps,
  TChildProps = {},
  TDataName extends string = "mutate"
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    UpdateLetterStatusByIdMutation,
    UpdateLetterStatusByIdMutationVariables,
    UpdateLetterStatusByIdProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    UpdateLetterStatusByIdMutation,
    UpdateLetterStatusByIdMutationVariables,
    UpdateLetterStatusByIdProps<TChildProps, TDataName>
  >(UpdateLetterStatusByIdDocument, {
    alias: "updateLetterStatusById",
    ...operationOptions,
  });
}

/**
 * __useUpdateLetterStatusByIdMutation__
 *
 * To run a mutation, you first call `useUpdateLetterStatusByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateLetterStatusByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateLetterStatusByIdMutation, { data, loading, error }] = useUpdateLetterStatusByIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useUpdateLetterStatusByIdMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateLetterStatusByIdMutation,
    UpdateLetterStatusByIdMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateLetterStatusByIdMutation,
    UpdateLetterStatusByIdMutationVariables
  >(UpdateLetterStatusByIdDocument, options);
}
export type UpdateLetterStatusByIdMutationHookResult = ReturnType<
  typeof useUpdateLetterStatusByIdMutation
>;
export type UpdateLetterStatusByIdMutationResult =
  Apollo.MutationResult<UpdateLetterStatusByIdMutation>;
export type UpdateLetterStatusByIdMutationOptions = Apollo.BaseMutationOptions<
  UpdateLetterStatusByIdMutation,
  UpdateLetterStatusByIdMutationVariables
>;
export const UpdateUserByIdDocument = gql`
  mutation updateUserById($id: uuid!, $user: users_set_input!) {
    update_users_by_pk(pk_columns: { id: $id }, _set: $user) {
      id
    }
  }
`;
export type UpdateUserByIdMutationFn = Apollo.MutationFunction<
  UpdateUserByIdMutation,
  UpdateUserByIdMutationVariables
>;
export type UpdateUserByIdComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    UpdateUserByIdMutation,
    UpdateUserByIdMutationVariables
  >,
  "mutation"
>;

export const UpdateUserByIdComponent = (
  props: UpdateUserByIdComponentProps
) => (
  <ApolloReactComponents.Mutation<
    UpdateUserByIdMutation,
    UpdateUserByIdMutationVariables
  >
    mutation={UpdateUserByIdDocument}
    {...props}
  />
);

export type UpdateUserByIdProps<
  TChildProps = {},
  TDataName extends string = "mutate"
> = {
  [key in TDataName]: Apollo.MutationFunction<
    UpdateUserByIdMutation,
    UpdateUserByIdMutationVariables
  >;
} & TChildProps;
export function withUpdateUserById<
  TProps,
  TChildProps = {},
  TDataName extends string = "mutate"
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    UpdateUserByIdMutation,
    UpdateUserByIdMutationVariables,
    UpdateUserByIdProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    UpdateUserByIdMutation,
    UpdateUserByIdMutationVariables,
    UpdateUserByIdProps<TChildProps, TDataName>
  >(UpdateUserByIdDocument, {
    alias: "updateUserById",
    ...operationOptions,
  });
}

/**
 * __useUpdateUserByIdMutation__
 *
 * To run a mutation, you first call `useUpdateUserByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserByIdMutation, { data, loading, error }] = useUpdateUserByIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *      user: // value for 'user'
 *   },
 * });
 */
export function useUpdateUserByIdMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateUserByIdMutation,
    UpdateUserByIdMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateUserByIdMutation,
    UpdateUserByIdMutationVariables
  >(UpdateUserByIdDocument, options);
}
export type UpdateUserByIdMutationHookResult = ReturnType<
  typeof useUpdateUserByIdMutation
>;
export type UpdateUserByIdMutationResult =
  Apollo.MutationResult<UpdateUserByIdMutation>;
export type UpdateUserByIdMutationOptions = Apollo.BaseMutationOptions<
  UpdateUserByIdMutation,
  UpdateUserByIdMutationVariables
>;
export const DeleteUserIssueListEntryByIdDocument = gql`
  mutation deleteUserIssueListEntryById($id: uuid!) {
    delete_userIssueListEntries_by_pk(id: $id) {
      id
      issue {
        userIssueListEntries_aggregate(
          where: { userIssueList: { type: { _eq: LIKED } } }
        ) {
          aggregate {
            count
          }
        }
        id
      }
    }
  }
`;
export type DeleteUserIssueListEntryByIdMutationFn = Apollo.MutationFunction<
  DeleteUserIssueListEntryByIdMutation,
  DeleteUserIssueListEntryByIdMutationVariables
>;
export type DeleteUserIssueListEntryByIdComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    DeleteUserIssueListEntryByIdMutation,
    DeleteUserIssueListEntryByIdMutationVariables
  >,
  "mutation"
>;

export const DeleteUserIssueListEntryByIdComponent = (
  props: DeleteUserIssueListEntryByIdComponentProps
) => (
  <ApolloReactComponents.Mutation<
    DeleteUserIssueListEntryByIdMutation,
    DeleteUserIssueListEntryByIdMutationVariables
  >
    mutation={DeleteUserIssueListEntryByIdDocument}
    {...props}
  />
);

export type DeleteUserIssueListEntryByIdProps<
  TChildProps = {},
  TDataName extends string = "mutate"
> = {
  [key in TDataName]: Apollo.MutationFunction<
    DeleteUserIssueListEntryByIdMutation,
    DeleteUserIssueListEntryByIdMutationVariables
  >;
} & TChildProps;
export function withDeleteUserIssueListEntryById<
  TProps,
  TChildProps = {},
  TDataName extends string = "mutate"
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    DeleteUserIssueListEntryByIdMutation,
    DeleteUserIssueListEntryByIdMutationVariables,
    DeleteUserIssueListEntryByIdProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    DeleteUserIssueListEntryByIdMutation,
    DeleteUserIssueListEntryByIdMutationVariables,
    DeleteUserIssueListEntryByIdProps<TChildProps, TDataName>
  >(DeleteUserIssueListEntryByIdDocument, {
    alias: "deleteUserIssueListEntryById",
    ...operationOptions,
  });
}

/**
 * __useDeleteUserIssueListEntryByIdMutation__
 *
 * To run a mutation, you first call `useDeleteUserIssueListEntryByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserIssueListEntryByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserIssueListEntryByIdMutation, { data, loading, error }] = useDeleteUserIssueListEntryByIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteUserIssueListEntryByIdMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteUserIssueListEntryByIdMutation,
    DeleteUserIssueListEntryByIdMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteUserIssueListEntryByIdMutation,
    DeleteUserIssueListEntryByIdMutationVariables
  >(DeleteUserIssueListEntryByIdDocument, options);
}
export type DeleteUserIssueListEntryByIdMutationHookResult = ReturnType<
  typeof useDeleteUserIssueListEntryByIdMutation
>;
export type DeleteUserIssueListEntryByIdMutationResult =
  Apollo.MutationResult<DeleteUserIssueListEntryByIdMutation>;
export type DeleteUserIssueListEntryByIdMutationOptions =
  Apollo.BaseMutationOptions<
    DeleteUserIssueListEntryByIdMutation,
    DeleteUserIssueListEntryByIdMutationVariables
  >;
export const DeleteUserIssueListLikeEntryByIdDocument = gql`
  mutation deleteUserIssueListLikeEntryById($id: uuid!) {
    delete_userIssueListEntries_by_pk(id: $id) {
      id
      issue {
        userIssueListEntries_aggregate(
          where: { userIssueList: { type: { _eq: LIKED } } }
        ) {
          aggregate {
            count
          }
        }
        id
      }
    }
  }
`;
export type DeleteUserIssueListLikeEntryByIdMutationFn =
  Apollo.MutationFunction<
    DeleteUserIssueListLikeEntryByIdMutation,
    DeleteUserIssueListLikeEntryByIdMutationVariables
  >;
export type DeleteUserIssueListLikeEntryByIdComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    DeleteUserIssueListLikeEntryByIdMutation,
    DeleteUserIssueListLikeEntryByIdMutationVariables
  >,
  "mutation"
>;

export const DeleteUserIssueListLikeEntryByIdComponent = (
  props: DeleteUserIssueListLikeEntryByIdComponentProps
) => (
  <ApolloReactComponents.Mutation<
    DeleteUserIssueListLikeEntryByIdMutation,
    DeleteUserIssueListLikeEntryByIdMutationVariables
  >
    mutation={DeleteUserIssueListLikeEntryByIdDocument}
    {...props}
  />
);

export type DeleteUserIssueListLikeEntryByIdProps<
  TChildProps = {},
  TDataName extends string = "mutate"
> = {
  [key in TDataName]: Apollo.MutationFunction<
    DeleteUserIssueListLikeEntryByIdMutation,
    DeleteUserIssueListLikeEntryByIdMutationVariables
  >;
} & TChildProps;
export function withDeleteUserIssueListLikeEntryById<
  TProps,
  TChildProps = {},
  TDataName extends string = "mutate"
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    DeleteUserIssueListLikeEntryByIdMutation,
    DeleteUserIssueListLikeEntryByIdMutationVariables,
    DeleteUserIssueListLikeEntryByIdProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    DeleteUserIssueListLikeEntryByIdMutation,
    DeleteUserIssueListLikeEntryByIdMutationVariables,
    DeleteUserIssueListLikeEntryByIdProps<TChildProps, TDataName>
  >(DeleteUserIssueListLikeEntryByIdDocument, {
    alias: "deleteUserIssueListLikeEntryById",
    ...operationOptions,
  });
}

/**
 * __useDeleteUserIssueListLikeEntryByIdMutation__
 *
 * To run a mutation, you first call `useDeleteUserIssueListLikeEntryByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserIssueListLikeEntryByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserIssueListLikeEntryByIdMutation, { data, loading, error }] = useDeleteUserIssueListLikeEntryByIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteUserIssueListLikeEntryByIdMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteUserIssueListLikeEntryByIdMutation,
    DeleteUserIssueListLikeEntryByIdMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteUserIssueListLikeEntryByIdMutation,
    DeleteUserIssueListLikeEntryByIdMutationVariables
  >(DeleteUserIssueListLikeEntryByIdDocument, options);
}
export type DeleteUserIssueListLikeEntryByIdMutationHookResult = ReturnType<
  typeof useDeleteUserIssueListLikeEntryByIdMutation
>;
export type DeleteUserIssueListLikeEntryByIdMutationResult =
  Apollo.MutationResult<DeleteUserIssueListLikeEntryByIdMutation>;
export type DeleteUserIssueListLikeEntryByIdMutationOptions =
  Apollo.BaseMutationOptions<
    DeleteUserIssueListLikeEntryByIdMutation,
    DeleteUserIssueListLikeEntryByIdMutationVariables
  >;
export const InsertUserIssueListDocument = gql`
  mutation insertUserIssueList($type: userIssueListType_enum!) {
    insert_userIssueLists_one(object: { type: $type }) {
      id
    }
  }
`;
export type InsertUserIssueListMutationFn = Apollo.MutationFunction<
  InsertUserIssueListMutation,
  InsertUserIssueListMutationVariables
>;
export type InsertUserIssueListComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    InsertUserIssueListMutation,
    InsertUserIssueListMutationVariables
  >,
  "mutation"
>;

export const InsertUserIssueListComponent = (
  props: InsertUserIssueListComponentProps
) => (
  <ApolloReactComponents.Mutation<
    InsertUserIssueListMutation,
    InsertUserIssueListMutationVariables
  >
    mutation={InsertUserIssueListDocument}
    {...props}
  />
);

export type InsertUserIssueListProps<
  TChildProps = {},
  TDataName extends string = "mutate"
> = {
  [key in TDataName]: Apollo.MutationFunction<
    InsertUserIssueListMutation,
    InsertUserIssueListMutationVariables
  >;
} & TChildProps;
export function withInsertUserIssueList<
  TProps,
  TChildProps = {},
  TDataName extends string = "mutate"
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    InsertUserIssueListMutation,
    InsertUserIssueListMutationVariables,
    InsertUserIssueListProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    InsertUserIssueListMutation,
    InsertUserIssueListMutationVariables,
    InsertUserIssueListProps<TChildProps, TDataName>
  >(InsertUserIssueListDocument, {
    alias: "insertUserIssueList",
    ...operationOptions,
  });
}

/**
 * __useInsertUserIssueListMutation__
 *
 * To run a mutation, you first call `useInsertUserIssueListMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertUserIssueListMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertUserIssueListMutation, { data, loading, error }] = useInsertUserIssueListMutation({
 *   variables: {
 *      type: // value for 'type'
 *   },
 * });
 */
export function useInsertUserIssueListMutation(
  baseOptions?: Apollo.MutationHookOptions<
    InsertUserIssueListMutation,
    InsertUserIssueListMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    InsertUserIssueListMutation,
    InsertUserIssueListMutationVariables
  >(InsertUserIssueListDocument, options);
}
export type InsertUserIssueListMutationHookResult = ReturnType<
  typeof useInsertUserIssueListMutation
>;
export type InsertUserIssueListMutationResult =
  Apollo.MutationResult<InsertUserIssueListMutation>;
export type InsertUserIssueListMutationOptions = Apollo.BaseMutationOptions<
  InsertUserIssueListMutation,
  InsertUserIssueListMutationVariables
>;
export const InsertUserIssueListEntryDocument = gql`
  mutation insertUserIssueListEntry($issueId: uuid!, $userIssueListId: uuid!) {
    insert_userIssueListEntries_one(
      object: { issueId: $issueId, userIssueListId: $userIssueListId }
    ) {
      id
      issue {
        userIssueListEntries_aggregate(
          where: { userIssueList: { type: { _eq: LIKED } } }
        ) {
          aggregate {
            count
          }
        }
        id
      }
    }
  }
`;
export type InsertUserIssueListEntryMutationFn = Apollo.MutationFunction<
  InsertUserIssueListEntryMutation,
  InsertUserIssueListEntryMutationVariables
>;
export type InsertUserIssueListEntryComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    InsertUserIssueListEntryMutation,
    InsertUserIssueListEntryMutationVariables
  >,
  "mutation"
>;

export const InsertUserIssueListEntryComponent = (
  props: InsertUserIssueListEntryComponentProps
) => (
  <ApolloReactComponents.Mutation<
    InsertUserIssueListEntryMutation,
    InsertUserIssueListEntryMutationVariables
  >
    mutation={InsertUserIssueListEntryDocument}
    {...props}
  />
);

export type InsertUserIssueListEntryProps<
  TChildProps = {},
  TDataName extends string = "mutate"
> = {
  [key in TDataName]: Apollo.MutationFunction<
    InsertUserIssueListEntryMutation,
    InsertUserIssueListEntryMutationVariables
  >;
} & TChildProps;
export function withInsertUserIssueListEntry<
  TProps,
  TChildProps = {},
  TDataName extends string = "mutate"
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    InsertUserIssueListEntryMutation,
    InsertUserIssueListEntryMutationVariables,
    InsertUserIssueListEntryProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    InsertUserIssueListEntryMutation,
    InsertUserIssueListEntryMutationVariables,
    InsertUserIssueListEntryProps<TChildProps, TDataName>
  >(InsertUserIssueListEntryDocument, {
    alias: "insertUserIssueListEntry",
    ...operationOptions,
  });
}

/**
 * __useInsertUserIssueListEntryMutation__
 *
 * To run a mutation, you first call `useInsertUserIssueListEntryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertUserIssueListEntryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertUserIssueListEntryMutation, { data, loading, error }] = useInsertUserIssueListEntryMutation({
 *   variables: {
 *      issueId: // value for 'issueId'
 *      userIssueListId: // value for 'userIssueListId'
 *   },
 * });
 */
export function useInsertUserIssueListEntryMutation(
  baseOptions?: Apollo.MutationHookOptions<
    InsertUserIssueListEntryMutation,
    InsertUserIssueListEntryMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    InsertUserIssueListEntryMutation,
    InsertUserIssueListEntryMutationVariables
  >(InsertUserIssueListEntryDocument, options);
}
export type InsertUserIssueListEntryMutationHookResult = ReturnType<
  typeof useInsertUserIssueListEntryMutation
>;
export type InsertUserIssueListEntryMutationResult =
  Apollo.MutationResult<InsertUserIssueListEntryMutation>;
export type InsertUserIssueListEntryMutationOptions =
  Apollo.BaseMutationOptions<
    InsertUserIssueListEntryMutation,
    InsertUserIssueListEntryMutationVariables
  >;
export const InsertUserIssueListLikeEntryDocument = gql`
  mutation insertUserIssueListLikeEntry(
    $issueId: uuid!
    $userIssueListId: uuid!
  ) {
    insert_userIssueListEntries_one(
      object: { issueId: $issueId, userIssueListId: $userIssueListId }
    ) {
      id
      issue {
        userIssueListEntries_aggregate(
          where: { userIssueList: { type: { _eq: LIKED } } }
        ) {
          aggregate {
            count
          }
        }
        id
      }
    }
  }
`;
export type InsertUserIssueListLikeEntryMutationFn = Apollo.MutationFunction<
  InsertUserIssueListLikeEntryMutation,
  InsertUserIssueListLikeEntryMutationVariables
>;
export type InsertUserIssueListLikeEntryComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    InsertUserIssueListLikeEntryMutation,
    InsertUserIssueListLikeEntryMutationVariables
  >,
  "mutation"
>;

export const InsertUserIssueListLikeEntryComponent = (
  props: InsertUserIssueListLikeEntryComponentProps
) => (
  <ApolloReactComponents.Mutation<
    InsertUserIssueListLikeEntryMutation,
    InsertUserIssueListLikeEntryMutationVariables
  >
    mutation={InsertUserIssueListLikeEntryDocument}
    {...props}
  />
);

export type InsertUserIssueListLikeEntryProps<
  TChildProps = {},
  TDataName extends string = "mutate"
> = {
  [key in TDataName]: Apollo.MutationFunction<
    InsertUserIssueListLikeEntryMutation,
    InsertUserIssueListLikeEntryMutationVariables
  >;
} & TChildProps;
export function withInsertUserIssueListLikeEntry<
  TProps,
  TChildProps = {},
  TDataName extends string = "mutate"
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    InsertUserIssueListLikeEntryMutation,
    InsertUserIssueListLikeEntryMutationVariables,
    InsertUserIssueListLikeEntryProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    InsertUserIssueListLikeEntryMutation,
    InsertUserIssueListLikeEntryMutationVariables,
    InsertUserIssueListLikeEntryProps<TChildProps, TDataName>
  >(InsertUserIssueListLikeEntryDocument, {
    alias: "insertUserIssueListLikeEntry",
    ...operationOptions,
  });
}

/**
 * __useInsertUserIssueListLikeEntryMutation__
 *
 * To run a mutation, you first call `useInsertUserIssueListLikeEntryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertUserIssueListLikeEntryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertUserIssueListLikeEntryMutation, { data, loading, error }] = useInsertUserIssueListLikeEntryMutation({
 *   variables: {
 *      issueId: // value for 'issueId'
 *      userIssueListId: // value for 'userIssueListId'
 *   },
 * });
 */
export function useInsertUserIssueListLikeEntryMutation(
  baseOptions?: Apollo.MutationHookOptions<
    InsertUserIssueListLikeEntryMutation,
    InsertUserIssueListLikeEntryMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    InsertUserIssueListLikeEntryMutation,
    InsertUserIssueListLikeEntryMutationVariables
  >(InsertUserIssueListLikeEntryDocument, options);
}
export type InsertUserIssueListLikeEntryMutationHookResult = ReturnType<
  typeof useInsertUserIssueListLikeEntryMutation
>;
export type InsertUserIssueListLikeEntryMutationResult =
  Apollo.MutationResult<InsertUserIssueListLikeEntryMutation>;
export type InsertUserIssueListLikeEntryMutationOptions =
  Apollo.BaseMutationOptions<
    InsertUserIssueListLikeEntryMutation,
    InsertUserIssueListLikeEntryMutationVariables
  >;
export const CategoryStepUpdateIssueDocument = gql`
  mutation categoryStepUpdateIssue(
    $id: uuid!
    $category: issueCategory_enum!
    $status: issueStatus_enum!
  ) {
    update_issues_by_pk(
      pk_columns: { id: $id }
      _set: { category: $category, status: $status }
    ) {
      id
    }
  }
`;
export type CategoryStepUpdateIssueMutationFn = Apollo.MutationFunction<
  CategoryStepUpdateIssueMutation,
  CategoryStepUpdateIssueMutationVariables
>;
export type CategoryStepUpdateIssueComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    CategoryStepUpdateIssueMutation,
    CategoryStepUpdateIssueMutationVariables
  >,
  "mutation"
>;

export const CategoryStepUpdateIssueComponent = (
  props: CategoryStepUpdateIssueComponentProps
) => (
  <ApolloReactComponents.Mutation<
    CategoryStepUpdateIssueMutation,
    CategoryStepUpdateIssueMutationVariables
  >
    mutation={CategoryStepUpdateIssueDocument}
    {...props}
  />
);

export type CategoryStepUpdateIssueProps<
  TChildProps = {},
  TDataName extends string = "mutate"
> = {
  [key in TDataName]: Apollo.MutationFunction<
    CategoryStepUpdateIssueMutation,
    CategoryStepUpdateIssueMutationVariables
  >;
} & TChildProps;
export function withCategoryStepUpdateIssue<
  TProps,
  TChildProps = {},
  TDataName extends string = "mutate"
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    CategoryStepUpdateIssueMutation,
    CategoryStepUpdateIssueMutationVariables,
    CategoryStepUpdateIssueProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    CategoryStepUpdateIssueMutation,
    CategoryStepUpdateIssueMutationVariables,
    CategoryStepUpdateIssueProps<TChildProps, TDataName>
  >(CategoryStepUpdateIssueDocument, {
    alias: "categoryStepUpdateIssue",
    ...operationOptions,
  });
}

/**
 * __useCategoryStepUpdateIssueMutation__
 *
 * To run a mutation, you first call `useCategoryStepUpdateIssueMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCategoryStepUpdateIssueMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [categoryStepUpdateIssueMutation, { data, loading, error }] = useCategoryStepUpdateIssueMutation({
 *   variables: {
 *      id: // value for 'id'
 *      category: // value for 'category'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useCategoryStepUpdateIssueMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CategoryStepUpdateIssueMutation,
    CategoryStepUpdateIssueMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CategoryStepUpdateIssueMutation,
    CategoryStepUpdateIssueMutationVariables
  >(CategoryStepUpdateIssueDocument, options);
}
export type CategoryStepUpdateIssueMutationHookResult = ReturnType<
  typeof useCategoryStepUpdateIssueMutation
>;
export type CategoryStepUpdateIssueMutationResult =
  Apollo.MutationResult<CategoryStepUpdateIssueMutation>;
export type CategoryStepUpdateIssueMutationOptions = Apollo.BaseMutationOptions<
  CategoryStepUpdateIssueMutation,
  CategoryStepUpdateIssueMutationVariables
>;
export const DeleteIssuesUsersDocument = gql`
  mutation deleteIssuesUsers($id: uuid!) {
    delete_issues_users_by_pk(id: $id) {
      id
    }
  }
`;
export type DeleteIssuesUsersMutationFn = Apollo.MutationFunction<
  DeleteIssuesUsersMutation,
  DeleteIssuesUsersMutationVariables
>;
export type DeleteIssuesUsersComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    DeleteIssuesUsersMutation,
    DeleteIssuesUsersMutationVariables
  >,
  "mutation"
>;

export const DeleteIssuesUsersComponent = (
  props: DeleteIssuesUsersComponentProps
) => (
  <ApolloReactComponents.Mutation<
    DeleteIssuesUsersMutation,
    DeleteIssuesUsersMutationVariables
  >
    mutation={DeleteIssuesUsersDocument}
    {...props}
  />
);

export type DeleteIssuesUsersProps<
  TChildProps = {},
  TDataName extends string = "mutate"
> = {
  [key in TDataName]: Apollo.MutationFunction<
    DeleteIssuesUsersMutation,
    DeleteIssuesUsersMutationVariables
  >;
} & TChildProps;
export function withDeleteIssuesUsers<
  TProps,
  TChildProps = {},
  TDataName extends string = "mutate"
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    DeleteIssuesUsersMutation,
    DeleteIssuesUsersMutationVariables,
    DeleteIssuesUsersProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    DeleteIssuesUsersMutation,
    DeleteIssuesUsersMutationVariables,
    DeleteIssuesUsersProps<TChildProps, TDataName>
  >(DeleteIssuesUsersDocument, {
    alias: "deleteIssuesUsers",
    ...operationOptions,
  });
}

/**
 * __useDeleteIssuesUsersMutation__
 *
 * To run a mutation, you first call `useDeleteIssuesUsersMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteIssuesUsersMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteIssuesUsersMutation, { data, loading, error }] = useDeleteIssuesUsersMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteIssuesUsersMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteIssuesUsersMutation,
    DeleteIssuesUsersMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteIssuesUsersMutation,
    DeleteIssuesUsersMutationVariables
  >(DeleteIssuesUsersDocument, options);
}
export type DeleteIssuesUsersMutationHookResult = ReturnType<
  typeof useDeleteIssuesUsersMutation
>;
export type DeleteIssuesUsersMutationResult =
  Apollo.MutationResult<DeleteIssuesUsersMutation>;
export type DeleteIssuesUsersMutationOptions = Apollo.BaseMutationOptions<
  DeleteIssuesUsersMutation,
  DeleteIssuesUsersMutationVariables
>;
export const InsertCommentsDocument = gql`
  mutation insertComments(
    $issueId: uuid!
    $parentCommentId: uuid!
    $content: String!
  ) {
    insert_comments_one(
      object: {
        issueId: $issueId
        content: $content
        parentCommentId: $parentCommentId
      }
    ) {
      id
    }
  }
`;
export type InsertCommentsMutationFn = Apollo.MutationFunction<
  InsertCommentsMutation,
  InsertCommentsMutationVariables
>;
export type InsertCommentsComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    InsertCommentsMutation,
    InsertCommentsMutationVariables
  >,
  "mutation"
>;

export const InsertCommentsComponent = (
  props: InsertCommentsComponentProps
) => (
  <ApolloReactComponents.Mutation<
    InsertCommentsMutation,
    InsertCommentsMutationVariables
  >
    mutation={InsertCommentsDocument}
    {...props}
  />
);

export type InsertCommentsProps<
  TChildProps = {},
  TDataName extends string = "mutate"
> = {
  [key in TDataName]: Apollo.MutationFunction<
    InsertCommentsMutation,
    InsertCommentsMutationVariables
  >;
} & TChildProps;
export function withInsertComments<
  TProps,
  TChildProps = {},
  TDataName extends string = "mutate"
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    InsertCommentsMutation,
    InsertCommentsMutationVariables,
    InsertCommentsProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    InsertCommentsMutation,
    InsertCommentsMutationVariables,
    InsertCommentsProps<TChildProps, TDataName>
  >(InsertCommentsDocument, {
    alias: "insertComments",
    ...operationOptions,
  });
}

/**
 * __useInsertCommentsMutation__
 *
 * To run a mutation, you first call `useInsertCommentsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertCommentsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertCommentsMutation, { data, loading, error }] = useInsertCommentsMutation({
 *   variables: {
 *      issueId: // value for 'issueId'
 *      parentCommentId: // value for 'parentCommentId'
 *      content: // value for 'content'
 *   },
 * });
 */
export function useInsertCommentsMutation(
  baseOptions?: Apollo.MutationHookOptions<
    InsertCommentsMutation,
    InsertCommentsMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    InsertCommentsMutation,
    InsertCommentsMutationVariables
  >(InsertCommentsDocument, options);
}
export type InsertCommentsMutationHookResult = ReturnType<
  typeof useInsertCommentsMutation
>;
export type InsertCommentsMutationResult =
  Apollo.MutationResult<InsertCommentsMutation>;
export type InsertCommentsMutationOptions = Apollo.BaseMutationOptions<
  InsertCommentsMutation,
  InsertCommentsMutationVariables
>;
export const InsertIssuesUsersDocument = gql`
  mutation insertIssuesUsers($issueId: uuid!) {
    insert_issues_users_one(object: { issueId: $issueId }) {
      id
    }
  }
`;
export type InsertIssuesUsersMutationFn = Apollo.MutationFunction<
  InsertIssuesUsersMutation,
  InsertIssuesUsersMutationVariables
>;
export type InsertIssuesUsersComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    InsertIssuesUsersMutation,
    InsertIssuesUsersMutationVariables
  >,
  "mutation"
>;

export const InsertIssuesUsersComponent = (
  props: InsertIssuesUsersComponentProps
) => (
  <ApolloReactComponents.Mutation<
    InsertIssuesUsersMutation,
    InsertIssuesUsersMutationVariables
  >
    mutation={InsertIssuesUsersDocument}
    {...props}
  />
);

export type InsertIssuesUsersProps<
  TChildProps = {},
  TDataName extends string = "mutate"
> = {
  [key in TDataName]: Apollo.MutationFunction<
    InsertIssuesUsersMutation,
    InsertIssuesUsersMutationVariables
  >;
} & TChildProps;
export function withInsertIssuesUsers<
  TProps,
  TChildProps = {},
  TDataName extends string = "mutate"
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    InsertIssuesUsersMutation,
    InsertIssuesUsersMutationVariables,
    InsertIssuesUsersProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    InsertIssuesUsersMutation,
    InsertIssuesUsersMutationVariables,
    InsertIssuesUsersProps<TChildProps, TDataName>
  >(InsertIssuesUsersDocument, {
    alias: "insertIssuesUsers",
    ...operationOptions,
  });
}

/**
 * __useInsertIssuesUsersMutation__
 *
 * To run a mutation, you first call `useInsertIssuesUsersMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertIssuesUsersMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertIssuesUsersMutation, { data, loading, error }] = useInsertIssuesUsersMutation({
 *   variables: {
 *      issueId: // value for 'issueId'
 *   },
 * });
 */
export function useInsertIssuesUsersMutation(
  baseOptions?: Apollo.MutationHookOptions<
    InsertIssuesUsersMutation,
    InsertIssuesUsersMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    InsertIssuesUsersMutation,
    InsertIssuesUsersMutationVariables
  >(InsertIssuesUsersDocument, options);
}
export type InsertIssuesUsersMutationHookResult = ReturnType<
  typeof useInsertIssuesUsersMutation
>;
export type InsertIssuesUsersMutationResult =
  Apollo.MutationResult<InsertIssuesUsersMutation>;
export type InsertIssuesUsersMutationOptions = Apollo.BaseMutationOptions<
  InsertIssuesUsersMutation,
  InsertIssuesUsersMutationVariables
>;
export const IssueDetailsStepUpdateIssueDocument = gql`
  mutation issueDetailsStepUpdateIssue(
    $id: uuid!
    $title: String!
    $content: String!
    $link: String!
    $fieldViewScale: issueFieldViewScale_enum!
    $status: issueStatus_enum!
  ) {
    update_issues_by_pk(
      pk_columns: { id: $id }
      _set: {
        title: $title
        content: $content
        link: $link
        fieldViewScale: $fieldViewScale
        status: $status
      }
    ) {
      id
    }
  }
`;
export type IssueDetailsStepUpdateIssueMutationFn = Apollo.MutationFunction<
  IssueDetailsStepUpdateIssueMutation,
  IssueDetailsStepUpdateIssueMutationVariables
>;
export type IssueDetailsStepUpdateIssueComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    IssueDetailsStepUpdateIssueMutation,
    IssueDetailsStepUpdateIssueMutationVariables
  >,
  "mutation"
>;

export const IssueDetailsStepUpdateIssueComponent = (
  props: IssueDetailsStepUpdateIssueComponentProps
) => (
  <ApolloReactComponents.Mutation<
    IssueDetailsStepUpdateIssueMutation,
    IssueDetailsStepUpdateIssueMutationVariables
  >
    mutation={IssueDetailsStepUpdateIssueDocument}
    {...props}
  />
);

export type IssueDetailsStepUpdateIssueProps<
  TChildProps = {},
  TDataName extends string = "mutate"
> = {
  [key in TDataName]: Apollo.MutationFunction<
    IssueDetailsStepUpdateIssueMutation,
    IssueDetailsStepUpdateIssueMutationVariables
  >;
} & TChildProps;
export function withIssueDetailsStepUpdateIssue<
  TProps,
  TChildProps = {},
  TDataName extends string = "mutate"
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    IssueDetailsStepUpdateIssueMutation,
    IssueDetailsStepUpdateIssueMutationVariables,
    IssueDetailsStepUpdateIssueProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    IssueDetailsStepUpdateIssueMutation,
    IssueDetailsStepUpdateIssueMutationVariables,
    IssueDetailsStepUpdateIssueProps<TChildProps, TDataName>
  >(IssueDetailsStepUpdateIssueDocument, {
    alias: "issueDetailsStepUpdateIssue",
    ...operationOptions,
  });
}

/**
 * __useIssueDetailsStepUpdateIssueMutation__
 *
 * To run a mutation, you first call `useIssueDetailsStepUpdateIssueMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useIssueDetailsStepUpdateIssueMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [issueDetailsStepUpdateIssueMutation, { data, loading, error }] = useIssueDetailsStepUpdateIssueMutation({
 *   variables: {
 *      id: // value for 'id'
 *      title: // value for 'title'
 *      content: // value for 'content'
 *      link: // value for 'link'
 *      fieldViewScale: // value for 'fieldViewScale'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useIssueDetailsStepUpdateIssueMutation(
  baseOptions?: Apollo.MutationHookOptions<
    IssueDetailsStepUpdateIssueMutation,
    IssueDetailsStepUpdateIssueMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    IssueDetailsStepUpdateIssueMutation,
    IssueDetailsStepUpdateIssueMutationVariables
  >(IssueDetailsStepUpdateIssueDocument, options);
}
export type IssueDetailsStepUpdateIssueMutationHookResult = ReturnType<
  typeof useIssueDetailsStepUpdateIssueMutation
>;
export type IssueDetailsStepUpdateIssueMutationResult =
  Apollo.MutationResult<IssueDetailsStepUpdateIssueMutation>;
export type IssueDetailsStepUpdateIssueMutationOptions =
  Apollo.BaseMutationOptions<
    IssueDetailsStepUpdateIssueMutation,
    IssueDetailsStepUpdateIssueMutationVariables
  >;
export const PrivacySelectionStepInsertIssueDocument = gql`
  mutation privacySelectionStepInsertIssue(
    $isPrivate: Boolean
    $status: issueStatus_enum!
  ) {
    insert_issues_one(object: { isPrivate: $isPrivate, status: $status }) {
      id
    }
  }
`;
export type PrivacySelectionStepInsertIssueMutationFn = Apollo.MutationFunction<
  PrivacySelectionStepInsertIssueMutation,
  PrivacySelectionStepInsertIssueMutationVariables
>;
export type PrivacySelectionStepInsertIssueComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    PrivacySelectionStepInsertIssueMutation,
    PrivacySelectionStepInsertIssueMutationVariables
  >,
  "mutation"
>;

export const PrivacySelectionStepInsertIssueComponent = (
  props: PrivacySelectionStepInsertIssueComponentProps
) => (
  <ApolloReactComponents.Mutation<
    PrivacySelectionStepInsertIssueMutation,
    PrivacySelectionStepInsertIssueMutationVariables
  >
    mutation={PrivacySelectionStepInsertIssueDocument}
    {...props}
  />
);

export type PrivacySelectionStepInsertIssueProps<
  TChildProps = {},
  TDataName extends string = "mutate"
> = {
  [key in TDataName]: Apollo.MutationFunction<
    PrivacySelectionStepInsertIssueMutation,
    PrivacySelectionStepInsertIssueMutationVariables
  >;
} & TChildProps;
export function withPrivacySelectionStepInsertIssue<
  TProps,
  TChildProps = {},
  TDataName extends string = "mutate"
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    PrivacySelectionStepInsertIssueMutation,
    PrivacySelectionStepInsertIssueMutationVariables,
    PrivacySelectionStepInsertIssueProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    PrivacySelectionStepInsertIssueMutation,
    PrivacySelectionStepInsertIssueMutationVariables,
    PrivacySelectionStepInsertIssueProps<TChildProps, TDataName>
  >(PrivacySelectionStepInsertIssueDocument, {
    alias: "privacySelectionStepInsertIssue",
    ...operationOptions,
  });
}

/**
 * __usePrivacySelectionStepInsertIssueMutation__
 *
 * To run a mutation, you first call `usePrivacySelectionStepInsertIssueMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePrivacySelectionStepInsertIssueMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [privacySelectionStepInsertIssueMutation, { data, loading, error }] = usePrivacySelectionStepInsertIssueMutation({
 *   variables: {
 *      isPrivate: // value for 'isPrivate'
 *      status: // value for 'status'
 *   },
 * });
 */
export function usePrivacySelectionStepInsertIssueMutation(
  baseOptions?: Apollo.MutationHookOptions<
    PrivacySelectionStepInsertIssueMutation,
    PrivacySelectionStepInsertIssueMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    PrivacySelectionStepInsertIssueMutation,
    PrivacySelectionStepInsertIssueMutationVariables
  >(PrivacySelectionStepInsertIssueDocument, options);
}
export type PrivacySelectionStepInsertIssueMutationHookResult = ReturnType<
  typeof usePrivacySelectionStepInsertIssueMutation
>;
export type PrivacySelectionStepInsertIssueMutationResult =
  Apollo.MutationResult<PrivacySelectionStepInsertIssueMutation>;
export type PrivacySelectionStepInsertIssueMutationOptions =
  Apollo.BaseMutationOptions<
    PrivacySelectionStepInsertIssueMutation,
    PrivacySelectionStepInsertIssueMutationVariables
  >;
export const PrivacySelectionStepUpdateIssueDocument = gql`
  mutation privacySelectionStepUpdateIssue(
    $id: uuid!
    $isPrivate: Boolean
    $status: issueStatus_enum!
  ) {
    update_issues_by_pk(
      pk_columns: { id: $id }
      _set: { isPrivate: $isPrivate, status: $status }
    ) {
      id
    }
  }
`;
export type PrivacySelectionStepUpdateIssueMutationFn = Apollo.MutationFunction<
  PrivacySelectionStepUpdateIssueMutation,
  PrivacySelectionStepUpdateIssueMutationVariables
>;
export type PrivacySelectionStepUpdateIssueComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    PrivacySelectionStepUpdateIssueMutation,
    PrivacySelectionStepUpdateIssueMutationVariables
  >,
  "mutation"
>;

export const PrivacySelectionStepUpdateIssueComponent = (
  props: PrivacySelectionStepUpdateIssueComponentProps
) => (
  <ApolloReactComponents.Mutation<
    PrivacySelectionStepUpdateIssueMutation,
    PrivacySelectionStepUpdateIssueMutationVariables
  >
    mutation={PrivacySelectionStepUpdateIssueDocument}
    {...props}
  />
);

export type PrivacySelectionStepUpdateIssueProps<
  TChildProps = {},
  TDataName extends string = "mutate"
> = {
  [key in TDataName]: Apollo.MutationFunction<
    PrivacySelectionStepUpdateIssueMutation,
    PrivacySelectionStepUpdateIssueMutationVariables
  >;
} & TChildProps;
export function withPrivacySelectionStepUpdateIssue<
  TProps,
  TChildProps = {},
  TDataName extends string = "mutate"
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    PrivacySelectionStepUpdateIssueMutation,
    PrivacySelectionStepUpdateIssueMutationVariables,
    PrivacySelectionStepUpdateIssueProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    PrivacySelectionStepUpdateIssueMutation,
    PrivacySelectionStepUpdateIssueMutationVariables,
    PrivacySelectionStepUpdateIssueProps<TChildProps, TDataName>
  >(PrivacySelectionStepUpdateIssueDocument, {
    alias: "privacySelectionStepUpdateIssue",
    ...operationOptions,
  });
}

/**
 * __usePrivacySelectionStepUpdateIssueMutation__
 *
 * To run a mutation, you first call `usePrivacySelectionStepUpdateIssueMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePrivacySelectionStepUpdateIssueMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [privacySelectionStepUpdateIssueMutation, { data, loading, error }] = usePrivacySelectionStepUpdateIssueMutation({
 *   variables: {
 *      id: // value for 'id'
 *      isPrivate: // value for 'isPrivate'
 *      status: // value for 'status'
 *   },
 * });
 */
export function usePrivacySelectionStepUpdateIssueMutation(
  baseOptions?: Apollo.MutationHookOptions<
    PrivacySelectionStepUpdateIssueMutation,
    PrivacySelectionStepUpdateIssueMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    PrivacySelectionStepUpdateIssueMutation,
    PrivacySelectionStepUpdateIssueMutationVariables
  >(PrivacySelectionStepUpdateIssueDocument, options);
}
export type PrivacySelectionStepUpdateIssueMutationHookResult = ReturnType<
  typeof usePrivacySelectionStepUpdateIssueMutation
>;
export type PrivacySelectionStepUpdateIssueMutationResult =
  Apollo.MutationResult<PrivacySelectionStepUpdateIssueMutation>;
export type PrivacySelectionStepUpdateIssueMutationOptions =
  Apollo.BaseMutationOptions<
    PrivacySelectionStepUpdateIssueMutation,
    PrivacySelectionStepUpdateIssueMutationVariables
  >;
export const LetterGenerationStepUpdateLetterByIdDocument = gql`
  mutation letterGenerationStepUpdateLetterById(
    $id: uuid!
    $status: letterStatus_enum!
    $sendEmail: Boolean
  ) {
    update_letters_by_pk(
      _set: { status: $status, sendEmail: $sendEmail }
      pk_columns: { id: $id }
    ) {
      id
    }
  }
`;
export type LetterGenerationStepUpdateLetterByIdMutationFn =
  Apollo.MutationFunction<
    LetterGenerationStepUpdateLetterByIdMutation,
    LetterGenerationStepUpdateLetterByIdMutationVariables
  >;
export type LetterGenerationStepUpdateLetterByIdComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    LetterGenerationStepUpdateLetterByIdMutation,
    LetterGenerationStepUpdateLetterByIdMutationVariables
  >,
  "mutation"
>;

export const LetterGenerationStepUpdateLetterByIdComponent = (
  props: LetterGenerationStepUpdateLetterByIdComponentProps
) => (
  <ApolloReactComponents.Mutation<
    LetterGenerationStepUpdateLetterByIdMutation,
    LetterGenerationStepUpdateLetterByIdMutationVariables
  >
    mutation={LetterGenerationStepUpdateLetterByIdDocument}
    {...props}
  />
);

export type LetterGenerationStepUpdateLetterByIdProps<
  TChildProps = {},
  TDataName extends string = "mutate"
> = {
  [key in TDataName]: Apollo.MutationFunction<
    LetterGenerationStepUpdateLetterByIdMutation,
    LetterGenerationStepUpdateLetterByIdMutationVariables
  >;
} & TChildProps;
export function withLetterGenerationStepUpdateLetterById<
  TProps,
  TChildProps = {},
  TDataName extends string = "mutate"
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    LetterGenerationStepUpdateLetterByIdMutation,
    LetterGenerationStepUpdateLetterByIdMutationVariables,
    LetterGenerationStepUpdateLetterByIdProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    LetterGenerationStepUpdateLetterByIdMutation,
    LetterGenerationStepUpdateLetterByIdMutationVariables,
    LetterGenerationStepUpdateLetterByIdProps<TChildProps, TDataName>
  >(LetterGenerationStepUpdateLetterByIdDocument, {
    alias: "letterGenerationStepUpdateLetterById",
    ...operationOptions,
  });
}

/**
 * __useLetterGenerationStepUpdateLetterByIdMutation__
 *
 * To run a mutation, you first call `useLetterGenerationStepUpdateLetterByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLetterGenerationStepUpdateLetterByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [letterGenerationStepUpdateLetterByIdMutation, { data, loading, error }] = useLetterGenerationStepUpdateLetterByIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *      status: // value for 'status'
 *      sendEmail: // value for 'sendEmail'
 *   },
 * });
 */
export function useLetterGenerationStepUpdateLetterByIdMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LetterGenerationStepUpdateLetterByIdMutation,
    LetterGenerationStepUpdateLetterByIdMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    LetterGenerationStepUpdateLetterByIdMutation,
    LetterGenerationStepUpdateLetterByIdMutationVariables
  >(LetterGenerationStepUpdateLetterByIdDocument, options);
}
export type LetterGenerationStepUpdateLetterByIdMutationHookResult = ReturnType<
  typeof useLetterGenerationStepUpdateLetterByIdMutation
>;
export type LetterGenerationStepUpdateLetterByIdMutationResult =
  Apollo.MutationResult<LetterGenerationStepUpdateLetterByIdMutation>;
export type LetterGenerationStepUpdateLetterByIdMutationOptions =
  Apollo.BaseMutationOptions<
    LetterGenerationStepUpdateLetterByIdMutation,
    LetterGenerationStepUpdateLetterByIdMutationVariables
  >;
export const PersonalizeStepInsertLetterDocument = gql`
  mutation personalizeStepInsertLetter(
    $creatorName: String!
    $creatorSurname: String!
    $unit: String!
    $street: String!
    $city: String!
    $state: String!
    $status: letterStatus_enum!
    $language: language_enum
  ) {
    insert_letters_one(
      object: {
        creatorSurname: $creatorSurname
        creatorName: $creatorName
        unit: $unit
        street: $street
        status: $status
        city: $city
        state: $state
        language: $language
      }
    ) {
      id
    }
  }
`;
export type PersonalizeStepInsertLetterMutationFn = Apollo.MutationFunction<
  PersonalizeStepInsertLetterMutation,
  PersonalizeStepInsertLetterMutationVariables
>;
export type PersonalizeStepInsertLetterComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    PersonalizeStepInsertLetterMutation,
    PersonalizeStepInsertLetterMutationVariables
  >,
  "mutation"
>;

export const PersonalizeStepInsertLetterComponent = (
  props: PersonalizeStepInsertLetterComponentProps
) => (
  <ApolloReactComponents.Mutation<
    PersonalizeStepInsertLetterMutation,
    PersonalizeStepInsertLetterMutationVariables
  >
    mutation={PersonalizeStepInsertLetterDocument}
    {...props}
  />
);

export type PersonalizeStepInsertLetterProps<
  TChildProps = {},
  TDataName extends string = "mutate"
> = {
  [key in TDataName]: Apollo.MutationFunction<
    PersonalizeStepInsertLetterMutation,
    PersonalizeStepInsertLetterMutationVariables
  >;
} & TChildProps;
export function withPersonalizeStepInsertLetter<
  TProps,
  TChildProps = {},
  TDataName extends string = "mutate"
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    PersonalizeStepInsertLetterMutation,
    PersonalizeStepInsertLetterMutationVariables,
    PersonalizeStepInsertLetterProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    PersonalizeStepInsertLetterMutation,
    PersonalizeStepInsertLetterMutationVariables,
    PersonalizeStepInsertLetterProps<TChildProps, TDataName>
  >(PersonalizeStepInsertLetterDocument, {
    alias: "personalizeStepInsertLetter",
    ...operationOptions,
  });
}

/**
 * __usePersonalizeStepInsertLetterMutation__
 *
 * To run a mutation, you first call `usePersonalizeStepInsertLetterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePersonalizeStepInsertLetterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [personalizeStepInsertLetterMutation, { data, loading, error }] = usePersonalizeStepInsertLetterMutation({
 *   variables: {
 *      creatorName: // value for 'creatorName'
 *      creatorSurname: // value for 'creatorSurname'
 *      unit: // value for 'unit'
 *      street: // value for 'street'
 *      city: // value for 'city'
 *      state: // value for 'state'
 *      status: // value for 'status'
 *      language: // value for 'language'
 *   },
 * });
 */
export function usePersonalizeStepInsertLetterMutation(
  baseOptions?: Apollo.MutationHookOptions<
    PersonalizeStepInsertLetterMutation,
    PersonalizeStepInsertLetterMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    PersonalizeStepInsertLetterMutation,
    PersonalizeStepInsertLetterMutationVariables
  >(PersonalizeStepInsertLetterDocument, options);
}
export type PersonalizeStepInsertLetterMutationHookResult = ReturnType<
  typeof usePersonalizeStepInsertLetterMutation
>;
export type PersonalizeStepInsertLetterMutationResult =
  Apollo.MutationResult<PersonalizeStepInsertLetterMutation>;
export type PersonalizeStepInsertLetterMutationOptions =
  Apollo.BaseMutationOptions<
    PersonalizeStepInsertLetterMutation,
    PersonalizeStepInsertLetterMutationVariables
  >;
export const PersonalizeStepUpdateLetterByIdDocument = gql`
  mutation personalizeStepUpdateLetterById(
    $id: uuid!
    $creatorName: String!
    $creatorSurname: String!
    $unit: String!
    $street: String!
    $city: String!
    $state: String!
    $status: letterStatus_enum!
    $language: language_enum
  ) {
    update_letters_by_pk(
      _set: {
        creatorSurname: $creatorSurname
        creatorName: $creatorName
        unit: $unit
        street: $street
        status: $status
        city: $city
        state: $state
        language: $language
      }
      pk_columns: { id: $id }
    ) {
      id
    }
  }
`;
export type PersonalizeStepUpdateLetterByIdMutationFn = Apollo.MutationFunction<
  PersonalizeStepUpdateLetterByIdMutation,
  PersonalizeStepUpdateLetterByIdMutationVariables
>;
export type PersonalizeStepUpdateLetterByIdComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    PersonalizeStepUpdateLetterByIdMutation,
    PersonalizeStepUpdateLetterByIdMutationVariables
  >,
  "mutation"
>;

export const PersonalizeStepUpdateLetterByIdComponent = (
  props: PersonalizeStepUpdateLetterByIdComponentProps
) => (
  <ApolloReactComponents.Mutation<
    PersonalizeStepUpdateLetterByIdMutation,
    PersonalizeStepUpdateLetterByIdMutationVariables
  >
    mutation={PersonalizeStepUpdateLetterByIdDocument}
    {...props}
  />
);

export type PersonalizeStepUpdateLetterByIdProps<
  TChildProps = {},
  TDataName extends string = "mutate"
> = {
  [key in TDataName]: Apollo.MutationFunction<
    PersonalizeStepUpdateLetterByIdMutation,
    PersonalizeStepUpdateLetterByIdMutationVariables
  >;
} & TChildProps;
export function withPersonalizeStepUpdateLetterById<
  TProps,
  TChildProps = {},
  TDataName extends string = "mutate"
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    PersonalizeStepUpdateLetterByIdMutation,
    PersonalizeStepUpdateLetterByIdMutationVariables,
    PersonalizeStepUpdateLetterByIdProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    PersonalizeStepUpdateLetterByIdMutation,
    PersonalizeStepUpdateLetterByIdMutationVariables,
    PersonalizeStepUpdateLetterByIdProps<TChildProps, TDataName>
  >(PersonalizeStepUpdateLetterByIdDocument, {
    alias: "personalizeStepUpdateLetterById",
    ...operationOptions,
  });
}

/**
 * __usePersonalizeStepUpdateLetterByIdMutation__
 *
 * To run a mutation, you first call `usePersonalizeStepUpdateLetterByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePersonalizeStepUpdateLetterByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [personalizeStepUpdateLetterByIdMutation, { data, loading, error }] = usePersonalizeStepUpdateLetterByIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *      creatorName: // value for 'creatorName'
 *      creatorSurname: // value for 'creatorSurname'
 *      unit: // value for 'unit'
 *      street: // value for 'street'
 *      city: // value for 'city'
 *      state: // value for 'state'
 *      status: // value for 'status'
 *      language: // value for 'language'
 *   },
 * });
 */
export function usePersonalizeStepUpdateLetterByIdMutation(
  baseOptions?: Apollo.MutationHookOptions<
    PersonalizeStepUpdateLetterByIdMutation,
    PersonalizeStepUpdateLetterByIdMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    PersonalizeStepUpdateLetterByIdMutation,
    PersonalizeStepUpdateLetterByIdMutationVariables
  >(PersonalizeStepUpdateLetterByIdDocument, options);
}
export type PersonalizeStepUpdateLetterByIdMutationHookResult = ReturnType<
  typeof usePersonalizeStepUpdateLetterByIdMutation
>;
export type PersonalizeStepUpdateLetterByIdMutationResult =
  Apollo.MutationResult<PersonalizeStepUpdateLetterByIdMutation>;
export type PersonalizeStepUpdateLetterByIdMutationOptions =
  Apollo.BaseMutationOptions<
    PersonalizeStepUpdateLetterByIdMutation,
    PersonalizeStepUpdateLetterByIdMutationVariables
  >;
export const PurposeStepUpdateLetterByIdDocument = gql`
  mutation purposeStepUpdateLetterById(
    $id: uuid!
    $feelings: String!
    $expectations: String!
    $additionalInformation: String
    $status: letterStatus_enum!
  ) {
    update_letters_by_pk(
      _set: {
        feelings: $feelings
        expectations: $expectations
        additionalInformation: $additionalInformation
        status: $status
      }
      pk_columns: { id: $id }
    ) {
      id
    }
  }
`;
export type PurposeStepUpdateLetterByIdMutationFn = Apollo.MutationFunction<
  PurposeStepUpdateLetterByIdMutation,
  PurposeStepUpdateLetterByIdMutationVariables
>;
export type PurposeStepUpdateLetterByIdComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    PurposeStepUpdateLetterByIdMutation,
    PurposeStepUpdateLetterByIdMutationVariables
  >,
  "mutation"
>;

export const PurposeStepUpdateLetterByIdComponent = (
  props: PurposeStepUpdateLetterByIdComponentProps
) => (
  <ApolloReactComponents.Mutation<
    PurposeStepUpdateLetterByIdMutation,
    PurposeStepUpdateLetterByIdMutationVariables
  >
    mutation={PurposeStepUpdateLetterByIdDocument}
    {...props}
  />
);

export type PurposeStepUpdateLetterByIdProps<
  TChildProps = {},
  TDataName extends string = "mutate"
> = {
  [key in TDataName]: Apollo.MutationFunction<
    PurposeStepUpdateLetterByIdMutation,
    PurposeStepUpdateLetterByIdMutationVariables
  >;
} & TChildProps;
export function withPurposeStepUpdateLetterById<
  TProps,
  TChildProps = {},
  TDataName extends string = "mutate"
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    PurposeStepUpdateLetterByIdMutation,
    PurposeStepUpdateLetterByIdMutationVariables,
    PurposeStepUpdateLetterByIdProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    PurposeStepUpdateLetterByIdMutation,
    PurposeStepUpdateLetterByIdMutationVariables,
    PurposeStepUpdateLetterByIdProps<TChildProps, TDataName>
  >(PurposeStepUpdateLetterByIdDocument, {
    alias: "purposeStepUpdateLetterById",
    ...operationOptions,
  });
}

/**
 * __usePurposeStepUpdateLetterByIdMutation__
 *
 * To run a mutation, you first call `usePurposeStepUpdateLetterByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePurposeStepUpdateLetterByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [purposeStepUpdateLetterByIdMutation, { data, loading, error }] = usePurposeStepUpdateLetterByIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *      feelings: // value for 'feelings'
 *      expectations: // value for 'expectations'
 *      additionalInformation: // value for 'additionalInformation'
 *      status: // value for 'status'
 *   },
 * });
 */
export function usePurposeStepUpdateLetterByIdMutation(
  baseOptions?: Apollo.MutationHookOptions<
    PurposeStepUpdateLetterByIdMutation,
    PurposeStepUpdateLetterByIdMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    PurposeStepUpdateLetterByIdMutation,
    PurposeStepUpdateLetterByIdMutationVariables
  >(PurposeStepUpdateLetterByIdDocument, options);
}
export type PurposeStepUpdateLetterByIdMutationHookResult = ReturnType<
  typeof usePurposeStepUpdateLetterByIdMutation
>;
export type PurposeStepUpdateLetterByIdMutationResult =
  Apollo.MutationResult<PurposeStepUpdateLetterByIdMutation>;
export type PurposeStepUpdateLetterByIdMutationOptions =
  Apollo.BaseMutationOptions<
    PurposeStepUpdateLetterByIdMutation,
    PurposeStepUpdateLetterByIdMutationVariables
  >;
export const RepresentativeStepDeleteLetterContentsDocument = gql`
  mutation representativeStepDeleteLetterContents(
    $letterId: uuid!
    $representativeIds: [uuid!]!
  ) {
    delete_letterContents(
      where: {
        _and: [
          { representativeId: { _in: $representativeIds } }
          { letterId: { _eq: $letterId } }
        ]
      }
    ) {
      returning {
        id
      }
    }
  }
`;
export type RepresentativeStepDeleteLetterContentsMutationFn =
  Apollo.MutationFunction<
    RepresentativeStepDeleteLetterContentsMutation,
    RepresentativeStepDeleteLetterContentsMutationVariables
  >;
export type RepresentativeStepDeleteLetterContentsComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    RepresentativeStepDeleteLetterContentsMutation,
    RepresentativeStepDeleteLetterContentsMutationVariables
  >,
  "mutation"
>;

export const RepresentativeStepDeleteLetterContentsComponent = (
  props: RepresentativeStepDeleteLetterContentsComponentProps
) => (
  <ApolloReactComponents.Mutation<
    RepresentativeStepDeleteLetterContentsMutation,
    RepresentativeStepDeleteLetterContentsMutationVariables
  >
    mutation={RepresentativeStepDeleteLetterContentsDocument}
    {...props}
  />
);

export type RepresentativeStepDeleteLetterContentsProps<
  TChildProps = {},
  TDataName extends string = "mutate"
> = {
  [key in TDataName]: Apollo.MutationFunction<
    RepresentativeStepDeleteLetterContentsMutation,
    RepresentativeStepDeleteLetterContentsMutationVariables
  >;
} & TChildProps;
export function withRepresentativeStepDeleteLetterContents<
  TProps,
  TChildProps = {},
  TDataName extends string = "mutate"
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    RepresentativeStepDeleteLetterContentsMutation,
    RepresentativeStepDeleteLetterContentsMutationVariables,
    RepresentativeStepDeleteLetterContentsProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    RepresentativeStepDeleteLetterContentsMutation,
    RepresentativeStepDeleteLetterContentsMutationVariables,
    RepresentativeStepDeleteLetterContentsProps<TChildProps, TDataName>
  >(RepresentativeStepDeleteLetterContentsDocument, {
    alias: "representativeStepDeleteLetterContents",
    ...operationOptions,
  });
}

/**
 * __useRepresentativeStepDeleteLetterContentsMutation__
 *
 * To run a mutation, you first call `useRepresentativeStepDeleteLetterContentsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRepresentativeStepDeleteLetterContentsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [representativeStepDeleteLetterContentsMutation, { data, loading, error }] = useRepresentativeStepDeleteLetterContentsMutation({
 *   variables: {
 *      letterId: // value for 'letterId'
 *      representativeIds: // value for 'representativeIds'
 *   },
 * });
 */
export function useRepresentativeStepDeleteLetterContentsMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RepresentativeStepDeleteLetterContentsMutation,
    RepresentativeStepDeleteLetterContentsMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    RepresentativeStepDeleteLetterContentsMutation,
    RepresentativeStepDeleteLetterContentsMutationVariables
  >(RepresentativeStepDeleteLetterContentsDocument, options);
}
export type RepresentativeStepDeleteLetterContentsMutationHookResult =
  ReturnType<typeof useRepresentativeStepDeleteLetterContentsMutation>;
export type RepresentativeStepDeleteLetterContentsMutationResult =
  Apollo.MutationResult<RepresentativeStepDeleteLetterContentsMutation>;
export type RepresentativeStepDeleteLetterContentsMutationOptions =
  Apollo.BaseMutationOptions<
    RepresentativeStepDeleteLetterContentsMutation,
    RepresentativeStepDeleteLetterContentsMutationVariables
  >;
export const RepresentativeStepInsertLetterContentsDocument = gql`
  mutation representativeStepInsertLetterContents(
    $inputs: [letterContents_insert_input!]!
  ) {
    insert_letterContents(objects: $inputs) {
      returning {
        id
      }
    }
  }
`;
export type RepresentativeStepInsertLetterContentsMutationFn =
  Apollo.MutationFunction<
    RepresentativeStepInsertLetterContentsMutation,
    RepresentativeStepInsertLetterContentsMutationVariables
  >;
export type RepresentativeStepInsertLetterContentsComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    RepresentativeStepInsertLetterContentsMutation,
    RepresentativeStepInsertLetterContentsMutationVariables
  >,
  "mutation"
>;

export const RepresentativeStepInsertLetterContentsComponent = (
  props: RepresentativeStepInsertLetterContentsComponentProps
) => (
  <ApolloReactComponents.Mutation<
    RepresentativeStepInsertLetterContentsMutation,
    RepresentativeStepInsertLetterContentsMutationVariables
  >
    mutation={RepresentativeStepInsertLetterContentsDocument}
    {...props}
  />
);

export type RepresentativeStepInsertLetterContentsProps<
  TChildProps = {},
  TDataName extends string = "mutate"
> = {
  [key in TDataName]: Apollo.MutationFunction<
    RepresentativeStepInsertLetterContentsMutation,
    RepresentativeStepInsertLetterContentsMutationVariables
  >;
} & TChildProps;
export function withRepresentativeStepInsertLetterContents<
  TProps,
  TChildProps = {},
  TDataName extends string = "mutate"
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    RepresentativeStepInsertLetterContentsMutation,
    RepresentativeStepInsertLetterContentsMutationVariables,
    RepresentativeStepInsertLetterContentsProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    RepresentativeStepInsertLetterContentsMutation,
    RepresentativeStepInsertLetterContentsMutationVariables,
    RepresentativeStepInsertLetterContentsProps<TChildProps, TDataName>
  >(RepresentativeStepInsertLetterContentsDocument, {
    alias: "representativeStepInsertLetterContents",
    ...operationOptions,
  });
}

/**
 * __useRepresentativeStepInsertLetterContentsMutation__
 *
 * To run a mutation, you first call `useRepresentativeStepInsertLetterContentsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRepresentativeStepInsertLetterContentsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [representativeStepInsertLetterContentsMutation, { data, loading, error }] = useRepresentativeStepInsertLetterContentsMutation({
 *   variables: {
 *      inputs: // value for 'inputs'
 *   },
 * });
 */
export function useRepresentativeStepInsertLetterContentsMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RepresentativeStepInsertLetterContentsMutation,
    RepresentativeStepInsertLetterContentsMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    RepresentativeStepInsertLetterContentsMutation,
    RepresentativeStepInsertLetterContentsMutationVariables
  >(RepresentativeStepInsertLetterContentsDocument, options);
}
export type RepresentativeStepInsertLetterContentsMutationHookResult =
  ReturnType<typeof useRepresentativeStepInsertLetterContentsMutation>;
export type RepresentativeStepInsertLetterContentsMutationResult =
  Apollo.MutationResult<RepresentativeStepInsertLetterContentsMutation>;
export type RepresentativeStepInsertLetterContentsMutationOptions =
  Apollo.BaseMutationOptions<
    RepresentativeStepInsertLetterContentsMutation,
    RepresentativeStepInsertLetterContentsMutationVariables
  >;
export const SubjectStepUpdateLetterByIdDocument = gql`
  mutation subjectStepUpdateLetterById(
    $id: uuid!
    $topic: String!
    $status: letterStatus_enum!
  ) {
    update_letters_by_pk(
      _set: { topic: $topic, status: $status }
      pk_columns: { id: $id }
    ) {
      id
    }
  }
`;
export type SubjectStepUpdateLetterByIdMutationFn = Apollo.MutationFunction<
  SubjectStepUpdateLetterByIdMutation,
  SubjectStepUpdateLetterByIdMutationVariables
>;
export type SubjectStepUpdateLetterByIdComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    SubjectStepUpdateLetterByIdMutation,
    SubjectStepUpdateLetterByIdMutationVariables
  >,
  "mutation"
>;

export const SubjectStepUpdateLetterByIdComponent = (
  props: SubjectStepUpdateLetterByIdComponentProps
) => (
  <ApolloReactComponents.Mutation<
    SubjectStepUpdateLetterByIdMutation,
    SubjectStepUpdateLetterByIdMutationVariables
  >
    mutation={SubjectStepUpdateLetterByIdDocument}
    {...props}
  />
);

export type SubjectStepUpdateLetterByIdProps<
  TChildProps = {},
  TDataName extends string = "mutate"
> = {
  [key in TDataName]: Apollo.MutationFunction<
    SubjectStepUpdateLetterByIdMutation,
    SubjectStepUpdateLetterByIdMutationVariables
  >;
} & TChildProps;
export function withSubjectStepUpdateLetterById<
  TProps,
  TChildProps = {},
  TDataName extends string = "mutate"
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    SubjectStepUpdateLetterByIdMutation,
    SubjectStepUpdateLetterByIdMutationVariables,
    SubjectStepUpdateLetterByIdProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    SubjectStepUpdateLetterByIdMutation,
    SubjectStepUpdateLetterByIdMutationVariables,
    SubjectStepUpdateLetterByIdProps<TChildProps, TDataName>
  >(SubjectStepUpdateLetterByIdDocument, {
    alias: "subjectStepUpdateLetterById",
    ...operationOptions,
  });
}

/**
 * __useSubjectStepUpdateLetterByIdMutation__
 *
 * To run a mutation, you first call `useSubjectStepUpdateLetterByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubjectStepUpdateLetterByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [subjectStepUpdateLetterByIdMutation, { data, loading, error }] = useSubjectStepUpdateLetterByIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *      topic: // value for 'topic'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useSubjectStepUpdateLetterByIdMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SubjectStepUpdateLetterByIdMutation,
    SubjectStepUpdateLetterByIdMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    SubjectStepUpdateLetterByIdMutation,
    SubjectStepUpdateLetterByIdMutationVariables
  >(SubjectStepUpdateLetterByIdDocument, options);
}
export type SubjectStepUpdateLetterByIdMutationHookResult = ReturnType<
  typeof useSubjectStepUpdateLetterByIdMutation
>;
export type SubjectStepUpdateLetterByIdMutationResult =
  Apollo.MutationResult<SubjectStepUpdateLetterByIdMutation>;
export type SubjectStepUpdateLetterByIdMutationOptions =
  Apollo.BaseMutationOptions<
    SubjectStepUpdateLetterByIdMutation,
    SubjectStepUpdateLetterByIdMutationVariables
  >;
export const UpdateInitialLetterContentsDocument = gql`
  mutation updateInitialLetterContents($letterId: uuid!, $content: String) {
    update_letterContents(
      where: { letterId: { _eq: $letterId } }
      _set: { content: $content }
    ) {
      returning {
        id
      }
    }
  }
`;
export type UpdateInitialLetterContentsMutationFn = Apollo.MutationFunction<
  UpdateInitialLetterContentsMutation,
  UpdateInitialLetterContentsMutationVariables
>;
export type UpdateInitialLetterContentsComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    UpdateInitialLetterContentsMutation,
    UpdateInitialLetterContentsMutationVariables
  >,
  "mutation"
>;

export const UpdateInitialLetterContentsComponent = (
  props: UpdateInitialLetterContentsComponentProps
) => (
  <ApolloReactComponents.Mutation<
    UpdateInitialLetterContentsMutation,
    UpdateInitialLetterContentsMutationVariables
  >
    mutation={UpdateInitialLetterContentsDocument}
    {...props}
  />
);

export type UpdateInitialLetterContentsProps<
  TChildProps = {},
  TDataName extends string = "mutate"
> = {
  [key in TDataName]: Apollo.MutationFunction<
    UpdateInitialLetterContentsMutation,
    UpdateInitialLetterContentsMutationVariables
  >;
} & TChildProps;
export function withUpdateInitialLetterContents<
  TProps,
  TChildProps = {},
  TDataName extends string = "mutate"
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    UpdateInitialLetterContentsMutation,
    UpdateInitialLetterContentsMutationVariables,
    UpdateInitialLetterContentsProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    UpdateInitialLetterContentsMutation,
    UpdateInitialLetterContentsMutationVariables,
    UpdateInitialLetterContentsProps<TChildProps, TDataName>
  >(UpdateInitialLetterContentsDocument, {
    alias: "updateInitialLetterContents",
    ...operationOptions,
  });
}

/**
 * __useUpdateInitialLetterContentsMutation__
 *
 * To run a mutation, you first call `useUpdateInitialLetterContentsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateInitialLetterContentsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateInitialLetterContentsMutation, { data, loading, error }] = useUpdateInitialLetterContentsMutation({
 *   variables: {
 *      letterId: // value for 'letterId'
 *      content: // value for 'content'
 *   },
 * });
 */
export function useUpdateInitialLetterContentsMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateInitialLetterContentsMutation,
    UpdateInitialLetterContentsMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateInitialLetterContentsMutation,
    UpdateInitialLetterContentsMutationVariables
  >(UpdateInitialLetterContentsDocument, options);
}
export type UpdateInitialLetterContentsMutationHookResult = ReturnType<
  typeof useUpdateInitialLetterContentsMutation
>;
export type UpdateInitialLetterContentsMutationResult =
  Apollo.MutationResult<UpdateInitialLetterContentsMutation>;
export type UpdateInitialLetterContentsMutationOptions =
  Apollo.BaseMutationOptions<
    UpdateInitialLetterContentsMutation,
    UpdateInitialLetterContentsMutationVariables
  >;
export const UpdateLetterContentByIdDocument = gql`
  mutation updateLetterContentById($contentId: uuid!, $content: String) {
    update_letterContents_by_pk(
      pk_columns: { id: $contentId }
      _set: { content: $content }
    ) {
      id
    }
  }
`;
export type UpdateLetterContentByIdMutationFn = Apollo.MutationFunction<
  UpdateLetterContentByIdMutation,
  UpdateLetterContentByIdMutationVariables
>;
export type UpdateLetterContentByIdComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    UpdateLetterContentByIdMutation,
    UpdateLetterContentByIdMutationVariables
  >,
  "mutation"
>;

export const UpdateLetterContentByIdComponent = (
  props: UpdateLetterContentByIdComponentProps
) => (
  <ApolloReactComponents.Mutation<
    UpdateLetterContentByIdMutation,
    UpdateLetterContentByIdMutationVariables
  >
    mutation={UpdateLetterContentByIdDocument}
    {...props}
  />
);

export type UpdateLetterContentByIdProps<
  TChildProps = {},
  TDataName extends string = "mutate"
> = {
  [key in TDataName]: Apollo.MutationFunction<
    UpdateLetterContentByIdMutation,
    UpdateLetterContentByIdMutationVariables
  >;
} & TChildProps;
export function withUpdateLetterContentById<
  TProps,
  TChildProps = {},
  TDataName extends string = "mutate"
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    UpdateLetterContentByIdMutation,
    UpdateLetterContentByIdMutationVariables,
    UpdateLetterContentByIdProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    UpdateLetterContentByIdMutation,
    UpdateLetterContentByIdMutationVariables,
    UpdateLetterContentByIdProps<TChildProps, TDataName>
  >(UpdateLetterContentByIdDocument, {
    alias: "updateLetterContentById",
    ...operationOptions,
  });
}

/**
 * __useUpdateLetterContentByIdMutation__
 *
 * To run a mutation, you first call `useUpdateLetterContentByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateLetterContentByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateLetterContentByIdMutation, { data, loading, error }] = useUpdateLetterContentByIdMutation({
 *   variables: {
 *      contentId: // value for 'contentId'
 *      content: // value for 'content'
 *   },
 * });
 */
export function useUpdateLetterContentByIdMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateLetterContentByIdMutation,
    UpdateLetterContentByIdMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateLetterContentByIdMutation,
    UpdateLetterContentByIdMutationVariables
  >(UpdateLetterContentByIdDocument, options);
}
export type UpdateLetterContentByIdMutationHookResult = ReturnType<
  typeof useUpdateLetterContentByIdMutation
>;
export type UpdateLetterContentByIdMutationResult =
  Apollo.MutationResult<UpdateLetterContentByIdMutation>;
export type UpdateLetterContentByIdMutationOptions = Apollo.BaseMutationOptions<
  UpdateLetterContentByIdMutation,
  UpdateLetterContentByIdMutationVariables
>;
export const GetSessionByIdDocument = gql`
  query getSessionById($sessionId: uuid!) {
    sessions_by_pk(id: $sessionId) {
      id
      expires
      userRole
      type
      userId
      user {
        accountType
        id
      }
    }
  }
`;
export type GetSessionByIdComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    GetSessionByIdQuery,
    GetSessionByIdQueryVariables
  >,
  "query"
> &
  (
    | { variables: GetSessionByIdQueryVariables; skip?: boolean }
    | { skip: boolean }
  );

export const GetSessionByIdComponent = (
  props: GetSessionByIdComponentProps
) => (
  <ApolloReactComponents.Query<
    GetSessionByIdQuery,
    GetSessionByIdQueryVariables
  >
    query={GetSessionByIdDocument}
    {...props}
  />
);

export type GetSessionByIdProps<
  TChildProps = {},
  TDataName extends string = "data"
> = {
  [key in TDataName]: ApolloReactHoc.DataValue<
    GetSessionByIdQuery,
    GetSessionByIdQueryVariables
  >;
} & TChildProps;
export function withGetSessionById<
  TProps,
  TChildProps = {},
  TDataName extends string = "data"
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    GetSessionByIdQuery,
    GetSessionByIdQueryVariables,
    GetSessionByIdProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    GetSessionByIdQuery,
    GetSessionByIdQueryVariables,
    GetSessionByIdProps<TChildProps, TDataName>
  >(GetSessionByIdDocument, {
    alias: "getSessionById",
    ...operationOptions,
  });
}

/**
 * __useGetSessionByIdQuery__
 *
 * To run a query within a React component, call `useGetSessionByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSessionByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSessionByIdQuery({
 *   variables: {
 *      sessionId: // value for 'sessionId'
 *   },
 * });
 */
export function useGetSessionByIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetSessionByIdQuery,
    GetSessionByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetSessionByIdQuery, GetSessionByIdQueryVariables>(
    GetSessionByIdDocument,
    options
  );
}
export function useGetSessionByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetSessionByIdQuery,
    GetSessionByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetSessionByIdQuery, GetSessionByIdQueryVariables>(
    GetSessionByIdDocument,
    options
  );
}
export type GetSessionByIdQueryHookResult = ReturnType<
  typeof useGetSessionByIdQuery
>;
export type GetSessionByIdLazyQueryHookResult = ReturnType<
  typeof useGetSessionByIdLazyQuery
>;
export type GetSessionByIdQueryResult = Apollo.QueryResult<
  GetSessionByIdQuery,
  GetSessionByIdQueryVariables
>;
export function refetchGetSessionByIdQuery(
  variables: GetSessionByIdQueryVariables
) {
  return { query: GetSessionByIdDocument, variables: variables };
}
export const GetCommentsByIssueIdDocument = gql`
  query getCommentsByIssueId(
    $issueId: uuid!
    $sortBy: order_by!
    $userId: uuid!
  ) {
    issues_by_pk(id: $issueId) {
      id
      comments(order_by: { created_at: $sortBy }) {
        content
        id
        parentCommentId
        created_at
        user {
          id
          username
        }
      }
      comments_aggregate {
        aggregate {
          count
        }
      }
      issues_users(
        where: { userId: { _eq: $userId }, issueId: { _eq: $issueId } }
        limit: 1
      ) {
        id
      }
    }
  }
`;
export type GetCommentsByIssueIdComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    GetCommentsByIssueIdQuery,
    GetCommentsByIssueIdQueryVariables
  >,
  "query"
> &
  (
    | { variables: GetCommentsByIssueIdQueryVariables; skip?: boolean }
    | { skip: boolean }
  );

export const GetCommentsByIssueIdComponent = (
  props: GetCommentsByIssueIdComponentProps
) => (
  <ApolloReactComponents.Query<
    GetCommentsByIssueIdQuery,
    GetCommentsByIssueIdQueryVariables
  >
    query={GetCommentsByIssueIdDocument}
    {...props}
  />
);

export type GetCommentsByIssueIdProps<
  TChildProps = {},
  TDataName extends string = "data"
> = {
  [key in TDataName]: ApolloReactHoc.DataValue<
    GetCommentsByIssueIdQuery,
    GetCommentsByIssueIdQueryVariables
  >;
} & TChildProps;
export function withGetCommentsByIssueId<
  TProps,
  TChildProps = {},
  TDataName extends string = "data"
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    GetCommentsByIssueIdQuery,
    GetCommentsByIssueIdQueryVariables,
    GetCommentsByIssueIdProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    GetCommentsByIssueIdQuery,
    GetCommentsByIssueIdQueryVariables,
    GetCommentsByIssueIdProps<TChildProps, TDataName>
  >(GetCommentsByIssueIdDocument, {
    alias: "getCommentsByIssueId",
    ...operationOptions,
  });
}

/**
 * __useGetCommentsByIssueIdQuery__
 *
 * To run a query within a React component, call `useGetCommentsByIssueIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCommentsByIssueIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCommentsByIssueIdQuery({
 *   variables: {
 *      issueId: // value for 'issueId'
 *      sortBy: // value for 'sortBy'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetCommentsByIssueIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetCommentsByIssueIdQuery,
    GetCommentsByIssueIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetCommentsByIssueIdQuery,
    GetCommentsByIssueIdQueryVariables
  >(GetCommentsByIssueIdDocument, options);
}
export function useGetCommentsByIssueIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCommentsByIssueIdQuery,
    GetCommentsByIssueIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetCommentsByIssueIdQuery,
    GetCommentsByIssueIdQueryVariables
  >(GetCommentsByIssueIdDocument, options);
}
export type GetCommentsByIssueIdQueryHookResult = ReturnType<
  typeof useGetCommentsByIssueIdQuery
>;
export type GetCommentsByIssueIdLazyQueryHookResult = ReturnType<
  typeof useGetCommentsByIssueIdLazyQuery
>;
export type GetCommentsByIssueIdQueryResult = Apollo.QueryResult<
  GetCommentsByIssueIdQuery,
  GetCommentsByIssueIdQueryVariables
>;
export function refetchGetCommentsByIssueIdQuery(
  variables: GetCommentsByIssueIdQueryVariables
) {
  return { query: GetCommentsByIssueIdDocument, variables: variables };
}
export const GetCurrentUserByIdDocument = gql`
  query getCurrentUserById($userId: uuid) {
    user: users(where: { id: { _eq: $userId } }) {
      id
      email
      username
      accountType
    }
  }
`;
export type GetCurrentUserByIdComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    GetCurrentUserByIdQuery,
    GetCurrentUserByIdQueryVariables
  >,
  "query"
>;

export const GetCurrentUserByIdComponent = (
  props: GetCurrentUserByIdComponentProps
) => (
  <ApolloReactComponents.Query<
    GetCurrentUserByIdQuery,
    GetCurrentUserByIdQueryVariables
  >
    query={GetCurrentUserByIdDocument}
    {...props}
  />
);

export type GetCurrentUserByIdProps<
  TChildProps = {},
  TDataName extends string = "data"
> = {
  [key in TDataName]: ApolloReactHoc.DataValue<
    GetCurrentUserByIdQuery,
    GetCurrentUserByIdQueryVariables
  >;
} & TChildProps;
export function withGetCurrentUserById<
  TProps,
  TChildProps = {},
  TDataName extends string = "data"
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    GetCurrentUserByIdQuery,
    GetCurrentUserByIdQueryVariables,
    GetCurrentUserByIdProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    GetCurrentUserByIdQuery,
    GetCurrentUserByIdQueryVariables,
    GetCurrentUserByIdProps<TChildProps, TDataName>
  >(GetCurrentUserByIdDocument, {
    alias: "getCurrentUserById",
    ...operationOptions,
  });
}

/**
 * __useGetCurrentUserByIdQuery__
 *
 * To run a query within a React component, call `useGetCurrentUserByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCurrentUserByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCurrentUserByIdQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetCurrentUserByIdQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetCurrentUserByIdQuery,
    GetCurrentUserByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetCurrentUserByIdQuery,
    GetCurrentUserByIdQueryVariables
  >(GetCurrentUserByIdDocument, options);
}
export function useGetCurrentUserByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCurrentUserByIdQuery,
    GetCurrentUserByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetCurrentUserByIdQuery,
    GetCurrentUserByIdQueryVariables
  >(GetCurrentUserByIdDocument, options);
}
export type GetCurrentUserByIdQueryHookResult = ReturnType<
  typeof useGetCurrentUserByIdQuery
>;
export type GetCurrentUserByIdLazyQueryHookResult = ReturnType<
  typeof useGetCurrentUserByIdLazyQuery
>;
export type GetCurrentUserByIdQueryResult = Apollo.QueryResult<
  GetCurrentUserByIdQuery,
  GetCurrentUserByIdQueryVariables
>;
export function refetchGetCurrentUserByIdQuery(
  variables?: GetCurrentUserByIdQueryVariables
) {
  return { query: GetCurrentUserByIdDocument, variables: variables };
}
export const GetIssueByIdDocument = gql`
  query getIssueById($issueId: uuid!) {
    issues_by_pk(id: $issueId) {
      content
      id
      isPrivate
      title
      creatorId
      link
      fieldViewScale
      category
      status
      created_at
      user {
        username
      }
      letters_aggregate {
        aggregate {
          count
        }
      }
      userIssueListEntries_aggregate(
        where: { userIssueList: { type: { _eq: LIKED } } }
      ) {
        aggregate {
          count
        }
      }
    }
  }
`;
export type GetIssueByIdComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    GetIssueByIdQuery,
    GetIssueByIdQueryVariables
  >,
  "query"
> &
  (
    | { variables: GetIssueByIdQueryVariables; skip?: boolean }
    | { skip: boolean }
  );

export const GetIssueByIdComponent = (props: GetIssueByIdComponentProps) => (
  <ApolloReactComponents.Query<GetIssueByIdQuery, GetIssueByIdQueryVariables>
    query={GetIssueByIdDocument}
    {...props}
  />
);

export type GetIssueByIdProps<
  TChildProps = {},
  TDataName extends string = "data"
> = {
  [key in TDataName]: ApolloReactHoc.DataValue<
    GetIssueByIdQuery,
    GetIssueByIdQueryVariables
  >;
} & TChildProps;
export function withGetIssueById<
  TProps,
  TChildProps = {},
  TDataName extends string = "data"
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    GetIssueByIdQuery,
    GetIssueByIdQueryVariables,
    GetIssueByIdProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    GetIssueByIdQuery,
    GetIssueByIdQueryVariables,
    GetIssueByIdProps<TChildProps, TDataName>
  >(GetIssueByIdDocument, {
    alias: "getIssueById",
    ...operationOptions,
  });
}

/**
 * __useGetIssueByIdQuery__
 *
 * To run a query within a React component, call `useGetIssueByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetIssueByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetIssueByIdQuery({
 *   variables: {
 *      issueId: // value for 'issueId'
 *   },
 * });
 */
export function useGetIssueByIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetIssueByIdQuery,
    GetIssueByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetIssueByIdQuery, GetIssueByIdQueryVariables>(
    GetIssueByIdDocument,
    options
  );
}
export function useGetIssueByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetIssueByIdQuery,
    GetIssueByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetIssueByIdQuery, GetIssueByIdQueryVariables>(
    GetIssueByIdDocument,
    options
  );
}
export type GetIssueByIdQueryHookResult = ReturnType<
  typeof useGetIssueByIdQuery
>;
export type GetIssueByIdLazyQueryHookResult = ReturnType<
  typeof useGetIssueByIdLazyQuery
>;
export type GetIssueByIdQueryResult = Apollo.QueryResult<
  GetIssueByIdQuery,
  GetIssueByIdQueryVariables
>;
export function refetchGetIssueByIdQuery(
  variables: GetIssueByIdQueryVariables
) {
  return { query: GetIssueByIdDocument, variables: variables };
}
export const GetLetterByIdDocument = gql`
  query getLetterById($letterId: uuid!) {
    letters_by_pk(id: $letterId) {
      city
      id
      state
      status
      street
      unit
      creatorName
      creatorSurname
      topic
      feelings
      expectations
      additionalInformation
      issueId
      sendEmail
      language
      issue {
        content
        isPrivate
        updated_at
        created_at
        title
        id
      }
      letterContents {
        content
        created_at
        id
        updated_at
        representative {
          id
          firstname
          lastname
          middlename
        }
      }
    }
  }
`;
export type GetLetterByIdComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    GetLetterByIdQuery,
    GetLetterByIdQueryVariables
  >,
  "query"
> &
  (
    | { variables: GetLetterByIdQueryVariables; skip?: boolean }
    | { skip: boolean }
  );

export const GetLetterByIdComponent = (props: GetLetterByIdComponentProps) => (
  <ApolloReactComponents.Query<GetLetterByIdQuery, GetLetterByIdQueryVariables>
    query={GetLetterByIdDocument}
    {...props}
  />
);

export type GetLetterByIdProps<
  TChildProps = {},
  TDataName extends string = "data"
> = {
  [key in TDataName]: ApolloReactHoc.DataValue<
    GetLetterByIdQuery,
    GetLetterByIdQueryVariables
  >;
} & TChildProps;
export function withGetLetterById<
  TProps,
  TChildProps = {},
  TDataName extends string = "data"
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    GetLetterByIdQuery,
    GetLetterByIdQueryVariables,
    GetLetterByIdProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    GetLetterByIdQuery,
    GetLetterByIdQueryVariables,
    GetLetterByIdProps<TChildProps, TDataName>
  >(GetLetterByIdDocument, {
    alias: "getLetterById",
    ...operationOptions,
  });
}

/**
 * __useGetLetterByIdQuery__
 *
 * To run a query within a React component, call `useGetLetterByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLetterByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLetterByIdQuery({
 *   variables: {
 *      letterId: // value for 'letterId'
 *   },
 * });
 */
export function useGetLetterByIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetLetterByIdQuery,
    GetLetterByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetLetterByIdQuery, GetLetterByIdQueryVariables>(
    GetLetterByIdDocument,
    options
  );
}
export function useGetLetterByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetLetterByIdQuery,
    GetLetterByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetLetterByIdQuery, GetLetterByIdQueryVariables>(
    GetLetterByIdDocument,
    options
  );
}
export type GetLetterByIdQueryHookResult = ReturnType<
  typeof useGetLetterByIdQuery
>;
export type GetLetterByIdLazyQueryHookResult = ReturnType<
  typeof useGetLetterByIdLazyQuery
>;
export type GetLetterByIdQueryResult = Apollo.QueryResult<
  GetLetterByIdQuery,
  GetLetterByIdQueryVariables
>;
export function refetchGetLetterByIdQuery(
  variables: GetLetterByIdQueryVariables
) {
  return { query: GetLetterByIdDocument, variables: variables };
}
export const GetLetterContentByIdDocument = gql`
  query getLetterContentById($contentId: uuid!) {
    letterContents_by_pk(id: $contentId) {
      id
      content
      representative {
        firstname
        lastname
      }
    }
  }
`;
export type GetLetterContentByIdComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    GetLetterContentByIdQuery,
    GetLetterContentByIdQueryVariables
  >,
  "query"
> &
  (
    | { variables: GetLetterContentByIdQueryVariables; skip?: boolean }
    | { skip: boolean }
  );

export const GetLetterContentByIdComponent = (
  props: GetLetterContentByIdComponentProps
) => (
  <ApolloReactComponents.Query<
    GetLetterContentByIdQuery,
    GetLetterContentByIdQueryVariables
  >
    query={GetLetterContentByIdDocument}
    {...props}
  />
);

export type GetLetterContentByIdProps<
  TChildProps = {},
  TDataName extends string = "data"
> = {
  [key in TDataName]: ApolloReactHoc.DataValue<
    GetLetterContentByIdQuery,
    GetLetterContentByIdQueryVariables
  >;
} & TChildProps;
export function withGetLetterContentById<
  TProps,
  TChildProps = {},
  TDataName extends string = "data"
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    GetLetterContentByIdQuery,
    GetLetterContentByIdQueryVariables,
    GetLetterContentByIdProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    GetLetterContentByIdQuery,
    GetLetterContentByIdQueryVariables,
    GetLetterContentByIdProps<TChildProps, TDataName>
  >(GetLetterContentByIdDocument, {
    alias: "getLetterContentById",
    ...operationOptions,
  });
}

/**
 * __useGetLetterContentByIdQuery__
 *
 * To run a query within a React component, call `useGetLetterContentByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLetterContentByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLetterContentByIdQuery({
 *   variables: {
 *      contentId: // value for 'contentId'
 *   },
 * });
 */
export function useGetLetterContentByIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetLetterContentByIdQuery,
    GetLetterContentByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetLetterContentByIdQuery,
    GetLetterContentByIdQueryVariables
  >(GetLetterContentByIdDocument, options);
}
export function useGetLetterContentByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetLetterContentByIdQuery,
    GetLetterContentByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetLetterContentByIdQuery,
    GetLetterContentByIdQueryVariables
  >(GetLetterContentByIdDocument, options);
}
export type GetLetterContentByIdQueryHookResult = ReturnType<
  typeof useGetLetterContentByIdQuery
>;
export type GetLetterContentByIdLazyQueryHookResult = ReturnType<
  typeof useGetLetterContentByIdLazyQuery
>;
export type GetLetterContentByIdQueryResult = Apollo.QueryResult<
  GetLetterContentByIdQuery,
  GetLetterContentByIdQueryVariables
>;
export function refetchGetLetterContentByIdQuery(
  variables: GetLetterContentByIdQueryVariables
) {
  return { query: GetLetterContentByIdDocument, variables: variables };
}
export const GetRepresentativesDocument = gql`
  query getRepresentatives {
    representatives {
      firstname
      id
      lastname
      middlename
    }
  }
`;
export type GetRepresentativesComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    GetRepresentativesQuery,
    GetRepresentativesQueryVariables
  >,
  "query"
>;

export const GetRepresentativesComponent = (
  props: GetRepresentativesComponentProps
) => (
  <ApolloReactComponents.Query<
    GetRepresentativesQuery,
    GetRepresentativesQueryVariables
  >
    query={GetRepresentativesDocument}
    {...props}
  />
);

export type GetRepresentativesProps<
  TChildProps = {},
  TDataName extends string = "data"
> = {
  [key in TDataName]: ApolloReactHoc.DataValue<
    GetRepresentativesQuery,
    GetRepresentativesQueryVariables
  >;
} & TChildProps;
export function withGetRepresentatives<
  TProps,
  TChildProps = {},
  TDataName extends string = "data"
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    GetRepresentativesQuery,
    GetRepresentativesQueryVariables,
    GetRepresentativesProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    GetRepresentativesQuery,
    GetRepresentativesQueryVariables,
    GetRepresentativesProps<TChildProps, TDataName>
  >(GetRepresentativesDocument, {
    alias: "getRepresentatives",
    ...operationOptions,
  });
}

/**
 * __useGetRepresentativesQuery__
 *
 * To run a query within a React component, call `useGetRepresentativesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRepresentativesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRepresentativesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetRepresentativesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetRepresentativesQuery,
    GetRepresentativesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetRepresentativesQuery,
    GetRepresentativesQueryVariables
  >(GetRepresentativesDocument, options);
}
export function useGetRepresentativesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetRepresentativesQuery,
    GetRepresentativesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetRepresentativesQuery,
    GetRepresentativesQueryVariables
  >(GetRepresentativesDocument, options);
}
export type GetRepresentativesQueryHookResult = ReturnType<
  typeof useGetRepresentativesQuery
>;
export type GetRepresentativesLazyQueryHookResult = ReturnType<
  typeof useGetRepresentativesLazyQuery
>;
export type GetRepresentativesQueryResult = Apollo.QueryResult<
  GetRepresentativesQuery,
  GetRepresentativesQueryVariables
>;
export function refetchGetRepresentativesQuery(
  variables?: GetRepresentativesQueryVariables
) {
  return { query: GetRepresentativesDocument, variables: variables };
}
export const GetUserDocument = gql`
  query getUser($where: users_bool_exp) {
    user: users(where: $where, limit: 1) {
      id
      username
      email
      emailVerified
      image
      passwordHash
      passwordResetToken
      passwordResetTokenExpiresAt
      emailConfirmationToken
      emailConfirmationLastSentAt
      passwordResetLastSentAt
      accountType
      lastActiveAt
    }
  }
`;
export type GetUserComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    GetUserQuery,
    GetUserQueryVariables
  >,
  "query"
>;

export const GetUserComponent = (props: GetUserComponentProps) => (
  <ApolloReactComponents.Query<GetUserQuery, GetUserQueryVariables>
    query={GetUserDocument}
    {...props}
  />
);

export type GetUserProps<
  TChildProps = {},
  TDataName extends string = "data"
> = {
  [key in TDataName]: ApolloReactHoc.DataValue<
    GetUserQuery,
    GetUserQueryVariables
  >;
} & TChildProps;
export function withGetUser<
  TProps,
  TChildProps = {},
  TDataName extends string = "data"
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    GetUserQuery,
    GetUserQueryVariables,
    GetUserProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    GetUserQuery,
    GetUserQueryVariables,
    GetUserProps<TChildProps, TDataName>
  >(GetUserDocument, {
    alias: "getUser",
    ...operationOptions,
  });
}

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetUserQuery(
  baseOptions?: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(
    GetUserDocument,
    options
  );
}
export function useGetUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(
    GetUserDocument,
    options
  );
}
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<
  GetUserQuery,
  GetUserQueryVariables
>;
export function refetchGetUserQuery(variables?: GetUserQueryVariables) {
  return { query: GetUserDocument, variables: variables };
}
export const GetUserByIdDocument = gql`
  query getUserById($userId: uuid!) {
    users_by_pk(id: $userId) {
      id
      username
      passwordHash
      emailVerified
      email
      emailConfirmationToken
      emailConfirmationLastSentAt
      passwordResetLastSentAt
      passwordResetTokenExpiresAt
      accountType
    }
  }
`;
export type GetUserByIdComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    GetUserByIdQuery,
    GetUserByIdQueryVariables
  >,
  "query"
> &
  (
    | { variables: GetUserByIdQueryVariables; skip?: boolean }
    | { skip: boolean }
  );

export const GetUserByIdComponent = (props: GetUserByIdComponentProps) => (
  <ApolloReactComponents.Query<GetUserByIdQuery, GetUserByIdQueryVariables>
    query={GetUserByIdDocument}
    {...props}
  />
);

export type GetUserByIdProps<
  TChildProps = {},
  TDataName extends string = "data"
> = {
  [key in TDataName]: ApolloReactHoc.DataValue<
    GetUserByIdQuery,
    GetUserByIdQueryVariables
  >;
} & TChildProps;
export function withGetUserById<
  TProps,
  TChildProps = {},
  TDataName extends string = "data"
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    GetUserByIdQuery,
    GetUserByIdQueryVariables,
    GetUserByIdProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    GetUserByIdQuery,
    GetUserByIdQueryVariables,
    GetUserByIdProps<TChildProps, TDataName>
  >(GetUserByIdDocument, {
    alias: "getUserById",
    ...operationOptions,
  });
}

/**
 * __useGetUserByIdQuery__
 *
 * To run a query within a React component, call `useGetUserByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserByIdQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetUserByIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetUserByIdQuery,
    GetUserByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(
    GetUserByIdDocument,
    options
  );
}
export function useGetUserByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUserByIdQuery,
    GetUserByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(
    GetUserByIdDocument,
    options
  );
}
export type GetUserByIdQueryHookResult = ReturnType<typeof useGetUserByIdQuery>;
export type GetUserByIdLazyQueryHookResult = ReturnType<
  typeof useGetUserByIdLazyQuery
>;
export type GetUserByIdQueryResult = Apollo.QueryResult<
  GetUserByIdQuery,
  GetUserByIdQueryVariables
>;
export function refetchGetUserByIdQuery(variables: GetUserByIdQueryVariables) {
  return { query: GetUserByIdDocument, variables: variables };
}
export const GetExploreIssuesDocument = gql`
  query getExploreIssues($limit: Int!, $offset: Int!, $where: issues_bool_exp) {
    issues(
      limit: $limit
      offset: $offset
      order_by: { created_at: desc }
      where: $where
    ) {
      category
      content
      id
      title
      created_at
      status
      creatorId
      fieldViewScale
      user {
        email
        id
        image
        username
      }
      issues_users {
        id
        user {
          email
          username
          id
          image
        }
      }
      userIssueListEntries_aggregate(
        where: { userIssueList: { type: { _eq: LIKED } } }
      ) {
        aggregate {
          count
        }
      }
    }
  }
`;
export type GetExploreIssuesComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    GetExploreIssuesQuery,
    GetExploreIssuesQueryVariables
  >,
  "query"
> &
  (
    | { variables: GetExploreIssuesQueryVariables; skip?: boolean }
    | { skip: boolean }
  );

export const GetExploreIssuesComponent = (
  props: GetExploreIssuesComponentProps
) => (
  <ApolloReactComponents.Query<
    GetExploreIssuesQuery,
    GetExploreIssuesQueryVariables
  >
    query={GetExploreIssuesDocument}
    {...props}
  />
);

export type GetExploreIssuesProps<
  TChildProps = {},
  TDataName extends string = "data"
> = {
  [key in TDataName]: ApolloReactHoc.DataValue<
    GetExploreIssuesQuery,
    GetExploreIssuesQueryVariables
  >;
} & TChildProps;
export function withGetExploreIssues<
  TProps,
  TChildProps = {},
  TDataName extends string = "data"
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    GetExploreIssuesQuery,
    GetExploreIssuesQueryVariables,
    GetExploreIssuesProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    GetExploreIssuesQuery,
    GetExploreIssuesQueryVariables,
    GetExploreIssuesProps<TChildProps, TDataName>
  >(GetExploreIssuesDocument, {
    alias: "getExploreIssues",
    ...operationOptions,
  });
}

/**
 * __useGetExploreIssuesQuery__
 *
 * To run a query within a React component, call `useGetExploreIssuesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetExploreIssuesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetExploreIssuesQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetExploreIssuesQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetExploreIssuesQuery,
    GetExploreIssuesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetExploreIssuesQuery, GetExploreIssuesQueryVariables>(
    GetExploreIssuesDocument,
    options
  );
}
export function useGetExploreIssuesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetExploreIssuesQuery,
    GetExploreIssuesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetExploreIssuesQuery,
    GetExploreIssuesQueryVariables
  >(GetExploreIssuesDocument, options);
}
export type GetExploreIssuesQueryHookResult = ReturnType<
  typeof useGetExploreIssuesQuery
>;
export type GetExploreIssuesLazyQueryHookResult = ReturnType<
  typeof useGetExploreIssuesLazyQuery
>;
export type GetExploreIssuesQueryResult = Apollo.QueryResult<
  GetExploreIssuesQuery,
  GetExploreIssuesQueryVariables
>;
export function refetchGetExploreIssuesQuery(
  variables: GetExploreIssuesQueryVariables
) {
  return { query: GetExploreIssuesDocument, variables: variables };
}
export const GetExploreIssuesCountDocument = gql`
  query getExploreIssuesCount($where: issues_bool_exp) {
    issues_aggregate(where: $where) {
      aggregate {
        count
      }
    }
  }
`;
export type GetExploreIssuesCountComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    GetExploreIssuesCountQuery,
    GetExploreIssuesCountQueryVariables
  >,
  "query"
>;

export const GetExploreIssuesCountComponent = (
  props: GetExploreIssuesCountComponentProps
) => (
  <ApolloReactComponents.Query<
    GetExploreIssuesCountQuery,
    GetExploreIssuesCountQueryVariables
  >
    query={GetExploreIssuesCountDocument}
    {...props}
  />
);

export type GetExploreIssuesCountProps<
  TChildProps = {},
  TDataName extends string = "data"
> = {
  [key in TDataName]: ApolloReactHoc.DataValue<
    GetExploreIssuesCountQuery,
    GetExploreIssuesCountQueryVariables
  >;
} & TChildProps;
export function withGetExploreIssuesCount<
  TProps,
  TChildProps = {},
  TDataName extends string = "data"
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    GetExploreIssuesCountQuery,
    GetExploreIssuesCountQueryVariables,
    GetExploreIssuesCountProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    GetExploreIssuesCountQuery,
    GetExploreIssuesCountQueryVariables,
    GetExploreIssuesCountProps<TChildProps, TDataName>
  >(GetExploreIssuesCountDocument, {
    alias: "getExploreIssuesCount",
    ...operationOptions,
  });
}

/**
 * __useGetExploreIssuesCountQuery__
 *
 * To run a query within a React component, call `useGetExploreIssuesCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetExploreIssuesCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetExploreIssuesCountQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetExploreIssuesCountQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetExploreIssuesCountQuery,
    GetExploreIssuesCountQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetExploreIssuesCountQuery,
    GetExploreIssuesCountQueryVariables
  >(GetExploreIssuesCountDocument, options);
}
export function useGetExploreIssuesCountLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetExploreIssuesCountQuery,
    GetExploreIssuesCountQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetExploreIssuesCountQuery,
    GetExploreIssuesCountQueryVariables
  >(GetExploreIssuesCountDocument, options);
}
export type GetExploreIssuesCountQueryHookResult = ReturnType<
  typeof useGetExploreIssuesCountQuery
>;
export type GetExploreIssuesCountLazyQueryHookResult = ReturnType<
  typeof useGetExploreIssuesCountLazyQuery
>;
export type GetExploreIssuesCountQueryResult = Apollo.QueryResult<
  GetExploreIssuesCountQuery,
  GetExploreIssuesCountQueryVariables
>;
export function refetchGetExploreIssuesCountQuery(
  variables?: GetExploreIssuesCountQueryVariables
) {
  return { query: GetExploreIssuesCountDocument, variables: variables };
}
export const GetUserIssueListDocument = gql`
  query getUserIssueList($userId: uuid!, $type: userIssueListType_enum!) {
    userIssueLists(
      where: { _and: [{ userId: { _eq: $userId } }, { type: { _eq: $type } }] }
    ) {
      id
      userIssueListEntries {
        id
        issueId
      }
    }
  }
`;
export type GetUserIssueListComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    GetUserIssueListQuery,
    GetUserIssueListQueryVariables
  >,
  "query"
> &
  (
    | { variables: GetUserIssueListQueryVariables; skip?: boolean }
    | { skip: boolean }
  );

export const GetUserIssueListComponent = (
  props: GetUserIssueListComponentProps
) => (
  <ApolloReactComponents.Query<
    GetUserIssueListQuery,
    GetUserIssueListQueryVariables
  >
    query={GetUserIssueListDocument}
    {...props}
  />
);

export type GetUserIssueListProps<
  TChildProps = {},
  TDataName extends string = "data"
> = {
  [key in TDataName]: ApolloReactHoc.DataValue<
    GetUserIssueListQuery,
    GetUserIssueListQueryVariables
  >;
} & TChildProps;
export function withGetUserIssueList<
  TProps,
  TChildProps = {},
  TDataName extends string = "data"
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    GetUserIssueListQuery,
    GetUserIssueListQueryVariables,
    GetUserIssueListProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    GetUserIssueListQuery,
    GetUserIssueListQueryVariables,
    GetUserIssueListProps<TChildProps, TDataName>
  >(GetUserIssueListDocument, {
    alias: "getUserIssueList",
    ...operationOptions,
  });
}

/**
 * __useGetUserIssueListQuery__
 *
 * To run a query within a React component, call `useGetUserIssueListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserIssueListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserIssueListQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      type: // value for 'type'
 *   },
 * });
 */
export function useGetUserIssueListQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetUserIssueListQuery,
    GetUserIssueListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetUserIssueListQuery, GetUserIssueListQueryVariables>(
    GetUserIssueListDocument,
    options
  );
}
export function useGetUserIssueListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUserIssueListQuery,
    GetUserIssueListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetUserIssueListQuery,
    GetUserIssueListQueryVariables
  >(GetUserIssueListDocument, options);
}
export type GetUserIssueListQueryHookResult = ReturnType<
  typeof useGetUserIssueListQuery
>;
export type GetUserIssueListLazyQueryHookResult = ReturnType<
  typeof useGetUserIssueListLazyQuery
>;
export type GetUserIssueListQueryResult = Apollo.QueryResult<
  GetUserIssueListQuery,
  GetUserIssueListQueryVariables
>;
export function refetchGetUserIssueListQuery(
  variables: GetUserIssueListQueryVariables
) {
  return { query: GetUserIssueListDocument, variables: variables };
}

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AuthenticateWithGoogleOutput: ResolverTypeWrapper<AuthenticateWithGoogleOutput>;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
  Boolean_comparison_exp: Boolean_Comparison_Exp;
  Int: ResolverTypeWrapper<Scalars["Int"]>;
  Int_comparison_exp: Int_Comparison_Exp;
  String: ResolverTypeWrapper<Scalars["String"]>;
  String_comparison_exp: String_Comparison_Exp;
  ValidatePasswordResetTokenOutput: ResolverTypeWrapper<ValidatePasswordResetTokenOutput>;
  addUserZipCodeOutput: ResolverTypeWrapper<AddUserZipCodeOutput>;
  authenticateWithCredentialsOutput: ResolverTypeWrapper<AuthenticateWithCredentialsOutput>;
  comments: ResolverTypeWrapper<Comments>;
  comments_aggregate: ResolverTypeWrapper<Comments_Aggregate>;
  comments_aggregate_bool_exp: Comments_Aggregate_Bool_Exp;
  comments_aggregate_bool_exp_count: Comments_Aggregate_Bool_Exp_Count;
  comments_aggregate_fields: ResolverTypeWrapper<Comments_Aggregate_Fields>;
  comments_aggregate_order_by: Comments_Aggregate_Order_By;
  comments_arr_rel_insert_input: Comments_Arr_Rel_Insert_Input;
  comments_bool_exp: Comments_Bool_Exp;
  comments_constraint: Comments_Constraint;
  comments_insert_input: Comments_Insert_Input;
  comments_max_fields: ResolverTypeWrapper<Comments_Max_Fields>;
  comments_max_order_by: Comments_Max_Order_By;
  comments_min_fields: ResolverTypeWrapper<Comments_Min_Fields>;
  comments_min_order_by: Comments_Min_Order_By;
  comments_mutation_response: ResolverTypeWrapper<Comments_Mutation_Response>;
  comments_obj_rel_insert_input: Comments_Obj_Rel_Insert_Input;
  comments_on_conflict: Comments_On_Conflict;
  comments_order_by: Comments_Order_By;
  comments_pk_columns_input: Comments_Pk_Columns_Input;
  comments_select_column: Comments_Select_Column;
  comments_set_input: Comments_Set_Input;
  comments_stream_cursor_input: Comments_Stream_Cursor_Input;
  comments_stream_cursor_value_input: Comments_Stream_Cursor_Value_Input;
  comments_update_column: Comments_Update_Column;
  comments_updates: Comments_Updates;
  confirmEmailOutput: ResolverTypeWrapper<ConfirmEmailOutput>;
  cursor_ordering: Cursor_Ordering;
  issueCategory: ResolverTypeWrapper<IssueCategory>;
  issueCategory_aggregate: ResolverTypeWrapper<IssueCategory_Aggregate>;
  issueCategory_aggregate_fields: ResolverTypeWrapper<IssueCategory_Aggregate_Fields>;
  issueCategory_bool_exp: IssueCategory_Bool_Exp;
  issueCategory_constraint: IssueCategory_Constraint;
  issueCategory_enum: IssueCategory_Enum;
  issueCategory_enum_comparison_exp: IssueCategory_Enum_Comparison_Exp;
  issueCategory_insert_input: IssueCategory_Insert_Input;
  issueCategory_max_fields: ResolverTypeWrapper<IssueCategory_Max_Fields>;
  issueCategory_min_fields: ResolverTypeWrapper<IssueCategory_Min_Fields>;
  issueCategory_mutation_response: ResolverTypeWrapper<IssueCategory_Mutation_Response>;
  issueCategory_obj_rel_insert_input: IssueCategory_Obj_Rel_Insert_Input;
  issueCategory_on_conflict: IssueCategory_On_Conflict;
  issueCategory_order_by: IssueCategory_Order_By;
  issueCategory_pk_columns_input: IssueCategory_Pk_Columns_Input;
  issueCategory_select_column: IssueCategory_Select_Column;
  issueCategory_set_input: IssueCategory_Set_Input;
  issueCategory_stream_cursor_input: IssueCategory_Stream_Cursor_Input;
  issueCategory_stream_cursor_value_input: IssueCategory_Stream_Cursor_Value_Input;
  issueCategory_update_column: IssueCategory_Update_Column;
  issueCategory_updates: IssueCategory_Updates;
  issueFieldViewScale: ResolverTypeWrapper<IssueFieldViewScale>;
  issueFieldViewScale_aggregate: ResolverTypeWrapper<IssueFieldViewScale_Aggregate>;
  issueFieldViewScale_aggregate_fields: ResolverTypeWrapper<IssueFieldViewScale_Aggregate_Fields>;
  issueFieldViewScale_bool_exp: IssueFieldViewScale_Bool_Exp;
  issueFieldViewScale_constraint: IssueFieldViewScale_Constraint;
  issueFieldViewScale_enum: IssueFieldViewScale_Enum;
  issueFieldViewScale_enum_comparison_exp: IssueFieldViewScale_Enum_Comparison_Exp;
  issueFieldViewScale_insert_input: IssueFieldViewScale_Insert_Input;
  issueFieldViewScale_max_fields: ResolverTypeWrapper<IssueFieldViewScale_Max_Fields>;
  issueFieldViewScale_min_fields: ResolverTypeWrapper<IssueFieldViewScale_Min_Fields>;
  issueFieldViewScale_mutation_response: ResolverTypeWrapper<IssueFieldViewScale_Mutation_Response>;
  issueFieldViewScale_obj_rel_insert_input: IssueFieldViewScale_Obj_Rel_Insert_Input;
  issueFieldViewScale_on_conflict: IssueFieldViewScale_On_Conflict;
  issueFieldViewScale_order_by: IssueFieldViewScale_Order_By;
  issueFieldViewScale_pk_columns_input: IssueFieldViewScale_Pk_Columns_Input;
  issueFieldViewScale_select_column: IssueFieldViewScale_Select_Column;
  issueFieldViewScale_set_input: IssueFieldViewScale_Set_Input;
  issueFieldViewScale_stream_cursor_input: IssueFieldViewScale_Stream_Cursor_Input;
  issueFieldViewScale_stream_cursor_value_input: IssueFieldViewScale_Stream_Cursor_Value_Input;
  issueFieldViewScale_update_column: IssueFieldViewScale_Update_Column;
  issueFieldViewScale_updates: IssueFieldViewScale_Updates;
  issueStatus: ResolverTypeWrapper<IssueStatus>;
  issueStatus_aggregate: ResolverTypeWrapper<IssueStatus_Aggregate>;
  issueStatus_aggregate_fields: ResolverTypeWrapper<IssueStatus_Aggregate_Fields>;
  issueStatus_bool_exp: IssueStatus_Bool_Exp;
  issueStatus_constraint: IssueStatus_Constraint;
  issueStatus_enum: IssueStatus_Enum;
  issueStatus_enum_comparison_exp: IssueStatus_Enum_Comparison_Exp;
  issueStatus_insert_input: IssueStatus_Insert_Input;
  issueStatus_max_fields: ResolverTypeWrapper<IssueStatus_Max_Fields>;
  issueStatus_min_fields: ResolverTypeWrapper<IssueStatus_Min_Fields>;
  issueStatus_mutation_response: ResolverTypeWrapper<IssueStatus_Mutation_Response>;
  issueStatus_obj_rel_insert_input: IssueStatus_Obj_Rel_Insert_Input;
  issueStatus_on_conflict: IssueStatus_On_Conflict;
  issueStatus_order_by: IssueStatus_Order_By;
  issueStatus_pk_columns_input: IssueStatus_Pk_Columns_Input;
  issueStatus_select_column: IssueStatus_Select_Column;
  issueStatus_set_input: IssueStatus_Set_Input;
  issueStatus_stream_cursor_input: IssueStatus_Stream_Cursor_Input;
  issueStatus_stream_cursor_value_input: IssueStatus_Stream_Cursor_Value_Input;
  issueStatus_update_column: IssueStatus_Update_Column;
  issueStatus_updates: IssueStatus_Updates;
  issues: ResolverTypeWrapper<Issues>;
  issues_aggregate: ResolverTypeWrapper<Issues_Aggregate>;
  issues_aggregate_bool_exp: Issues_Aggregate_Bool_Exp;
  issues_aggregate_bool_exp_bool_and: Issues_Aggregate_Bool_Exp_Bool_And;
  issues_aggregate_bool_exp_bool_or: Issues_Aggregate_Bool_Exp_Bool_Or;
  issues_aggregate_bool_exp_count: Issues_Aggregate_Bool_Exp_Count;
  issues_aggregate_fields: ResolverTypeWrapper<Issues_Aggregate_Fields>;
  issues_aggregate_order_by: Issues_Aggregate_Order_By;
  issues_arr_rel_insert_input: Issues_Arr_Rel_Insert_Input;
  issues_bool_exp: Issues_Bool_Exp;
  issues_constraint: Issues_Constraint;
  issues_insert_input: Issues_Insert_Input;
  issues_max_fields: ResolverTypeWrapper<Issues_Max_Fields>;
  issues_max_order_by: Issues_Max_Order_By;
  issues_min_fields: ResolverTypeWrapper<Issues_Min_Fields>;
  issues_min_order_by: Issues_Min_Order_By;
  issues_mutation_response: ResolverTypeWrapper<Issues_Mutation_Response>;
  issues_obj_rel_insert_input: Issues_Obj_Rel_Insert_Input;
  issues_on_conflict: Issues_On_Conflict;
  issues_order_by: Issues_Order_By;
  issues_pk_columns_input: Issues_Pk_Columns_Input;
  issues_select_column: Issues_Select_Column;
  issues_select_column_issues_aggregate_bool_exp_bool_and_arguments_columns: Issues_Select_Column_Issues_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  issues_select_column_issues_aggregate_bool_exp_bool_or_arguments_columns: Issues_Select_Column_Issues_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  issues_set_input: Issues_Set_Input;
  issues_stream_cursor_input: Issues_Stream_Cursor_Input;
  issues_stream_cursor_value_input: Issues_Stream_Cursor_Value_Input;
  issues_update_column: Issues_Update_Column;
  issues_updates: Issues_Updates;
  issues_users: ResolverTypeWrapper<Issues_Users>;
  issues_users_aggregate: ResolverTypeWrapper<Issues_Users_Aggregate>;
  issues_users_aggregate_bool_exp: Issues_Users_Aggregate_Bool_Exp;
  issues_users_aggregate_bool_exp_count: Issues_Users_Aggregate_Bool_Exp_Count;
  issues_users_aggregate_fields: ResolverTypeWrapper<Issues_Users_Aggregate_Fields>;
  issues_users_aggregate_order_by: Issues_Users_Aggregate_Order_By;
  issues_users_arr_rel_insert_input: Issues_Users_Arr_Rel_Insert_Input;
  issues_users_bool_exp: Issues_Users_Bool_Exp;
  issues_users_constraint: Issues_Users_Constraint;
  issues_users_insert_input: Issues_Users_Insert_Input;
  issues_users_max_fields: ResolverTypeWrapper<Issues_Users_Max_Fields>;
  issues_users_max_order_by: Issues_Users_Max_Order_By;
  issues_users_min_fields: ResolverTypeWrapper<Issues_Users_Min_Fields>;
  issues_users_min_order_by: Issues_Users_Min_Order_By;
  issues_users_mutation_response: ResolverTypeWrapper<Issues_Users_Mutation_Response>;
  issues_users_on_conflict: Issues_Users_On_Conflict;
  issues_users_order_by: Issues_Users_Order_By;
  issues_users_pk_columns_input: Issues_Users_Pk_Columns_Input;
  issues_users_select_column: Issues_Users_Select_Column;
  issues_users_set_input: Issues_Users_Set_Input;
  issues_users_stream_cursor_input: Issues_Users_Stream_Cursor_Input;
  issues_users_stream_cursor_value_input: Issues_Users_Stream_Cursor_Value_Input;
  issues_users_update_column: Issues_Users_Update_Column;
  issues_users_updates: Issues_Users_Updates;
  language: ResolverTypeWrapper<Language>;
  language_aggregate: ResolverTypeWrapper<Language_Aggregate>;
  language_aggregate_fields: ResolverTypeWrapper<Language_Aggregate_Fields>;
  language_bool_exp: Language_Bool_Exp;
  language_constraint: Language_Constraint;
  language_enum: Language_Enum;
  language_enum_comparison_exp: Language_Enum_Comparison_Exp;
  language_insert_input: Language_Insert_Input;
  language_max_fields: ResolverTypeWrapper<Language_Max_Fields>;
  language_min_fields: ResolverTypeWrapper<Language_Min_Fields>;
  language_mutation_response: ResolverTypeWrapper<Language_Mutation_Response>;
  language_obj_rel_insert_input: Language_Obj_Rel_Insert_Input;
  language_on_conflict: Language_On_Conflict;
  language_order_by: Language_Order_By;
  language_pk_columns_input: Language_Pk_Columns_Input;
  language_select_column: Language_Select_Column;
  language_set_input: Language_Set_Input;
  language_stream_cursor_input: Language_Stream_Cursor_Input;
  language_stream_cursor_value_input: Language_Stream_Cursor_Value_Input;
  language_update_column: Language_Update_Column;
  language_updates: Language_Updates;
  letterContents: ResolverTypeWrapper<LetterContents>;
  letterContents_aggregate: ResolverTypeWrapper<LetterContents_Aggregate>;
  letterContents_aggregate_bool_exp: LetterContents_Aggregate_Bool_Exp;
  letterContents_aggregate_bool_exp_count: LetterContents_Aggregate_Bool_Exp_Count;
  letterContents_aggregate_fields: ResolverTypeWrapper<LetterContents_Aggregate_Fields>;
  letterContents_aggregate_order_by: LetterContents_Aggregate_Order_By;
  letterContents_arr_rel_insert_input: LetterContents_Arr_Rel_Insert_Input;
  letterContents_bool_exp: LetterContents_Bool_Exp;
  letterContents_constraint: LetterContents_Constraint;
  letterContents_insert_input: LetterContents_Insert_Input;
  letterContents_max_fields: ResolverTypeWrapper<LetterContents_Max_Fields>;
  letterContents_max_order_by: LetterContents_Max_Order_By;
  letterContents_min_fields: ResolverTypeWrapper<LetterContents_Min_Fields>;
  letterContents_min_order_by: LetterContents_Min_Order_By;
  letterContents_mutation_response: ResolverTypeWrapper<LetterContents_Mutation_Response>;
  letterContents_on_conflict: LetterContents_On_Conflict;
  letterContents_order_by: LetterContents_Order_By;
  letterContents_pk_columns_input: LetterContents_Pk_Columns_Input;
  letterContents_select_column: LetterContents_Select_Column;
  letterContents_set_input: LetterContents_Set_Input;
  letterContents_stream_cursor_input: LetterContents_Stream_Cursor_Input;
  letterContents_stream_cursor_value_input: LetterContents_Stream_Cursor_Value_Input;
  letterContents_update_column: LetterContents_Update_Column;
  letterContents_updates: LetterContents_Updates;
  letterStatus: ResolverTypeWrapper<LetterStatus>;
  letterStatus_aggregate: ResolverTypeWrapper<LetterStatus_Aggregate>;
  letterStatus_aggregate_fields: ResolverTypeWrapper<LetterStatus_Aggregate_Fields>;
  letterStatus_bool_exp: LetterStatus_Bool_Exp;
  letterStatus_constraint: LetterStatus_Constraint;
  letterStatus_enum: LetterStatus_Enum;
  letterStatus_enum_comparison_exp: LetterStatus_Enum_Comparison_Exp;
  letterStatus_insert_input: LetterStatus_Insert_Input;
  letterStatus_max_fields: ResolverTypeWrapper<LetterStatus_Max_Fields>;
  letterStatus_min_fields: ResolverTypeWrapper<LetterStatus_Min_Fields>;
  letterStatus_mutation_response: ResolverTypeWrapper<LetterStatus_Mutation_Response>;
  letterStatus_obj_rel_insert_input: LetterStatus_Obj_Rel_Insert_Input;
  letterStatus_on_conflict: LetterStatus_On_Conflict;
  letterStatus_order_by: LetterStatus_Order_By;
  letterStatus_pk_columns_input: LetterStatus_Pk_Columns_Input;
  letterStatus_select_column: LetterStatus_Select_Column;
  letterStatus_set_input: LetterStatus_Set_Input;
  letterStatus_stream_cursor_input: LetterStatus_Stream_Cursor_Input;
  letterStatus_stream_cursor_value_input: LetterStatus_Stream_Cursor_Value_Input;
  letterStatus_update_column: LetterStatus_Update_Column;
  letterStatus_updates: LetterStatus_Updates;
  letters: ResolverTypeWrapper<Letters>;
  letters_aggregate: ResolverTypeWrapper<Letters_Aggregate>;
  letters_aggregate_bool_exp: Letters_Aggregate_Bool_Exp;
  letters_aggregate_bool_exp_bool_and: Letters_Aggregate_Bool_Exp_Bool_And;
  letters_aggregate_bool_exp_bool_or: Letters_Aggregate_Bool_Exp_Bool_Or;
  letters_aggregate_bool_exp_count: Letters_Aggregate_Bool_Exp_Count;
  letters_aggregate_fields: ResolverTypeWrapper<Letters_Aggregate_Fields>;
  letters_aggregate_order_by: Letters_Aggregate_Order_By;
  letters_arr_rel_insert_input: Letters_Arr_Rel_Insert_Input;
  letters_bool_exp: Letters_Bool_Exp;
  letters_constraint: Letters_Constraint;
  letters_insert_input: Letters_Insert_Input;
  letters_max_fields: ResolverTypeWrapper<Letters_Max_Fields>;
  letters_max_order_by: Letters_Max_Order_By;
  letters_min_fields: ResolverTypeWrapper<Letters_Min_Fields>;
  letters_min_order_by: Letters_Min_Order_By;
  letters_mutation_response: ResolverTypeWrapper<Letters_Mutation_Response>;
  letters_obj_rel_insert_input: Letters_Obj_Rel_Insert_Input;
  letters_on_conflict: Letters_On_Conflict;
  letters_order_by: Letters_Order_By;
  letters_pk_columns_input: Letters_Pk_Columns_Input;
  letters_select_column: Letters_Select_Column;
  letters_select_column_letters_aggregate_bool_exp_bool_and_arguments_columns: Letters_Select_Column_Letters_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  letters_select_column_letters_aggregate_bool_exp_bool_or_arguments_columns: Letters_Select_Column_Letters_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  letters_set_input: Letters_Set_Input;
  letters_stream_cursor_input: Letters_Stream_Cursor_Input;
  letters_stream_cursor_value_input: Letters_Stream_Cursor_Value_Input;
  letters_update_column: Letters_Update_Column;
  letters_updates: Letters_Updates;
  mutation_root: ResolverTypeWrapper<{}>;
  order_by: Order_By;
  query_root: ResolverTypeWrapper<{}>;
  representatives: ResolverTypeWrapper<Representatives>;
  representatives_aggregate: ResolverTypeWrapper<Representatives_Aggregate>;
  representatives_aggregate_fields: ResolverTypeWrapper<Representatives_Aggregate_Fields>;
  representatives_bool_exp: Representatives_Bool_Exp;
  representatives_constraint: Representatives_Constraint;
  representatives_insert_input: Representatives_Insert_Input;
  representatives_max_fields: ResolverTypeWrapper<Representatives_Max_Fields>;
  representatives_min_fields: ResolverTypeWrapper<Representatives_Min_Fields>;
  representatives_mutation_response: ResolverTypeWrapper<Representatives_Mutation_Response>;
  representatives_obj_rel_insert_input: Representatives_Obj_Rel_Insert_Input;
  representatives_on_conflict: Representatives_On_Conflict;
  representatives_order_by: Representatives_Order_By;
  representatives_pk_columns_input: Representatives_Pk_Columns_Input;
  representatives_select_column: Representatives_Select_Column;
  representatives_set_input: Representatives_Set_Input;
  representatives_stream_cursor_input: Representatives_Stream_Cursor_Input;
  representatives_stream_cursor_value_input: Representatives_Stream_Cursor_Value_Input;
  representatives_update_column: Representatives_Update_Column;
  representatives_updates: Representatives_Updates;
  requestPasswordResetOutput: ResolverTypeWrapper<RequestPasswordResetOutput>;
  resetPasswordOutput: ResolverTypeWrapper<ResetPasswordOutput>;
  sessionType: ResolverTypeWrapper<SessionType>;
  sessionType_aggregate: ResolverTypeWrapper<SessionType_Aggregate>;
  sessionType_aggregate_fields: ResolverTypeWrapper<SessionType_Aggregate_Fields>;
  sessionType_bool_exp: SessionType_Bool_Exp;
  sessionType_constraint: SessionType_Constraint;
  sessionType_enum: SessionType_Enum;
  sessionType_enum_comparison_exp: SessionType_Enum_Comparison_Exp;
  sessionType_insert_input: SessionType_Insert_Input;
  sessionType_max_fields: ResolverTypeWrapper<SessionType_Max_Fields>;
  sessionType_min_fields: ResolverTypeWrapper<SessionType_Min_Fields>;
  sessionType_mutation_response: ResolverTypeWrapper<SessionType_Mutation_Response>;
  sessionType_obj_rel_insert_input: SessionType_Obj_Rel_Insert_Input;
  sessionType_on_conflict: SessionType_On_Conflict;
  sessionType_order_by: SessionType_Order_By;
  sessionType_pk_columns_input: SessionType_Pk_Columns_Input;
  sessionType_select_column: SessionType_Select_Column;
  sessionType_set_input: SessionType_Set_Input;
  sessionType_stream_cursor_input: SessionType_Stream_Cursor_Input;
  sessionType_stream_cursor_value_input: SessionType_Stream_Cursor_Value_Input;
  sessionType_update_column: SessionType_Update_Column;
  sessionType_updates: SessionType_Updates;
  sessions: ResolverTypeWrapper<Sessions>;
  sessions_aggregate: ResolverTypeWrapper<Sessions_Aggregate>;
  sessions_aggregate_bool_exp: Sessions_Aggregate_Bool_Exp;
  sessions_aggregate_bool_exp_bool_and: Sessions_Aggregate_Bool_Exp_Bool_And;
  sessions_aggregate_bool_exp_bool_or: Sessions_Aggregate_Bool_Exp_Bool_Or;
  sessions_aggregate_bool_exp_count: Sessions_Aggregate_Bool_Exp_Count;
  sessions_aggregate_fields: ResolverTypeWrapper<Sessions_Aggregate_Fields>;
  sessions_aggregate_order_by: Sessions_Aggregate_Order_By;
  sessions_arr_rel_insert_input: Sessions_Arr_Rel_Insert_Input;
  sessions_bool_exp: Sessions_Bool_Exp;
  sessions_constraint: Sessions_Constraint;
  sessions_insert_input: Sessions_Insert_Input;
  sessions_max_fields: ResolverTypeWrapper<Sessions_Max_Fields>;
  sessions_max_order_by: Sessions_Max_Order_By;
  sessions_min_fields: ResolverTypeWrapper<Sessions_Min_Fields>;
  sessions_min_order_by: Sessions_Min_Order_By;
  sessions_mutation_response: ResolverTypeWrapper<Sessions_Mutation_Response>;
  sessions_on_conflict: Sessions_On_Conflict;
  sessions_order_by: Sessions_Order_By;
  sessions_pk_columns_input: Sessions_Pk_Columns_Input;
  sessions_select_column: Sessions_Select_Column;
  sessions_select_column_sessions_aggregate_bool_exp_bool_and_arguments_columns: Sessions_Select_Column_Sessions_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  sessions_select_column_sessions_aggregate_bool_exp_bool_or_arguments_columns: Sessions_Select_Column_Sessions_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  sessions_set_input: Sessions_Set_Input;
  sessions_stream_cursor_input: Sessions_Stream_Cursor_Input;
  sessions_stream_cursor_value_input: Sessions_Stream_Cursor_Value_Input;
  sessions_update_column: Sessions_Update_Column;
  sessions_updates: Sessions_Updates;
  signUpWithCredentialsOutput: ResolverTypeWrapper<SignUpWithCredentialsOutput>;
  subscription_root: ResolverTypeWrapper<{}>;
  timestamptz: ResolverTypeWrapper<Scalars["timestamptz"]>;
  timestamptz_comparison_exp: Timestamptz_Comparison_Exp;
  userIssueListEntries: ResolverTypeWrapper<UserIssueListEntries>;
  userIssueListEntries_aggregate: ResolverTypeWrapper<UserIssueListEntries_Aggregate>;
  userIssueListEntries_aggregate_bool_exp: UserIssueListEntries_Aggregate_Bool_Exp;
  userIssueListEntries_aggregate_bool_exp_count: UserIssueListEntries_Aggregate_Bool_Exp_Count;
  userIssueListEntries_aggregate_fields: ResolverTypeWrapper<UserIssueListEntries_Aggregate_Fields>;
  userIssueListEntries_aggregate_order_by: UserIssueListEntries_Aggregate_Order_By;
  userIssueListEntries_arr_rel_insert_input: UserIssueListEntries_Arr_Rel_Insert_Input;
  userIssueListEntries_bool_exp: UserIssueListEntries_Bool_Exp;
  userIssueListEntries_constraint: UserIssueListEntries_Constraint;
  userIssueListEntries_insert_input: UserIssueListEntries_Insert_Input;
  userIssueListEntries_max_fields: ResolverTypeWrapper<UserIssueListEntries_Max_Fields>;
  userIssueListEntries_max_order_by: UserIssueListEntries_Max_Order_By;
  userIssueListEntries_min_fields: ResolverTypeWrapper<UserIssueListEntries_Min_Fields>;
  userIssueListEntries_min_order_by: UserIssueListEntries_Min_Order_By;
  userIssueListEntries_mutation_response: ResolverTypeWrapper<UserIssueListEntries_Mutation_Response>;
  userIssueListEntries_on_conflict: UserIssueListEntries_On_Conflict;
  userIssueListEntries_order_by: UserIssueListEntries_Order_By;
  userIssueListEntries_pk_columns_input: UserIssueListEntries_Pk_Columns_Input;
  userIssueListEntries_select_column: UserIssueListEntries_Select_Column;
  userIssueListEntries_set_input: UserIssueListEntries_Set_Input;
  userIssueListEntries_stream_cursor_input: UserIssueListEntries_Stream_Cursor_Input;
  userIssueListEntries_stream_cursor_value_input: UserIssueListEntries_Stream_Cursor_Value_Input;
  userIssueListEntries_update_column: UserIssueListEntries_Update_Column;
  userIssueListEntries_updates: UserIssueListEntries_Updates;
  userIssueListType: ResolverTypeWrapper<UserIssueListType>;
  userIssueListType_aggregate: ResolverTypeWrapper<UserIssueListType_Aggregate>;
  userIssueListType_aggregate_fields: ResolverTypeWrapper<UserIssueListType_Aggregate_Fields>;
  userIssueListType_bool_exp: UserIssueListType_Bool_Exp;
  userIssueListType_constraint: UserIssueListType_Constraint;
  userIssueListType_enum: UserIssueListType_Enum;
  userIssueListType_enum_comparison_exp: UserIssueListType_Enum_Comparison_Exp;
  userIssueListType_insert_input: UserIssueListType_Insert_Input;
  userIssueListType_max_fields: ResolverTypeWrapper<UserIssueListType_Max_Fields>;
  userIssueListType_min_fields: ResolverTypeWrapper<UserIssueListType_Min_Fields>;
  userIssueListType_mutation_response: ResolverTypeWrapper<UserIssueListType_Mutation_Response>;
  userIssueListType_obj_rel_insert_input: UserIssueListType_Obj_Rel_Insert_Input;
  userIssueListType_on_conflict: UserIssueListType_On_Conflict;
  userIssueListType_order_by: UserIssueListType_Order_By;
  userIssueListType_pk_columns_input: UserIssueListType_Pk_Columns_Input;
  userIssueListType_select_column: UserIssueListType_Select_Column;
  userIssueListType_set_input: UserIssueListType_Set_Input;
  userIssueListType_stream_cursor_input: UserIssueListType_Stream_Cursor_Input;
  userIssueListType_stream_cursor_value_input: UserIssueListType_Stream_Cursor_Value_Input;
  userIssueListType_update_column: UserIssueListType_Update_Column;
  userIssueListType_updates: UserIssueListType_Updates;
  userIssueLists: ResolverTypeWrapper<UserIssueLists>;
  userIssueLists_aggregate: ResolverTypeWrapper<UserIssueLists_Aggregate>;
  userIssueLists_aggregate_bool_exp: UserIssueLists_Aggregate_Bool_Exp;
  userIssueLists_aggregate_bool_exp_count: UserIssueLists_Aggregate_Bool_Exp_Count;
  userIssueLists_aggregate_fields: ResolverTypeWrapper<UserIssueLists_Aggregate_Fields>;
  userIssueLists_aggregate_order_by: UserIssueLists_Aggregate_Order_By;
  userIssueLists_arr_rel_insert_input: UserIssueLists_Arr_Rel_Insert_Input;
  userIssueLists_bool_exp: UserIssueLists_Bool_Exp;
  userIssueLists_constraint: UserIssueLists_Constraint;
  userIssueLists_insert_input: UserIssueLists_Insert_Input;
  userIssueLists_max_fields: ResolverTypeWrapper<UserIssueLists_Max_Fields>;
  userIssueLists_max_order_by: UserIssueLists_Max_Order_By;
  userIssueLists_min_fields: ResolverTypeWrapper<UserIssueLists_Min_Fields>;
  userIssueLists_min_order_by: UserIssueLists_Min_Order_By;
  userIssueLists_mutation_response: ResolverTypeWrapper<UserIssueLists_Mutation_Response>;
  userIssueLists_obj_rel_insert_input: UserIssueLists_Obj_Rel_Insert_Input;
  userIssueLists_on_conflict: UserIssueLists_On_Conflict;
  userIssueLists_order_by: UserIssueLists_Order_By;
  userIssueLists_pk_columns_input: UserIssueLists_Pk_Columns_Input;
  userIssueLists_select_column: UserIssueLists_Select_Column;
  userIssueLists_set_input: UserIssueLists_Set_Input;
  userIssueLists_stream_cursor_input: UserIssueLists_Stream_Cursor_Input;
  userIssueLists_stream_cursor_value_input: UserIssueLists_Stream_Cursor_Value_Input;
  userIssueLists_update_column: UserIssueLists_Update_Column;
  userIssueLists_updates: UserIssueLists_Updates;
  userSource: ResolverTypeWrapper<UserSource>;
  userSource_aggregate: ResolverTypeWrapper<UserSource_Aggregate>;
  userSource_aggregate_fields: ResolverTypeWrapper<UserSource_Aggregate_Fields>;
  userSource_bool_exp: UserSource_Bool_Exp;
  userSource_constraint: UserSource_Constraint;
  userSource_enum: UserSource_Enum;
  userSource_enum_comparison_exp: UserSource_Enum_Comparison_Exp;
  userSource_insert_input: UserSource_Insert_Input;
  userSource_max_fields: ResolverTypeWrapper<UserSource_Max_Fields>;
  userSource_min_fields: ResolverTypeWrapper<UserSource_Min_Fields>;
  userSource_mutation_response: ResolverTypeWrapper<UserSource_Mutation_Response>;
  userSource_obj_rel_insert_input: UserSource_Obj_Rel_Insert_Input;
  userSource_on_conflict: UserSource_On_Conflict;
  userSource_order_by: UserSource_Order_By;
  userSource_pk_columns_input: UserSource_Pk_Columns_Input;
  userSource_select_column: UserSource_Select_Column;
  userSource_set_input: UserSource_Set_Input;
  userSource_stream_cursor_input: UserSource_Stream_Cursor_Input;
  userSource_stream_cursor_value_input: UserSource_Stream_Cursor_Value_Input;
  userSource_update_column: UserSource_Update_Column;
  userSource_updates: UserSource_Updates;
  users: ResolverTypeWrapper<Users>;
  users_aggregate: ResolverTypeWrapper<Users_Aggregate>;
  users_aggregate_bool_exp: Users_Aggregate_Bool_Exp;
  users_aggregate_bool_exp_bool_and: Users_Aggregate_Bool_Exp_Bool_And;
  users_aggregate_bool_exp_bool_or: Users_Aggregate_Bool_Exp_Bool_Or;
  users_aggregate_bool_exp_count: Users_Aggregate_Bool_Exp_Count;
  users_aggregate_fields: ResolverTypeWrapper<Users_Aggregate_Fields>;
  users_aggregate_order_by: Users_Aggregate_Order_By;
  users_arr_rel_insert_input: Users_Arr_Rel_Insert_Input;
  users_bool_exp: Users_Bool_Exp;
  users_constraint: Users_Constraint;
  users_insert_input: Users_Insert_Input;
  users_max_fields: ResolverTypeWrapper<Users_Max_Fields>;
  users_max_order_by: Users_Max_Order_By;
  users_min_fields: ResolverTypeWrapper<Users_Min_Fields>;
  users_min_order_by: Users_Min_Order_By;
  users_mutation_response: ResolverTypeWrapper<Users_Mutation_Response>;
  users_obj_rel_insert_input: Users_Obj_Rel_Insert_Input;
  users_on_conflict: Users_On_Conflict;
  users_order_by: Users_Order_By;
  users_pk_columns_input: Users_Pk_Columns_Input;
  users_select_column: Users_Select_Column;
  users_select_column_users_aggregate_bool_exp_bool_and_arguments_columns: Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  users_select_column_users_aggregate_bool_exp_bool_or_arguments_columns: Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  users_set_input: Users_Set_Input;
  users_stream_cursor_input: Users_Stream_Cursor_Input;
  users_stream_cursor_value_input: Users_Stream_Cursor_Value_Input;
  users_update_column: Users_Update_Column;
  users_updates: Users_Updates;
  uuid: ResolverTypeWrapper<Scalars["uuid"]>;
  uuid_comparison_exp: Uuid_Comparison_Exp;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AuthenticateWithGoogleOutput: AuthenticateWithGoogleOutput;
  Boolean: Scalars["Boolean"];
  Boolean_comparison_exp: Boolean_Comparison_Exp;
  Int: Scalars["Int"];
  Int_comparison_exp: Int_Comparison_Exp;
  String: Scalars["String"];
  String_comparison_exp: String_Comparison_Exp;
  ValidatePasswordResetTokenOutput: ValidatePasswordResetTokenOutput;
  addUserZipCodeOutput: AddUserZipCodeOutput;
  authenticateWithCredentialsOutput: AuthenticateWithCredentialsOutput;
  comments: Comments;
  comments_aggregate: Comments_Aggregate;
  comments_aggregate_bool_exp: Comments_Aggregate_Bool_Exp;
  comments_aggregate_bool_exp_count: Comments_Aggregate_Bool_Exp_Count;
  comments_aggregate_fields: Comments_Aggregate_Fields;
  comments_aggregate_order_by: Comments_Aggregate_Order_By;
  comments_arr_rel_insert_input: Comments_Arr_Rel_Insert_Input;
  comments_bool_exp: Comments_Bool_Exp;
  comments_insert_input: Comments_Insert_Input;
  comments_max_fields: Comments_Max_Fields;
  comments_max_order_by: Comments_Max_Order_By;
  comments_min_fields: Comments_Min_Fields;
  comments_min_order_by: Comments_Min_Order_By;
  comments_mutation_response: Comments_Mutation_Response;
  comments_obj_rel_insert_input: Comments_Obj_Rel_Insert_Input;
  comments_on_conflict: Comments_On_Conflict;
  comments_order_by: Comments_Order_By;
  comments_pk_columns_input: Comments_Pk_Columns_Input;
  comments_set_input: Comments_Set_Input;
  comments_stream_cursor_input: Comments_Stream_Cursor_Input;
  comments_stream_cursor_value_input: Comments_Stream_Cursor_Value_Input;
  comments_updates: Comments_Updates;
  confirmEmailOutput: ConfirmEmailOutput;
  issueCategory: IssueCategory;
  issueCategory_aggregate: IssueCategory_Aggregate;
  issueCategory_aggregate_fields: IssueCategory_Aggregate_Fields;
  issueCategory_bool_exp: IssueCategory_Bool_Exp;
  issueCategory_enum_comparison_exp: IssueCategory_Enum_Comparison_Exp;
  issueCategory_insert_input: IssueCategory_Insert_Input;
  issueCategory_max_fields: IssueCategory_Max_Fields;
  issueCategory_min_fields: IssueCategory_Min_Fields;
  issueCategory_mutation_response: IssueCategory_Mutation_Response;
  issueCategory_obj_rel_insert_input: IssueCategory_Obj_Rel_Insert_Input;
  issueCategory_on_conflict: IssueCategory_On_Conflict;
  issueCategory_order_by: IssueCategory_Order_By;
  issueCategory_pk_columns_input: IssueCategory_Pk_Columns_Input;
  issueCategory_set_input: IssueCategory_Set_Input;
  issueCategory_stream_cursor_input: IssueCategory_Stream_Cursor_Input;
  issueCategory_stream_cursor_value_input: IssueCategory_Stream_Cursor_Value_Input;
  issueCategory_updates: IssueCategory_Updates;
  issueFieldViewScale: IssueFieldViewScale;
  issueFieldViewScale_aggregate: IssueFieldViewScale_Aggregate;
  issueFieldViewScale_aggregate_fields: IssueFieldViewScale_Aggregate_Fields;
  issueFieldViewScale_bool_exp: IssueFieldViewScale_Bool_Exp;
  issueFieldViewScale_enum_comparison_exp: IssueFieldViewScale_Enum_Comparison_Exp;
  issueFieldViewScale_insert_input: IssueFieldViewScale_Insert_Input;
  issueFieldViewScale_max_fields: IssueFieldViewScale_Max_Fields;
  issueFieldViewScale_min_fields: IssueFieldViewScale_Min_Fields;
  issueFieldViewScale_mutation_response: IssueFieldViewScale_Mutation_Response;
  issueFieldViewScale_obj_rel_insert_input: IssueFieldViewScale_Obj_Rel_Insert_Input;
  issueFieldViewScale_on_conflict: IssueFieldViewScale_On_Conflict;
  issueFieldViewScale_order_by: IssueFieldViewScale_Order_By;
  issueFieldViewScale_pk_columns_input: IssueFieldViewScale_Pk_Columns_Input;
  issueFieldViewScale_set_input: IssueFieldViewScale_Set_Input;
  issueFieldViewScale_stream_cursor_input: IssueFieldViewScale_Stream_Cursor_Input;
  issueFieldViewScale_stream_cursor_value_input: IssueFieldViewScale_Stream_Cursor_Value_Input;
  issueFieldViewScale_updates: IssueFieldViewScale_Updates;
  issueStatus: IssueStatus;
  issueStatus_aggregate: IssueStatus_Aggregate;
  issueStatus_aggregate_fields: IssueStatus_Aggregate_Fields;
  issueStatus_bool_exp: IssueStatus_Bool_Exp;
  issueStatus_enum_comparison_exp: IssueStatus_Enum_Comparison_Exp;
  issueStatus_insert_input: IssueStatus_Insert_Input;
  issueStatus_max_fields: IssueStatus_Max_Fields;
  issueStatus_min_fields: IssueStatus_Min_Fields;
  issueStatus_mutation_response: IssueStatus_Mutation_Response;
  issueStatus_obj_rel_insert_input: IssueStatus_Obj_Rel_Insert_Input;
  issueStatus_on_conflict: IssueStatus_On_Conflict;
  issueStatus_order_by: IssueStatus_Order_By;
  issueStatus_pk_columns_input: IssueStatus_Pk_Columns_Input;
  issueStatus_set_input: IssueStatus_Set_Input;
  issueStatus_stream_cursor_input: IssueStatus_Stream_Cursor_Input;
  issueStatus_stream_cursor_value_input: IssueStatus_Stream_Cursor_Value_Input;
  issueStatus_updates: IssueStatus_Updates;
  issues: Issues;
  issues_aggregate: Issues_Aggregate;
  issues_aggregate_bool_exp: Issues_Aggregate_Bool_Exp;
  issues_aggregate_bool_exp_bool_and: Issues_Aggregate_Bool_Exp_Bool_And;
  issues_aggregate_bool_exp_bool_or: Issues_Aggregate_Bool_Exp_Bool_Or;
  issues_aggregate_bool_exp_count: Issues_Aggregate_Bool_Exp_Count;
  issues_aggregate_fields: Issues_Aggregate_Fields;
  issues_aggregate_order_by: Issues_Aggregate_Order_By;
  issues_arr_rel_insert_input: Issues_Arr_Rel_Insert_Input;
  issues_bool_exp: Issues_Bool_Exp;
  issues_insert_input: Issues_Insert_Input;
  issues_max_fields: Issues_Max_Fields;
  issues_max_order_by: Issues_Max_Order_By;
  issues_min_fields: Issues_Min_Fields;
  issues_min_order_by: Issues_Min_Order_By;
  issues_mutation_response: Issues_Mutation_Response;
  issues_obj_rel_insert_input: Issues_Obj_Rel_Insert_Input;
  issues_on_conflict: Issues_On_Conflict;
  issues_order_by: Issues_Order_By;
  issues_pk_columns_input: Issues_Pk_Columns_Input;
  issues_set_input: Issues_Set_Input;
  issues_stream_cursor_input: Issues_Stream_Cursor_Input;
  issues_stream_cursor_value_input: Issues_Stream_Cursor_Value_Input;
  issues_updates: Issues_Updates;
  issues_users: Issues_Users;
  issues_users_aggregate: Issues_Users_Aggregate;
  issues_users_aggregate_bool_exp: Issues_Users_Aggregate_Bool_Exp;
  issues_users_aggregate_bool_exp_count: Issues_Users_Aggregate_Bool_Exp_Count;
  issues_users_aggregate_fields: Issues_Users_Aggregate_Fields;
  issues_users_aggregate_order_by: Issues_Users_Aggregate_Order_By;
  issues_users_arr_rel_insert_input: Issues_Users_Arr_Rel_Insert_Input;
  issues_users_bool_exp: Issues_Users_Bool_Exp;
  issues_users_insert_input: Issues_Users_Insert_Input;
  issues_users_max_fields: Issues_Users_Max_Fields;
  issues_users_max_order_by: Issues_Users_Max_Order_By;
  issues_users_min_fields: Issues_Users_Min_Fields;
  issues_users_min_order_by: Issues_Users_Min_Order_By;
  issues_users_mutation_response: Issues_Users_Mutation_Response;
  issues_users_on_conflict: Issues_Users_On_Conflict;
  issues_users_order_by: Issues_Users_Order_By;
  issues_users_pk_columns_input: Issues_Users_Pk_Columns_Input;
  issues_users_set_input: Issues_Users_Set_Input;
  issues_users_stream_cursor_input: Issues_Users_Stream_Cursor_Input;
  issues_users_stream_cursor_value_input: Issues_Users_Stream_Cursor_Value_Input;
  issues_users_updates: Issues_Users_Updates;
  language: Language;
  language_aggregate: Language_Aggregate;
  language_aggregate_fields: Language_Aggregate_Fields;
  language_bool_exp: Language_Bool_Exp;
  language_enum_comparison_exp: Language_Enum_Comparison_Exp;
  language_insert_input: Language_Insert_Input;
  language_max_fields: Language_Max_Fields;
  language_min_fields: Language_Min_Fields;
  language_mutation_response: Language_Mutation_Response;
  language_obj_rel_insert_input: Language_Obj_Rel_Insert_Input;
  language_on_conflict: Language_On_Conflict;
  language_order_by: Language_Order_By;
  language_pk_columns_input: Language_Pk_Columns_Input;
  language_set_input: Language_Set_Input;
  language_stream_cursor_input: Language_Stream_Cursor_Input;
  language_stream_cursor_value_input: Language_Stream_Cursor_Value_Input;
  language_updates: Language_Updates;
  letterContents: LetterContents;
  letterContents_aggregate: LetterContents_Aggregate;
  letterContents_aggregate_bool_exp: LetterContents_Aggregate_Bool_Exp;
  letterContents_aggregate_bool_exp_count: LetterContents_Aggregate_Bool_Exp_Count;
  letterContents_aggregate_fields: LetterContents_Aggregate_Fields;
  letterContents_aggregate_order_by: LetterContents_Aggregate_Order_By;
  letterContents_arr_rel_insert_input: LetterContents_Arr_Rel_Insert_Input;
  letterContents_bool_exp: LetterContents_Bool_Exp;
  letterContents_insert_input: LetterContents_Insert_Input;
  letterContents_max_fields: LetterContents_Max_Fields;
  letterContents_max_order_by: LetterContents_Max_Order_By;
  letterContents_min_fields: LetterContents_Min_Fields;
  letterContents_min_order_by: LetterContents_Min_Order_By;
  letterContents_mutation_response: LetterContents_Mutation_Response;
  letterContents_on_conflict: LetterContents_On_Conflict;
  letterContents_order_by: LetterContents_Order_By;
  letterContents_pk_columns_input: LetterContents_Pk_Columns_Input;
  letterContents_set_input: LetterContents_Set_Input;
  letterContents_stream_cursor_input: LetterContents_Stream_Cursor_Input;
  letterContents_stream_cursor_value_input: LetterContents_Stream_Cursor_Value_Input;
  letterContents_updates: LetterContents_Updates;
  letterStatus: LetterStatus;
  letterStatus_aggregate: LetterStatus_Aggregate;
  letterStatus_aggregate_fields: LetterStatus_Aggregate_Fields;
  letterStatus_bool_exp: LetterStatus_Bool_Exp;
  letterStatus_enum_comparison_exp: LetterStatus_Enum_Comparison_Exp;
  letterStatus_insert_input: LetterStatus_Insert_Input;
  letterStatus_max_fields: LetterStatus_Max_Fields;
  letterStatus_min_fields: LetterStatus_Min_Fields;
  letterStatus_mutation_response: LetterStatus_Mutation_Response;
  letterStatus_obj_rel_insert_input: LetterStatus_Obj_Rel_Insert_Input;
  letterStatus_on_conflict: LetterStatus_On_Conflict;
  letterStatus_order_by: LetterStatus_Order_By;
  letterStatus_pk_columns_input: LetterStatus_Pk_Columns_Input;
  letterStatus_set_input: LetterStatus_Set_Input;
  letterStatus_stream_cursor_input: LetterStatus_Stream_Cursor_Input;
  letterStatus_stream_cursor_value_input: LetterStatus_Stream_Cursor_Value_Input;
  letterStatus_updates: LetterStatus_Updates;
  letters: Letters;
  letters_aggregate: Letters_Aggregate;
  letters_aggregate_bool_exp: Letters_Aggregate_Bool_Exp;
  letters_aggregate_bool_exp_bool_and: Letters_Aggregate_Bool_Exp_Bool_And;
  letters_aggregate_bool_exp_bool_or: Letters_Aggregate_Bool_Exp_Bool_Or;
  letters_aggregate_bool_exp_count: Letters_Aggregate_Bool_Exp_Count;
  letters_aggregate_fields: Letters_Aggregate_Fields;
  letters_aggregate_order_by: Letters_Aggregate_Order_By;
  letters_arr_rel_insert_input: Letters_Arr_Rel_Insert_Input;
  letters_bool_exp: Letters_Bool_Exp;
  letters_insert_input: Letters_Insert_Input;
  letters_max_fields: Letters_Max_Fields;
  letters_max_order_by: Letters_Max_Order_By;
  letters_min_fields: Letters_Min_Fields;
  letters_min_order_by: Letters_Min_Order_By;
  letters_mutation_response: Letters_Mutation_Response;
  letters_obj_rel_insert_input: Letters_Obj_Rel_Insert_Input;
  letters_on_conflict: Letters_On_Conflict;
  letters_order_by: Letters_Order_By;
  letters_pk_columns_input: Letters_Pk_Columns_Input;
  letters_set_input: Letters_Set_Input;
  letters_stream_cursor_input: Letters_Stream_Cursor_Input;
  letters_stream_cursor_value_input: Letters_Stream_Cursor_Value_Input;
  letters_updates: Letters_Updates;
  mutation_root: {};
  query_root: {};
  representatives: Representatives;
  representatives_aggregate: Representatives_Aggregate;
  representatives_aggregate_fields: Representatives_Aggregate_Fields;
  representatives_bool_exp: Representatives_Bool_Exp;
  representatives_insert_input: Representatives_Insert_Input;
  representatives_max_fields: Representatives_Max_Fields;
  representatives_min_fields: Representatives_Min_Fields;
  representatives_mutation_response: Representatives_Mutation_Response;
  representatives_obj_rel_insert_input: Representatives_Obj_Rel_Insert_Input;
  representatives_on_conflict: Representatives_On_Conflict;
  representatives_order_by: Representatives_Order_By;
  representatives_pk_columns_input: Representatives_Pk_Columns_Input;
  representatives_set_input: Representatives_Set_Input;
  representatives_stream_cursor_input: Representatives_Stream_Cursor_Input;
  representatives_stream_cursor_value_input: Representatives_Stream_Cursor_Value_Input;
  representatives_updates: Representatives_Updates;
  requestPasswordResetOutput: RequestPasswordResetOutput;
  resetPasswordOutput: ResetPasswordOutput;
  sessionType: SessionType;
  sessionType_aggregate: SessionType_Aggregate;
  sessionType_aggregate_fields: SessionType_Aggregate_Fields;
  sessionType_bool_exp: SessionType_Bool_Exp;
  sessionType_enum_comparison_exp: SessionType_Enum_Comparison_Exp;
  sessionType_insert_input: SessionType_Insert_Input;
  sessionType_max_fields: SessionType_Max_Fields;
  sessionType_min_fields: SessionType_Min_Fields;
  sessionType_mutation_response: SessionType_Mutation_Response;
  sessionType_obj_rel_insert_input: SessionType_Obj_Rel_Insert_Input;
  sessionType_on_conflict: SessionType_On_Conflict;
  sessionType_order_by: SessionType_Order_By;
  sessionType_pk_columns_input: SessionType_Pk_Columns_Input;
  sessionType_set_input: SessionType_Set_Input;
  sessionType_stream_cursor_input: SessionType_Stream_Cursor_Input;
  sessionType_stream_cursor_value_input: SessionType_Stream_Cursor_Value_Input;
  sessionType_updates: SessionType_Updates;
  sessions: Sessions;
  sessions_aggregate: Sessions_Aggregate;
  sessions_aggregate_bool_exp: Sessions_Aggregate_Bool_Exp;
  sessions_aggregate_bool_exp_bool_and: Sessions_Aggregate_Bool_Exp_Bool_And;
  sessions_aggregate_bool_exp_bool_or: Sessions_Aggregate_Bool_Exp_Bool_Or;
  sessions_aggregate_bool_exp_count: Sessions_Aggregate_Bool_Exp_Count;
  sessions_aggregate_fields: Sessions_Aggregate_Fields;
  sessions_aggregate_order_by: Sessions_Aggregate_Order_By;
  sessions_arr_rel_insert_input: Sessions_Arr_Rel_Insert_Input;
  sessions_bool_exp: Sessions_Bool_Exp;
  sessions_insert_input: Sessions_Insert_Input;
  sessions_max_fields: Sessions_Max_Fields;
  sessions_max_order_by: Sessions_Max_Order_By;
  sessions_min_fields: Sessions_Min_Fields;
  sessions_min_order_by: Sessions_Min_Order_By;
  sessions_mutation_response: Sessions_Mutation_Response;
  sessions_on_conflict: Sessions_On_Conflict;
  sessions_order_by: Sessions_Order_By;
  sessions_pk_columns_input: Sessions_Pk_Columns_Input;
  sessions_set_input: Sessions_Set_Input;
  sessions_stream_cursor_input: Sessions_Stream_Cursor_Input;
  sessions_stream_cursor_value_input: Sessions_Stream_Cursor_Value_Input;
  sessions_updates: Sessions_Updates;
  signUpWithCredentialsOutput: SignUpWithCredentialsOutput;
  subscription_root: {};
  timestamptz: Scalars["timestamptz"];
  timestamptz_comparison_exp: Timestamptz_Comparison_Exp;
  userIssueListEntries: UserIssueListEntries;
  userIssueListEntries_aggregate: UserIssueListEntries_Aggregate;
  userIssueListEntries_aggregate_bool_exp: UserIssueListEntries_Aggregate_Bool_Exp;
  userIssueListEntries_aggregate_bool_exp_count: UserIssueListEntries_Aggregate_Bool_Exp_Count;
  userIssueListEntries_aggregate_fields: UserIssueListEntries_Aggregate_Fields;
  userIssueListEntries_aggregate_order_by: UserIssueListEntries_Aggregate_Order_By;
  userIssueListEntries_arr_rel_insert_input: UserIssueListEntries_Arr_Rel_Insert_Input;
  userIssueListEntries_bool_exp: UserIssueListEntries_Bool_Exp;
  userIssueListEntries_insert_input: UserIssueListEntries_Insert_Input;
  userIssueListEntries_max_fields: UserIssueListEntries_Max_Fields;
  userIssueListEntries_max_order_by: UserIssueListEntries_Max_Order_By;
  userIssueListEntries_min_fields: UserIssueListEntries_Min_Fields;
  userIssueListEntries_min_order_by: UserIssueListEntries_Min_Order_By;
  userIssueListEntries_mutation_response: UserIssueListEntries_Mutation_Response;
  userIssueListEntries_on_conflict: UserIssueListEntries_On_Conflict;
  userIssueListEntries_order_by: UserIssueListEntries_Order_By;
  userIssueListEntries_pk_columns_input: UserIssueListEntries_Pk_Columns_Input;
  userIssueListEntries_set_input: UserIssueListEntries_Set_Input;
  userIssueListEntries_stream_cursor_input: UserIssueListEntries_Stream_Cursor_Input;
  userIssueListEntries_stream_cursor_value_input: UserIssueListEntries_Stream_Cursor_Value_Input;
  userIssueListEntries_updates: UserIssueListEntries_Updates;
  userIssueListType: UserIssueListType;
  userIssueListType_aggregate: UserIssueListType_Aggregate;
  userIssueListType_aggregate_fields: UserIssueListType_Aggregate_Fields;
  userIssueListType_bool_exp: UserIssueListType_Bool_Exp;
  userIssueListType_enum_comparison_exp: UserIssueListType_Enum_Comparison_Exp;
  userIssueListType_insert_input: UserIssueListType_Insert_Input;
  userIssueListType_max_fields: UserIssueListType_Max_Fields;
  userIssueListType_min_fields: UserIssueListType_Min_Fields;
  userIssueListType_mutation_response: UserIssueListType_Mutation_Response;
  userIssueListType_obj_rel_insert_input: UserIssueListType_Obj_Rel_Insert_Input;
  userIssueListType_on_conflict: UserIssueListType_On_Conflict;
  userIssueListType_order_by: UserIssueListType_Order_By;
  userIssueListType_pk_columns_input: UserIssueListType_Pk_Columns_Input;
  userIssueListType_set_input: UserIssueListType_Set_Input;
  userIssueListType_stream_cursor_input: UserIssueListType_Stream_Cursor_Input;
  userIssueListType_stream_cursor_value_input: UserIssueListType_Stream_Cursor_Value_Input;
  userIssueListType_updates: UserIssueListType_Updates;
  userIssueLists: UserIssueLists;
  userIssueLists_aggregate: UserIssueLists_Aggregate;
  userIssueLists_aggregate_bool_exp: UserIssueLists_Aggregate_Bool_Exp;
  userIssueLists_aggregate_bool_exp_count: UserIssueLists_Aggregate_Bool_Exp_Count;
  userIssueLists_aggregate_fields: UserIssueLists_Aggregate_Fields;
  userIssueLists_aggregate_order_by: UserIssueLists_Aggregate_Order_By;
  userIssueLists_arr_rel_insert_input: UserIssueLists_Arr_Rel_Insert_Input;
  userIssueLists_bool_exp: UserIssueLists_Bool_Exp;
  userIssueLists_insert_input: UserIssueLists_Insert_Input;
  userIssueLists_max_fields: UserIssueLists_Max_Fields;
  userIssueLists_max_order_by: UserIssueLists_Max_Order_By;
  userIssueLists_min_fields: UserIssueLists_Min_Fields;
  userIssueLists_min_order_by: UserIssueLists_Min_Order_By;
  userIssueLists_mutation_response: UserIssueLists_Mutation_Response;
  userIssueLists_obj_rel_insert_input: UserIssueLists_Obj_Rel_Insert_Input;
  userIssueLists_on_conflict: UserIssueLists_On_Conflict;
  userIssueLists_order_by: UserIssueLists_Order_By;
  userIssueLists_pk_columns_input: UserIssueLists_Pk_Columns_Input;
  userIssueLists_set_input: UserIssueLists_Set_Input;
  userIssueLists_stream_cursor_input: UserIssueLists_Stream_Cursor_Input;
  userIssueLists_stream_cursor_value_input: UserIssueLists_Stream_Cursor_Value_Input;
  userIssueLists_updates: UserIssueLists_Updates;
  userSource: UserSource;
  userSource_aggregate: UserSource_Aggregate;
  userSource_aggregate_fields: UserSource_Aggregate_Fields;
  userSource_bool_exp: UserSource_Bool_Exp;
  userSource_enum_comparison_exp: UserSource_Enum_Comparison_Exp;
  userSource_insert_input: UserSource_Insert_Input;
  userSource_max_fields: UserSource_Max_Fields;
  userSource_min_fields: UserSource_Min_Fields;
  userSource_mutation_response: UserSource_Mutation_Response;
  userSource_obj_rel_insert_input: UserSource_Obj_Rel_Insert_Input;
  userSource_on_conflict: UserSource_On_Conflict;
  userSource_order_by: UserSource_Order_By;
  userSource_pk_columns_input: UserSource_Pk_Columns_Input;
  userSource_set_input: UserSource_Set_Input;
  userSource_stream_cursor_input: UserSource_Stream_Cursor_Input;
  userSource_stream_cursor_value_input: UserSource_Stream_Cursor_Value_Input;
  userSource_updates: UserSource_Updates;
  users: Users;
  users_aggregate: Users_Aggregate;
  users_aggregate_bool_exp: Users_Aggregate_Bool_Exp;
  users_aggregate_bool_exp_bool_and: Users_Aggregate_Bool_Exp_Bool_And;
  users_aggregate_bool_exp_bool_or: Users_Aggregate_Bool_Exp_Bool_Or;
  users_aggregate_bool_exp_count: Users_Aggregate_Bool_Exp_Count;
  users_aggregate_fields: Users_Aggregate_Fields;
  users_aggregate_order_by: Users_Aggregate_Order_By;
  users_arr_rel_insert_input: Users_Arr_Rel_Insert_Input;
  users_bool_exp: Users_Bool_Exp;
  users_insert_input: Users_Insert_Input;
  users_max_fields: Users_Max_Fields;
  users_max_order_by: Users_Max_Order_By;
  users_min_fields: Users_Min_Fields;
  users_min_order_by: Users_Min_Order_By;
  users_mutation_response: Users_Mutation_Response;
  users_obj_rel_insert_input: Users_Obj_Rel_Insert_Input;
  users_on_conflict: Users_On_Conflict;
  users_order_by: Users_Order_By;
  users_pk_columns_input: Users_Pk_Columns_Input;
  users_set_input: Users_Set_Input;
  users_stream_cursor_input: Users_Stream_Cursor_Input;
  users_stream_cursor_value_input: Users_Stream_Cursor_Value_Input;
  users_updates: Users_Updates;
  uuid: Scalars["uuid"];
  uuid_comparison_exp: Uuid_Comparison_Exp;
};

export type CachedDirectiveArgs = {
  refresh?: Scalars["Boolean"];
  ttl?: Scalars["Int"];
};

export type CachedDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = CachedDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AuthenticateWithGoogleOutputResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AuthenticateWithGoogleOutput"] = ResolversParentTypes["AuthenticateWithGoogleOutput"]
> = {
  sessionId?: Resolver<ResolversTypes["uuid"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ValidatePasswordResetTokenOutputResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ValidatePasswordResetTokenOutput"] = ResolversParentTypes["ValidatePasswordResetTokenOutput"]
> = {
  userId?: Resolver<ResolversTypes["uuid"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddUserZipCodeOutputResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["addUserZipCodeOutput"] = ResolversParentTypes["addUserZipCodeOutput"]
> = {
  userId?: Resolver<ResolversTypes["uuid"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthenticateWithCredentialsOutputResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["authenticateWithCredentialsOutput"] = ResolversParentTypes["authenticateWithCredentialsOutput"]
> = {
  sessionId?: Resolver<ResolversTypes["uuid"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommentsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["comments"] = ResolversParentTypes["comments"]
> = {
  comment?: Resolver<
    Maybe<ResolversTypes["comments"]>,
    ParentType,
    ContextType
  >;
  comments?: Resolver<
    Array<ResolversTypes["comments"]>,
    ParentType,
    ContextType,
    Partial<CommentsCommentsArgs>
  >;
  comments_aggregate?: Resolver<
    ResolversTypes["comments_aggregate"],
    ParentType,
    ContextType,
    Partial<CommentsComments_AggregateArgs>
  >;
  content?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes["timestamptz"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["uuid"], ParentType, ContextType>;
  issue?: Resolver<ResolversTypes["issues"], ParentType, ContextType>;
  issueId?: Resolver<ResolversTypes["uuid"], ParentType, ContextType>;
  parentCommentId?: Resolver<
    Maybe<ResolversTypes["uuid"]>,
    ParentType,
    ContextType
  >;
  updated_at?: Resolver<ResolversTypes["timestamptz"], ParentType, ContextType>;
  user?: Resolver<ResolversTypes["users"], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes["uuid"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Comments_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["comments_aggregate"] = ResolversParentTypes["comments_aggregate"]
> = {
  aggregate?: Resolver<
    Maybe<ResolversTypes["comments_aggregate_fields"]>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<Array<ResolversTypes["comments"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Comments_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["comments_aggregate_fields"] = ResolversParentTypes["comments_aggregate_fields"]
> = {
  count?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType,
    Partial<Comments_Aggregate_FieldsCountArgs>
  >;
  max?: Resolver<
    Maybe<ResolversTypes["comments_max_fields"]>,
    ParentType,
    ContextType
  >;
  min?: Resolver<
    Maybe<ResolversTypes["comments_min_fields"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Comments_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["comments_max_fields"] = ResolversParentTypes["comments_max_fields"]
> = {
  content?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  created_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  issueId?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  parentCommentId?: Resolver<
    Maybe<ResolversTypes["uuid"]>,
    ParentType,
    ContextType
  >;
  updated_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  userId?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Comments_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["comments_min_fields"] = ResolversParentTypes["comments_min_fields"]
> = {
  content?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  created_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  issueId?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  parentCommentId?: Resolver<
    Maybe<ResolversTypes["uuid"]>,
    ParentType,
    ContextType
  >;
  updated_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  userId?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Comments_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["comments_mutation_response"] = ResolversParentTypes["comments_mutation_response"]
> = {
  affected_rows?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  returning?: Resolver<
    Array<ResolversTypes["comments"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConfirmEmailOutputResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["confirmEmailOutput"] = ResolversParentTypes["confirmEmailOutput"]
> = {
  sessionId?: Resolver<ResolversTypes["uuid"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IssueCategoryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["issueCategory"] = ResolversParentTypes["issueCategory"]
> = {
  issues?: Resolver<
    Array<ResolversTypes["issues"]>,
    ParentType,
    ContextType,
    Partial<IssueCategoryIssuesArgs>
  >;
  issues_aggregate?: Resolver<
    ResolversTypes["issues_aggregate"],
    ParentType,
    ContextType,
    Partial<IssueCategoryIssues_AggregateArgs>
  >;
  value?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IssueCategory_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["issueCategory_aggregate"] = ResolversParentTypes["issueCategory_aggregate"]
> = {
  aggregate?: Resolver<
    Maybe<ResolversTypes["issueCategory_aggregate_fields"]>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<
    Array<ResolversTypes["issueCategory"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IssueCategory_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["issueCategory_aggregate_fields"] = ResolversParentTypes["issueCategory_aggregate_fields"]
> = {
  count?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType,
    Partial<IssueCategory_Aggregate_FieldsCountArgs>
  >;
  max?: Resolver<
    Maybe<ResolversTypes["issueCategory_max_fields"]>,
    ParentType,
    ContextType
  >;
  min?: Resolver<
    Maybe<ResolversTypes["issueCategory_min_fields"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IssueCategory_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["issueCategory_max_fields"] = ResolversParentTypes["issueCategory_max_fields"]
> = {
  value?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IssueCategory_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["issueCategory_min_fields"] = ResolversParentTypes["issueCategory_min_fields"]
> = {
  value?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IssueCategory_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["issueCategory_mutation_response"] = ResolversParentTypes["issueCategory_mutation_response"]
> = {
  affected_rows?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  returning?: Resolver<
    Array<ResolversTypes["issueCategory"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IssueFieldViewScaleResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["issueFieldViewScale"] = ResolversParentTypes["issueFieldViewScale"]
> = {
  issues?: Resolver<
    Array<ResolversTypes["issues"]>,
    ParentType,
    ContextType,
    Partial<IssueFieldViewScaleIssuesArgs>
  >;
  issues_aggregate?: Resolver<
    ResolversTypes["issues_aggregate"],
    ParentType,
    ContextType,
    Partial<IssueFieldViewScaleIssues_AggregateArgs>
  >;
  value?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IssueFieldViewScale_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["issueFieldViewScale_aggregate"] = ResolversParentTypes["issueFieldViewScale_aggregate"]
> = {
  aggregate?: Resolver<
    Maybe<ResolversTypes["issueFieldViewScale_aggregate_fields"]>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<
    Array<ResolversTypes["issueFieldViewScale"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IssueFieldViewScale_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["issueFieldViewScale_aggregate_fields"] = ResolversParentTypes["issueFieldViewScale_aggregate_fields"]
> = {
  count?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType,
    Partial<IssueFieldViewScale_Aggregate_FieldsCountArgs>
  >;
  max?: Resolver<
    Maybe<ResolversTypes["issueFieldViewScale_max_fields"]>,
    ParentType,
    ContextType
  >;
  min?: Resolver<
    Maybe<ResolversTypes["issueFieldViewScale_min_fields"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IssueFieldViewScale_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["issueFieldViewScale_max_fields"] = ResolversParentTypes["issueFieldViewScale_max_fields"]
> = {
  value?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IssueFieldViewScale_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["issueFieldViewScale_min_fields"] = ResolversParentTypes["issueFieldViewScale_min_fields"]
> = {
  value?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IssueFieldViewScale_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["issueFieldViewScale_mutation_response"] = ResolversParentTypes["issueFieldViewScale_mutation_response"]
> = {
  affected_rows?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  returning?: Resolver<
    Array<ResolversTypes["issueFieldViewScale"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IssueStatusResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["issueStatus"] = ResolversParentTypes["issueStatus"]
> = {
  issues?: Resolver<
    Array<ResolversTypes["issues"]>,
    ParentType,
    ContextType,
    Partial<IssueStatusIssuesArgs>
  >;
  issues_aggregate?: Resolver<
    ResolversTypes["issues_aggregate"],
    ParentType,
    ContextType,
    Partial<IssueStatusIssues_AggregateArgs>
  >;
  value?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IssueStatus_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["issueStatus_aggregate"] = ResolversParentTypes["issueStatus_aggregate"]
> = {
  aggregate?: Resolver<
    Maybe<ResolversTypes["issueStatus_aggregate_fields"]>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<
    Array<ResolversTypes["issueStatus"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IssueStatus_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["issueStatus_aggregate_fields"] = ResolversParentTypes["issueStatus_aggregate_fields"]
> = {
  count?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType,
    Partial<IssueStatus_Aggregate_FieldsCountArgs>
  >;
  max?: Resolver<
    Maybe<ResolversTypes["issueStatus_max_fields"]>,
    ParentType,
    ContextType
  >;
  min?: Resolver<
    Maybe<ResolversTypes["issueStatus_min_fields"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IssueStatus_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["issueStatus_max_fields"] = ResolversParentTypes["issueStatus_max_fields"]
> = {
  value?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IssueStatus_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["issueStatus_min_fields"] = ResolversParentTypes["issueStatus_min_fields"]
> = {
  value?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IssueStatus_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["issueStatus_mutation_response"] = ResolversParentTypes["issueStatus_mutation_response"]
> = {
  affected_rows?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  returning?: Resolver<
    Array<ResolversTypes["issueStatus"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IssuesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["issues"] = ResolversParentTypes["issues"]
> = {
  category?: Resolver<
    Maybe<ResolversTypes["issueCategory_enum"]>,
    ParentType,
    ContextType
  >;
  comments?: Resolver<
    Array<ResolversTypes["comments"]>,
    ParentType,
    ContextType,
    Partial<IssuesCommentsArgs>
  >;
  comments_aggregate?: Resolver<
    ResolversTypes["comments_aggregate"],
    ParentType,
    ContextType,
    Partial<IssuesComments_AggregateArgs>
  >;
  content?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes["timestamptz"], ParentType, ContextType>;
  creatorId?: Resolver<ResolversTypes["uuid"], ParentType, ContextType>;
  fieldViewScale?: Resolver<
    Maybe<ResolversTypes["issueFieldViewScale_enum"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["uuid"], ParentType, ContextType>;
  isPrivate?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  issueCategory?: Resolver<
    Maybe<ResolversTypes["issueCategory"]>,
    ParentType,
    ContextType
  >;
  issueFieldViewScale?: Resolver<
    Maybe<ResolversTypes["issueFieldViewScale"]>,
    ParentType,
    ContextType
  >;
  issueStatus?: Resolver<
    Maybe<ResolversTypes["issueStatus"]>,
    ParentType,
    ContextType
  >;
  issues_users?: Resolver<
    Array<ResolversTypes["issues_users"]>,
    ParentType,
    ContextType,
    Partial<IssuesIssues_UsersArgs>
  >;
  issues_users_aggregate?: Resolver<
    ResolversTypes["issues_users_aggregate"],
    ParentType,
    ContextType,
    Partial<IssuesIssues_Users_AggregateArgs>
  >;
  letters?: Resolver<
    Array<ResolversTypes["letters"]>,
    ParentType,
    ContextType,
    Partial<IssuesLettersArgs>
  >;
  letters_aggregate?: Resolver<
    ResolversTypes["letters_aggregate"],
    ParentType,
    ContextType,
    Partial<IssuesLetters_AggregateArgs>
  >;
  link?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  status?: Resolver<
    Maybe<ResolversTypes["issueStatus_enum"]>,
    ParentType,
    ContextType
  >;
  title?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  updated_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  user?: Resolver<ResolversTypes["users"], ParentType, ContextType>;
  userIssueListEntries?: Resolver<
    Array<ResolversTypes["userIssueListEntries"]>,
    ParentType,
    ContextType,
    Partial<IssuesUserIssueListEntriesArgs>
  >;
  userIssueListEntries_aggregate?: Resolver<
    ResolversTypes["userIssueListEntries_aggregate"],
    ParentType,
    ContextType,
    Partial<IssuesUserIssueListEntries_AggregateArgs>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Issues_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["issues_aggregate"] = ResolversParentTypes["issues_aggregate"]
> = {
  aggregate?: Resolver<
    Maybe<ResolversTypes["issues_aggregate_fields"]>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<Array<ResolversTypes["issues"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Issues_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["issues_aggregate_fields"] = ResolversParentTypes["issues_aggregate_fields"]
> = {
  count?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType,
    Partial<Issues_Aggregate_FieldsCountArgs>
  >;
  max?: Resolver<
    Maybe<ResolversTypes["issues_max_fields"]>,
    ParentType,
    ContextType
  >;
  min?: Resolver<
    Maybe<ResolversTypes["issues_min_fields"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Issues_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["issues_max_fields"] = ResolversParentTypes["issues_max_fields"]
> = {
  content?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  created_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  creatorId?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  link?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  updated_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Issues_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["issues_min_fields"] = ResolversParentTypes["issues_min_fields"]
> = {
  content?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  created_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  creatorId?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  link?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  updated_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Issues_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["issues_mutation_response"] = ResolversParentTypes["issues_mutation_response"]
> = {
  affected_rows?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  returning?: Resolver<
    Array<ResolversTypes["issues"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Issues_UsersResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["issues_users"] = ResolversParentTypes["issues_users"]
> = {
  id?: Resolver<ResolversTypes["uuid"], ParentType, ContextType>;
  issue?: Resolver<ResolversTypes["issues"], ParentType, ContextType>;
  issueId?: Resolver<ResolversTypes["uuid"], ParentType, ContextType>;
  user?: Resolver<ResolversTypes["users"], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes["uuid"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Issues_Users_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["issues_users_aggregate"] = ResolversParentTypes["issues_users_aggregate"]
> = {
  aggregate?: Resolver<
    Maybe<ResolversTypes["issues_users_aggregate_fields"]>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<
    Array<ResolversTypes["issues_users"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Issues_Users_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["issues_users_aggregate_fields"] = ResolversParentTypes["issues_users_aggregate_fields"]
> = {
  count?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType,
    Partial<Issues_Users_Aggregate_FieldsCountArgs>
  >;
  max?: Resolver<
    Maybe<ResolversTypes["issues_users_max_fields"]>,
    ParentType,
    ContextType
  >;
  min?: Resolver<
    Maybe<ResolversTypes["issues_users_min_fields"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Issues_Users_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["issues_users_max_fields"] = ResolversParentTypes["issues_users_max_fields"]
> = {
  id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  issueId?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Issues_Users_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["issues_users_min_fields"] = ResolversParentTypes["issues_users_min_fields"]
> = {
  id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  issueId?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Issues_Users_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["issues_users_mutation_response"] = ResolversParentTypes["issues_users_mutation_response"]
> = {
  affected_rows?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  returning?: Resolver<
    Array<ResolversTypes["issues_users"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LanguageResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["language"] = ResolversParentTypes["language"]
> = {
  letters?: Resolver<
    Array<ResolversTypes["letters"]>,
    ParentType,
    ContextType,
    Partial<LanguageLettersArgs>
  >;
  letters_aggregate?: Resolver<
    ResolversTypes["letters_aggregate"],
    ParentType,
    ContextType,
    Partial<LanguageLetters_AggregateArgs>
  >;
  value?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Language_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["language_aggregate"] = ResolversParentTypes["language_aggregate"]
> = {
  aggregate?: Resolver<
    Maybe<ResolversTypes["language_aggregate_fields"]>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<Array<ResolversTypes["language"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Language_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["language_aggregate_fields"] = ResolversParentTypes["language_aggregate_fields"]
> = {
  count?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType,
    Partial<Language_Aggregate_FieldsCountArgs>
  >;
  max?: Resolver<
    Maybe<ResolversTypes["language_max_fields"]>,
    ParentType,
    ContextType
  >;
  min?: Resolver<
    Maybe<ResolversTypes["language_min_fields"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Language_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["language_max_fields"] = ResolversParentTypes["language_max_fields"]
> = {
  value?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Language_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["language_min_fields"] = ResolversParentTypes["language_min_fields"]
> = {
  value?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Language_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["language_mutation_response"] = ResolversParentTypes["language_mutation_response"]
> = {
  affected_rows?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  returning?: Resolver<
    Array<ResolversTypes["language"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LetterContentsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["letterContents"] = ResolversParentTypes["letterContents"]
> = {
  content?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes["timestamptz"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["uuid"], ParentType, ContextType>;
  letter?: Resolver<ResolversTypes["letters"], ParentType, ContextType>;
  letterId?: Resolver<ResolversTypes["uuid"], ParentType, ContextType>;
  representative?: Resolver<
    ResolversTypes["representatives"],
    ParentType,
    ContextType
  >;
  representativeId?: Resolver<ResolversTypes["uuid"], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes["timestamptz"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LetterContents_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["letterContents_aggregate"] = ResolversParentTypes["letterContents_aggregate"]
> = {
  aggregate?: Resolver<
    Maybe<ResolversTypes["letterContents_aggregate_fields"]>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<
    Array<ResolversTypes["letterContents"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LetterContents_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["letterContents_aggregate_fields"] = ResolversParentTypes["letterContents_aggregate_fields"]
> = {
  count?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType,
    Partial<LetterContents_Aggregate_FieldsCountArgs>
  >;
  max?: Resolver<
    Maybe<ResolversTypes["letterContents_max_fields"]>,
    ParentType,
    ContextType
  >;
  min?: Resolver<
    Maybe<ResolversTypes["letterContents_min_fields"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LetterContents_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["letterContents_max_fields"] = ResolversParentTypes["letterContents_max_fields"]
> = {
  content?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  created_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  letterId?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  representativeId?: Resolver<
    Maybe<ResolversTypes["uuid"]>,
    ParentType,
    ContextType
  >;
  updated_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LetterContents_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["letterContents_min_fields"] = ResolversParentTypes["letterContents_min_fields"]
> = {
  content?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  created_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  letterId?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  representativeId?: Resolver<
    Maybe<ResolversTypes["uuid"]>,
    ParentType,
    ContextType
  >;
  updated_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LetterContents_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["letterContents_mutation_response"] = ResolversParentTypes["letterContents_mutation_response"]
> = {
  affected_rows?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  returning?: Resolver<
    Array<ResolversTypes["letterContents"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LetterStatusResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["letterStatus"] = ResolversParentTypes["letterStatus"]
> = {
  letters?: Resolver<
    Array<ResolversTypes["letters"]>,
    ParentType,
    ContextType,
    Partial<LetterStatusLettersArgs>
  >;
  letters_aggregate?: Resolver<
    ResolversTypes["letters_aggregate"],
    ParentType,
    ContextType,
    Partial<LetterStatusLetters_AggregateArgs>
  >;
  value?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LetterStatus_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["letterStatus_aggregate"] = ResolversParentTypes["letterStatus_aggregate"]
> = {
  aggregate?: Resolver<
    Maybe<ResolversTypes["letterStatus_aggregate_fields"]>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<
    Array<ResolversTypes["letterStatus"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LetterStatus_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["letterStatus_aggregate_fields"] = ResolversParentTypes["letterStatus_aggregate_fields"]
> = {
  count?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType,
    Partial<LetterStatus_Aggregate_FieldsCountArgs>
  >;
  max?: Resolver<
    Maybe<ResolversTypes["letterStatus_max_fields"]>,
    ParentType,
    ContextType
  >;
  min?: Resolver<
    Maybe<ResolversTypes["letterStatus_min_fields"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LetterStatus_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["letterStatus_max_fields"] = ResolversParentTypes["letterStatus_max_fields"]
> = {
  value?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LetterStatus_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["letterStatus_min_fields"] = ResolversParentTypes["letterStatus_min_fields"]
> = {
  value?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LetterStatus_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["letterStatus_mutation_response"] = ResolversParentTypes["letterStatus_mutation_response"]
> = {
  affected_rows?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  returning?: Resolver<
    Array<ResolversTypes["letterStatus"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LettersResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["letters"] = ResolversParentTypes["letters"]
> = {
  additionalInformation?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  city?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  created_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  creatorId?: Resolver<ResolversTypes["uuid"], ParentType, ContextType>;
  creatorName?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  creatorSurname?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  expectations?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  feelings?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["uuid"], ParentType, ContextType>;
  issue?: Resolver<Maybe<ResolversTypes["issues"]>, ParentType, ContextType>;
  issueId?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  language?: Resolver<ResolversTypes["language_enum"], ParentType, ContextType>;
  languageByLanguage?: Resolver<
    ResolversTypes["language"],
    ParentType,
    ContextType
  >;
  letterContents?: Resolver<
    Array<ResolversTypes["letterContents"]>,
    ParentType,
    ContextType,
    Partial<LettersLetterContentsArgs>
  >;
  letterContents_aggregate?: Resolver<
    ResolversTypes["letterContents_aggregate"],
    ParentType,
    ContextType,
    Partial<LettersLetterContents_AggregateArgs>
  >;
  letterStatus?: Resolver<
    ResolversTypes["letterStatus"],
    ParentType,
    ContextType
  >;
  sendEmail?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  state?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  status?: Resolver<
    ResolversTypes["letterStatus_enum"],
    ParentType,
    ContextType
  >;
  street?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  topic?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  unit?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  updated_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  user?: Resolver<ResolversTypes["users"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Letters_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["letters_aggregate"] = ResolversParentTypes["letters_aggregate"]
> = {
  aggregate?: Resolver<
    Maybe<ResolversTypes["letters_aggregate_fields"]>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<Array<ResolversTypes["letters"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Letters_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["letters_aggregate_fields"] = ResolversParentTypes["letters_aggregate_fields"]
> = {
  count?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType,
    Partial<Letters_Aggregate_FieldsCountArgs>
  >;
  max?: Resolver<
    Maybe<ResolversTypes["letters_max_fields"]>,
    ParentType,
    ContextType
  >;
  min?: Resolver<
    Maybe<ResolversTypes["letters_min_fields"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Letters_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["letters_max_fields"] = ResolversParentTypes["letters_max_fields"]
> = {
  additionalInformation?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  city?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  created_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  creatorId?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  creatorName?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  creatorSurname?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  expectations?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  feelings?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  issueId?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  street?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  topic?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  unit?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  updated_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Letters_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["letters_min_fields"] = ResolversParentTypes["letters_min_fields"]
> = {
  additionalInformation?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  city?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  created_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  creatorId?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  creatorName?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  creatorSurname?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  expectations?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  feelings?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  issueId?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  street?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  topic?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  unit?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  updated_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Letters_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["letters_mutation_response"] = ResolversParentTypes["letters_mutation_response"]
> = {
  affected_rows?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  returning?: Resolver<
    Array<ResolversTypes["letters"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Mutation_RootResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["mutation_root"] = ResolversParentTypes["mutation_root"]
> = {
  addUserZipCode?: Resolver<
    Maybe<ResolversTypes["addUserZipCodeOutput"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootAddUserZipCodeArgs, "sessionId">
  >;
  authenticateWithCredentials?: Resolver<
    Maybe<ResolversTypes["authenticateWithCredentialsOutput"]>,
    ParentType,
    ContextType,
    Partial<Mutation_RootAuthenticateWithCredentialsArgs>
  >;
  authenticateWithGoogle?: Resolver<
    Maybe<ResolversTypes["AuthenticateWithGoogleOutput"]>,
    ParentType,
    ContextType,
    Partial<Mutation_RootAuthenticateWithGoogleArgs>
  >;
  confirmEmail?: Resolver<
    Maybe<ResolversTypes["confirmEmailOutput"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootConfirmEmailArgs, "emailConfirmationToken">
  >;
  delete_comments?: Resolver<
    Maybe<ResolversTypes["comments_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_CommentsArgs, "where">
  >;
  delete_comments_by_pk?: Resolver<
    Maybe<ResolversTypes["comments"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Comments_By_PkArgs, "id">
  >;
  delete_issueCategory?: Resolver<
    Maybe<ResolversTypes["issueCategory_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_IssueCategoryArgs, "where">
  >;
  delete_issueCategory_by_pk?: Resolver<
    Maybe<ResolversTypes["issueCategory"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_IssueCategory_By_PkArgs, "value">
  >;
  delete_issueFieldViewScale?: Resolver<
    Maybe<ResolversTypes["issueFieldViewScale_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_IssueFieldViewScaleArgs, "where">
  >;
  delete_issueFieldViewScale_by_pk?: Resolver<
    Maybe<ResolversTypes["issueFieldViewScale"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_IssueFieldViewScale_By_PkArgs, "value">
  >;
  delete_issueStatus?: Resolver<
    Maybe<ResolversTypes["issueStatus_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_IssueStatusArgs, "where">
  >;
  delete_issueStatus_by_pk?: Resolver<
    Maybe<ResolversTypes["issueStatus"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_IssueStatus_By_PkArgs, "value">
  >;
  delete_issues?: Resolver<
    Maybe<ResolversTypes["issues_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_IssuesArgs, "where">
  >;
  delete_issues_by_pk?: Resolver<
    Maybe<ResolversTypes["issues"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Issues_By_PkArgs, "id">
  >;
  delete_issues_users?: Resolver<
    Maybe<ResolversTypes["issues_users_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Issues_UsersArgs, "where">
  >;
  delete_issues_users_by_pk?: Resolver<
    Maybe<ResolversTypes["issues_users"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Issues_Users_By_PkArgs, "id">
  >;
  delete_language?: Resolver<
    Maybe<ResolversTypes["language_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_LanguageArgs, "where">
  >;
  delete_language_by_pk?: Resolver<
    Maybe<ResolversTypes["language"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Language_By_PkArgs, "value">
  >;
  delete_letterContents?: Resolver<
    Maybe<ResolversTypes["letterContents_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_LetterContentsArgs, "where">
  >;
  delete_letterContents_by_pk?: Resolver<
    Maybe<ResolversTypes["letterContents"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_LetterContents_By_PkArgs, "id">
  >;
  delete_letterStatus?: Resolver<
    Maybe<ResolversTypes["letterStatus_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_LetterStatusArgs, "where">
  >;
  delete_letterStatus_by_pk?: Resolver<
    Maybe<ResolversTypes["letterStatus"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_LetterStatus_By_PkArgs, "value">
  >;
  delete_letters?: Resolver<
    Maybe<ResolversTypes["letters_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_LettersArgs, "where">
  >;
  delete_letters_by_pk?: Resolver<
    Maybe<ResolversTypes["letters"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Letters_By_PkArgs, "id">
  >;
  delete_representatives?: Resolver<
    Maybe<ResolversTypes["representatives_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_RepresentativesArgs, "where">
  >;
  delete_representatives_by_pk?: Resolver<
    Maybe<ResolversTypes["representatives"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Representatives_By_PkArgs, "id">
  >;
  delete_sessionType?: Resolver<
    Maybe<ResolversTypes["sessionType_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_SessionTypeArgs, "where">
  >;
  delete_sessionType_by_pk?: Resolver<
    Maybe<ResolversTypes["sessionType"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_SessionType_By_PkArgs, "value">
  >;
  delete_sessions?: Resolver<
    Maybe<ResolversTypes["sessions_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_SessionsArgs, "where">
  >;
  delete_sessions_by_pk?: Resolver<
    Maybe<ResolversTypes["sessions"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Sessions_By_PkArgs, "id">
  >;
  delete_userIssueListEntries?: Resolver<
    Maybe<ResolversTypes["userIssueListEntries_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_UserIssueListEntriesArgs, "where">
  >;
  delete_userIssueListEntries_by_pk?: Resolver<
    Maybe<ResolversTypes["userIssueListEntries"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_UserIssueListEntries_By_PkArgs, "id">
  >;
  delete_userIssueListType?: Resolver<
    Maybe<ResolversTypes["userIssueListType_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_UserIssueListTypeArgs, "where">
  >;
  delete_userIssueListType_by_pk?: Resolver<
    Maybe<ResolversTypes["userIssueListType"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_UserIssueListType_By_PkArgs, "value">
  >;
  delete_userIssueLists?: Resolver<
    Maybe<ResolversTypes["userIssueLists_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_UserIssueListsArgs, "where">
  >;
  delete_userIssueLists_by_pk?: Resolver<
    Maybe<ResolversTypes["userIssueLists"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_UserIssueLists_By_PkArgs, "id">
  >;
  delete_userSource?: Resolver<
    Maybe<ResolversTypes["userSource_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_UserSourceArgs, "where">
  >;
  delete_userSource_by_pk?: Resolver<
    Maybe<ResolversTypes["userSource"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_UserSource_By_PkArgs, "value">
  >;
  delete_users?: Resolver<
    Maybe<ResolversTypes["users_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_UsersArgs, "where">
  >;
  delete_users_by_pk?: Resolver<
    Maybe<ResolversTypes["users"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Users_By_PkArgs, "id">
  >;
  insert_comments?: Resolver<
    Maybe<ResolversTypes["comments_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_CommentsArgs, "objects">
  >;
  insert_comments_one?: Resolver<
    Maybe<ResolversTypes["comments"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Comments_OneArgs, "object">
  >;
  insert_issueCategory?: Resolver<
    Maybe<ResolversTypes["issueCategory_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_IssueCategoryArgs, "objects">
  >;
  insert_issueCategory_one?: Resolver<
    Maybe<ResolversTypes["issueCategory"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_IssueCategory_OneArgs, "object">
  >;
  insert_issueFieldViewScale?: Resolver<
    Maybe<ResolversTypes["issueFieldViewScale_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_IssueFieldViewScaleArgs, "objects">
  >;
  insert_issueFieldViewScale_one?: Resolver<
    Maybe<ResolversTypes["issueFieldViewScale"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_IssueFieldViewScale_OneArgs, "object">
  >;
  insert_issueStatus?: Resolver<
    Maybe<ResolversTypes["issueStatus_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_IssueStatusArgs, "objects">
  >;
  insert_issueStatus_one?: Resolver<
    Maybe<ResolversTypes["issueStatus"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_IssueStatus_OneArgs, "object">
  >;
  insert_issues?: Resolver<
    Maybe<ResolversTypes["issues_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_IssuesArgs, "objects">
  >;
  insert_issues_one?: Resolver<
    Maybe<ResolversTypes["issues"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Issues_OneArgs, "object">
  >;
  insert_issues_users?: Resolver<
    Maybe<ResolversTypes["issues_users_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Issues_UsersArgs, "objects">
  >;
  insert_issues_users_one?: Resolver<
    Maybe<ResolversTypes["issues_users"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Issues_Users_OneArgs, "object">
  >;
  insert_language?: Resolver<
    Maybe<ResolversTypes["language_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_LanguageArgs, "objects">
  >;
  insert_language_one?: Resolver<
    Maybe<ResolversTypes["language"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Language_OneArgs, "object">
  >;
  insert_letterContents?: Resolver<
    Maybe<ResolversTypes["letterContents_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_LetterContentsArgs, "objects">
  >;
  insert_letterContents_one?: Resolver<
    Maybe<ResolversTypes["letterContents"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_LetterContents_OneArgs, "object">
  >;
  insert_letterStatus?: Resolver<
    Maybe<ResolversTypes["letterStatus_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_LetterStatusArgs, "objects">
  >;
  insert_letterStatus_one?: Resolver<
    Maybe<ResolversTypes["letterStatus"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_LetterStatus_OneArgs, "object">
  >;
  insert_letters?: Resolver<
    Maybe<ResolversTypes["letters_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_LettersArgs, "objects">
  >;
  insert_letters_one?: Resolver<
    Maybe<ResolversTypes["letters"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Letters_OneArgs, "object">
  >;
  insert_representatives?: Resolver<
    Maybe<ResolversTypes["representatives_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_RepresentativesArgs, "objects">
  >;
  insert_representatives_one?: Resolver<
    Maybe<ResolversTypes["representatives"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Representatives_OneArgs, "object">
  >;
  insert_sessionType?: Resolver<
    Maybe<ResolversTypes["sessionType_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_SessionTypeArgs, "objects">
  >;
  insert_sessionType_one?: Resolver<
    Maybe<ResolversTypes["sessionType"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_SessionType_OneArgs, "object">
  >;
  insert_sessions?: Resolver<
    Maybe<ResolversTypes["sessions_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_SessionsArgs, "objects">
  >;
  insert_sessions_one?: Resolver<
    Maybe<ResolversTypes["sessions"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Sessions_OneArgs, "object">
  >;
  insert_userIssueListEntries?: Resolver<
    Maybe<ResolversTypes["userIssueListEntries_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_UserIssueListEntriesArgs, "objects">
  >;
  insert_userIssueListEntries_one?: Resolver<
    Maybe<ResolversTypes["userIssueListEntries"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_UserIssueListEntries_OneArgs, "object">
  >;
  insert_userIssueListType?: Resolver<
    Maybe<ResolversTypes["userIssueListType_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_UserIssueListTypeArgs, "objects">
  >;
  insert_userIssueListType_one?: Resolver<
    Maybe<ResolversTypes["userIssueListType"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_UserIssueListType_OneArgs, "object">
  >;
  insert_userIssueLists?: Resolver<
    Maybe<ResolversTypes["userIssueLists_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_UserIssueListsArgs, "objects">
  >;
  insert_userIssueLists_one?: Resolver<
    Maybe<ResolversTypes["userIssueLists"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_UserIssueLists_OneArgs, "object">
  >;
  insert_userSource?: Resolver<
    Maybe<ResolversTypes["userSource_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_UserSourceArgs, "objects">
  >;
  insert_userSource_one?: Resolver<
    Maybe<ResolversTypes["userSource"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_UserSource_OneArgs, "object">
  >;
  insert_users?: Resolver<
    Maybe<ResolversTypes["users_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_UsersArgs, "objects">
  >;
  insert_users_one?: Resolver<
    Maybe<ResolversTypes["users"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Users_OneArgs, "object">
  >;
  requestPasswordReset?: Resolver<
    Maybe<ResolversTypes["requestPasswordResetOutput"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootRequestPasswordResetArgs, "email">
  >;
  resetPassword?: Resolver<
    Maybe<ResolversTypes["resetPasswordOutput"]>,
    ParentType,
    ContextType,
    RequireFields<
      Mutation_RootResetPasswordArgs,
      "newPassword" | "passwordResetToken"
    >
  >;
  signUpWithCredentials?: Resolver<
    Maybe<ResolversTypes["signUpWithCredentialsOutput"]>,
    ParentType,
    ContextType,
    RequireFields<
      Mutation_RootSignUpWithCredentialsArgs,
      "accountType" | "email" | "password" | "username"
    >
  >;
  update_comments?: Resolver<
    Maybe<ResolversTypes["comments_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_CommentsArgs, "where">
  >;
  update_comments_by_pk?: Resolver<
    Maybe<ResolversTypes["comments"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Comments_By_PkArgs, "pk_columns">
  >;
  update_comments_many?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["comments_mutation_response"]>>>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Comments_ManyArgs, "updates">
  >;
  update_issueCategory?: Resolver<
    Maybe<ResolversTypes["issueCategory_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_IssueCategoryArgs, "where">
  >;
  update_issueCategory_by_pk?: Resolver<
    Maybe<ResolversTypes["issueCategory"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_IssueCategory_By_PkArgs, "pk_columns">
  >;
  update_issueCategory_many?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["issueCategory_mutation_response"]>>>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_IssueCategory_ManyArgs, "updates">
  >;
  update_issueFieldViewScale?: Resolver<
    Maybe<ResolversTypes["issueFieldViewScale_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_IssueFieldViewScaleArgs, "where">
  >;
  update_issueFieldViewScale_by_pk?: Resolver<
    Maybe<ResolversTypes["issueFieldViewScale"]>,
    ParentType,
    ContextType,
    RequireFields<
      Mutation_RootUpdate_IssueFieldViewScale_By_PkArgs,
      "pk_columns"
    >
  >;
  update_issueFieldViewScale_many?: Resolver<
    Maybe<
      Array<Maybe<ResolversTypes["issueFieldViewScale_mutation_response"]>>
    >,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_IssueFieldViewScale_ManyArgs, "updates">
  >;
  update_issueStatus?: Resolver<
    Maybe<ResolversTypes["issueStatus_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_IssueStatusArgs, "where">
  >;
  update_issueStatus_by_pk?: Resolver<
    Maybe<ResolversTypes["issueStatus"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_IssueStatus_By_PkArgs, "pk_columns">
  >;
  update_issueStatus_many?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["issueStatus_mutation_response"]>>>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_IssueStatus_ManyArgs, "updates">
  >;
  update_issues?: Resolver<
    Maybe<ResolversTypes["issues_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_IssuesArgs, "where">
  >;
  update_issues_by_pk?: Resolver<
    Maybe<ResolversTypes["issues"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Issues_By_PkArgs, "pk_columns">
  >;
  update_issues_many?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["issues_mutation_response"]>>>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Issues_ManyArgs, "updates">
  >;
  update_issues_users?: Resolver<
    Maybe<ResolversTypes["issues_users_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Issues_UsersArgs, "where">
  >;
  update_issues_users_by_pk?: Resolver<
    Maybe<ResolversTypes["issues_users"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Issues_Users_By_PkArgs, "pk_columns">
  >;
  update_issues_users_many?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["issues_users_mutation_response"]>>>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Issues_Users_ManyArgs, "updates">
  >;
  update_language?: Resolver<
    Maybe<ResolversTypes["language_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_LanguageArgs, "where">
  >;
  update_language_by_pk?: Resolver<
    Maybe<ResolversTypes["language"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Language_By_PkArgs, "pk_columns">
  >;
  update_language_many?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["language_mutation_response"]>>>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Language_ManyArgs, "updates">
  >;
  update_letterContents?: Resolver<
    Maybe<ResolversTypes["letterContents_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_LetterContentsArgs, "where">
  >;
  update_letterContents_by_pk?: Resolver<
    Maybe<ResolversTypes["letterContents"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_LetterContents_By_PkArgs, "pk_columns">
  >;
  update_letterContents_many?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["letterContents_mutation_response"]>>>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_LetterContents_ManyArgs, "updates">
  >;
  update_letterStatus?: Resolver<
    Maybe<ResolversTypes["letterStatus_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_LetterStatusArgs, "where">
  >;
  update_letterStatus_by_pk?: Resolver<
    Maybe<ResolversTypes["letterStatus"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_LetterStatus_By_PkArgs, "pk_columns">
  >;
  update_letterStatus_many?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["letterStatus_mutation_response"]>>>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_LetterStatus_ManyArgs, "updates">
  >;
  update_letters?: Resolver<
    Maybe<ResolversTypes["letters_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_LettersArgs, "where">
  >;
  update_letters_by_pk?: Resolver<
    Maybe<ResolversTypes["letters"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Letters_By_PkArgs, "pk_columns">
  >;
  update_letters_many?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["letters_mutation_response"]>>>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Letters_ManyArgs, "updates">
  >;
  update_representatives?: Resolver<
    Maybe<ResolversTypes["representatives_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_RepresentativesArgs, "where">
  >;
  update_representatives_by_pk?: Resolver<
    Maybe<ResolversTypes["representatives"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Representatives_By_PkArgs, "pk_columns">
  >;
  update_representatives_many?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["representatives_mutation_response"]>>>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Representatives_ManyArgs, "updates">
  >;
  update_sessionType?: Resolver<
    Maybe<ResolversTypes["sessionType_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_SessionTypeArgs, "where">
  >;
  update_sessionType_by_pk?: Resolver<
    Maybe<ResolversTypes["sessionType"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_SessionType_By_PkArgs, "pk_columns">
  >;
  update_sessionType_many?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["sessionType_mutation_response"]>>>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_SessionType_ManyArgs, "updates">
  >;
  update_sessions?: Resolver<
    Maybe<ResolversTypes["sessions_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_SessionsArgs, "where">
  >;
  update_sessions_by_pk?: Resolver<
    Maybe<ResolversTypes["sessions"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Sessions_By_PkArgs, "pk_columns">
  >;
  update_sessions_many?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["sessions_mutation_response"]>>>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Sessions_ManyArgs, "updates">
  >;
  update_userIssueListEntries?: Resolver<
    Maybe<ResolversTypes["userIssueListEntries_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_UserIssueListEntriesArgs, "where">
  >;
  update_userIssueListEntries_by_pk?: Resolver<
    Maybe<ResolversTypes["userIssueListEntries"]>,
    ParentType,
    ContextType,
    RequireFields<
      Mutation_RootUpdate_UserIssueListEntries_By_PkArgs,
      "pk_columns"
    >
  >;
  update_userIssueListEntries_many?: Resolver<
    Maybe<
      Array<Maybe<ResolversTypes["userIssueListEntries_mutation_response"]>>
    >,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_UserIssueListEntries_ManyArgs, "updates">
  >;
  update_userIssueListType?: Resolver<
    Maybe<ResolversTypes["userIssueListType_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_UserIssueListTypeArgs, "where">
  >;
  update_userIssueListType_by_pk?: Resolver<
    Maybe<ResolversTypes["userIssueListType"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_UserIssueListType_By_PkArgs, "pk_columns">
  >;
  update_userIssueListType_many?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["userIssueListType_mutation_response"]>>>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_UserIssueListType_ManyArgs, "updates">
  >;
  update_userIssueLists?: Resolver<
    Maybe<ResolversTypes["userIssueLists_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_UserIssueListsArgs, "where">
  >;
  update_userIssueLists_by_pk?: Resolver<
    Maybe<ResolversTypes["userIssueLists"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_UserIssueLists_By_PkArgs, "pk_columns">
  >;
  update_userIssueLists_many?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["userIssueLists_mutation_response"]>>>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_UserIssueLists_ManyArgs, "updates">
  >;
  update_userSource?: Resolver<
    Maybe<ResolversTypes["userSource_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_UserSourceArgs, "where">
  >;
  update_userSource_by_pk?: Resolver<
    Maybe<ResolversTypes["userSource"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_UserSource_By_PkArgs, "pk_columns">
  >;
  update_userSource_many?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["userSource_mutation_response"]>>>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_UserSource_ManyArgs, "updates">
  >;
  update_users?: Resolver<
    Maybe<ResolversTypes["users_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_UsersArgs, "where">
  >;
  update_users_by_pk?: Resolver<
    Maybe<ResolversTypes["users"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Users_By_PkArgs, "pk_columns">
  >;
  update_users_many?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["users_mutation_response"]>>>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Users_ManyArgs, "updates">
  >;
  validatePasswordResetToken?: Resolver<
    Maybe<ResolversTypes["ValidatePasswordResetTokenOutput"]>,
    ParentType,
    ContextType,
    RequireFields<
      Mutation_RootValidatePasswordResetTokenArgs,
      "passwordResetToken"
    >
  >;
};

export type Query_RootResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["query_root"] = ResolversParentTypes["query_root"]
> = {
  comments?: Resolver<
    Array<ResolversTypes["comments"]>,
    ParentType,
    ContextType,
    Partial<Query_RootCommentsArgs>
  >;
  comments_aggregate?: Resolver<
    ResolversTypes["comments_aggregate"],
    ParentType,
    ContextType,
    Partial<Query_RootComments_AggregateArgs>
  >;
  comments_by_pk?: Resolver<
    Maybe<ResolversTypes["comments"]>,
    ParentType,
    ContextType,
    RequireFields<Query_RootComments_By_PkArgs, "id">
  >;
  issueCategory?: Resolver<
    Array<ResolversTypes["issueCategory"]>,
    ParentType,
    ContextType,
    Partial<Query_RootIssueCategoryArgs>
  >;
  issueCategory_aggregate?: Resolver<
    ResolversTypes["issueCategory_aggregate"],
    ParentType,
    ContextType,
    Partial<Query_RootIssueCategory_AggregateArgs>
  >;
  issueCategory_by_pk?: Resolver<
    Maybe<ResolversTypes["issueCategory"]>,
    ParentType,
    ContextType,
    RequireFields<Query_RootIssueCategory_By_PkArgs, "value">
  >;
  issueFieldViewScale?: Resolver<
    Array<ResolversTypes["issueFieldViewScale"]>,
    ParentType,
    ContextType,
    Partial<Query_RootIssueFieldViewScaleArgs>
  >;
  issueFieldViewScale_aggregate?: Resolver<
    ResolversTypes["issueFieldViewScale_aggregate"],
    ParentType,
    ContextType,
    Partial<Query_RootIssueFieldViewScale_AggregateArgs>
  >;
  issueFieldViewScale_by_pk?: Resolver<
    Maybe<ResolversTypes["issueFieldViewScale"]>,
    ParentType,
    ContextType,
    RequireFields<Query_RootIssueFieldViewScale_By_PkArgs, "value">
  >;
  issueStatus?: Resolver<
    Array<ResolversTypes["issueStatus"]>,
    ParentType,
    ContextType,
    Partial<Query_RootIssueStatusArgs>
  >;
  issueStatus_aggregate?: Resolver<
    ResolversTypes["issueStatus_aggregate"],
    ParentType,
    ContextType,
    Partial<Query_RootIssueStatus_AggregateArgs>
  >;
  issueStatus_by_pk?: Resolver<
    Maybe<ResolversTypes["issueStatus"]>,
    ParentType,
    ContextType,
    RequireFields<Query_RootIssueStatus_By_PkArgs, "value">
  >;
  issues?: Resolver<
    Array<ResolversTypes["issues"]>,
    ParentType,
    ContextType,
    Partial<Query_RootIssuesArgs>
  >;
  issues_aggregate?: Resolver<
    ResolversTypes["issues_aggregate"],
    ParentType,
    ContextType,
    Partial<Query_RootIssues_AggregateArgs>
  >;
  issues_by_pk?: Resolver<
    Maybe<ResolversTypes["issues"]>,
    ParentType,
    ContextType,
    RequireFields<Query_RootIssues_By_PkArgs, "id">
  >;
  issues_users?: Resolver<
    Array<ResolversTypes["issues_users"]>,
    ParentType,
    ContextType,
    Partial<Query_RootIssues_UsersArgs>
  >;
  issues_users_aggregate?: Resolver<
    ResolversTypes["issues_users_aggregate"],
    ParentType,
    ContextType,
    Partial<Query_RootIssues_Users_AggregateArgs>
  >;
  issues_users_by_pk?: Resolver<
    Maybe<ResolversTypes["issues_users"]>,
    ParentType,
    ContextType,
    RequireFields<Query_RootIssues_Users_By_PkArgs, "id">
  >;
  language?: Resolver<
    Array<ResolversTypes["language"]>,
    ParentType,
    ContextType,
    Partial<Query_RootLanguageArgs>
  >;
  language_aggregate?: Resolver<
    ResolversTypes["language_aggregate"],
    ParentType,
    ContextType,
    Partial<Query_RootLanguage_AggregateArgs>
  >;
  language_by_pk?: Resolver<
    Maybe<ResolversTypes["language"]>,
    ParentType,
    ContextType,
    RequireFields<Query_RootLanguage_By_PkArgs, "value">
  >;
  letterContents?: Resolver<
    Array<ResolversTypes["letterContents"]>,
    ParentType,
    ContextType,
    Partial<Query_RootLetterContentsArgs>
  >;
  letterContents_aggregate?: Resolver<
    ResolversTypes["letterContents_aggregate"],
    ParentType,
    ContextType,
    Partial<Query_RootLetterContents_AggregateArgs>
  >;
  letterContents_by_pk?: Resolver<
    Maybe<ResolversTypes["letterContents"]>,
    ParentType,
    ContextType,
    RequireFields<Query_RootLetterContents_By_PkArgs, "id">
  >;
  letterStatus?: Resolver<
    Array<ResolversTypes["letterStatus"]>,
    ParentType,
    ContextType,
    Partial<Query_RootLetterStatusArgs>
  >;
  letterStatus_aggregate?: Resolver<
    ResolversTypes["letterStatus_aggregate"],
    ParentType,
    ContextType,
    Partial<Query_RootLetterStatus_AggregateArgs>
  >;
  letterStatus_by_pk?: Resolver<
    Maybe<ResolversTypes["letterStatus"]>,
    ParentType,
    ContextType,
    RequireFields<Query_RootLetterStatus_By_PkArgs, "value">
  >;
  letters?: Resolver<
    Array<ResolversTypes["letters"]>,
    ParentType,
    ContextType,
    Partial<Query_RootLettersArgs>
  >;
  letters_aggregate?: Resolver<
    ResolversTypes["letters_aggregate"],
    ParentType,
    ContextType,
    Partial<Query_RootLetters_AggregateArgs>
  >;
  letters_by_pk?: Resolver<
    Maybe<ResolversTypes["letters"]>,
    ParentType,
    ContextType,
    RequireFields<Query_RootLetters_By_PkArgs, "id">
  >;
  representatives?: Resolver<
    Array<ResolversTypes["representatives"]>,
    ParentType,
    ContextType,
    Partial<Query_RootRepresentativesArgs>
  >;
  representatives_aggregate?: Resolver<
    ResolversTypes["representatives_aggregate"],
    ParentType,
    ContextType,
    Partial<Query_RootRepresentatives_AggregateArgs>
  >;
  representatives_by_pk?: Resolver<
    Maybe<ResolversTypes["representatives"]>,
    ParentType,
    ContextType,
    RequireFields<Query_RootRepresentatives_By_PkArgs, "id">
  >;
  sessionType?: Resolver<
    Array<ResolversTypes["sessionType"]>,
    ParentType,
    ContextType,
    Partial<Query_RootSessionTypeArgs>
  >;
  sessionType_aggregate?: Resolver<
    ResolversTypes["sessionType_aggregate"],
    ParentType,
    ContextType,
    Partial<Query_RootSessionType_AggregateArgs>
  >;
  sessionType_by_pk?: Resolver<
    Maybe<ResolversTypes["sessionType"]>,
    ParentType,
    ContextType,
    RequireFields<Query_RootSessionType_By_PkArgs, "value">
  >;
  sessions?: Resolver<
    Array<ResolversTypes["sessions"]>,
    ParentType,
    ContextType,
    Partial<Query_RootSessionsArgs>
  >;
  sessions_aggregate?: Resolver<
    ResolversTypes["sessions_aggregate"],
    ParentType,
    ContextType,
    Partial<Query_RootSessions_AggregateArgs>
  >;
  sessions_by_pk?: Resolver<
    Maybe<ResolversTypes["sessions"]>,
    ParentType,
    ContextType,
    RequireFields<Query_RootSessions_By_PkArgs, "id">
  >;
  userIssueListEntries?: Resolver<
    Array<ResolversTypes["userIssueListEntries"]>,
    ParentType,
    ContextType,
    Partial<Query_RootUserIssueListEntriesArgs>
  >;
  userIssueListEntries_aggregate?: Resolver<
    ResolversTypes["userIssueListEntries_aggregate"],
    ParentType,
    ContextType,
    Partial<Query_RootUserIssueListEntries_AggregateArgs>
  >;
  userIssueListEntries_by_pk?: Resolver<
    Maybe<ResolversTypes["userIssueListEntries"]>,
    ParentType,
    ContextType,
    RequireFields<Query_RootUserIssueListEntries_By_PkArgs, "id">
  >;
  userIssueListType?: Resolver<
    Array<ResolversTypes["userIssueListType"]>,
    ParentType,
    ContextType,
    Partial<Query_RootUserIssueListTypeArgs>
  >;
  userIssueListType_aggregate?: Resolver<
    ResolversTypes["userIssueListType_aggregate"],
    ParentType,
    ContextType,
    Partial<Query_RootUserIssueListType_AggregateArgs>
  >;
  userIssueListType_by_pk?: Resolver<
    Maybe<ResolversTypes["userIssueListType"]>,
    ParentType,
    ContextType,
    RequireFields<Query_RootUserIssueListType_By_PkArgs, "value">
  >;
  userIssueLists?: Resolver<
    Array<ResolversTypes["userIssueLists"]>,
    ParentType,
    ContextType,
    Partial<Query_RootUserIssueListsArgs>
  >;
  userIssueLists_aggregate?: Resolver<
    ResolversTypes["userIssueLists_aggregate"],
    ParentType,
    ContextType,
    Partial<Query_RootUserIssueLists_AggregateArgs>
  >;
  userIssueLists_by_pk?: Resolver<
    Maybe<ResolversTypes["userIssueLists"]>,
    ParentType,
    ContextType,
    RequireFields<Query_RootUserIssueLists_By_PkArgs, "id">
  >;
  userSource?: Resolver<
    Array<ResolversTypes["userSource"]>,
    ParentType,
    ContextType,
    Partial<Query_RootUserSourceArgs>
  >;
  userSource_aggregate?: Resolver<
    ResolversTypes["userSource_aggregate"],
    ParentType,
    ContextType,
    Partial<Query_RootUserSource_AggregateArgs>
  >;
  userSource_by_pk?: Resolver<
    Maybe<ResolversTypes["userSource"]>,
    ParentType,
    ContextType,
    RequireFields<Query_RootUserSource_By_PkArgs, "value">
  >;
  users?: Resolver<
    Array<ResolversTypes["users"]>,
    ParentType,
    ContextType,
    Partial<Query_RootUsersArgs>
  >;
  users_aggregate?: Resolver<
    ResolversTypes["users_aggregate"],
    ParentType,
    ContextType,
    Partial<Query_RootUsers_AggregateArgs>
  >;
  users_by_pk?: Resolver<
    Maybe<ResolversTypes["users"]>,
    ParentType,
    ContextType,
    RequireFields<Query_RootUsers_By_PkArgs, "id">
  >;
};

export type RepresentativesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["representatives"] = ResolversParentTypes["representatives"]
> = {
  created_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  firstname?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["uuid"], ParentType, ContextType>;
  lastname?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  letterContents?: Resolver<
    Array<ResolversTypes["letterContents"]>,
    ParentType,
    ContextType,
    Partial<RepresentativesLetterContentsArgs>
  >;
  letterContents_aggregate?: Resolver<
    ResolversTypes["letterContents_aggregate"],
    ParentType,
    ContextType,
    Partial<RepresentativesLetterContents_AggregateArgs>
  >;
  middlename?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  updated_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Representatives_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["representatives_aggregate"] = ResolversParentTypes["representatives_aggregate"]
> = {
  aggregate?: Resolver<
    Maybe<ResolversTypes["representatives_aggregate_fields"]>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<
    Array<ResolversTypes["representatives"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Representatives_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["representatives_aggregate_fields"] = ResolversParentTypes["representatives_aggregate_fields"]
> = {
  count?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType,
    Partial<Representatives_Aggregate_FieldsCountArgs>
  >;
  max?: Resolver<
    Maybe<ResolversTypes["representatives_max_fields"]>,
    ParentType,
    ContextType
  >;
  min?: Resolver<
    Maybe<ResolversTypes["representatives_min_fields"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Representatives_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["representatives_max_fields"] = ResolversParentTypes["representatives_max_fields"]
> = {
  created_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  firstname?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  lastname?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  middlename?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  updated_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Representatives_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["representatives_min_fields"] = ResolversParentTypes["representatives_min_fields"]
> = {
  created_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  firstname?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  lastname?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  middlename?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  updated_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Representatives_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["representatives_mutation_response"] = ResolversParentTypes["representatives_mutation_response"]
> = {
  affected_rows?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  returning?: Resolver<
    Array<ResolversTypes["representatives"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RequestPasswordResetOutputResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["requestPasswordResetOutput"] = ResolversParentTypes["requestPasswordResetOutput"]
> = {
  email?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ResetPasswordOutputResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["resetPasswordOutput"] = ResolversParentTypes["resetPasswordOutput"]
> = {
  sessionId?: Resolver<ResolversTypes["uuid"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SessionTypeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["sessionType"] = ResolversParentTypes["sessionType"]
> = {
  sessions?: Resolver<
    Array<ResolversTypes["sessions"]>,
    ParentType,
    ContextType,
    Partial<SessionTypeSessionsArgs>
  >;
  sessions_aggregate?: Resolver<
    ResolversTypes["sessions_aggregate"],
    ParentType,
    ContextType,
    Partial<SessionTypeSessions_AggregateArgs>
  >;
  value?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SessionType_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["sessionType_aggregate"] = ResolversParentTypes["sessionType_aggregate"]
> = {
  aggregate?: Resolver<
    Maybe<ResolversTypes["sessionType_aggregate_fields"]>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<
    Array<ResolversTypes["sessionType"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SessionType_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["sessionType_aggregate_fields"] = ResolversParentTypes["sessionType_aggregate_fields"]
> = {
  count?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType,
    Partial<SessionType_Aggregate_FieldsCountArgs>
  >;
  max?: Resolver<
    Maybe<ResolversTypes["sessionType_max_fields"]>,
    ParentType,
    ContextType
  >;
  min?: Resolver<
    Maybe<ResolversTypes["sessionType_min_fields"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SessionType_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["sessionType_max_fields"] = ResolversParentTypes["sessionType_max_fields"]
> = {
  value?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SessionType_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["sessionType_min_fields"] = ResolversParentTypes["sessionType_min_fields"]
> = {
  value?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SessionType_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["sessionType_mutation_response"] = ResolversParentTypes["sessionType_mutation_response"]
> = {
  affected_rows?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  returning?: Resolver<
    Array<ResolversTypes["sessionType"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SessionsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["sessions"] = ResolversParentTypes["sessions"]
> = {
  created_at?: Resolver<ResolversTypes["timestamptz"], ParentType, ContextType>;
  expires?: Resolver<ResolversTypes["timestamptz"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["uuid"], ParentType, ContextType>;
  isValid?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  lastActiveAt?: Resolver<
    ResolversTypes["timestamptz"],
    ParentType,
    ContextType
  >;
  sessionType?: Resolver<
    Maybe<ResolversTypes["sessionType"]>,
    ParentType,
    ContextType
  >;
  type?: Resolver<
    Maybe<ResolversTypes["sessionType_enum"]>,
    ParentType,
    ContextType
  >;
  updated_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  user?: Resolver<ResolversTypes["users"], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes["uuid"], ParentType, ContextType>;
  userRole?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Sessions_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["sessions_aggregate"] = ResolversParentTypes["sessions_aggregate"]
> = {
  aggregate?: Resolver<
    Maybe<ResolversTypes["sessions_aggregate_fields"]>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<Array<ResolversTypes["sessions"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Sessions_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["sessions_aggregate_fields"] = ResolversParentTypes["sessions_aggregate_fields"]
> = {
  count?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType,
    Partial<Sessions_Aggregate_FieldsCountArgs>
  >;
  max?: Resolver<
    Maybe<ResolversTypes["sessions_max_fields"]>,
    ParentType,
    ContextType
  >;
  min?: Resolver<
    Maybe<ResolversTypes["sessions_min_fields"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Sessions_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["sessions_max_fields"] = ResolversParentTypes["sessions_max_fields"]
> = {
  created_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  expires?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  lastActiveAt?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  updated_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  userId?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  userRole?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Sessions_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["sessions_min_fields"] = ResolversParentTypes["sessions_min_fields"]
> = {
  created_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  expires?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  lastActiveAt?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  updated_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  userId?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  userRole?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Sessions_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["sessions_mutation_response"] = ResolversParentTypes["sessions_mutation_response"]
> = {
  affected_rows?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  returning?: Resolver<
    Array<ResolversTypes["sessions"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SignUpWithCredentialsOutputResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["signUpWithCredentialsOutput"] = ResolversParentTypes["signUpWithCredentialsOutput"]
> = {
  sessionId?: Resolver<ResolversTypes["uuid"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Subscription_RootResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["subscription_root"] = ResolversParentTypes["subscription_root"]
> = {
  comments?: SubscriptionResolver<
    Array<ResolversTypes["comments"]>,
    "comments",
    ParentType,
    ContextType,
    Partial<Subscription_RootCommentsArgs>
  >;
  comments_aggregate?: SubscriptionResolver<
    ResolversTypes["comments_aggregate"],
    "comments_aggregate",
    ParentType,
    ContextType,
    Partial<Subscription_RootComments_AggregateArgs>
  >;
  comments_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes["comments"]>,
    "comments_by_pk",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootComments_By_PkArgs, "id">
  >;
  comments_stream?: SubscriptionResolver<
    Array<ResolversTypes["comments"]>,
    "comments_stream",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootComments_StreamArgs, "batch_size" | "cursor">
  >;
  issueCategory?: SubscriptionResolver<
    Array<ResolversTypes["issueCategory"]>,
    "issueCategory",
    ParentType,
    ContextType,
    Partial<Subscription_RootIssueCategoryArgs>
  >;
  issueCategory_aggregate?: SubscriptionResolver<
    ResolversTypes["issueCategory_aggregate"],
    "issueCategory_aggregate",
    ParentType,
    ContextType,
    Partial<Subscription_RootIssueCategory_AggregateArgs>
  >;
  issueCategory_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes["issueCategory"]>,
    "issueCategory_by_pk",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootIssueCategory_By_PkArgs, "value">
  >;
  issueCategory_stream?: SubscriptionResolver<
    Array<ResolversTypes["issueCategory"]>,
    "issueCategory_stream",
    ParentType,
    ContextType,
    RequireFields<
      Subscription_RootIssueCategory_StreamArgs,
      "batch_size" | "cursor"
    >
  >;
  issueFieldViewScale?: SubscriptionResolver<
    Array<ResolversTypes["issueFieldViewScale"]>,
    "issueFieldViewScale",
    ParentType,
    ContextType,
    Partial<Subscription_RootIssueFieldViewScaleArgs>
  >;
  issueFieldViewScale_aggregate?: SubscriptionResolver<
    ResolversTypes["issueFieldViewScale_aggregate"],
    "issueFieldViewScale_aggregate",
    ParentType,
    ContextType,
    Partial<Subscription_RootIssueFieldViewScale_AggregateArgs>
  >;
  issueFieldViewScale_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes["issueFieldViewScale"]>,
    "issueFieldViewScale_by_pk",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootIssueFieldViewScale_By_PkArgs, "value">
  >;
  issueFieldViewScale_stream?: SubscriptionResolver<
    Array<ResolversTypes["issueFieldViewScale"]>,
    "issueFieldViewScale_stream",
    ParentType,
    ContextType,
    RequireFields<
      Subscription_RootIssueFieldViewScale_StreamArgs,
      "batch_size" | "cursor"
    >
  >;
  issueStatus?: SubscriptionResolver<
    Array<ResolversTypes["issueStatus"]>,
    "issueStatus",
    ParentType,
    ContextType,
    Partial<Subscription_RootIssueStatusArgs>
  >;
  issueStatus_aggregate?: SubscriptionResolver<
    ResolversTypes["issueStatus_aggregate"],
    "issueStatus_aggregate",
    ParentType,
    ContextType,
    Partial<Subscription_RootIssueStatus_AggregateArgs>
  >;
  issueStatus_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes["issueStatus"]>,
    "issueStatus_by_pk",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootIssueStatus_By_PkArgs, "value">
  >;
  issueStatus_stream?: SubscriptionResolver<
    Array<ResolversTypes["issueStatus"]>,
    "issueStatus_stream",
    ParentType,
    ContextType,
    RequireFields<
      Subscription_RootIssueStatus_StreamArgs,
      "batch_size" | "cursor"
    >
  >;
  issues?: SubscriptionResolver<
    Array<ResolversTypes["issues"]>,
    "issues",
    ParentType,
    ContextType,
    Partial<Subscription_RootIssuesArgs>
  >;
  issues_aggregate?: SubscriptionResolver<
    ResolversTypes["issues_aggregate"],
    "issues_aggregate",
    ParentType,
    ContextType,
    Partial<Subscription_RootIssues_AggregateArgs>
  >;
  issues_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes["issues"]>,
    "issues_by_pk",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootIssues_By_PkArgs, "id">
  >;
  issues_stream?: SubscriptionResolver<
    Array<ResolversTypes["issues"]>,
    "issues_stream",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootIssues_StreamArgs, "batch_size" | "cursor">
  >;
  issues_users?: SubscriptionResolver<
    Array<ResolversTypes["issues_users"]>,
    "issues_users",
    ParentType,
    ContextType,
    Partial<Subscription_RootIssues_UsersArgs>
  >;
  issues_users_aggregate?: SubscriptionResolver<
    ResolversTypes["issues_users_aggregate"],
    "issues_users_aggregate",
    ParentType,
    ContextType,
    Partial<Subscription_RootIssues_Users_AggregateArgs>
  >;
  issues_users_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes["issues_users"]>,
    "issues_users_by_pk",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootIssues_Users_By_PkArgs, "id">
  >;
  issues_users_stream?: SubscriptionResolver<
    Array<ResolversTypes["issues_users"]>,
    "issues_users_stream",
    ParentType,
    ContextType,
    RequireFields<
      Subscription_RootIssues_Users_StreamArgs,
      "batch_size" | "cursor"
    >
  >;
  language?: SubscriptionResolver<
    Array<ResolversTypes["language"]>,
    "language",
    ParentType,
    ContextType,
    Partial<Subscription_RootLanguageArgs>
  >;
  language_aggregate?: SubscriptionResolver<
    ResolversTypes["language_aggregate"],
    "language_aggregate",
    ParentType,
    ContextType,
    Partial<Subscription_RootLanguage_AggregateArgs>
  >;
  language_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes["language"]>,
    "language_by_pk",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootLanguage_By_PkArgs, "value">
  >;
  language_stream?: SubscriptionResolver<
    Array<ResolversTypes["language"]>,
    "language_stream",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootLanguage_StreamArgs, "batch_size" | "cursor">
  >;
  letterContents?: SubscriptionResolver<
    Array<ResolversTypes["letterContents"]>,
    "letterContents",
    ParentType,
    ContextType,
    Partial<Subscription_RootLetterContentsArgs>
  >;
  letterContents_aggregate?: SubscriptionResolver<
    ResolversTypes["letterContents_aggregate"],
    "letterContents_aggregate",
    ParentType,
    ContextType,
    Partial<Subscription_RootLetterContents_AggregateArgs>
  >;
  letterContents_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes["letterContents"]>,
    "letterContents_by_pk",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootLetterContents_By_PkArgs, "id">
  >;
  letterContents_stream?: SubscriptionResolver<
    Array<ResolversTypes["letterContents"]>,
    "letterContents_stream",
    ParentType,
    ContextType,
    RequireFields<
      Subscription_RootLetterContents_StreamArgs,
      "batch_size" | "cursor"
    >
  >;
  letterStatus?: SubscriptionResolver<
    Array<ResolversTypes["letterStatus"]>,
    "letterStatus",
    ParentType,
    ContextType,
    Partial<Subscription_RootLetterStatusArgs>
  >;
  letterStatus_aggregate?: SubscriptionResolver<
    ResolversTypes["letterStatus_aggregate"],
    "letterStatus_aggregate",
    ParentType,
    ContextType,
    Partial<Subscription_RootLetterStatus_AggregateArgs>
  >;
  letterStatus_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes["letterStatus"]>,
    "letterStatus_by_pk",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootLetterStatus_By_PkArgs, "value">
  >;
  letterStatus_stream?: SubscriptionResolver<
    Array<ResolversTypes["letterStatus"]>,
    "letterStatus_stream",
    ParentType,
    ContextType,
    RequireFields<
      Subscription_RootLetterStatus_StreamArgs,
      "batch_size" | "cursor"
    >
  >;
  letters?: SubscriptionResolver<
    Array<ResolversTypes["letters"]>,
    "letters",
    ParentType,
    ContextType,
    Partial<Subscription_RootLettersArgs>
  >;
  letters_aggregate?: SubscriptionResolver<
    ResolversTypes["letters_aggregate"],
    "letters_aggregate",
    ParentType,
    ContextType,
    Partial<Subscription_RootLetters_AggregateArgs>
  >;
  letters_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes["letters"]>,
    "letters_by_pk",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootLetters_By_PkArgs, "id">
  >;
  letters_stream?: SubscriptionResolver<
    Array<ResolversTypes["letters"]>,
    "letters_stream",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootLetters_StreamArgs, "batch_size" | "cursor">
  >;
  representatives?: SubscriptionResolver<
    Array<ResolversTypes["representatives"]>,
    "representatives",
    ParentType,
    ContextType,
    Partial<Subscription_RootRepresentativesArgs>
  >;
  representatives_aggregate?: SubscriptionResolver<
    ResolversTypes["representatives_aggregate"],
    "representatives_aggregate",
    ParentType,
    ContextType,
    Partial<Subscription_RootRepresentatives_AggregateArgs>
  >;
  representatives_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes["representatives"]>,
    "representatives_by_pk",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootRepresentatives_By_PkArgs, "id">
  >;
  representatives_stream?: SubscriptionResolver<
    Array<ResolversTypes["representatives"]>,
    "representatives_stream",
    ParentType,
    ContextType,
    RequireFields<
      Subscription_RootRepresentatives_StreamArgs,
      "batch_size" | "cursor"
    >
  >;
  sessionType?: SubscriptionResolver<
    Array<ResolversTypes["sessionType"]>,
    "sessionType",
    ParentType,
    ContextType,
    Partial<Subscription_RootSessionTypeArgs>
  >;
  sessionType_aggregate?: SubscriptionResolver<
    ResolversTypes["sessionType_aggregate"],
    "sessionType_aggregate",
    ParentType,
    ContextType,
    Partial<Subscription_RootSessionType_AggregateArgs>
  >;
  sessionType_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes["sessionType"]>,
    "sessionType_by_pk",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootSessionType_By_PkArgs, "value">
  >;
  sessionType_stream?: SubscriptionResolver<
    Array<ResolversTypes["sessionType"]>,
    "sessionType_stream",
    ParentType,
    ContextType,
    RequireFields<
      Subscription_RootSessionType_StreamArgs,
      "batch_size" | "cursor"
    >
  >;
  sessions?: SubscriptionResolver<
    Array<ResolversTypes["sessions"]>,
    "sessions",
    ParentType,
    ContextType,
    Partial<Subscription_RootSessionsArgs>
  >;
  sessions_aggregate?: SubscriptionResolver<
    ResolversTypes["sessions_aggregate"],
    "sessions_aggregate",
    ParentType,
    ContextType,
    Partial<Subscription_RootSessions_AggregateArgs>
  >;
  sessions_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes["sessions"]>,
    "sessions_by_pk",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootSessions_By_PkArgs, "id">
  >;
  sessions_stream?: SubscriptionResolver<
    Array<ResolversTypes["sessions"]>,
    "sessions_stream",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootSessions_StreamArgs, "batch_size" | "cursor">
  >;
  userIssueListEntries?: SubscriptionResolver<
    Array<ResolversTypes["userIssueListEntries"]>,
    "userIssueListEntries",
    ParentType,
    ContextType,
    Partial<Subscription_RootUserIssueListEntriesArgs>
  >;
  userIssueListEntries_aggregate?: SubscriptionResolver<
    ResolversTypes["userIssueListEntries_aggregate"],
    "userIssueListEntries_aggregate",
    ParentType,
    ContextType,
    Partial<Subscription_RootUserIssueListEntries_AggregateArgs>
  >;
  userIssueListEntries_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes["userIssueListEntries"]>,
    "userIssueListEntries_by_pk",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootUserIssueListEntries_By_PkArgs, "id">
  >;
  userIssueListEntries_stream?: SubscriptionResolver<
    Array<ResolversTypes["userIssueListEntries"]>,
    "userIssueListEntries_stream",
    ParentType,
    ContextType,
    RequireFields<
      Subscription_RootUserIssueListEntries_StreamArgs,
      "batch_size" | "cursor"
    >
  >;
  userIssueListType?: SubscriptionResolver<
    Array<ResolversTypes["userIssueListType"]>,
    "userIssueListType",
    ParentType,
    ContextType,
    Partial<Subscription_RootUserIssueListTypeArgs>
  >;
  userIssueListType_aggregate?: SubscriptionResolver<
    ResolversTypes["userIssueListType_aggregate"],
    "userIssueListType_aggregate",
    ParentType,
    ContextType,
    Partial<Subscription_RootUserIssueListType_AggregateArgs>
  >;
  userIssueListType_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes["userIssueListType"]>,
    "userIssueListType_by_pk",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootUserIssueListType_By_PkArgs, "value">
  >;
  userIssueListType_stream?: SubscriptionResolver<
    Array<ResolversTypes["userIssueListType"]>,
    "userIssueListType_stream",
    ParentType,
    ContextType,
    RequireFields<
      Subscription_RootUserIssueListType_StreamArgs,
      "batch_size" | "cursor"
    >
  >;
  userIssueLists?: SubscriptionResolver<
    Array<ResolversTypes["userIssueLists"]>,
    "userIssueLists",
    ParentType,
    ContextType,
    Partial<Subscription_RootUserIssueListsArgs>
  >;
  userIssueLists_aggregate?: SubscriptionResolver<
    ResolversTypes["userIssueLists_aggregate"],
    "userIssueLists_aggregate",
    ParentType,
    ContextType,
    Partial<Subscription_RootUserIssueLists_AggregateArgs>
  >;
  userIssueLists_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes["userIssueLists"]>,
    "userIssueLists_by_pk",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootUserIssueLists_By_PkArgs, "id">
  >;
  userIssueLists_stream?: SubscriptionResolver<
    Array<ResolversTypes["userIssueLists"]>,
    "userIssueLists_stream",
    ParentType,
    ContextType,
    RequireFields<
      Subscription_RootUserIssueLists_StreamArgs,
      "batch_size" | "cursor"
    >
  >;
  userSource?: SubscriptionResolver<
    Array<ResolversTypes["userSource"]>,
    "userSource",
    ParentType,
    ContextType,
    Partial<Subscription_RootUserSourceArgs>
  >;
  userSource_aggregate?: SubscriptionResolver<
    ResolversTypes["userSource_aggregate"],
    "userSource_aggregate",
    ParentType,
    ContextType,
    Partial<Subscription_RootUserSource_AggregateArgs>
  >;
  userSource_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes["userSource"]>,
    "userSource_by_pk",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootUserSource_By_PkArgs, "value">
  >;
  userSource_stream?: SubscriptionResolver<
    Array<ResolversTypes["userSource"]>,
    "userSource_stream",
    ParentType,
    ContextType,
    RequireFields<
      Subscription_RootUserSource_StreamArgs,
      "batch_size" | "cursor"
    >
  >;
  users?: SubscriptionResolver<
    Array<ResolversTypes["users"]>,
    "users",
    ParentType,
    ContextType,
    Partial<Subscription_RootUsersArgs>
  >;
  users_aggregate?: SubscriptionResolver<
    ResolversTypes["users_aggregate"],
    "users_aggregate",
    ParentType,
    ContextType,
    Partial<Subscription_RootUsers_AggregateArgs>
  >;
  users_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes["users"]>,
    "users_by_pk",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootUsers_By_PkArgs, "id">
  >;
  users_stream?: SubscriptionResolver<
    Array<ResolversTypes["users"]>,
    "users_stream",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootUsers_StreamArgs, "batch_size" | "cursor">
  >;
};

export interface TimestamptzScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["timestamptz"], any> {
  name: "timestamptz";
}

export type UserIssueListEntriesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["userIssueListEntries"] = ResolversParentTypes["userIssueListEntries"]
> = {
  id?: Resolver<ResolversTypes["uuid"], ParentType, ContextType>;
  issue?: Resolver<ResolversTypes["issues"], ParentType, ContextType>;
  issueId?: Resolver<ResolversTypes["uuid"], ParentType, ContextType>;
  userIssueList?: Resolver<
    ResolversTypes["userIssueLists"],
    ParentType,
    ContextType
  >;
  userIssueListId?: Resolver<ResolversTypes["uuid"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserIssueListEntries_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["userIssueListEntries_aggregate"] = ResolversParentTypes["userIssueListEntries_aggregate"]
> = {
  aggregate?: Resolver<
    Maybe<ResolversTypes["userIssueListEntries_aggregate_fields"]>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<
    Array<ResolversTypes["userIssueListEntries"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserIssueListEntries_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["userIssueListEntries_aggregate_fields"] = ResolversParentTypes["userIssueListEntries_aggregate_fields"]
> = {
  count?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType,
    Partial<UserIssueListEntries_Aggregate_FieldsCountArgs>
  >;
  max?: Resolver<
    Maybe<ResolversTypes["userIssueListEntries_max_fields"]>,
    ParentType,
    ContextType
  >;
  min?: Resolver<
    Maybe<ResolversTypes["userIssueListEntries_min_fields"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserIssueListEntries_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["userIssueListEntries_max_fields"] = ResolversParentTypes["userIssueListEntries_max_fields"]
> = {
  id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  issueId?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  userIssueListId?: Resolver<
    Maybe<ResolversTypes["uuid"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserIssueListEntries_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["userIssueListEntries_min_fields"] = ResolversParentTypes["userIssueListEntries_min_fields"]
> = {
  id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  issueId?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  userIssueListId?: Resolver<
    Maybe<ResolversTypes["uuid"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserIssueListEntries_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["userIssueListEntries_mutation_response"] = ResolversParentTypes["userIssueListEntries_mutation_response"]
> = {
  affected_rows?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  returning?: Resolver<
    Array<ResolversTypes["userIssueListEntries"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserIssueListTypeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["userIssueListType"] = ResolversParentTypes["userIssueListType"]
> = {
  userIssueLists?: Resolver<
    Array<ResolversTypes["userIssueLists"]>,
    ParentType,
    ContextType,
    Partial<UserIssueListTypeUserIssueListsArgs>
  >;
  userIssueLists_aggregate?: Resolver<
    ResolversTypes["userIssueLists_aggregate"],
    ParentType,
    ContextType,
    Partial<UserIssueListTypeUserIssueLists_AggregateArgs>
  >;
  value?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserIssueListType_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["userIssueListType_aggregate"] = ResolversParentTypes["userIssueListType_aggregate"]
> = {
  aggregate?: Resolver<
    Maybe<ResolversTypes["userIssueListType_aggregate_fields"]>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<
    Array<ResolversTypes["userIssueListType"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserIssueListType_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["userIssueListType_aggregate_fields"] = ResolversParentTypes["userIssueListType_aggregate_fields"]
> = {
  count?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType,
    Partial<UserIssueListType_Aggregate_FieldsCountArgs>
  >;
  max?: Resolver<
    Maybe<ResolversTypes["userIssueListType_max_fields"]>,
    ParentType,
    ContextType
  >;
  min?: Resolver<
    Maybe<ResolversTypes["userIssueListType_min_fields"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserIssueListType_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["userIssueListType_max_fields"] = ResolversParentTypes["userIssueListType_max_fields"]
> = {
  value?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserIssueListType_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["userIssueListType_min_fields"] = ResolversParentTypes["userIssueListType_min_fields"]
> = {
  value?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserIssueListType_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["userIssueListType_mutation_response"] = ResolversParentTypes["userIssueListType_mutation_response"]
> = {
  affected_rows?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  returning?: Resolver<
    Array<ResolversTypes["userIssueListType"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserIssueListsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["userIssueLists"] = ResolversParentTypes["userIssueLists"]
> = {
  id?: Resolver<ResolversTypes["uuid"], ParentType, ContextType>;
  type?: Resolver<
    ResolversTypes["userIssueListType_enum"],
    ParentType,
    ContextType
  >;
  user?: Resolver<ResolversTypes["users"], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes["uuid"], ParentType, ContextType>;
  userIssueListEntries?: Resolver<
    Array<ResolversTypes["userIssueListEntries"]>,
    ParentType,
    ContextType,
    Partial<UserIssueListsUserIssueListEntriesArgs>
  >;
  userIssueListEntries_aggregate?: Resolver<
    ResolversTypes["userIssueListEntries_aggregate"],
    ParentType,
    ContextType,
    Partial<UserIssueListsUserIssueListEntries_AggregateArgs>
  >;
  userIssueListType?: Resolver<
    ResolversTypes["userIssueListType"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserIssueLists_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["userIssueLists_aggregate"] = ResolversParentTypes["userIssueLists_aggregate"]
> = {
  aggregate?: Resolver<
    Maybe<ResolversTypes["userIssueLists_aggregate_fields"]>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<
    Array<ResolversTypes["userIssueLists"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserIssueLists_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["userIssueLists_aggregate_fields"] = ResolversParentTypes["userIssueLists_aggregate_fields"]
> = {
  count?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType,
    Partial<UserIssueLists_Aggregate_FieldsCountArgs>
  >;
  max?: Resolver<
    Maybe<ResolversTypes["userIssueLists_max_fields"]>,
    ParentType,
    ContextType
  >;
  min?: Resolver<
    Maybe<ResolversTypes["userIssueLists_min_fields"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserIssueLists_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["userIssueLists_max_fields"] = ResolversParentTypes["userIssueLists_max_fields"]
> = {
  id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserIssueLists_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["userIssueLists_min_fields"] = ResolversParentTypes["userIssueLists_min_fields"]
> = {
  id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserIssueLists_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["userIssueLists_mutation_response"] = ResolversParentTypes["userIssueLists_mutation_response"]
> = {
  affected_rows?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  returning?: Resolver<
    Array<ResolversTypes["userIssueLists"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserSourceResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["userSource"] = ResolversParentTypes["userSource"]
> = {
  users?: Resolver<
    Array<ResolversTypes["users"]>,
    ParentType,
    ContextType,
    Partial<UserSourceUsersArgs>
  >;
  users_aggregate?: Resolver<
    ResolversTypes["users_aggregate"],
    ParentType,
    ContextType,
    Partial<UserSourceUsers_AggregateArgs>
  >;
  value?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserSource_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["userSource_aggregate"] = ResolversParentTypes["userSource_aggregate"]
> = {
  aggregate?: Resolver<
    Maybe<ResolversTypes["userSource_aggregate_fields"]>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<
    Array<ResolversTypes["userSource"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserSource_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["userSource_aggregate_fields"] = ResolversParentTypes["userSource_aggregate_fields"]
> = {
  count?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType,
    Partial<UserSource_Aggregate_FieldsCountArgs>
  >;
  max?: Resolver<
    Maybe<ResolversTypes["userSource_max_fields"]>,
    ParentType,
    ContextType
  >;
  min?: Resolver<
    Maybe<ResolversTypes["userSource_min_fields"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserSource_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["userSource_max_fields"] = ResolversParentTypes["userSource_max_fields"]
> = {
  value?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserSource_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["userSource_min_fields"] = ResolversParentTypes["userSource_min_fields"]
> = {
  value?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserSource_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["userSource_mutation_response"] = ResolversParentTypes["userSource_mutation_response"]
> = {
  affected_rows?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  returning?: Resolver<
    Array<ResolversTypes["userSource"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["users"] = ResolversParentTypes["users"]
> = {
  accountType?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  comments?: Resolver<
    Array<ResolversTypes["comments"]>,
    ParentType,
    ContextType,
    Partial<UsersCommentsArgs>
  >;
  comments_aggregate?: Resolver<
    ResolversTypes["comments_aggregate"],
    ParentType,
    ContextType,
    Partial<UsersComments_AggregateArgs>
  >;
  created_at?: Resolver<ResolversTypes["timestamptz"], ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  emailConfirmationLastSentAt?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  emailConfirmationToken?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  emailVerified?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["uuid"], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  issues?: Resolver<
    Array<ResolversTypes["issues"]>,
    ParentType,
    ContextType,
    Partial<UsersIssuesArgs>
  >;
  issues_aggregate?: Resolver<
    ResolversTypes["issues_aggregate"],
    ParentType,
    ContextType,
    Partial<UsersIssues_AggregateArgs>
  >;
  issues_users?: Resolver<
    Array<ResolversTypes["issues_users"]>,
    ParentType,
    ContextType,
    Partial<UsersIssues_UsersArgs>
  >;
  issues_users_aggregate?: Resolver<
    ResolversTypes["issues_users_aggregate"],
    ParentType,
    ContextType,
    Partial<UsersIssues_Users_AggregateArgs>
  >;
  lastActiveAt?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  letters?: Resolver<
    Array<ResolversTypes["letters"]>,
    ParentType,
    ContextType,
    Partial<UsersLettersArgs>
  >;
  letters_aggregate?: Resolver<
    ResolversTypes["letters_aggregate"],
    ParentType,
    ContextType,
    Partial<UsersLetters_AggregateArgs>
  >;
  passwordHash?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  passwordResetLastSentAt?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  passwordResetToken?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  passwordResetTokenExpiresAt?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  sessions?: Resolver<
    Array<ResolversTypes["sessions"]>,
    ParentType,
    ContextType,
    Partial<UsersSessionsArgs>
  >;
  sessions_aggregate?: Resolver<
    ResolversTypes["sessions_aggregate"],
    ParentType,
    ContextType,
    Partial<UsersSessions_AggregateArgs>
  >;
  source?: Resolver<
    Maybe<ResolversTypes["userSource_enum"]>,
    ParentType,
    ContextType
  >;
  updated_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  userIssueLists?: Resolver<
    Array<ResolversTypes["userIssueLists"]>,
    ParentType,
    ContextType,
    Partial<UsersUserIssueListsArgs>
  >;
  userIssueLists_aggregate?: Resolver<
    ResolversTypes["userIssueLists_aggregate"],
    ParentType,
    ContextType,
    Partial<UsersUserIssueLists_AggregateArgs>
  >;
  userSource?: Resolver<
    Maybe<ResolversTypes["userSource"]>,
    ParentType,
    ContextType
  >;
  username?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  zipCode?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["users_aggregate"] = ResolversParentTypes["users_aggregate"]
> = {
  aggregate?: Resolver<
    Maybe<ResolversTypes["users_aggregate_fields"]>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<Array<ResolversTypes["users"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["users_aggregate_fields"] = ResolversParentTypes["users_aggregate_fields"]
> = {
  count?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType,
    Partial<Users_Aggregate_FieldsCountArgs>
  >;
  max?: Resolver<
    Maybe<ResolversTypes["users_max_fields"]>,
    ParentType,
    ContextType
  >;
  min?: Resolver<
    Maybe<ResolversTypes["users_min_fields"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["users_max_fields"] = ResolversParentTypes["users_max_fields"]
> = {
  accountType?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  created_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  email?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  emailConfirmationLastSentAt?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  emailConfirmationToken?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  lastActiveAt?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  passwordHash?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  passwordResetLastSentAt?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  passwordResetToken?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  passwordResetTokenExpiresAt?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  updated_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  username?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  zipCode?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["users_min_fields"] = ResolversParentTypes["users_min_fields"]
> = {
  accountType?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  created_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  email?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  emailConfirmationLastSentAt?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  emailConfirmationToken?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  lastActiveAt?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  passwordHash?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  passwordResetLastSentAt?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  passwordResetToken?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  passwordResetTokenExpiresAt?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  updated_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  username?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  zipCode?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["users_mutation_response"] = ResolversParentTypes["users_mutation_response"]
> = {
  affected_rows?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes["users"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UuidScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["uuid"], any> {
  name: "uuid";
}

export type Resolvers<ContextType = any> = {
  AuthenticateWithGoogleOutput?: AuthenticateWithGoogleOutputResolvers<ContextType>;
  ValidatePasswordResetTokenOutput?: ValidatePasswordResetTokenOutputResolvers<ContextType>;
  addUserZipCodeOutput?: AddUserZipCodeOutputResolvers<ContextType>;
  authenticateWithCredentialsOutput?: AuthenticateWithCredentialsOutputResolvers<ContextType>;
  comments?: CommentsResolvers<ContextType>;
  comments_aggregate?: Comments_AggregateResolvers<ContextType>;
  comments_aggregate_fields?: Comments_Aggregate_FieldsResolvers<ContextType>;
  comments_max_fields?: Comments_Max_FieldsResolvers<ContextType>;
  comments_min_fields?: Comments_Min_FieldsResolvers<ContextType>;
  comments_mutation_response?: Comments_Mutation_ResponseResolvers<ContextType>;
  confirmEmailOutput?: ConfirmEmailOutputResolvers<ContextType>;
  issueCategory?: IssueCategoryResolvers<ContextType>;
  issueCategory_aggregate?: IssueCategory_AggregateResolvers<ContextType>;
  issueCategory_aggregate_fields?: IssueCategory_Aggregate_FieldsResolvers<ContextType>;
  issueCategory_max_fields?: IssueCategory_Max_FieldsResolvers<ContextType>;
  issueCategory_min_fields?: IssueCategory_Min_FieldsResolvers<ContextType>;
  issueCategory_mutation_response?: IssueCategory_Mutation_ResponseResolvers<ContextType>;
  issueFieldViewScale?: IssueFieldViewScaleResolvers<ContextType>;
  issueFieldViewScale_aggregate?: IssueFieldViewScale_AggregateResolvers<ContextType>;
  issueFieldViewScale_aggregate_fields?: IssueFieldViewScale_Aggregate_FieldsResolvers<ContextType>;
  issueFieldViewScale_max_fields?: IssueFieldViewScale_Max_FieldsResolvers<ContextType>;
  issueFieldViewScale_min_fields?: IssueFieldViewScale_Min_FieldsResolvers<ContextType>;
  issueFieldViewScale_mutation_response?: IssueFieldViewScale_Mutation_ResponseResolvers<ContextType>;
  issueStatus?: IssueStatusResolvers<ContextType>;
  issueStatus_aggregate?: IssueStatus_AggregateResolvers<ContextType>;
  issueStatus_aggregate_fields?: IssueStatus_Aggregate_FieldsResolvers<ContextType>;
  issueStatus_max_fields?: IssueStatus_Max_FieldsResolvers<ContextType>;
  issueStatus_min_fields?: IssueStatus_Min_FieldsResolvers<ContextType>;
  issueStatus_mutation_response?: IssueStatus_Mutation_ResponseResolvers<ContextType>;
  issues?: IssuesResolvers<ContextType>;
  issues_aggregate?: Issues_AggregateResolvers<ContextType>;
  issues_aggregate_fields?: Issues_Aggregate_FieldsResolvers<ContextType>;
  issues_max_fields?: Issues_Max_FieldsResolvers<ContextType>;
  issues_min_fields?: Issues_Min_FieldsResolvers<ContextType>;
  issues_mutation_response?: Issues_Mutation_ResponseResolvers<ContextType>;
  issues_users?: Issues_UsersResolvers<ContextType>;
  issues_users_aggregate?: Issues_Users_AggregateResolvers<ContextType>;
  issues_users_aggregate_fields?: Issues_Users_Aggregate_FieldsResolvers<ContextType>;
  issues_users_max_fields?: Issues_Users_Max_FieldsResolvers<ContextType>;
  issues_users_min_fields?: Issues_Users_Min_FieldsResolvers<ContextType>;
  issues_users_mutation_response?: Issues_Users_Mutation_ResponseResolvers<ContextType>;
  language?: LanguageResolvers<ContextType>;
  language_aggregate?: Language_AggregateResolvers<ContextType>;
  language_aggregate_fields?: Language_Aggregate_FieldsResolvers<ContextType>;
  language_max_fields?: Language_Max_FieldsResolvers<ContextType>;
  language_min_fields?: Language_Min_FieldsResolvers<ContextType>;
  language_mutation_response?: Language_Mutation_ResponseResolvers<ContextType>;
  letterContents?: LetterContentsResolvers<ContextType>;
  letterContents_aggregate?: LetterContents_AggregateResolvers<ContextType>;
  letterContents_aggregate_fields?: LetterContents_Aggregate_FieldsResolvers<ContextType>;
  letterContents_max_fields?: LetterContents_Max_FieldsResolvers<ContextType>;
  letterContents_min_fields?: LetterContents_Min_FieldsResolvers<ContextType>;
  letterContents_mutation_response?: LetterContents_Mutation_ResponseResolvers<ContextType>;
  letterStatus?: LetterStatusResolvers<ContextType>;
  letterStatus_aggregate?: LetterStatus_AggregateResolvers<ContextType>;
  letterStatus_aggregate_fields?: LetterStatus_Aggregate_FieldsResolvers<ContextType>;
  letterStatus_max_fields?: LetterStatus_Max_FieldsResolvers<ContextType>;
  letterStatus_min_fields?: LetterStatus_Min_FieldsResolvers<ContextType>;
  letterStatus_mutation_response?: LetterStatus_Mutation_ResponseResolvers<ContextType>;
  letters?: LettersResolvers<ContextType>;
  letters_aggregate?: Letters_AggregateResolvers<ContextType>;
  letters_aggregate_fields?: Letters_Aggregate_FieldsResolvers<ContextType>;
  letters_max_fields?: Letters_Max_FieldsResolvers<ContextType>;
  letters_min_fields?: Letters_Min_FieldsResolvers<ContextType>;
  letters_mutation_response?: Letters_Mutation_ResponseResolvers<ContextType>;
  mutation_root?: Mutation_RootResolvers<ContextType>;
  query_root?: Query_RootResolvers<ContextType>;
  representatives?: RepresentativesResolvers<ContextType>;
  representatives_aggregate?: Representatives_AggregateResolvers<ContextType>;
  representatives_aggregate_fields?: Representatives_Aggregate_FieldsResolvers<ContextType>;
  representatives_max_fields?: Representatives_Max_FieldsResolvers<ContextType>;
  representatives_min_fields?: Representatives_Min_FieldsResolvers<ContextType>;
  representatives_mutation_response?: Representatives_Mutation_ResponseResolvers<ContextType>;
  requestPasswordResetOutput?: RequestPasswordResetOutputResolvers<ContextType>;
  resetPasswordOutput?: ResetPasswordOutputResolvers<ContextType>;
  sessionType?: SessionTypeResolvers<ContextType>;
  sessionType_aggregate?: SessionType_AggregateResolvers<ContextType>;
  sessionType_aggregate_fields?: SessionType_Aggregate_FieldsResolvers<ContextType>;
  sessionType_max_fields?: SessionType_Max_FieldsResolvers<ContextType>;
  sessionType_min_fields?: SessionType_Min_FieldsResolvers<ContextType>;
  sessionType_mutation_response?: SessionType_Mutation_ResponseResolvers<ContextType>;
  sessions?: SessionsResolvers<ContextType>;
  sessions_aggregate?: Sessions_AggregateResolvers<ContextType>;
  sessions_aggregate_fields?: Sessions_Aggregate_FieldsResolvers<ContextType>;
  sessions_max_fields?: Sessions_Max_FieldsResolvers<ContextType>;
  sessions_min_fields?: Sessions_Min_FieldsResolvers<ContextType>;
  sessions_mutation_response?: Sessions_Mutation_ResponseResolvers<ContextType>;
  signUpWithCredentialsOutput?: SignUpWithCredentialsOutputResolvers<ContextType>;
  subscription_root?: Subscription_RootResolvers<ContextType>;
  timestamptz?: GraphQLScalarType;
  userIssueListEntries?: UserIssueListEntriesResolvers<ContextType>;
  userIssueListEntries_aggregate?: UserIssueListEntries_AggregateResolvers<ContextType>;
  userIssueListEntries_aggregate_fields?: UserIssueListEntries_Aggregate_FieldsResolvers<ContextType>;
  userIssueListEntries_max_fields?: UserIssueListEntries_Max_FieldsResolvers<ContextType>;
  userIssueListEntries_min_fields?: UserIssueListEntries_Min_FieldsResolvers<ContextType>;
  userIssueListEntries_mutation_response?: UserIssueListEntries_Mutation_ResponseResolvers<ContextType>;
  userIssueListType?: UserIssueListTypeResolvers<ContextType>;
  userIssueListType_aggregate?: UserIssueListType_AggregateResolvers<ContextType>;
  userIssueListType_aggregate_fields?: UserIssueListType_Aggregate_FieldsResolvers<ContextType>;
  userIssueListType_max_fields?: UserIssueListType_Max_FieldsResolvers<ContextType>;
  userIssueListType_min_fields?: UserIssueListType_Min_FieldsResolvers<ContextType>;
  userIssueListType_mutation_response?: UserIssueListType_Mutation_ResponseResolvers<ContextType>;
  userIssueLists?: UserIssueListsResolvers<ContextType>;
  userIssueLists_aggregate?: UserIssueLists_AggregateResolvers<ContextType>;
  userIssueLists_aggregate_fields?: UserIssueLists_Aggregate_FieldsResolvers<ContextType>;
  userIssueLists_max_fields?: UserIssueLists_Max_FieldsResolvers<ContextType>;
  userIssueLists_min_fields?: UserIssueLists_Min_FieldsResolvers<ContextType>;
  userIssueLists_mutation_response?: UserIssueLists_Mutation_ResponseResolvers<ContextType>;
  userSource?: UserSourceResolvers<ContextType>;
  userSource_aggregate?: UserSource_AggregateResolvers<ContextType>;
  userSource_aggregate_fields?: UserSource_Aggregate_FieldsResolvers<ContextType>;
  userSource_max_fields?: UserSource_Max_FieldsResolvers<ContextType>;
  userSource_min_fields?: UserSource_Min_FieldsResolvers<ContextType>;
  userSource_mutation_response?: UserSource_Mutation_ResponseResolvers<ContextType>;
  users?: UsersResolvers<ContextType>;
  users_aggregate?: Users_AggregateResolvers<ContextType>;
  users_aggregate_fields?: Users_Aggregate_FieldsResolvers<ContextType>;
  users_max_fields?: Users_Max_FieldsResolvers<ContextType>;
  users_min_fields?: Users_Min_FieldsResolvers<ContextType>;
  users_mutation_response?: Users_Mutation_ResponseResolvers<ContextType>;
  uuid?: GraphQLScalarType;
};

export type DirectiveResolvers<ContextType = any> = {
  cached?: CachedDirectiveResolver<any, any, ContextType>;
};
