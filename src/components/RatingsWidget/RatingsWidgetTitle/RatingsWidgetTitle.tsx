import { memo } from "react";
import styled from "styled-components";
import { ReactComponent as FeefoIcon } from "../../../icons/feefo-icon.svg";
import { myTheme } from "../../../theme";

/**
 * RatingsWidgetTitle
 * Displays component description and company logo.
 */
export const RatingsWidgetTitleContainer = styled.div`
  font-weight: ${myTheme.fonts.weights.regular};
  font-size: ${myTheme.fonts.size.regular}em;
  color: ${myTheme.colors.medium};
  font-family: ${myTheme.fonts.family.primary};
  display: inline-flex;
  align-items: baseline;
  gap: ${myTheme.spacing.small}em;
`;

export const RatingsWidgetTitleIcon = styled(FeefoIcon).attrs({
  role: "img",
  "aria-label": "Feefo logo",
})`
  height: ${myTheme.spacing.large}em;
  vertical-align: text-bottom;
`;

const RatingsWidgetTitle = () => {
  return (
    <RatingsWidgetTitleContainer aria-label="Feefo Product Rating">
      Product Rating <RatingsWidgetTitleIcon />
    </RatingsWidgetTitleContainer>
  );
};
export default memo(RatingsWidgetTitle);
