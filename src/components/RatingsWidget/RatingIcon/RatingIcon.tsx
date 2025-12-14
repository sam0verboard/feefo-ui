import { memo } from "react";

import PropTypes from "prop-types";
import styled from "styled-components";
import { myTheme } from "../../../theme";
import { ReactComponent as RatingCountBarIcon } from "../../../assets/icons/feefo-star-grey.svg";

/**
 * RatingIcon
 * Displays a rating icon with its value.
 * @param rating - The rating value
 */
type RatingIconProps = {
  rating: string;
};

const RatingValue = styled.div`
  min-width: ${myTheme.spacing.small}em;
  text-align: left;
  font-weight: ${myTheme.fonts.weights.regular};
`;

const RatingWrapper = styled.div`
  min-width: ${myTheme.spacing.large}em;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${myTheme.spacing.small}em;
`;

const IconWrapper = styled(RatingCountBarIcon)`
  width: ${myTheme.spacing.large}em;
  height: ${myTheme.spacing.large}em;
  flex: 0 0 ${myTheme.spacing.large}em;
  display: flex;
  align-items: center;
`;

const RatingIcon = ({ rating }: RatingIconProps) => {
  return (
    <RatingWrapper>
      <RatingValue aria-label={`Rating: ${rating}`}>{rating}</RatingValue>
      <IconWrapper aria-hidden />
    </RatingWrapper>
  );
};

RatingIcon.propTypes = {
  rating: PropTypes.string.isRequired,
};
export default memo(RatingIcon);
