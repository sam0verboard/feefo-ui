import React, { memo } from "react";
import RatingCountBar from "../RatingsCountBar/RatingCountBar";
import PropTypes from "prop-types";
import { styled } from "styled-components";
import { myTheme } from "../../../theme";

/**
 * RatingsChart
 * Displays a visual representation of the proportion of total ratings accounted for by the each rating.
 * @param ratings - Map of rating values to their counts
 */
type RatingsMap = Map<number, number>;

type RatingsChartProps = {
  ratings: RatingsMap;
};

const RatingsChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${myTheme.spacing.small}em;
`;

const getTotalCount = (ratings: RatingsMap): number => {
  let total = 0;
  ratings.forEach((count) => {
    total += count;
  });
  return total;
};

const RatingsChart: React.FC<RatingsChartProps> = ({ ratings }) => {
  // sort ratings in descending order
  const entries = React.useMemo(() => {
    return Array.from(ratings.entries())
      .slice()
      .sort(([ratingA], [ratingB]) => ratingB - ratingA);
  }, [ratings]);

  const totalCount = getTotalCount(ratings);
  return (
    <RatingsChartContainer aria-label="Ratings Chart">
      {entries.map(([rating, count]) => (
        <RatingCountBar
          key={rating}
          rating={rating}
          count={count}
          total={totalCount}
        />
      ))}
    </RatingsChartContainer>
  );
};
RatingsChart.propTypes = {
  ratings: PropTypes.instanceOf(Map).isRequired,
} as Record<string, any>;

export default memo(RatingsChart);
