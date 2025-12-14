import { memo } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { myTheme } from "../../../theme";

/**
 * RatingsText
 * Displays a numeric rating and max rating.
 * @param averageRating - The average rating value
 * @param maxRating - The maximum possible rating value
 * Examples:
 *   <RatingText averageRating={1} maxRating={5} />  // "1 out of 5"
 */
type RatingsTextProps = {
  averageRating: number;
  maxRating: number;
};

const RatingTextContainer = styled.div`
  letter-spacing: ${myTheme.fonts.spacing.wide}em;
  font-weight: ${myTheme.fonts.weights.regular};
  color: ${myTheme.colors.medium};
  font-family: ${myTheme.fonts.family.primary};
  text-transform: uppercase;
  font-size: ${myTheme.fonts.size.regular}em;
`;

const RatingText = ({ averageRating, maxRating }: RatingsTextProps) => {
  const text = averageRating.toFixed(1) + " out of " + maxRating;
  return (
    <RatingTextContainer>
      <span aria-label={text}>{text}</span>
    </RatingTextContainer>
  );
};

RatingText.propTypes = {
  averageRating: PropTypes.number.isRequired,
  maxRating: PropTypes.number.isRequired,
};

export default memo(RatingText);
