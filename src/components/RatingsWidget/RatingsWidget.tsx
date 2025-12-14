import { memo } from "react";
import RatingsChart from "./RatingChart/RatingsChart";
import AverageRatingInfo from "./AverageRatingInfo/AverageRatingInfo";
import PropTypes from "prop-types";
import { styled } from "styled-components";
import { myTheme } from "../../theme";

/**
 * RatingsWidget
 * Main wrapper component for the Ratings Widget
 * @param ratingCounts - Map of rating values to their counts
 */
type RatingsWidgetProps = {
  ratingCounts: Map<number, number>;
};

const RatingsWidgetContainer = styled.div`
  border: 1px solid ${myTheme.colors.medium};
  background-color: ${myTheme.colors.background};
  padding: ${myTheme.spacing.medium}em;
  border-radius: ${myTheme.spacing.medium}em;
  max-width: 18em;
  min-width: fit-content;
  display: flex;
  flex-direction: column;
  gap: ${myTheme.spacing.large}em;
`;

const getAverageRating = (ratingCounts: Map<number, number>) => {
  let total = 0;
  let count = 0;

  ratingCounts.forEach((value, key) => {
    total += key * value;
    count += value;
  });

  return count === 0 ? 0 : total / count;
};

const getMaxRating = (ratingCounts: Map<number, number>) => {
  const ratings = Array.from(ratingCounts.keys());
  return ratings.length === 0 ? 1 : Math.max(...ratings);
};

const RatingsWidget = ({ ratingCounts }: RatingsWidgetProps) => {
  const averageRating = getAverageRating(ratingCounts);
  const maxRating = getMaxRating(ratingCounts);
  return (
    <RatingsWidgetContainer aria-label="Ratings Widget">
      <AverageRatingInfo averageRating={averageRating} maxRating={maxRating} />
      <RatingsChart ratings={ratingCounts} />
    </RatingsWidgetContainer>
  );
};

RatingsWidget.propTypes = {
  ratingCounts: PropTypes.instanceOf(Map).isRequired,
} as Record<string, any>;

export default memo(RatingsWidget);
