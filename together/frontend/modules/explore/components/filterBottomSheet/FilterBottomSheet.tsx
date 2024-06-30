import { useRef } from "react";
import {
  BottomSheet as SprintBottomSheet,
  BottomSheetRef,
} from "react-spring-bottom-sheet";
import * as Styled from "./FilterBottomSheet.styled";
import { CategoryTag, ScaleTag } from "./components";
import {
  IssueCategory_Enum,
  IssueFieldViewScale_Enum,
} from "generated-graphql";
import { Filter } from "modules/explore/pages/ExplorePage/hooks/types";
import { CATEGORY_TO_BACKGROUND_COLOR } from "common";
import { UiKitSwitch } from "ui";

type Props = {
  isOpen: boolean;
  closeFilterBottomSheet: () => void;
  filter: Filter;
  handleScaleTagChange: (
    tag: IssueFieldViewScale_Enum,
    checked: boolean
  ) => void;
  resultCount: number;
  handleCategoryTagChange: (tag: IssueCategory_Enum, checked: boolean) => void;
  handleShowHiddenIssuesValueChange: (checked: boolean) => void;
  handleShowPublicOnlyValueChange: (checked: boolean) => void;
  handleReset: () => Promise<void>;
  handleSave: () => Promise<void>;
};

export const FilterBottomSheet = ({
  isOpen,
  closeFilterBottomSheet,
  filter,
  handleScaleTagChange,
  resultCount,
  handleCategoryTagChange,
  handleShowHiddenIssuesValueChange,
  handleShowPublicOnlyValueChange,
  handleReset,
  handleSave,
}: Props): JSX.Element => {
  const sheetRef = useRef<BottomSheetRef>();

  const renderScaleTags = () => {
    return Object.values(IssueFieldViewScale_Enum).map((tag) => (
      <ScaleTag
        key={tag}
        tag={tag}
        selected={
          filter && filter?.fieldOfViews?.length > 0
            ? filter.fieldOfViews.includes(tag)
            : false
        }
        onChange={(checked) => handleScaleTagChange(tag, checked)}
      />
    ));
  };

  const renderCategoriesTags = () => {
    return Object.values(IssueCategory_Enum).map((category) => (
      <CategoryTag
        key={category}
        tag={category.replace("_", " ")}
        selected={
          filter && filter?.categories?.length > 0
            ? filter.categories.includes(category)
            : false
        }
        checkedBackgroundColor={CATEGORY_TO_BACKGROUND_COLOR[`${category}`]}
        onChange={(checked) => handleCategoryTagChange(category, checked)}
      />
    ));
  };

  return (
    <SprintBottomSheet open={isOpen} ref={sheetRef}>
      <Styled.HeaderContainer>
        <Styled.Header level={3}>Filters({resultCount})</Styled.Header>
        <Styled.CloseIcon onClick={closeFilterBottomSheet} />
      </Styled.HeaderContainer>

      <Styled.FilterContainer>
        <Styled.FilterName>Scale the field of view</Styled.FilterName>
        <Styled.TagContainer>{renderScaleTags()}</Styled.TagContainer>
      </Styled.FilterContainer>

      <Styled.FilterContainer>
        <Styled.FilterName>Category</Styled.FilterName>
        <Styled.CategoryTagContainer>
          {renderCategoriesTags()}
        </Styled.CategoryTagContainer>
      </Styled.FilterContainer>

      <Styled.FilterContainer>
        <Styled.FilterName>Show previously hidden issues</Styled.FilterName>
        <UiKitSwitch
          checked={filter.showHidden}
          onChange={handleShowHiddenIssuesValueChange}
        />
      </Styled.FilterContainer>

      <Styled.FilterContainer>
        <Styled.FilterName>Show public only</Styled.FilterName>
        <UiKitSwitch
          checked={filter.showPublicOnly}
          onChange={handleShowPublicOnlyValueChange}
        />
      </Styled.FilterContainer>

      <Styled.SubmitContainer>
        <Styled.SaveButton
          type="primary"
          htmlType="button"
          onClick={handleSave}
        >
          Save({resultCount})
        </Styled.SaveButton>
        <Styled.ResetButton
          type="default"
          htmlType="button"
          onClick={handleReset}
        >
          Reset filters
        </Styled.ResetButton>
      </Styled.SubmitContainer>
    </SprintBottomSheet>
  );
};
