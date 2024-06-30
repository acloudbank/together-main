import {
  IssueCategory_Enum,
  IssueFieldViewScale_Enum,
} from "generated-graphql";

export type Filter = {
  fieldOfViews: IssueFieldViewScale_Enum[];
  categories: IssueCategory_Enum[];
  showHidden: boolean;
  showPublicOnly: boolean;
};
