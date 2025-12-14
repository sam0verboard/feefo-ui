import { memo } from "react";
import { styled } from "styled-components";
import { myTheme } from "../../../theme";
import PropTypes from "prop-types";
import FillBarComponent from "../FillBar/FillBar";
import RatingIcon from "../RatingIcon/RatingIcon";

/**
 * RatingCountBar
 * Displays a visual representation of the proportion of total ratings accounted for by the current.
 * @param rating - The rating value
 * @param count - The number of ratings with this value
 * @param total - The total number of ratings
 */

const RatingCountBarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${myTheme.spacing.small}em;
  font-family: ${myTheme.fonts.family.primary};
  font-size: ${myTheme.fonts.size.small}em;
  color: ${myTheme.colors.medium};
`;

const CountText = styled.div`
  font-weight: ${myTheme.fonts.weights.regular};
  text-align: right;
  min-width: ${myTheme.spacing.large}em;
  color: ${myTheme.colors.medium};
  font-family: ${myTheme.fonts.family.primary};
`;

type RatingCountBarProps = {
  rating: number;
  count: number;
  total: number;
};

const clamp = (v: number, a = 0, b = 100) => Math.max(a, Math.min(b, v));

const RatingCountBar = ({ rating, count, total }: RatingCountBarProps) => {
  const percent = clamp((count / Math.max(1, total)) * 100, 0, 100);
  const formattedRating = Number.isInteger(rating)
    ? rating.toString()
    : rating.toFixed(1);

  return (
    <RatingCountBarContainer
      role="group"
      aria-label={`Rating ${formattedRating}, ${count} counts`}
    >
      <RatingIcon rating={formattedRating} />

      <FillBarComponent percent={percent} />

      <CountText>{count.toLocaleString()}</CountText>
    </RatingCountBarContainer>
  );
};
RatingCountBar.propTypes = {
  rating: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};
export default memo(RatingCountBar);
